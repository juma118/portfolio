"use client";

import { motion } from "framer-motion";
import type { Dictionary } from "@/lib/dictionaries";
import { SectionHeading } from "./Section";
import { FiBriefcase, FiBookOpen } from "react-icons/fi";

type Item = {
  role: string;
  org: string;
  period: string;
  description: string;
};

function Timeline({ items }: { items: readonly Item[] }) {
  return (
    <div className="relative border-l border-white/10 pl-8">
      {items.map((item, i) => (
        <motion.div
          key={item.role + item.org}
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.4, delay: i * 0.05 }}
          className="relative mb-10 last:mb-0"
        >
          <span className="absolute -left-[41px] top-1 grid h-5 w-5 place-items-center rounded-full border-2 border-accent bg-bg">
            <span className="h-2 w-2 rounded-full bg-accent" />
          </span>
          <p className="font-mono text-xs text-accent">{item.period}</p>
          <h4 className="mt-1 text-lg font-semibold text-white">{item.role}</h4>
          <p className="text-sm text-muted">{item.org}</p>
          <p className="mt-2 text-sm leading-relaxed text-gray-400">
            {item.description}
          </p>
        </motion.div>
      ))}
    </div>
  );
}

export default function Experience({ dict }: { dict: Dictionary }) {
  const exp = dict.experience;
  return (
    <section id="experience" className="section">
      <div className="container-px">
        <SectionHeading eyebrow={exp.eyebrow} title={exp.title} />

        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <div className="mb-6 flex items-center gap-3">
              <FiBriefcase className="text-accent" size={20} />
              <h3 className="text-xl font-bold text-white">{exp.workTitle}</h3>
            </div>
            <Timeline items={exp.work} />
          </div>

          <div>
            <div className="mb-6 flex items-center gap-3">
              <FiBookOpen className="text-accent" size={20} />
              <h3 className="text-xl font-bold text-white">
                {exp.educationTitle}
              </h3>
            </div>
            <Timeline items={exp.education} />
          </div>
        </div>
      </div>
    </section>
  );
}
