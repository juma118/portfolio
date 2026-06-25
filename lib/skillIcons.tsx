import type { IconType } from "react-icons";
import {
  SiOpenai,
  SiAnthropic,
  SiLangchain,
  SiElevenlabs,
  SiDeepl,
  SiPython,
  SiSpringboot,
  SiDotnet,
  SiSharp,
  SiNodedotjs,
  SiExpress,
  SiFastapi,
  SiFlask,
  SiDjango,
  SiNestjs,
  SiGo,
  SiPhp,
  SiLaravel,
  SiGraphql,
  SiReact,
  SiNextdotjs,
  SiAngular,
  SiVuedotjs,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiHtml5,
  SiCss,
  SiPostgresql,
  SiMongodb,
  SiMysql,
  SiRedis,
  SiDocker,
  SiKubernetes,
  SiGithubactions,
  SiNginx,
  SiLinux,
  SiGit,
  SiJira,
  SiSlack,
  SiPostman,
  SiFirebase,
  SiSupabase,
} from "react-icons/si";
import { FaAws, FaJava } from "react-icons/fa";
import {
  FiCpu,
  FiDatabase,
  FiGlobe,
  FiCode,
  FiGitMerge,
  FiLayers,
  FiSearch,
} from "react-icons/fi";

type SkillIcon = { Icon: IconType; color?: string };

const CONCEPT = "#a5b4fc";

const MAP: Record<string, SkillIcon> = {
  // AI & Automation
  openaiapi: { Icon: SiOpenai, color: "#10A37F" },
  anthropicclaude: { Icon: SiAnthropic, color: "#D97757" },
  langchain: { Icon: SiLangchain, color: "#2AB89B" },
  llamaindex: { Icon: FiLayers, color: CONCEPT },
  rag: { Icon: FiSearch, color: CONCEPT },
  llmintegration: { Icon: FiCpu, color: CONCEPT },
  aiagents: { Icon: FiCpu, color: CONCEPT },
  promptengineering: { Icon: FiCpu, color: CONCEPT },
  vectordbs: { Icon: FiDatabase, color: CONCEPT },
  semanticsearch: { Icon: FiSearch, color: CONCEPT },
  elevenlabs: { Icon: SiElevenlabs, color: "#E5E7EB" },
  deepl: { Icon: SiDeepl, color: "#4A90D9" },
  whisper: { Icon: SiOpenai, color: "#10A37F" },

  // Backend
  python: { Icon: SiPython, color: "#4B8BBE" },
  java: { Icon: FaJava, color: "#E76F00" },
  springboot: { Icon: SiSpringboot, color: "#6DB33F" },
  "c#": { Icon: SiSharp, color: "#A569BD" },
  net: { Icon: SiDotnet, color: "#8A6FE8" },
  aspnetcore: { Icon: SiDotnet, color: "#8A6FE8" },
  nodejs: { Icon: SiNodedotjs, color: "#7FB069" },
  expressjs: { Icon: SiExpress, color: "#CBD5E1" },
  fastapi: { Icon: SiFastapi, color: "#009688" },
  flask: { Icon: SiFlask, color: "#E5E7EB" },
  django: { Icon: SiDjango, color: "#44B78B" },
  nestjs: { Icon: SiNestjs, color: "#E0234E" },
  go: { Icon: SiGo, color: "#00ADD8" },
  php: { Icon: SiPhp, color: "#8892BF" },
  laravel: { Icon: SiLaravel, color: "#FF2D20" },
  graphql: { Icon: SiGraphql, color: "#F056B5" },

  // Frontend
  react: { Icon: SiReact, color: "#61DAFB" },
  nextjs: { Icon: SiNextdotjs, color: "#FFFFFF" },
  angular: { Icon: SiAngular, color: "#E23237" },
  vuejs: { Icon: SiVuedotjs, color: "#4FC08D" },
  typescript: { Icon: SiTypescript, color: "#4F8FDB" },
  javascript: { Icon: SiJavascript, color: "#F7DF1E" },
  tailwindcss: { Icon: SiTailwindcss, color: "#38BDF8" },
  html5: { Icon: SiHtml5, color: "#E34F26" },
  css3: { Icon: SiCss, color: "#4F9FE0" },

  // Databases
  postgresql: { Icon: SiPostgresql, color: "#4F9FE0" },
  pgvector: { Icon: SiPostgresql, color: "#4F9FE0" },
  mongodb: { Icon: SiMongodb, color: "#47A248" },
  mysql: { Icon: SiMysql, color: "#5B8FC0" },
  sqlserver: { Icon: FiDatabase, color: CONCEPT },
  redis: { Icon: SiRedis, color: "#FF6B5E" },
  pinecone: { Icon: FiDatabase, color: CONCEPT },
  chromadb: { Icon: FiDatabase, color: CONCEPT },

  // Cloud & DevOps
  aws: { Icon: FaAws, color: "#FF9900" },
  docker: { Icon: SiDocker, color: "#4BA3F0" },
  kubernetes: { Icon: SiKubernetes, color: "#5B8DEF" },
  githubactions: { Icon: SiGithubactions, color: "#4F9FFF" },
  cicd: { Icon: FiGitMerge, color: CONCEPT },
  nginx: { Icon: SiNginx, color: "#2DBE60" },
  linux: { Icon: SiLinux, color: "#F2F2F2" },

  // Tools & Platforms
  git: { Icon: SiGit, color: "#F05032" },
  jira: { Icon: SiJira, color: "#2684FF" },
  slack: { Icon: SiSlack, color: "#E8A0C0" },
  postman: { Icon: SiPostman, color: "#FF6C37" },
  firebase: { Icon: SiFirebase, color: "#FFCA28" },
  supabase: { Icon: SiSupabase, color: "#3FCF8E" },
};

const normalize = (s: string) => s.toLowerCase().replace(/[^a-z0-9#+]/g, "");

export function getSkillIcon(name: string): SkillIcon {
  const hit = MAP[normalize(name)];
  if (hit) return hit;
  if (name.includes("—")) return { Icon: FiGlobe, color: CONCEPT };
  return { Icon: FiCode, color: CONCEPT };
}
