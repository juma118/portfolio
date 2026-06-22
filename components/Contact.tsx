"use client";

import { motion } from "framer-motion";
import { site } from "@/lib/config";
import type { Dictionary } from "@/lib/dictionaries";
import { SectionHeading } from "./Section";
import Socials from "./Socials";
import { FiMail, FiMapPin, FiPhone } from "react-icons/fi";

export default function Contact({ dict }: { dict: Dictionary }) {
  const contact = dict.contact;
  return (
    <section id="contact" className="section">
      <div className="container-px">
        <SectionHeading eyebrow={contact.eyebrow} title={contact.title} />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="text-lg leading-relaxed text-muted">{contact.blurb}</p>

          <div className="mt-8 flex flex-col items-center gap-3 text-gray-300">
            <a
              href={`mailto:${site.email}`}
              className="flex items-center gap-2 transition-colors hover:text-white"
            >
              <FiMail className="text-accent" /> {site.email}
            </a>
            <a
              href={`tel:${site.phone.replace(/\s+/g, "")}`}
              className="flex items-center gap-2 transition-colors hover:text-white"
            >
              <FiPhone className="text-accent" /> {site.phone}
            </a>
            <span className="flex items-center gap-2">
              <FiMapPin className="text-accent" /> {contact.location}
            </span>
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a href={`mailto:${site.email}`} className="btn-primary">
              <FiMail /> {contact.sayHello}
            </a>
            <a
              href={`tel:${site.phone.replace(/\s+/g, "")}`}
              className="btn-ghost"
            >
              <FiPhone /> {contact.callMe}
            </a>
          </div>

          <Socials className="mt-10 justify-center" />
        </motion.div>
      </div>
    </section>
  );
}
