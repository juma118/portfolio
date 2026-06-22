import { site } from "@/lib/config";
import type { Dictionary } from "@/lib/dictionaries";

export default function Footer({ dict }: { dict: Dictionary }) {
  return (
    <footer className="border-t border-white/10 py-8">
      <div className="container-px flex flex-col items-center justify-between gap-3 text-sm text-muted sm:flex-row">
        <p>
          © {site.name}. 
          {/* {dict.footer.builtWith}{" "} */}
          {/* <span className="font-mono text-accent">Next.js</span>{" "}
          {dict.footer.and}{" "}
          <span className="font-mono text-accent">Tailwind</span> */}
        </p>
        <p className="font-mono">{dict.footer.tagline}</p>
      </div>
    </footer>
  );
}
