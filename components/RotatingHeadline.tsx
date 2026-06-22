"use client";

import { useEffect, useState } from "react";
import {
  AnimatePresence,
  motion,
  type TargetAndTransition,
  type Transition,
} from "framer-motion";

// Alias the animated elements to plain components. framer-motion's full prop
// types, combined with our varied transition shapes, otherwise overflow
// TypeScript's union-complexity limit on these JSX elements.
const MotionH2 = motion.h2 as React.FC<any>;
const MotionP = motion.p as React.FC<any>;

type Item = { role: string; tagline: string };

type Anim = {
  initial: TargetAndTransition;
  animate: TargetAndTransition;
  exit: TargetAndTransition;
  transition: Transition;
};

type Effect = { name: string; role: Anim; tagline: Anim };

// A distinct switch animation for each headline pair. The list is indexed by
// pair position (modulo length), so each title/summary swaps in differently.
const EFFECTS: Effect[] = [
  // 0 — blur rise
  {
    name: "blur-rise",
    role: {
      initial: { opacity: 0, y: 22, filter: "blur(8px)" },
      animate: { opacity: 1, y: 0, filter: "blur(0px)" },
      exit: { opacity: 0, y: -22, filter: "blur(8px)" },
      transition: { duration: 0.45, ease: "easeOut" },
    },
    tagline: {
      initial: { opacity: 0, y: 14, filter: "blur(4px)" },
      animate: { opacity: 1, y: 0, filter: "blur(0px)" },
      exit: { opacity: 0, y: -14, filter: "blur(4px)" },
      transition: { duration: 0.45, ease: "easeOut", delay: 0.08 },
    },
  },
  // 1 — horizontal slide (spring)
  {
    name: "slide-x",
    role: {
      initial: { opacity: 0, x: -70 },
      animate: { opacity: 1, x: 0 },
      exit: { opacity: 0, x: 70 },
      transition: { type: "spring", stiffness: 280, damping: 24 },
    },
    tagline: {
      initial: { opacity: 0, x: 50 },
      animate: { opacity: 1, x: 0 },
      exit: { opacity: 0, x: -50 },
      transition: { type: "spring", stiffness: 230, damping: 26, delay: 0.06 },
    },
  },
  // 2 — zoom / pop
  {
    name: "zoom",
    role: {
      initial: { opacity: 0, scale: 0.72 },
      animate: { opacity: 1, scale: 1 },
      exit: { opacity: 0, scale: 1.18 },
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
    },
    tagline: {
      initial: { opacity: 0, scale: 0.92, y: 10 },
      animate: { opacity: 1, scale: 1, y: 0 },
      exit: { opacity: 0, scale: 1.06 },
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.08 },
    },
  },
  // 3 — 3D flip
  {
    name: "flip",
    role: {
      initial: { opacity: 0, rotateX: -90, y: 12 },
      animate: { opacity: 1, rotateX: 0, y: 0 },
      exit: { opacity: 0, rotateX: 90, y: -12 },
      transition: { duration: 0.55, ease: "easeOut" },
    },
    tagline: {
      initial: { opacity: 0, rotateX: -55 },
      animate: { opacity: 1, rotateX: 0 },
      exit: { opacity: 0, rotateX: 55 },
      transition: { duration: 0.5, ease: "easeOut", delay: 0.1 },
    },
  },
];

export default function RotatingHeadline({
  items,
  interval = 4200,
}: {
  items: readonly Item[];
  interval?: number;
}) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (items.length <= 1) return;
    const id = setInterval(
      () => setIndex((prev) => (prev + 1) % items.length),
      interval
    );
    return () => clearInterval(id);
  }, [items.length, interval]);

  const current = items[index] ?? items[0];
  const fx = EFFECTS[index % EFFECTS.length];

  return (
    <div>
      {/* Rotating role / title */}
      <div
        className="relative min-h-[3.25rem] md:min-h-[4.5rem]"
        style={{ perspective: 900 }}
      >
        <AnimatePresence mode="wait">
          <MotionH2
            key={index}
            initial={fx.role.initial}
            animate={fx.role.animate}
            exit={fx.role.exit}
            transition={fx.role.transition}
            className="origin-bottom pb-2 text-3xl font-bold leading-[1.2] heading-gradient md:text-5xl md:leading-[1.2]"
          >
            {current.role}
          </MotionH2>
        </AnimatePresence>
      </div>

      {/* Rotating summary */}
      <div
        className="relative mt-6 min-h-[5.5rem] max-w-2xl sm:min-h-[5rem]"
        style={{ perspective: 900 }}
      >
        <AnimatePresence mode="wait">
          <MotionP
            key={index}
            initial={fx.tagline.initial}
            animate={fx.tagline.animate}
            exit={fx.tagline.exit}
            transition={fx.tagline.transition}
            className="origin-top text-lg leading-relaxed text-muted"
          >
            {current.tagline}
          </MotionP>
        </AnimatePresence>
      </div>

      {/* Progress dots */}
      {items.length > 1 && (
        <div className="mt-5 flex gap-2">
          {items.map((item, i) => (
            <button
              key={item.role}
              onClick={() => setIndex(i)}
              aria-label={`Show ${item.role}`}
              aria-current={i === index}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === index
                  ? "w-7 bg-gradient-to-r from-accent to-accent-2"
                  : "w-2 bg-white/20 hover:bg-white/40"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
