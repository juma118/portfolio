"use client";

import { motion } from "framer-motion";
import { asset } from "@/lib/config";
import type { Dictionary } from "@/lib/dictionaries";
import { SectionHeading } from "./Section";
import { FiGithub, FiExternalLink, FiSmartphone, FiGlobe } from "react-icons/fi";

type Project = Dictionary["projects"]["items"][number];

function WebPreview({ project }: { project: Project }) {
  return (
    <div className="relative overflow-hidden border-b border-white/10">
      {/* Browser chrome */}
      <div className="flex items-center gap-1.5 bg-white/5 px-3 py-2">
        <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-green-400/70" />
      </div>
      <div className="relative aspect-[16/10] overflow-hidden bg-bg">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={asset(project.image)}
          alt={`${project.title} screenshot`}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.04]"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-card/50 via-transparent to-transparent" />
      </div>
    </div>
  );
}

function MobilePreview({ project }: { project: Project }) {
  return (
    <div className="relative overflow-hidden border-b border-white/10">
      <div className="relative flex aspect-[16/10] items-end justify-center gap-3 overflow-hidden bg-gradient-to-br from-accent/15 via-bg to-accent-2/15 px-4 pt-5">
        {project.images.slice(0, 3).map((src, i) => (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            key={src}
            src={asset(src)}
            alt={`${project.title} screen ${i + 1}`}
            loading="lazy"
            decoding="async"
            style={{ transitionDelay: `${i * 60}ms` }}
            className="h-[94%] w-auto rounded-xl shadow-xl shadow-black/40 ring-1 ring-white/10 transition-transform duration-500 group-hover:-translate-y-2"
          />
        ))}
      </div>
    </div>
  );
}

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
              className="card group flex flex-col overflow-hidden"
            >
              {project.mobile ? (
                <MobilePreview project={project} />
              ) : (
                <WebPreview project={project} />
              )}

              <div className="flex flex-1 flex-col p-6">
                <div className="mb-2 flex items-start justify-between gap-3">
                  <h3 className="flex items-center gap-2 text-lg font-semibold text-white transition-colors group-hover:text-accent">
                    {project.mobile ? (
                      <FiSmartphone className="shrink-0 text-accent" size={16} />
                    ) : (
                      <FiGlobe className="shrink-0 text-accent" size={16} />
                    )}
                    {project.title}
                  </h3>
                  <div className="flex shrink-0 items-center gap-3 pt-1 text-gray-400">
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

                <p className="flex-1 text-sm leading-relaxed text-gray-400">
                  {project.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="chip font-mono">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
