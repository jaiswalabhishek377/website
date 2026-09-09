export interface SiteConfig {
  name: string;
  title: string;
  bio: string;
  email: string;
  phone: string;
  github: string;
  linkedin: string;
  leetcode: string;
  location: string;
  university: string;
  degree: string;
  cgpa: string;
  graduationYear: string;
  avatar: string;
}

export const siteConfig: SiteConfig = {
  name: "Abhishek Jaiswal",
  title: "Full Stack & AI Engineer",
  bio: "I build real-time systems, AI/LLM pipelines, and scalable full-stack apps. Open-source contributor to YC-backed startups.",
  email: "jaiswalabhishek377@gmail.com",
  phone: "+91 8532021978",
  github: "jaiswalabhishek377",
  linkedin: "abhishekjaiswal377",
  leetcode: "ic5DzrEttY",
  location: "Bengaluru, Karnataka",
  university: "Visvesvaraya Technological University",
  degree: "Bachelor of Engineering in Computer Science and Engineering",
  cgpa: "8.79",
  graduationYear: "2023 – 2027",
  avatar: "/goku.jpg",
};

export interface NavLink {
  label: string;
  href: string;
}

export const navLinks: NavLink[] = [
  { label: "GitHub", href: "#github" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export interface Experience {
  role: string;
  company: string;
  period: string;
  description: string;
  tags: string[];
  logo?: string;
  link?: string;
  repoLink?: string;
}

export const experiences: Experience[] = [
  {
    role: "Open Source Contributor",
    company: "nao Labs (YC-X25)",
    period: "July 2026 – Present",
    description:
      "Engineered Drizzle ORM time-window aggregations across PostgreSQL & SQLite (PR #1542), built Markdown & BI story export pipelines with Vitest coverage (PR #1535), and standardized React 19 theme tokens across MCP chat integrations (Merged PR #1488).",
    tags: ["TypeScript", "React 19", "Drizzle ORM", "PostgreSQL", "Vitest"],
    logo: "/nao.png",
    link: "https://github.com/getnao/nao/pull/1488",
    repoLink: "https://github.com/getnao/nao",
  },
  {
    role: "Open Source Contributor",
    company: "GirlScript Summer of Code 2026",
    period: "2026",
    description:
      "Contributing to open source projects as part of GirlScript Summer of Code, India's premier open-source program.",
    tags: ["Open Source", "Community"],
    logo: "",
  },
];

export interface Project {
  name: string;
  description: string;
  tags: string[];
  liveUrl?: string;
  codeUrl?: string;
  image?: string;
  video?: string;
}

export const projects: Project[] = [
  {
    name: "Verba-AI",
    description:
      "Multi-tenant RAG platform with dual-threshold retrieval pipeline (0.45 relevance target, 0.41 bypass floor) reducing LLM token usage by 62% and Flexible document-scope toggle. Features custom PDF viewer with dynamic AI citation links and multi-model Gemini fallback chain.",
    tags: ["Next.js", "LangChain", "Pinecone", "Firebase", "TypeScript", "Gemini API"],
    codeUrl: "https://github.com/jaiswalabhishek377/second-brain",
    liveUrl: "https://second-brain-weld-eta.vercel.app/",
    image: "/projects/verba.png",
    video: "/projects/verbaworkflow.mp4",
  },
  {
    name: "CodeSync",
    description:
      "Real-time concurrent code collaboration platform with zero-data-loss consistency via CRDTs (Yjs) and Monaco Editor. Features Dockerized sandboxed code execution via Piston API and Prisma RBAC schema.",
    tags: ["React", "Node.js", "WebSockets", "PostgreSQL", "Yjs", "Docker"],
    codeUrl: "https://github.com/jaiswalabhishek377/CodeSync",
    image: "/projects/codesync.png",
  },
  {
    name: "Nexus",
    description:
      "Full-stack e-commerce platform storefront and admin dashboard integrating Stripe payment pipeline, dual-token JWT authentication with queue-locked Axios token renewal and real-time 7-day revenue analytics.",
    tags: ["React 19", "Node.js", "Express", "MongoDB", "Stripe API", "Zustand", "JWT"],
    codeUrl: "https://github.com/jaiswalabhishek377/nexus",
    liveUrl: "nexus-46hp.onrender.com/",
    image: "/projects/nexus.png",
  },
];

export interface Achievement {
  title: string;
  description: string;
}

export const achievements: Achievement[] = [
  {
    title: "LeetCode 1760+ Rating (Top 9% Globally)",
    description:
      "Attained 1738+ (peak 1761) rating on LeetCode, solved 800+ algorithmic problems across LeetCode, Codeforces and GFG using C++.",
  },
  {
    title: "Flipkart Grid 8.0 — Round 2 Qualifier",
    description:
      "Advanced to Round 2, selected among top 10% (16k) out of 165,730 candidates in National Level competition.",
  },
  {
    title: "LeetCode Biweekly Contest 188 — Rank 2201",
    description:
      "Secured Rank 2201 out of 42,000+ global participants. Runner-up at Techsprint Hackathon.",
  },
  {
    title: "Google Study Jams Tier 1",
    description:
      "Achieved Tier 1 status in Google Study Jams program and actively engaged in technical workshops through Google Developer Groups (GDG).",
  },
];

export interface PullRequest {
  title: string;
  number: number;
  repo: string;
  repoUrl: string;
  prUrl: string;
  date: string;
  status: "Merged" | "Open" | "Closed" | "Commit";
}

export interface OSSContribution {
  org: string;
  orgUrl: string;
  logo: string;
  count: number;
  prs: PullRequest[];
}

export const ossContributions: OSSContribution[] = [
  {
    org: "getnao",
    orgUrl: "https://github.com/getnao/nao",
    logo: "/nao.png",
    count: 3,
    prs: [
      {
        title: "fix(usage): use distinct colors for different message sources - #1488",
        number: 1488,
        repo: "nao",
        repoUrl: "https://github.com/getnao/nao",
        prUrl: "https://github.com/getnao/nao/pull/1488",
        date: "27 August · nao",
        status: "Merged",
      },
      {
        title: "feat(analytics): time-window aggregations in Drizzle ORM - #1542",
        number: 1542,
        repo: "nao",
        repoUrl: "https://github.com/getnao/nao",
        prUrl: "https://github.com/getnao/nao/pull/1542",
        date: "September · nao",
        status: "Commit",
      },
      {
        title: "feat(export): Markdown & BI story export pipeline with Vitest - #1535",
        number: 1535,
        repo: "nao",
        repoUrl: "https://github.com/getnao/nao",
        prUrl: "https://github.com/getnao/nao/pull/1535",
        date: "September · nao",
        status: "Commit",
      },
    ],
  },
];

export interface Skills {
  languages: string[];
  frontend: string[];
  backend: string[];
  ai: string[];
  cloud: string[];
  core: string[];
}

export const skills: Skills = {
  languages: ["C/C++", "JavaScript", "TypeScript", "Python"],
  frontend: ["React.js", "Next.js", "Tailwind CSS", "HTML5/CSS"],
  backend: ["Node.js", "Express.js", "PostgreSQL", "MongoDB", "Pinecone", "Firebase"],
  ai: ["LangChain", "Gemini API", "RAG Architecture", "Agentic Workflows"],
  cloud: ["Docker", "AWS", "GCP", "Git", "CI/CD", "REST APIs"],
  core: ["DSA", "OOP", "OS", "Computer Networks", "DBMS"],
};
