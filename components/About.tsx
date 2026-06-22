"use client";

import { motion } from "framer-motion";
import type { Dictionary } from "@/lib/dictionaries";
import { SectionHeading } from "./Section";

export default function About({ dict }: { dict: Dictionary }) {
  const about = dict.about;
  return (
    <section id="about" className="section">
      <div className="container-px">
        <SectionHeading eyebrow={about.eyebrow} title={about.title} />

        <div className="grid items-center gap-12 md:grid-cols-5">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
            className="md:col-span-3"
          >
            <p className="text-lg leading-relaxed text-gray-300">{about.intro}</p>
            <p className="mt-4 leading-relaxed text-muted">{about.details}</p>

            <div className="mt-6">
              <p className="mb-2 font-mono text-xs uppercase tracking-widest text-accent">
                {about.languagesTitle}
              </p>
              <div className="flex flex-wrap gap-2">
                {about.languages.map((lang) => (
                  <span key={lang.name} className="chip">
                    <span className="font-semibold text-white">{lang.name}</span>
                    <span className="ml-1.5 text-muted">· {lang.level}</span>
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-2 gap-4 md:col-span-2"
          >
            {about.stats.map((stat) => (
              <div key={stat.label} className="card p-6 text-center">
                <div className="text-3xl font-bold heading-gradient">
                  {stat.value}
                </div>
                <div className="mt-1 text-sm text-muted">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
