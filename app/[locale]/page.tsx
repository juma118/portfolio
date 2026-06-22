import { notFound } from "next/navigation";
import { locales, type Locale } from "@/lib/config";
import { getDictionary } from "@/lib/dictionaries";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!(locales as readonly string[]).includes(locale)) notFound();

  const typedLocale = locale as Locale;
  const dict = await getDictionary(typedLocale);

  return (
    <>
      <Navbar dict={dict} locale={typedLocale} />
      <main>
        <Hero dict={dict} />
        <About dict={dict} />
        <Skills dict={dict} />
        <Experience dict={dict} />
        <Projects dict={dict} />
        <Contact dict={dict} />
      </main>
      <Footer dict={dict} />
    </>
  );
}
