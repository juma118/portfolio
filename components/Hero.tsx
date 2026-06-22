"use client";

import { motion } from "framer-motion";
import { site, asset } from "@/lib/config";
import type { Dictionary } from "@/lib/dictionaries";
import Socials from "./Socials";
import RotatingHeadline from "./RotatingHeadline";
import SpaceBackground from "./SpaceBackground";
import { FiDownload, FiArrowDown, FiMail } from "react-icons/fi";

export default function Hero({ dict }: { dict: Dictionary }) {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-16"
    >
      {/* Animated 3D starfield */}
      <SpaceBackground />

      {/* Glow blobs (nebula) */}
      <div className="pointer-events-none absolute -top-20 left-1/4 h-72 w-72 rounded-full bg-accent/20 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 right-1/4 h-72 w-72 rounded-full bg-accent-2/20 blur-[120px]" />

      <div className="container-px relative z-10">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-4 font-mono text-accent"
        >
          {dict.hero.greeting}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl font-extrabold leading-tight tracking-tight text-white md:text-7xl"
        >
          {site.name}
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-3"
        >
          <RotatingHeadline items={dict.hero.rotating} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-8 flex flex-wrap items-center gap-4"
        >
          <a href={asset(dict.hero.resumeUrl)} download className="btn-primary">
            <FiDownload /> {dict.hero.downloadCv}
          </a>
          <a href="#contact" className="btn-ghost">
            <FiMail /> {dict.hero.getInTouch}
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-10"
        >
          <Socials />
        </motion.div>
      </div>

      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float text-gray-400 hover:text-white"
        aria-label={dict.hero.scrollDown}
      >
        <FiArrowDown size={24} />
      </a>
    </section>
  );
}
