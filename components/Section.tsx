"use client";

import { motion } from "framer-motion";

export function SectionHeading({
  eyebrow,
  title,
}: {
  eyebrow: string;
  title: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5 }}
      className="mb-12 text-center"
    >
      <p className="mb-2 font-mono text-sm uppercase tracking-widest text-accent">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-bold text-white md:text-4xl">{title}</h2>
      <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-gradient-to-r from-accent to-accent-2" />
    </motion.div>
  );
}

export function Reveal({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay }}
    >
      {children}
    </motion.div>
  );
}
