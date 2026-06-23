"use client";

import { motion } from "framer-motion";
import { asset } from "@/lib/config";
import type { Dictionary } from "@/lib/dictionaries";
import { SectionHeading } from "./Section";
import { FiGithub, FiExternalLink, FiSmartphone, FiGlobe } from "react-icons/fi";

type Project = Dictionary["projects"]["items"][number];

function WebPreview({ project }: { project: Project }) {
  return (
    <div className="overflow-hidden rounded-xl border border-white/10 shadow-2xl shadow-black/50">
      {/* Browser chrome */}
      <div className="flex items-center gap-1.5 border-b border-white/10 bg-white/5 px-3 py-2">
        <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-green-400/70" />
      </div>
      <div className="relative aspect-[16/10] bg-bg">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={asset(project.image)}
          alt={`${project.title} screenshot`}
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover object-top"
        />
      </div>
    </div>
  );
}

function PhoneFrame({
  src,
  alt,
  className = "",
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  return (
    <div
      className={`relative shrink-0 rounded-[1.8rem] bg-[#0a0a0f] p-[5px] shadow-2xl shadow-black/60 ring-1 ring-white/15 ${className}`}
    >
      {/* Screen (matches the 300x600 mockups) */}
      <div className="relative aspect-[300/600] overflow-hidden rounded-[1.5rem] bg-black">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          alt={alt}
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover"
        />
        {/* Dynamic Island */}
        <div className="absolute left-1/2 top-[7px] h-[13px] w-[32%] -translate-x-1/2 rounded-full bg-black" />
      </div>
      {/* Side buttons */}
      <span className="absolute -left-[1.5px] top-[24%] h-8 w-[2px] rounded-l bg-white/15" />
      <span className="absolute -right-[1.5px] top-[32%] h-11 w-[2px] rounded-r bg-white/15" />
    </div>
  );
}

function MobilePreview({ project }: { project: Project }) {
  return (
    <div className="flex items-end justify-center gap-4">
      {project.images.slice(0, 2).map((src, i) => (
        <PhoneFrame
          key={src}
          src={asset(src)}
          alt={`${project.title} screen ${i + 1}`}
          className={`w-[130px] sm:w-[148px] ${
            i === 0 ? "sm:-translate-y-5" : ""
          }`}
        />
      ))}
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

        <div className="mx-auto flex max-w-5xl flex-col gap-12 md:gap-16">
          {dict.projects.items.map((project, i) => {
            const reversed = i % 2 === 1;
            return (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5 }}
                className="card group grid items-center gap-2 overflow-hidden md:grid-cols-2"
              >
                {/* Media (3D tilt) */}
                <div
                  className={`relative flex items-center justify-center bg-gradient-to-br from-accent/10 via-bg to-accent-2/10 p-8 md:p-12 ${
                    reversed ? "md:order-2" : "md:order-1"
                  }`}
                >
                  {/* Contact shadow on the "desk" */}
                  <div
                    aria-hidden
                    className="pointer-events-none absolute bottom-7 left-1/2 hidden h-8 w-[70%] -translate-x-1/2 rounded-[50%] bg-black/60 blur-2xl md:block"
                  />
                  <div
                    className={`relative z-10 w-full tilt ${
                      reversed ? "tilt-right" : "tilt-left"
                    }`}
                  >
                    {project.mobile ? (
                      <MobilePreview project={project} />
                    ) : (
                      <WebPreview project={project} />
                    )}
                  </div>
                </div>

                {/* Content */}
                <div
                  className={`flex flex-col justify-center p-8 md:p-10 ${
                    reversed ? "md:order-1" : "md:order-2"
                  }`}
                >
                  <h3 className="flex items-center gap-2.5 text-2xl font-bold leading-tight text-white transition-colors group-hover:text-accent">
                    {project.mobile ? (
                      <FiSmartphone className="shrink-0 text-accent" size={20} />
                    ) : (
                      <FiGlobe className="shrink-0 text-accent" size={20} />
                    )}
                    {project.title}
                  </h3>

                  <p className="mt-4 text-base leading-relaxed text-gray-300 md:text-lg">
                    {project.description}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="chip font-mono">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-7 flex flex-wrap gap-3">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-ghost !px-5 !py-2.5 text-sm"
                      >
                        <FiGithub /> {dict.projects.viewCode}
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary !px-5 !py-2.5 text-sm"
                      >
                        <FiExternalLink /> {dict.projects.liveDemo}
                      </a>
                    )}
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
