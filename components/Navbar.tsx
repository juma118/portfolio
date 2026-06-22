"use client";

import { useEffect, useState } from "react";
import { site, type Locale } from "@/lib/config";
import type { Dictionary } from "@/lib/dictionaries";
import LanguageSwitcher from "./LanguageSwitcher";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar({
  dict,
  locale,
}: {
  dict: Dictionary;
  locale: Locale;
}) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const navLinks = [
    { label: dict.nav.home, href: "#home" },
    { label: dict.nav.about, href: "#about" },
    { label: dict.nav.skills, href: "#skills" },
    { label: dict.nav.experience, href: "#experience" },
    { label: dict.nav.projects, href: "#projects" },
    { label: dict.nav.contact, href: "#contact" },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-white/10 bg-bg/80 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <nav className="container-px flex h-16 items-center justify-between">
        <a href="#home" className="font-mono text-lg font-bold text-white">
          {site.name.split(" ")[0]}
          <span className="text-accent">.</span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-medium text-gray-300 transition-colors hover:text-white"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 md:flex">
          <LanguageSwitcher locale={locale} />
          <a href="#contact" className="btn-primary !px-5 !py-2">
            {dict.nav.talk}
          </a>
        </div>

        <div className="flex items-center gap-3 md:hidden">
          <LanguageSwitcher locale={locale} />
          <button
            aria-label="Toggle menu"
            className="text-2xl text-white"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-white/10 bg-bg/95 backdrop-blur-md md:hidden">
          <ul className="container-px flex flex-col gap-1 py-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-2 text-base text-gray-200 hover:bg-white/5"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
