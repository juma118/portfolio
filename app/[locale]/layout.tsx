import type { Metadata } from "next";
import { site, locales, defaultLocale, basePath, type Locale } from "@/lib/config";
import { getDictionary } from "@/lib/dictionaries";
import SetHtmlLang from "@/components/SetHtmlLang";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

function toLocale(value: string): Locale {
  return (locales as readonly string[]).includes(value)
    ? (value as Locale)
    : defaultLocale;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const dict = await getDictionary(toLocale(locale));
  const title = `${site.name} — ${dict.hero.role}`;
  return {
    title,
    description: dict.meta.description,
    openGraph: {
      title,
      description: dict.meta.description,
      type: "website",
      locale,
    },
    alternates: {
      languages: {
        en: `${basePath}/en`,
        es: `${basePath}/es`,
      },
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  return (
    <>
      <SetHtmlLang locale={toLocale(locale)} />
      {children}
    </>
  );
}
