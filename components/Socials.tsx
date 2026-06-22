import { socials } from "@/lib/config";
import {
  FiGithub,
  FiLinkedin,
  FiTwitter,
  FiCode,
  FiInstagram,
  FiBookOpen,
  FiMail,
} from "react-icons/fi";
import type { IconType } from "react-icons";

const iconMap: Record<string, IconType> = {
  github: FiGithub,
  linkedin: FiLinkedin,
  twitter: FiTwitter,
  code: FiCode,
  medium: FiBookOpen,
  instagram: FiInstagram,
  mail: FiMail,
};

export default function Socials({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {socials.map((s) => {
        const Icon = iconMap[s.icon] ?? FiCode;
        return (
          <a
            key={s.name}
            href={s.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={s.name}
            className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/5 text-gray-300 transition-all hover:-translate-y-1 hover:border-accent/50 hover:text-white"
          >
            <Icon size={18} />
          </a>
        );
      })}
    </div>
  );
}
