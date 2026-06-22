// ===========================================================================
// Non-translatable site config (name, contact, links). Edit your details here.
// Translatable text lives in lib/dictionaries/{en,es}.ts
// ===========================================================================

export const locales = ["en", "es"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";

// Base path the site is served under (e.g. "/portfolio" on GitHub Pages).
// Injected from next.config.mjs; empty in local dev.
export const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

// Prefix a public/ asset (e.g. the resume PDF) with the base path. Raw <a>/href
// values aren't auto-prefixed by Next the way next/link and next/image are.
export const asset = (path: string) => `${basePath}${path}`;

export const localeNames: Record<Locale, string> = {
  en: "English",
  es: "Español",
};

export const site = {
  name: "Felipe David",
  email: "felipedeveloper12@gmail.com",
  phone: "+52 33 8526 1884",
};

export const socials = [
  { name: "GitHub", url: "https://github.com/juma118", icon: "github" },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/felipe-david-rivera-luzuriaga-73415340b",
    icon: "linkedin",
  },
  { name: "Email", url: "mailto:felipedeveloper12@gmail.com", icon: "mail" },
];
