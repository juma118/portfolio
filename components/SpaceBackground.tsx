"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function SpaceBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const parent = canvas?.parentElement;
    if (!canvas || !parent) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({
        canvas,
        alpha: true,
        antialias: true,
      });
    } catch {
      return; // WebGL unavailable — gracefully render nothing.
    }
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(72, 1, 1, 3000);
    camera.position.z = 0;

    const setSize = () => {
      const w = parent.clientWidth;
      const h = parent.clientHeight;
      renderer.setSize(w, h, false);
      camera.aspect = w / h || 1;
      camera.updateProjectionMatrix();
    };
    setSize();

    const COUNT = 1600;
    const SPREAD = 1200; // x/y half-extent
    const DEPTH = 2200; // z range in front of the camera
    const positions = new Float32Array(COUNT * 3);
    const colors = new Float32Array(COUNT * 3);

    const palette = [
      new THREE.Color("#ffffff"),
      new THREE.Color("#c7d2fe"),
      new THREE.Color("#6366f1"), // accent
      new THREE.Color("#a855f7"), // accent-2
    ];
    const pickColor = () => {
      const r = Math.random();
      if (r < 0.68) return palette[0];
      if (r < 0.84) return palette[1];
      if (r < 0.93) return palette[2];
      return palette[3];
    };

    const resetStar = (i: number, randomZ: boolean) => {
      positions[i * 3] = (Math.random() - 0.5) * SPREAD * 2;
      positions[i * 3 + 1] = (Math.random() - 0.5) * SPREAD * 2;
      positions[i * 3 + 2] = randomZ ? -Math.random() * DEPTH : -DEPTH;
    };
    for (let i = 0; i < COUNT; i++) {
      resetStar(i, true);
      const c = pickColor();
      colors[i * 3] = c.r;
      colors[i * 3 + 1] = c.g;
      colors[i * 3 + 2] = c.b;
    }

    const geometry = new THREE.BufferGeometry();
    const posAttr = new THREE.BufferAttribute(positions, 3);
    geometry.setAttribute("position", posAttr);
    geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));

    const material = new THREE.PointsMaterial({
      size: 3.4,
      sizeAttenuation: true,
      vertexColors: true,
      transparent: true,
      opacity: 0.95,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });
    const stars = new THREE.Points(geometry, material);
    scene.add(stars);

    const target = { x: 0, y: 0 };
    const eased = { x: 0, y: 0 };
    const onMove = (e: PointerEvent) => {
      target.x = e.clientX / window.innerWidth - 0.5;
      target.y = e.clientY / window.innerHeight - 0.5;
    };
    window.addEventListener("pointermove", onMove);

    const clock = new THREE.Clock();
    const speed = reduceMotion ? 0 : 38; // forward units / second
    let raf = 0;
    let running = true;

    const tick = () => {
      const dt = Math.min(clock.getDelta(), 0.05);

      if (speed) {
        for (let i = 0; i < COUNT; i++) {
          let z = positions[i * 3 + 2] + speed * dt;
          if (z > 40) {
            resetStar(i, false);
            z = positions[i * 3 + 2];
          }
          positions[i * 3 + 2] = z;
        }
        posAttr.needsUpdate = true;
      }

      stars.rotation.z += dt * 0.018;

      eased.x += (target.x - eased.x) * 0.04;
      eased.y += (target.y - eased.y) * 0.04;
      camera.position.x = eased.x * 70;
      camera.position.y = -eased.y * 70;
      camera.lookAt(0, 0, -600);

      renderer.render(scene, camera);
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    const ro = new ResizeObserver(setSize);
    ro.observe(parent);

    const onVisibility = () => {
      if (document.hidden) {
        cancelAnimationFrame(raf);
        running = false;
      } else if (!running) {
        running = true;
        clock.getDelta(); // drop the elapsed gap
        raf = requestAnimationFrame(tick);
      }
    };
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      window.removeEventListener("pointermove", onMove);
      document.removeEventListener("visibilitychange", onVisibility);
      geometry.dispose();
      material.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className="pointer-events-none absolute inset-0 h-full w-full"
    />
  );
}
