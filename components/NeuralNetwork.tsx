"use client";

import { useEffect, useRef } from "react";

/**
 * A page-wide "neural network" / constellation backdrop: drifting nodes linked
 * by lines when close, with extra links forming toward the cursor. Pure canvas
 * 2D (no deps), fixed behind all content, paused when hidden, reduced-motion
 * aware. Kept subtle so page text stays readable.
 */
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
    const mouse = { x: -9999, y: -9999 };

    type Node = { x: number; y: number; vx: number; vy: number };
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
    window.addEventListener("resize", onResize);
    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerleave", onLeave);

    let raf = 0;
    let running = true;

    const draw = () => {
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
            ctx.strokeStyle = `rgba(129, 140, 248, ${t * 0.26})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }

        const mdx = a.x - mouse.x;
        const mdy = a.y - mouse.y;
        const md = Math.hypot(mdx, mdy);
        if (md < MOUSE_DIST) {
          const t = 1 - md / MOUSE_DIST;
          ctx.strokeStyle = `rgba(168, 85, 247, ${t * 0.5})`;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.stroke();
        }
      }

      // Nodes.
      for (const n of nodes) {
        ctx.beginPath();
        ctx.arc(n.x, n.y, 1.6, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(199, 210, 254, 0.65)";
        ctx.fill();
      }

      raf = requestAnimationFrame(draw);
    };
    raf = requestAnimationFrame(draw);

    const onVisibility = () => {
      if (document.hidden) {
        cancelAnimationFrame(raf);
        running = false;
      } else if (!running) {
        running = true;
        raf = requestAnimationFrame(draw);
      }
    };
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerleave", onLeave);
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
