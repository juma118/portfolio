"use client";

import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { locales, localeNames, type Locale } from "@/lib/config";
import { FiGlobe, FiChevronDown } from "react-icons/fi";

export default function LanguageSwitcher({ locale }: { locale: Locale }) {
  const router = useRouter();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  function switchTo(next: Locale) {
    setOpen(false);
    if (next === locale) return;
    // Persist choice so the middleware keeps it on future visits.
    document.cookie = `NEXT_LOCALE=${next}; path=/; max-age=31536000; samesite=lax`;
    const segments = pathname.split("/");
    segments[1] = next; // replace the leading locale segment
    router.push(segments.join("/") || `/${next}`);
  }

  return (
    <div className="relative">
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label="Change language"
        className="flex items-center gap-1.5 rounded-full border border-white/15 px-3 py-1.5 text-sm text-gray-200 transition-colors hover:border-accent/50 hover:text-white"
      >
        <FiGlobe size={15} />
        <span className="uppercase">{locale}</span>
        <FiChevronDown
          size={14}
          className={`transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>

      {open && (
        <>
          <div
            className="fixed inset-0 z-10"
            onClick={() => setOpen(false)}
            aria-hidden
          />
          <ul className="absolute right-0 z-20 mt-2 w-36 overflow-hidden rounded-xl border border-white/10 bg-card/95 backdrop-blur-md shadow-xl">
            {locales.map((l) => (
              <li key={l}>
                <button
                  onClick={() => switchTo(l)}
                  className={`block w-full px-4 py-2 text-left text-sm transition-colors hover:bg-white/5 ${
                    l === locale ? "text-accent" : "text-gray-200"
                  }`}
                >
                  {localeNames[l]}
                </button>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}
