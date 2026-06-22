const en = {
  meta: {
    description:
      "Portfolio of Felipe David — AI & Full-Stack Software Engineer building intelligent, high-performance applications and AI-driven platforms.",
  },
  nav: {
    home: "Home",
    about: "About",
    skills: "Skills",
    experience: "Experience",
    projects: "Projects",
    contact: "Contact",
    talk: "Let's Talk",
  },
  hero: {
    greeting: "Hi, my name is",
    // role is used for the page <title> / SEO metadata.
    role: "AI & Full-Stack Software Engineer",
    // rotating headline + summary pairs cycled in the hero with animation.
    rotating: [
      {
        role: "AI & Full-Stack Software Engineer",
        tagline:
          "I build intelligent, high-performance applications and AI-driven platforms — scalable backends, responsive frontends, and cloud-native AI solutions across the JavaScript and .NET ecosystems.",
      },
      {
        role: "AI & Automation Engineer",
        tagline:
          "I design RAG pipelines, LLM integrations, and AI agents with OpenAI, Anthropic, and LangChain to automate workflows and deliver measurable business impact.",
      },
      {
        role: "Backend & API Developer",
        tagline:
          "I architect scalable services and RESTful APIs with Python, Java, Spring Boot, C#/.NET, and Node.js — built for performance and reliability.",
      },
      {
        role: "Cloud-Native Engineer",
        tagline:
          "I ship and scale applications with Docker, Kubernetes, AWS, and CI/CD pipelines, with monitoring and database optimization baked in.",
      },
    ],
    resumeUrl: "/felipe-david-resume-en.pdf",
    downloadCv: "Download CV",
    getInTouch: "Get in Touch",
    scrollDown: "Scroll down",
  },
  about: {
    eyebrow: "01 / About",
    title: "Who I Am",
    intro:
      "I'm an AI-focused full-stack software engineer with proven expertise in designing and delivering intelligent, high-performance applications and AI-driven platforms.",
    details:
      "I work across the JavaScript and .NET ecosystems — React, Angular, Node.js, and C#/.NET — and leverage advanced AI technologies like LLMs, RAG pipelines, and TTS systems to optimize software, automate workflows, and deliver measurable business impact.",
    languagesTitle: "Languages I Speak",
    languages: [
      { name: "Spanish", level: "Native" },
      { name: "English", level: "Advanced" },
    ],
    stats: [
      { value: "5+", label: "Years Experience" },
      { value: "1K+", label: "Users Supported" },
      { value: "20+", label: "Projects Delivered" },
      { value: "2", label: "Languages Spoken" },
    ],
  },
  skills: {
    eyebrow: "02 / Skills",
    title: "What I Work With",
    categories: [
      {
        title: "AI & Automation",
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
        title: "Databases",
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
        title: "Cloud & DevOps",
        icon: "cloud",
        skills: ["AWS", "Docker", "Kubernetes", "GitHub Actions", "CI/CD", "Nginx", "Linux"],
      },
      {
        title: "Tools & Platforms",
        icon: "tool",
        skills: ["Git", "Jira", "Slack", "Postman", "Firebase", "Supabase"],
      },
      {
        title: "Languages",
        icon: "globe",
        skills: ["Spanish — Native", "English — Advanced"],
      },
    ],
  },
  experience: {
    eyebrow: "03 / Journey",
    title: "Experience & Education",
    workTitle: "Work",
    educationTitle: "Education",
    work: [
      {
        role: "AI & Full-Stack Software Engineer",
        org: "DevF · Mexico City",
        period: "Mar 2022 — Present",
        description:
          "Deliver full-stack client solutions with C#/.NET, Java, Spring Boot, Python, TypeScript, React, Angular, and Node.js. Build AI workflows with OpenAI, Anthropic, LangChain, and RAG pipelines, and ship with Docker, AWS, and CI/CD.",
      },
      {
        role: "AI & Full-Stack Software Engineer",
        org: "BioHealth MX · Chihuahua",
        period: "Mar 2023 — Jul 2025",
        description:
          "Developed AI-driven backend systems and responsive frontend modules serving 500+ users. Implemented RAG pipelines, AI automation, TTS, and translation with OpenAI, LangChain, ElevenLabs, and DeepL; optimized PostgreSQL, Redis, and AWS deployments.",
      },
      {
        role: "Full-Stack Software Engineer (Intern)",
        org: "BioHealth MX · Chihuahua",
        period: "Feb 2022 — Mar 2023",
        description:
          "Supported AI-enabled course modules with Python, Node.js, React, and TypeScript. Built AI prototypes for content automation with OpenAI, LangChain, and RAG, and assisted with Docker deployments and SQL optimization.",
      },
    ],
    education: [
      {
        role: "B.Sc. in Software Engineering",
        org: "Los Valles University Center (CUVALLES) · Ameca, Jalisco",
        period: "Aug 2019 — Mar 2023",
        description:
          "Graduated in Software Engineering with a focus on full-stack development and applied computing.",
      },
    ],
  },
  projects: {
    eyebrow: "04 / Work",
    title: "Featured Projects",
    items: [
      {
        title: "AI Property Valuation Platform",
        description:
          "Full-stack proptech platform (Next.js 14, FastAPI) that turns raw real-estate listings into AI-driven valuations and investment intelligence, with a semantic RAG chat over pgvector and an async Celery + Redis enrichment pipeline.",
        tags: ["Next.js", "FastAPI", "pgvector", "OpenAI", "Celery"],
        github: "https://github.com/juma118",
        demo: "",
      },
      {
        title: "Voice Learning AI",
        description:
          "AI-powered voice learning platform using speech recognition, TTS, translation, and LLM workflows to help users practice listening, pronunciation, and comprehension across languages.",
        tags: ["Python", "LLM", "TTS", "Speech"],
        github: "https://github.com/juma118",
        demo: "",
      },
      {
        title: "AI KnowledgeBase Assistant",
        description:
          "RAG-based support assistant that grounds LLM responses in knowledge-base content, with semantic search and backend workflows for document ingestion, context retrieval, and response generation.",
        tags: ["RAG", "LLM", "Semantic Search", "Python"],
        github: "https://github.com/juma118",
        demo: "",
      },
    ],
  },
  contact: {
    eyebrow: "05 / Contact",
    title: "Let's Build Something",
    blurb:
      "I'm open to new projects, roles, and collaborations in AI and full-stack development. Send me a message and I'll get back to you.",
    location: "Tequila, Jalisco, Mexico",
    sayHello: "Say Hello",
    callMe: "Call Me",
  },
  footer: {
    builtWith: "Built with",
    and: "&",
    tagline: "Designed & coded with care.",
  },
};

export default en;
