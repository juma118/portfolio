"use client";

import { motion } from "framer-motion";
import type { Dictionary } from "@/lib/dictionaries";
import { SectionHeading } from "./Section";
import {
  FiServer,
  FiLayout,
  FiCloud,
  FiCpu,
  FiTerminal,
  FiGlobe,
  FiDatabase,
  FiTool,
} from "react-icons/fi";
import type { IconType } from "react-icons";

const iconMap: Record<string, IconType> = {
  server: FiServer,
  layout: FiLayout,
  cloud: FiCloud,
  cpu: FiCpu,
  terminal: FiTerminal,
  globe: FiGlobe,
  database: FiDatabase,
  tool: FiTool,
};

export default function Skills({ dict }: { dict: Dictionary }) {
  return (
    <section id="skills" className="section bg-surface/30">
      <div className="container-px">
        <SectionHeading eyebrow={dict.skills.eyebrow} title={dict.skills.title} />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {dict.skills.categories.map((cat, i) => {
            const Icon = iconMap[cat.icon] ?? FiCpu;
            return (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="card p-6"
              >
                <div className="mb-4 flex items-center gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-lg bg-accent/10 text-accent">
                    <Icon size={20} />
                  </span>
                  <h3 className="font-semibold text-white">{cat.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span key={skill} className="chip">
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
