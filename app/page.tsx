"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { locales, defaultLocale, type Locale } from "@/lib/config";

function detectLocale(): Locale {
  // Honor a previously chosen locale (set by the language switcher).
  const cookie = document.cookie
    .split("; ")
    .find((c) => c.startsWith("NEXT_LOCALE="))
    ?.split("=")[1];
  if (cookie && (locales as readonly string[]).includes(cookie)) {
    return cookie as Locale;
  }
  // Fall back to the browser language.
  const lang = navigator.language.slice(0, 2).toLowerCase();
  return (locales as readonly string[]).includes(lang)
    ? (lang as Locale)
    : defaultLocale;
}

export default function RootRedirect() {
  const router = useRouter();

  useEffect(() => {
    router.replace(`/${detectLocale()}`); // basePath is applied automatically
  }, [router]);

  return (
    <main className="grid min-h-screen place-items-center">
      <div className="text-center text-muted">
        <div className="mx-auto mb-4 h-8 w-8 animate-spin rounded-full border-2 border-white/15 border-t-accent" />
        <p className="font-mono text-sm">Loading…</p>
        <noscript>
          <p className="mt-2">
            <a href="./en/" className="text-accent underline">
              English
            </a>{" "}
            ·{" "}
            <a href="./es/" className="text-accent underline">
              Español
            </a>
          </p>
        </noscript>
      </div>
    </main>
  );
}
