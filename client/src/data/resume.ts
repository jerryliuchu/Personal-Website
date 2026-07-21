// ============================================================================
// Single source of truth for all site content.
// Sections AND the chatbot read from here, so keep everything in one place.
// ============================================================================

// Public assets (logos, resume PDF) live in client/public/.
// Use BASE_URL so paths resolve on GitHub Pages (/Personal-Website/).
const PUBLIC_BASE = import.meta.env.BASE_URL.replace(/\/?$/, "/");
const LOGOS_BASE = `${PUBLIC_BASE}logos`;

export const PROFILE = {
  name: "Jerry Chu",
  firstName: "Jerry",
  role: "Software Engineer & Data Scientist",
  tagline: "Software Engineer & Data Scientist",
  location: "Berkeley, CA",
  email: "jerry_chu@berkeley.edu",
  linkedin: "https://www.linkedin.com/in/jerry-chu-33b776253",
  github: "https://github.com/jerryliuchu",
  // Drop the PDF at client/public/Jerry-Chu-Resume.pdf to enable the download link.
  resumeUrl: `${PUBLIC_BASE}Jerry-Chu-Resume.pdf`,
  // Drop a headshot at client/public/profile.jpg (a portrait/square photo works best).
  photoUrl: `${PUBLIC_BASE}profile.png`,
  // A short, personal blurb shown under the photo — edit freely.
  personalNote:
    "Outside of class, you'll find me at the gym either lifting weights, playing basketball, or bouldering. If I'm not exercising, I'm probably on a walk listening to Christian worship music while scouting out cafes only to get distracted looking for good deals at a local thrift store!",
  // A short, human bio used in the About section + chatbot.
  bio: "I'm a Data Science & Computer Science student at UC Berkeley who loves building at the intersection of engineering and data — from agentic AI tooling and full-stack platforms to computational-biology research. I care about shipping polished, high-impact software.",
  // Shown in the About section — edit freely.
  interests: [
    "Agentic AI & LLMs",
    "Full-Stack Development",
    "Machine Learning",
    "Cloud & Distributed Systems",
    "System Design",
    "Data Engineering",
    "Developer Tooling",
    "Open Source",
  ],
  // Headline metrics for the animated stat row. `decimals` is optional.
  stats: [
    { value: 3.93, suffix: "", decimals: 2, label: "GPA at UC Berkeley" },
    { value: 20000, suffix: "+", label: "Students reached via BerkeleyTime" },
    { value: 94, suffix: "%", label: "ML folding-prediction accuracy" },
    { value: 120, suffix: "+", label: "Hours/quarter of manual work eliminated" },
  ] as { value: number; suffix: string; decimals?: number; label: string }[],
} as const;

// ----------------------------------------------------------------------------
// Education
// ----------------------------------------------------------------------------
export const EDUCATION = {
  school: "University of California, Berkeley",
  degree: "B.A. Data Science & B.A. Computer Science",
  gpa: "3.93",
  gradYear: "Expected May 2028",
  logoImage: `${LOGOS_BASE}/ucb-seal.png`,
  coursework: [
    "Computer Security",
    "Efficient Algorithms & Intractable Problems",
    "Data Structures",
    "Principles & Techniques of Data Science",
    "Computer Architecture / Machine Structures",
    "Discrete Math & Probability Theory",
  ],
} as const;

// ----------------------------------------------------------------------------
// Work experience (real data)
// ----------------------------------------------------------------------------
export interface WorkExperience {
  company: string;
  url?: string;
  logoImage?: string;
  role: string;
  date: string;
  location: string;
  employmentType: string;
  logo: string;
  color: string;
  logoBg?: string; // fixed tile bg for the logo image (theme-independent contrast)
  summary: string; // short one-liner for the chatbot
  bullets: string[];
}

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: "SLB",
    url: "https://www.slb.com/",
    logoImage: "https://www.google.com/s2/favicons?domain=slb.com&sz=128",
    role: "Digital Technologies Intern — Full Stack Development",
    date: "Jun 2026 - Present",
    location: "Sunnyvale, CA",
    employmentType: "Internship",
    logo: "S",
    color: "bg-blue-700",
    summary: "Full-stack + agentic AI tooling that automates internal workflows.",
    bullets: [
      "Built an agentic AI pipeline (OpenAI Agents SDK, GPT-5.4) with structured JSON output and multi-modal feedback loops to generate and refine slides, cutting slide creation from 2+ hours to under 3 minutes.",
      "Developed a Widget Factory (Pydantic v2, Jinja2, YAML) that mines agentic session traces into reusable interactive templates, reducing template dev from 5 days to a single CLI command (~$0.12/widget).",
      "Shipped a full-stack platform (Streamlit, FastAPI/WebSocket, SQLite, Playwright) with browser-editable exports; adopted by 4 teams (40+ engineers), eliminating ~120 hours/quarter of manual PowerPoint work.",
    ],
  },
  {
    company: "Ti Lab at Berkeley",
    url: "https://tilabberkeley.com/research/",
    logoImage: "https://www.google.com/s2/favicons?domain=tilabberkeley.com&sz=128",
    role: "UC Berkeley EECS Undergraduate Researcher",
    date: "Jan 2026 - Present",
    location: "Berkeley, CA",
    employmentType: "Part-Time",
    logo: "T",
    color: "bg-sky-600",
    summary: "Computational-biology research automating DNA origami design.",
    bullets: [
      "Built a Python pipeline to automate DNA scaffold strand routing, engineering 15+ novel 3D geometries at 78% thermodynamic yield.",
      "Applied PyTorch/TensorFlow models to optimize one-pot reaction conditions, predicting non-interacting DNA bond sets to prevent misfolding in 10,000+ nucleotide structures at 94% accuracy.",
      "Built a React/Node.js full-stack dashboard visualizing 3D nanostructure simulations for a team of 10+ researchers.",
    ],
  },
  {
    company: "BerkeleyTime",
    url: "http://berkeleytime.com",
    logoImage: "https://www.google.com/s2/favicons?domain=berkeleytime.com&sz=128",
    role: "Full Stack Engineer",
    date: "Aug 2025 - Feb 2026",
    location: "Berkeley, CA",
    employmentType: "Part-Time",
    logo: "B",
    color: "bg-emerald-600",
    summary: "Full-stack engineer on a course tool used by 20,000+ students.",
    bullets: [
      "Contributed to the open-source UC Berkeley course enrollment tool used by 20,000+ students each semester.",
      "Built and maintained a full-stack staff dashboard used by 30+ staff members to manage logistics, refactoring legacy pages and APIs into modular, scalable components.",
      "Enhanced the beta Course Scheduler with historical grade distributions, enrollment trends, and four-year plan visualizations.",
    ],
  },
  {
    company: "Sports Analytics Group @ Berkeley",
    url: "https://sportsanalytics.studentorg.berkeley.edu/projects.html",
    logoImage: `${LOGOS_BASE}/sagb-logo.png`,
    role: "Data Scientist",
    date: "Aug 2025 - Dec 2025",
    location: "Berkeley, CA",
    employmentType: "Part-Time",
    logo: "S",
    color: "bg-amber-600",
    logoBg: "bg-[#003262]", // white bear logo — needs a dark tile in both themes
    summary: "Data science for Cal Men's Tennis using SwingVision analytics.",
    bullets: [
      "Executed a full data pipeline from SwingVision video analysis to structured CSV format via custom Python scripts.",
      "Conducted EDA and built statistical correlation models on real-time Cal Tennis data to isolate predictive swing features such as court heatmaps and ball/swing speed, achieving 88% classification accuracy.",
      "Translated feature importance into performance heuristics to optimize Cal Tennis players' shot selection.",
    ],
  },
  {
    company: "Anchor Logics",
    url: "https://www.anchorlogics.com/",
    logoImage: `${LOGOS_BASE}/anchor-logics-logo.png`,
    role: "Software Engineering Intern",
    date: "May 2025 - Aug 2025",
    location: "Berkeley, CA",
    employmentType: "Internship",
    logo: "A",
    color: "bg-purple-600",
    logoBg: "bg-white", // blue-on-white logo — needs a light tile in both themes
    summary: "Full-stack + ML internship on a medical wearable product.",
    bullets: [
      "Shipped a patient-facing Single-page Application (React/Redux, Node.js) for 300+ patients to securely access and visualize wearable medical data, cutting data retrieval requests 25%.",
      "Engineered a demo request page (TypeScript, Next.js) with form validation and Salesforce CRM integration to streamline the sales pipeline.",
      "Operationalized the OpenPose ML model for real-time gait detection on AWS (S3) to optimize stimuli weight placement for the company's PIEZO2 medical wearable weighted vest.",
    ],
  },
];

// ----------------------------------------------------------------------------
// Projects (real). url/repo left undefined until links are provided.
// ----------------------------------------------------------------------------
export interface Project {
  name: string;
  tagline: string;
  description: string;
  role: string;
  date: string;
  tags: string[];
  url?: string;
  repo?: string;
  accent: string; // tailwind gradient stops, e.g. "from-amber-500 to-orange-600"
  emoji: string;
}

export const PROJECTS: Project[] = [
  {
    name: "BerkeleyTime",
    tagline: "Course tool used by 20,000+ students/semester",
    description:
      "Contributed to the open-source UC Berkeley course enrollment tool, building a full-stack staff dashboard for 30+ staff and enhancing the beta Course Scheduler with historical grade distributions, enrollment trends, and four-year plan visualizations.",
    role: "Full Stack Engineer",
    date: "2025",
    tags: ["React", "TypeScript", "MongoDB", "Docker", "GraphQL"],
    accent: "from-emerald-500 to-teal-600",
    emoji: "📊",
  },
  {
    name: "Encrypted File Storage Client",
    tagline: "End-to-end encryption over an untrusted datastore",
    description:
      "Designed E2E-encrypted file sharing over an untrusted, active-adversary datastore. Implemented Encrypt-then-MAC (AES-CTR + HMAC-SHA512) for IND-CCA2 security, plus capability-based access control (RSA-OAEP key exchange, RSA-PSS signatures) for multi-user sharing and secure revocation.",
    role: "Creator",
    date: "2025",
    tags: ["Golang", "Cryptography", "Security"],
    accent: "from-indigo-500 to-violet-600",
    emoji: "🔐",
  },
  {
    name: "Cal Men's Tennis Analytics",
    tagline: "SwingVision prediction model at 88% accuracy",
    description:
      "Built a data pipeline from SwingVision video to structured CSV, then modeled predictive swing features (court heatmaps, ball/swing speed) at 88% classification accuracy — translating feature importance into performance heuristics to optimize Cal Tennis players' shot selection.",
    role: "Data Scientist",
    date: "2025",
    tags: ["Python", "TensorFlow", "Pandas", "Seaborn"],
    accent: "from-amber-500 to-orange-600",
    emoji: "🎾",
  },
  {
    name: "This Portfolio",
    tagline: "Bold, motion-driven personal site",
    description:
      "The site you're on — a React + TypeScript + Vite portfolio with scroll-driven motion, a light/dark theme, and a scripted chat assistant. Deployed statically on GitHub Pages.",
    role: "Creator",
    date: "2026",
    tags: ["React", "TypeScript", "Framer Motion", "Tailwind"],
    accent: "from-fuchsia-500 to-purple-600",
    emoji: "✨",
  },
];

// ----------------------------------------------------------------------------
// Skills (grouped)
// ----------------------------------------------------------------------------
export interface SkillGroup {
  category: string;
  items: string[];
}

export const SKILLS: SkillGroup[] = [
  {
    category: "Languages",
    items: ["Java", "Python", "JavaScript", "TypeScript", "C/C++", "Golang", "SQL", "HTML/CSS", "x86"],
  },
  {
    category: "Frameworks & Web",
    items: ["React", "Node.js", "GraphQL", "Next.js", "Redux", "FastAPI"],
  },
  {
    category: "Data & Infra",
    items: ["MongoDB", "Docker", "AWS", "Tableau", "PyTorch", "TensorFlow"],
  },
  {
    category: "Tools",
    items: ["Git", "VS Code", "Cursor", "Claude", "Autodesk Fusion", "Cura", "CAD"],
  },
  {
    category: "Spoken Languages",
    items: ["English", "Chinese", "Japanese"],
  },
];
