"use client";

import { useEffect } from "react";
import type { Locale } from "@/lib/config";

/**
 * Sets <html lang> to the active locale. The root layout (app/layout.tsx) renders
 * a static lang="en"; since locale routing is a nested layout, we update it on the
 * client when an /es page is shown.
 */
export default function SetHtmlLang({ locale }: { locale: Locale }) {
  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);
  return null;
}
