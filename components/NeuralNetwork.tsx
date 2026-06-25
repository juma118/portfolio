"use client";

import { useEffect, useRef } from "react";

export default function NeuralNetwork() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    const LINK_DIST = 140;
    const MOUSE_DIST = 190;
    const MAX_HOP = 4;
    const HOP_FALLOFF = 0.62;
    const DECAY_MS = 2200;
    const mouse = { x: -9999, y: -9999 };

    type Node = { x: number; y: number; vx: number; vy: number; energy: number };
    let nodes: Node[] = [];
    let w = 0;
    let h = 0;

    const build = () => {
      w = canvas.clientWidth;
      h = canvas.clientHeight;
      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const count = Math.min(120, Math.max(45, Math.floor((w * h) / 16000)));
      nodes = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        energy: 0,
      }));
    };
    build();

    const onResize = () => build();
    const onMove = (e: PointerEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };
    const onLeave = () => {
      mouse.x = -9999;
      mouse.y = -9999;
    };
    const onDown = (e: PointerEvent) => {
      if (reduceMotion) return;
      const mx = e.clientX;
      const my = e.clientY;
      // Seed: light up every node connected to the cursor.
      const queue: { node: Node; hop: number; energy: number }[] = [];
      for (const n of nodes) {
        if (Math.hypot(n.x - mx, n.y - my) < MOUSE_DIST) {
          n.energy = 1;
          queue.push({ node: n, hop: 0, energy: 1 });
        }
      }
      let qi = 0;
      while (qi < queue.length && qi < 4000) {
        const { node, hop, energy } = queue[qi++];
        if (hop >= MAX_HOP) continue;
        const childEnergy = energy * HOP_FALLOFF;
        if (childEnergy < 0.12) continue;
        for (const m of nodes) {
          if (m === node) continue;
          if (
            m.energy < childEnergy &&
            Math.hypot(m.x - node.x, m.y - node.y) < LINK_DIST
          ) {
            m.energy = childEnergy;
            queue.push({ node: m, hop: hop + 1, energy: childEnergy });
          }
        }
      }
    };
    window.addEventListener("resize", onResize);
    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerleave", onLeave);
    window.addEventListener("pointerdown", onDown);

    let raf = 0;
    let running = true;
    let last = performance.now();

    const draw = () => {
      const now = performance.now();
      const dt = Math.min(now - last, 50);
      last = now;
      const fade = dt / DECAY_MS;

      ctx.clearRect(0, 0, w, h);

      for (const n of nodes) {
        if (!reduceMotion) {
          n.x += n.vx;
          n.y += n.vy;
        }
        if (n.x <= 0 || n.x >= w) n.vx *= -1;
        if (n.y <= 0 || n.y >= h) n.vy *= -1;
        n.x = Math.max(0, Math.min(w, n.x));
        n.y = Math.max(0, Math.min(h, n.y));
        if (n.energy > 0) n.energy = Math.max(0, n.energy - fade);
      }

      // Links between nearby nodes + links toward the cursor.
      for (let i = 0; i < nodes.length; i++) {
        const a = nodes[i];

        for (let j = i + 1; j < nodes.length; j++) {
          const b = nodes[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const d = Math.hypot(dx, dy);
          if (d < LINK_DIST) {
            const t = 1 - d / LINK_DIST;
            const e = Math.max(a.energy, b.energy);
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            if (e > 0.02) {
              ctx.strokeStyle = `rgba(192, 132, 252, ${t * (0.26 + e * 0.7)})`;
              ctx.lineWidth = 1 + e * 1.4;
            } else {
              ctx.strokeStyle = `rgba(129, 140, 248, ${t * 0.26})`;
              ctx.lineWidth = 1;
            }
            ctx.stroke();
          }
        }

        const mdx = a.x - mouse.x;
        const mdy = a.y - mouse.y;
        const md = Math.hypot(mdx, mdy);
        if (md < MOUSE_DIST) {
          const t = 1 - md / MOUSE_DIST;
          const e = a.energy;
          ctx.strokeStyle = `rgba(168, 85, 247, ${t * (0.5 + e * 0.5)})`;
          ctx.lineWidth = 1 + e * 1.4;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.stroke();
        }
      }

      // Nodes (energized ones grow + glow).
      ctx.save();
      for (const n of nodes) {
        const e = n.energy;
        if (e > 0.02) {
          ctx.shadowBlur = 14 * e;
          ctx.shadowColor = "rgba(192, 132, 252, 0.9)";
          ctx.fillStyle = `rgba(233, 222, 255, ${0.65 + 0.35 * e})`;
          ctx.beginPath();
          ctx.arc(n.x, n.y, 1.6 + e * 3.4, 0, Math.PI * 2);
          ctx.fill();
          ctx.shadowBlur = 0;
        } else {
          ctx.fillStyle = "rgba(199, 210, 254, 0.65)";
          ctx.beginPath();
          ctx.arc(n.x, n.y, 1.6, 0, Math.PI * 2);
          ctx.fill();
        }
      }
      ctx.restore();

      raf = requestAnimationFrame(draw);
    };
    raf = requestAnimationFrame(draw);

    const onVisibility = () => {
      if (document.hidden) {
        cancelAnimationFrame(raf);
        running = false;
      } else if (!running) {
        running = true;
        last = performance.now();
        raf = requestAnimationFrame(draw);
      }
    };
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerleave", onLeave);
      window.removeEventListener("pointerdown", onDown);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  return (
    <canvas
      ref={ref}
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 h-full w-full"
    />
  );
}
