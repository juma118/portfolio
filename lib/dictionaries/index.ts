import type { Locale } from "@/lib/config";
import en from "./en";

// The English dictionary defines the canonical shape every locale must match.
export type Dictionary = typeof en;

const dictionaries: Record<Locale, () => Promise<Dictionary>> = {
  en: () => Promise.resolve(en),
  es: () => import("./es").then((m) => m.default),
};

export async function getDictionary(locale: Locale): Promise<Dictionary> {
  return (dictionaries[locale] ?? dictionaries.en)();
}
