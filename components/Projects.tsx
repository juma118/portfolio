"use client";

import { motion } from "framer-motion";
import type { Dictionary } from "@/lib/dictionaries";
import { SectionHeading } from "./Section";
import { FiGithub, FiExternalLink, FiFolder } from "react-icons/fi";

export default function Projects({ dict }: { dict: Dictionary }) {
  return (
    <section id="projects" className="section bg-surface/30">
      <div className="container-px">
        <SectionHeading
          eyebrow={dict.projects.eyebrow}
          title={dict.projects.title}
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {dict.projects.items.map((project, i) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="card group flex flex-col p-6"
            >
              <div className="mb-4 flex items-center justify-between">
                <span className="grid h-11 w-11 place-items-center rounded-lg bg-accent/10 text-accent">
                  <FiFolder size={22} />
                </span>
                <div className="flex items-center gap-3 text-gray-400">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${project.title} on GitHub`}
                      className="transition-colors hover:text-white"
                    >
                      <FiGithub size={18} />
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${project.title} live demo`}
                      className="transition-colors hover:text-white"
                    >
                      <FiExternalLink size={18} />
                    </a>
                  )}
                </div>
              </div>

              <h3 className="text-lg font-semibold text-white transition-colors group-hover:text-accent">
                {project.title}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-gray-400">
                {project.description}
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="chip font-mono">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
