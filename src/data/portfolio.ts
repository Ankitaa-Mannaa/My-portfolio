export type Project = {
  title: string;
  description: string;
  techStack: string[];
  liveUrl: string;
  githubUrl: string;
};

export type Education = {
  degree: string;
  institute: string;
  year: string;
  details: string;
};

export type Experience = {
  role: string;
  company: string;
  period: string;
  highlights: string[];
};

export type SkillCategory = {
  title: string;
  items: string[];
};

export const portfolioData = {
  personal: {
    name: "Ankita Manna",
    role: "",
    heroPoints: [
      "Full-stack Developer",
      "AI / ML",
      "Delhi, India",
    ],
    shortBio:
      "I build smart web apps, automation tools, and AI-powered systems, and yes, I get way too excited when a bug disappears after one Python print( ) check. I love exploring AI deeply, experimenting with new ideas, and turning messy concepts into clean, reliable products.",
    location: "India",
    email: "ankitamanna2003@gmail.com",
    phone: "+91 94339 45463",
    photo: "/profile-placeholder.svg",
    resumeUrl: "/Ankita_Resume.pdf",
  },
  socialLinks: {
    github: "https://github.com/Ankitaa-Mannaa",
    linkedin: "https://www.linkedin.com/in/ankita-manna",
    twitter: "#",
    website: "#",
  },
  education: [
    {
      degree: "B.Tech CSE - AI",
      institute: "Jamia Hamdard University",
      year: "Graduation",
      details: "CGPA: 7.8",
    },
  ] as Education[],
  experience: [
    {
      role: "AI Full-Stack Developer",
      company: "Excellence Technologies Pvt. Ltd.",
      period: "July 2025 - Present",
      highlights: [
        "Building AI-powered applications with RAG architecture, LLMs, and vector databases.",
        "Developing multi-agent workflows with LangGraph and performance-focused prompt engineering.",
        "Engineering Flask REST APIs with JWT auth and React-based frontend experiences.",
      ],
    },
    {
      role: "Machine Learning Engineer Intern",
      company: "IIT Delhi",
      period: "Dec 2024 - Jun 2025",
      highlights: [
        "Worked on large-scale data analysis and cleaning workflows.",
        "Built advanced machine learning and deep learning models for time-series forecasting.",
        "Developed automation pipelines for web scraping tasks.",
      ],
    },
  ] as Experience[],
  skillCategories: [
    {
      title: "Programming Language",
      items: ["Python", "JavaScript", "PHP"],
    },
    {
      title: "Frontend Development",
      items: ["React", "Next.js"],
    },
    {
      title: "Backend Development",
      items: [
        "Node.js",
        "Express.js",
        "Django",
        "Flask",
        "FastAPI",
        "REST API Development",
      ],
    },
    {
      title: "Databases",
      items: [
        "MySQL",
        "PostgreSQL",
        "MongoDB",
        "Supabase",
        "Firebase",
        "Pinecone",
        "FAISS",
        "ChromaDB",
        "Weaviate",
      ],
    },
    {
      title: "AI / Machine Learning / GenAI",
      items: [
        "LangChain",
        "LangGraph",
        "LLM Integration & Fine-tuning",
        "RAG",
        "Vector Search & Embeddings",
        "Vertex AI",
        "Meta AI tools",
      ],
    },
    {
      title: "Integrations & Tools",
      items: [
        "Stripe",
        "PayPal APIs",
        "CopilotKit",
        "Firebase Authentication (Google & Facebook OAuth)",
      ],
    },
    {
      title: "Cloud & DevOps",
      items: [
        "AWS (EC2, Lambda)",
        "Cloudflare",
        "Azure (Container Apps, Container Registry, Azure CLI)",
        "Docker",
      ],
    },
  ] as SkillCategory[],
  projects: [
    {
      title: "Flock - Scalable Content Creation & Streaming Platform",
      description:
        "Built a scalable creator platform with role-based access, content publishing, social engagement, and monetization workflows.",
      techStack: [
        "Next.js",
        "React",
        "TypeScript",
        "Flask",
        "PostgreSQL",
        "Redis",
        "Stripe",
        "PayPal",
      ],
      liveUrl: "#",
      githubUrl: "https://github.com/Ankitaa-Mannaa",
    },
    {
      title: "Cuvaide Multi-Agent AI",
      description:
        "Developed a FastAPI + LangGraph multi-agent service for winery operations with LLM routing, secure integrations, and production-ready deployment support.",
      techStack: [
        "Python",
        "FastAPI",
        "LangGraph",
        "LiteLLM",
        "JWT",
        "Docker",
        "Azure",
      ],
      liveUrl: "#",
      githubUrl: "https://github.com/Ankitaa-Mannaa",
    },
    {
      title: "Verifisert - Automated Compliance & Quality Review",
      description:
        "Built an AI document-compliance platform that uses RAG and rule-based parsing to reduce manual review effort by around 60%.",
      techStack: [
        "FastAPI",
        "PostgreSQL",
        "SQLAlchemy",
        "AWS S3",
        "AWS Lambda",
        "Pinecone",
        "OpenAI",
        "Next.js",
      ],
      liveUrl: "#",
      githubUrl: "https://github.com/Ankitaa-Mannaa",
    },
  ] as Project[],
  seo: {
    siteTitle: "Ankita Manna | AI Full-Stack Developer",
    siteDescription:
      "Portfolio of Ankita Manna, an AI full-stack developer focused on LLM apps, RAG systems, and scalable web products.",
  },
};
