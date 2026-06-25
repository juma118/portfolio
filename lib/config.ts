export const locales = ["en", "es"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";

export const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

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
