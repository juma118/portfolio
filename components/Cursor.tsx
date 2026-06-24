"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Custom animated cursor shaped like the Claude "spark". Smoothly trails the
 * pointer, spins continuously, grows over interactive elements, and pops on
 * click. Desktop (fine pointer) only; hides the native cursor while active.
 */
export default function Cursor() {
  const ref = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;
    const el = ref.current;
    if (!el) return;

    setEnabled(true);
    document.documentElement.classList.add("cursor-none");

    let x = window.innerWidth / 2;
    let y = window.innerHeight / 2;
    let tx = x;
    let ty = y;

    const onMove = (e: PointerEvent) => {
      tx = e.clientX;
      ty = e.clientY;
    };
    const onOver = (e: PointerEvent) => {
      const t = e.target as HTMLElement | null;
      const interactive = !!t?.closest(
        'a, button, [role="button"], input, textarea, select, label, summary'
      );
      el.classList.toggle("is-hover", interactive);
    };
    const onDown = () => el.classList.add("is-down");
    const onUp = () => el.classList.remove("is-down");
    const onLeave = () => el.classList.add("is-hidden");
    const onEnter = () => el.classList.remove("is-hidden");

    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("pointerover", onOver, { passive: true });
    window.addEventListener("pointerdown", onDown);
    window.addEventListener("pointerup", onUp);
    document.addEventListener("pointerleave", onLeave);
    document.addEventListener("pointerenter", onEnter);

    let raf = 0;
    const tick = () => {
      x += (tx - x) * 0.2;
      y += (ty - y) * 0.2;
      el.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`;
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerover", onOver);
      window.removeEventListener("pointerdown", onDown);
      window.removeEventListener("pointerup", onUp);
      document.removeEventListener("pointerleave", onLeave);
      document.removeEventListener("pointerenter", onEnter);
      document.documentElement.classList.remove("cursor-none");
    };
  }, []);

  return (
    <div ref={ref} aria-hidden className={`claude-cursor${enabled ? " is-on" : ""}`}>
      <div className="claude-cursor__scale">
        <svg
          className="claude-cursor__spark"
          viewBox="0 0 100 100"
          width="28"
          height="28"
        >
          <g fill="#ffffff">
            {Array.from({ length: 12 }).map((_, i) => {
              const long = i % 2 === 0;
              return (
                <rect
                  key={i}
                  x={47}
                  y={long ? 7 : 15}
                  width={6}
                  height={long ? 36 : 28}
                  rx={3}
                  transform={`rotate(${i * 30} 50 50)`}
                />
              );
            })}
          </g>
        </svg>
      </div>
    </div>
  );
}
