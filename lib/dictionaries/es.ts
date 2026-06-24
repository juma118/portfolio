import type { Dictionary } from "./index";

const es: Dictionary = {
  meta: {
    description:
      "Portafolio de Felipe David — Ingeniero de Software de IA y Full-Stack que construye aplicaciones inteligentes de alto rendimiento y plataformas impulsadas por IA.",
  },
  nav: {
    home: "Inicio",
    about: "Sobre mí",
    skills: "Habilidades",
    experience: "Experiencia",
    projects: "Proyectos",
    contact: "Contacto",
    talk: "Hablemos",
  },
  hero: {
    greeting: "Hola, mi nombre es",
    role: "Ingeniero de Software de IA y Full-Stack",
    rotating: [
      {
        role: "Ingeniero de Software de IA y Full-Stack",
        tagline:
          "Construyo aplicaciones inteligentes de alto rendimiento y plataformas impulsadas por IA — backends escalables, frontends responsivos y soluciones de IA cloud-native en los ecosistemas de JavaScript y .NET.",
      },
      {
        role: "Ingeniero de IA y Automatización",
        tagline:
          "Diseño RAG pipelines, integraciones de LLM y agentes de IA con OpenAI, Anthropic y LangChain para automatizar flujos de trabajo y generar un impacto medible en el negocio.",
      },
      {
        role: "Desarrollador de Backend y APIs",
        tagline:
          "Diseño servicios escalables y APIs RESTful con Python, Java, Spring Boot, C#/.NET y Node.js — construidos para el rendimiento y la fiabilidad.",
      },
      {
        role: "Ingeniero Cloud-Native",
        tagline:
          "Despliego y escalo aplicaciones con Docker, Kubernetes, AWS y pipelines de CI/CD, con monitoreo y optimización de bases de datos integrados.",
      },
    ],
    resumeUrl: "/felipe-david-resume-es.pdf",
    downloadCv: "Descargar CV",
    getInTouch: "Contáctame",
    scrollDown: "Desplázate hacia abajo",
  },
  about: {
    eyebrow: "01 / Sobre mí",
    title: "Quién Soy",
    intro:
      "Soy un ingeniero de software full-stack enfocado en IA, con experiencia comprobada en el diseño y la entrega de aplicaciones inteligentes de alto rendimiento y plataformas impulsadas por IA.",
    details:
      "Trabajo en los ecosistemas de JavaScript y .NET — React, Angular, Node.js y C#/.NET — y aprovecho tecnologías avanzadas de IA como LLMs, RAG pipelines y sistemas TTS para optimizar software, automatizar flujos de trabajo y generar un impacto medible en el negocio.",
    languagesTitle: "Idiomas que Hablo",
    languages: [
      { name: "Español", level: "Nativo" },
      { name: "Inglés", level: "Avanzado" },
    ],
    stats: [
      { value: "5+", label: "Años de Experiencia" },
      { value: "1K+", label: "Usuarios Atendidos" },
      { value: "20+", label: "Proyectos Entregados" },
      { value: "2", label: "Idiomas" },
    ],
  },
  skills: {
    eyebrow: "02 / Habilidades",
    title: "Con Qué Trabajo",
    categories: [
      {
        title: "IA y Automatización",
        icon: "cpu",
        skills: [
          "OpenAI API",
          "Anthropic Claude",
          "LangChain",
          "LlamaIndex",
          "RAG",
          "LLM Integration",
          "AI Agents",
          "Prompt Engineering",
          "Vector DBs",
          "Semantic Search",
          "ElevenLabs",
          "DeepL",
          "Whisper",
        ],
      },
      {
        title: "Backend",
        icon: "server",
        skills: [
          "Python",
          "Java",
          "Spring Boot",
          "C#",
          ".NET",
          "ASP.NET Core",
          "Node.js",
          "Express.js",
          "FastAPI",
          "Flask",
          "Django",
          "NestJS",
          "Go",
          "PHP",
          "Laravel",
          "GraphQL",
        ],
      },
      {
        title: "Frontend",
        icon: "layout",
        skills: [
          "React",
          "Next.js",
          "Angular",
          "Vue.js",
          "TypeScript",
          "JavaScript",
          "Tailwind CSS",
          "HTML5",
          "CSS3",
        ],
      },
      {
        title: "Bases de Datos",
        icon: "database",
        skills: [
          "PostgreSQL",
          "pgvector",
          "MongoDB",
          "MySQL",
          "SQL Server",
          "Redis",
          "Pinecone",
          "ChromaDB",
        ],
      },
      {
        title: "Cloud y DevOps",
        icon: "cloud",
        skills: ["AWS", "Docker", "Kubernetes", "GitHub Actions", "CI/CD", "Nginx", "Linux"],
      },
      {
        title: "Herramientas y Plataformas",
        icon: "tool",
        skills: ["Git", "Jira", "Slack", "Postman", "Firebase", "Supabase"],
      },
      {
        title: "Idiomas",
        icon: "globe",
        skills: ["Español — Nativo", "Inglés — Avanzado"],
      },
    ],
  },
  experience: {
    eyebrow: "03 / Trayectoria",
    title: "Experiencia y Educación",
    workTitle: "Experiencia Laboral",
    educationTitle: "Educación",
    work: [
      {
        role: "Ingeniero de Software de IA y Full-Stack",
        org: "DevF · Ciudad de México",
        period: "Mar 2022 — Presente",
        description:
          "Entrego soluciones full-stack para clientes con C#/.NET, Java, Spring Boot, Python, TypeScript, React, Angular y Node.js. Construyo flujos de trabajo de IA con OpenAI, Anthropic, LangChain y RAG pipelines, y despliego con Docker, AWS y CI/CD.",
      },
      {
        role: "Ingeniero de Software de IA y Full-Stack",
        org: "BioHealth MX · Chihuahua",
        period: "Mar 2023 — Jul 2025",
        description:
          "Desarrollé sistemas backend impulsados por IA y módulos frontend responsivos para más de 500 usuarios. Implementé RAG pipelines, automatización con IA, TTS y traducción con OpenAI, LangChain, ElevenLabs y DeepL; optimicé PostgreSQL, Redis y despliegues en AWS.",
      },
      {
        role: "Ingeniero de Software Full-Stack (Prácticas)",
        org: "BioHealth MX · Chihuahua",
        period: "Feb 2022 — Mar 2023",
        description:
          "Apoyé módulos de cursos habilitados con IA usando Python, Node.js, React y TypeScript. Construí prototipos de IA para automatización de contenido con OpenAI, LangChain y RAG, y colaboré en despliegues con Docker y optimización de SQL.",
      },
    ],
    education: [
      {
        role: "Licenciatura en Ingeniería de Software",
        org: "Centro Universitario de los Valles (CUVALLES) · Ameca, Jalisco",
        period: "Ago 2019 — Mar 2023",
        description:
          "Graduado en Ingeniería de Software con enfoque en desarrollo full-stack y computación aplicada.",
      },
    ],
  },
  projects: {
    eyebrow: "04 / Trabajo",
    title: "Proyectos Destacados",
    viewCode: "Ver Código",
    liveDemo: "Demo en Vivo",
    items: [
      {
        title: "Plataforma de Valuación de Propiedades con IA",
        description:
          "Plataforma proptech full-stack (Next.js 14, FastAPI) que convierte listados inmobiliarios en bruto en valuaciones impulsadas por IA e inteligencia de inversión, con un chat RAG semántico sobre pgvector y un pipeline asíncrono de enriquecimiento con Celery + Redis.",
        tags: ["Next.js", "FastAPI", "pgvector", "OpenAI", "Celery"],
        github: "https://github.com/juma118/AI-Powered-Property-Valuation",
        demo: "",
        image: "/projects/property.png",
        mobile: false,
        images: [] as string[],
      },
      {
        title: "Voice Learning AI",
        description:
          "Plataforma de aprendizaje por voz impulsada por IA con tutor de voz, búsqueda RAG, explicaciones multilingües, cuestionarios y analíticas para instructores — hecha con Whisper, ElevenLabs y Chroma.",
        tags: ["Next.js", "FastAPI", "Whisper", "ElevenLabs", "Chroma"],
        github: "https://github.com/juma118/VoiceLearningAssistant",
        demo: "",
        image: "/projects/voice.png",
        mobile: false,
        images: [] as string[],
      },
      {
        title: "Asistente de Base de Conocimiento con IA",
        description:
          "App RAG full-stack: las empresas suben documentos de su base de conocimiento y los clientes reciben respuestas de IA fundamentadas con citas de fuentes, puntajes de confianza y un respaldo cuando no hay respuesta.",
        tags: ["Next.js", "FastAPI", "pgvector", "RAG", "OpenAI"],
        github: "https://github.com/juma118/AIKnowledgeBaseSA",
        demo: "",
        image: "/projects/knowledge.png",
        mobile: false,
        images: [] as string[],
      },
      {
        title: "JaliCommerce AI",
        description:
          "Plataforma de e-commerce full-stack y de nivel producción hecha con Next.js 15 (App Router) y NextAuth v5 — datos en Supabase + PostgreSQL, pagos con Stripe, búsqueda con Algolia InstantSearch y recomendaciones de productos impulsadas por IA.",
        tags: ["Next.js", "NextAuth", "Supabase", "Stripe", "Algolia"],
        github: "https://github.com/juma118/jali-commerce",
        demo: "",
        image: "/projects/jali.png",
        mobile: false,
        images: [] as string[],
      },
      {
        title: "NutriSnap — Coach de Nutrición con IA",
        description:
          "App móvil multiplataforma (React Native + Expo) que registra comidas desde una foto usando Claude vision, devuelve un análisis estructurado de macros y actúa como coach de comidas personalizado con IA.",
        tags: ["React Native", "Expo", "FastAPI", "Claude", "TypeScript"],
        github: "https://github.com/juma118/NutriSnap",
        demo: "",
        image: "",
        mobile: true,
        images: [
          "/projects/nutrisnap-02.svg",
          "/projects/nutrisnap-03.svg",
          "/projects/nutrisnap-04.svg",
          "/projects/nutrisnap-01.svg",
        ],
      },
    ],
  },
  contact: {
    eyebrow: "05 / Contacto",
    title: "Construyamos Algo",
    blurb:
      "Estoy abierto a nuevos proyectos, roles y colaboraciones en IA y desarrollo full-stack. Envíame un mensaje y te responderé.",
    location: "Tequila, Jalisco, México",
    sayHello: "Saludar",
    callMe: "Llámame",
  },
  footer: {
    builtWith: "Hecho con",
    and: "y",
    tagline: "Diseñado y programado con dedicación.",
  },
};

export default es;
