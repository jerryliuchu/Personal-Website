// ============================================================================
// Scripted chat "assistant" — keyword/intent matching over resume data.
// No backend, no API key. Every answer is grounded in data/resume.ts.
// ============================================================================

import {
  PROFILE,
  WORK_EXPERIENCE,
  PROJECTS,
  SKILLS,
  EDUCATION,
} from "@/data/resume";

export interface ChatReply {
  text: string;
  suggestions?: string[];
}

interface Intent {
  name: string;
  // Weighted keywords; more/《longer》matches win.
  keywords: string[];
  respond: (input: string) => ChatReply;
}

const DEFAULT_SUGGESTIONS = [
  "Tell me about your experience",
  "What are your skills?",
  "Show me your projects",
  "Why should we hire you?",
  "How can I contact you?",
];

function normalize(s: string): string {
  return s.toLowerCase().replace(/[^a-z0-9\s]/g, " ").replace(/\s+/g, " ").trim();
}

// ---- Intent handlers --------------------------------------------------------

function experienceReply(input: string): ChatReply {
  // Deep-dive if a specific company is named.
  const match = WORK_EXPERIENCE.find((w) => {
    const c = normalize(w.company);
    return (
      input.includes(c) ||
      c.split(" ").some((tok) => tok.length > 3 && input.includes(tok)) ||
      (w.company.includes("SLB") && input.includes("slb")) ||
      (w.company.includes("Ti Lab") && input.includes("ti lab")) ||
      (w.company.includes("Anchor") && input.includes("anchor"))
    );
  });

  if (match) {
    return {
      text:
        `**${match.role} @ ${match.company}** (${match.date})\n\n` +
        match.bullets.map((b) => `• ${b}`).join("\n"),
      suggestions: ["Other roles", "What are your skills?", "How can I contact you?"],
    };
  }

  const list = WORK_EXPERIENCE.map(
    (w) => `• **${w.company}** — ${w.role} (${w.date})\n   ${w.summary}`,
  ).join("\n\n");
  return {
    text: `Here's where ${PROFILE.firstName} has worked:\n\n${list}\n\nAsk about any one for details.`,
    suggestions: ["Tell me about SLB", "Tell me about Ti Lab", "Show me your projects"],
  };
}

function skillsReply(): ChatReply {
  const list = SKILLS.map((g) => `**${g.category}:** ${g.items.join(", ")}`).join("\n\n");
  return {
    text: `${PROFILE.firstName}'s toolkit:\n\n${list}`,
    suggestions: ["Show me your projects", "Tell me about your experience", "Why should we hire you?"],
  };
}

function projectsReply(): ChatReply {
  const list = PROJECTS.map((p) => `${p.emoji} **${p.name}** — ${p.tagline}\n   ${p.description}`).join(
    "\n\n",
  );
  return {
    text: `A few projects:\n\n${list}`,
    suggestions: ["What are your skills?", "How can I contact you?"],
  };
}

function educationReply(): ChatReply {
  return {
    text:
      `${PROFILE.firstName} is pursuing a dual **${EDUCATION.degree}** at **${EDUCATION.school}** ` +
      `(GPA **${EDUCATION.gpa}**, ${EDUCATION.gradYear}).\n\n` +
      `Relevant coursework includes ${EDUCATION.coursework.slice(0, 4).join(", ")}, and more.`,
    suggestions: ["Tell me about your experience", "What are your skills?"],
  };
}

function contactReply(): ChatReply {
  return {
    text:
      `You can reach ${PROFILE.firstName} at:\n\n` +
      `• Email: ${PROFILE.email}\n` +
      `• LinkedIn: ${PROFILE.linkedin}\n` +
      `• GitHub: ${PROFILE.github}\n\n` +
      `You can also grab his résumé from the buttons on the page. He's open to internship opportunities.`,
    suggestions: ["Why should we hire you?", "Show me your projects"],
  };
}

function hireReply(): ChatReply {
  return {
    text:
      `Great question! A few highlights:\n\n` +
      `• At **SLB**, built agentic AI tooling that cut slide creation from **2+ hours to under 3 minutes** and a platform adopted by **40+ engineers**, eliminating ~**120 hours/quarter** of manual work.\n` +
      `• Contributed full-stack features to **BerkeleyTime**, used by **20,000+ students** each semester.\n` +
      `• Automated **DNA origami** design in research, hitting **94%** folding-prediction accuracy on 10,000+ nucleotide structures.\n` +
      `• Dual **Data Science & CS** at Berkeley (**3.93 GPA**), fluent across **React/TypeScript**, **Python/ML**, and **Golang**.\n\n` +
      `In short: he ships polished, high-impact work across the stack.`,
    suggestions: ["How can I contact you?", "Show me your projects", "What are your skills?"],
  };
}

function aboutReply(): ChatReply {
  return {
    text: `${PROFILE.bio}`,
    suggestions: DEFAULT_SUGGESTIONS.slice(0, 3),
  };
}

function greetingReply(): ChatReply {
  return {
    text: `Hi! I'm ${PROFILE.firstName}'s assistant 🤖 — ask me anything about his experience, skills, or projects.`,
    suggestions: DEFAULT_SUGGESTIONS,
  };
}

// ---- Intent registry (order matters for tie-breaks) -------------------------

const INTENTS: Intent[] = [
  {
    name: "greeting",
    keywords: ["hi", "hello", "hey", "yo", "sup", "greetings", "howdy"],
    respond: greetingReply,
  },
  {
    name: "hire",
    keywords: ["hire", "why should", "recruit", "candidate", "fit", "value", "strength", "best"],
    respond: hireReply,
  },
  {
    name: "experience",
    keywords: [
      "experience", "work", "job", "internship", "intern", "role", "career", "slb",
      "anchor", "ti lab", "tilab", "research", "employ",
    ],
    respond: (i) => experienceReply(i),
  },
  {
    name: "skills",
    keywords: ["skill", "tech", "stack", "language", "framework", "tool", "know", "python", "react", "code", "ml", "data"],
    respond: skillsReply,
  },
  {
    name: "projects",
    keywords: [
      "project", "build", "built", "portfolio", "side", "github repo", "made",
      "berkeleytime", "tennis", "swingvision", "encryption", "security", "golang", "file storage",
    ],
    respond: projectsReply,
  },
  {
    name: "education",
    keywords: ["education", "school", "study", "studying", "major", "degree", "college", "university", "berkeley", "gpa", "class"],
    respond: educationReply,
  },
  {
    name: "contact",
    keywords: ["contact", "email", "reach", "linkedin", "github", "resume", "cv", "connect", "hire you", "message", "talk"],
    respond: contactReply,
  },
  {
    name: "about",
    keywords: ["who", "about", "yourself", "bio", "jerry", "background", "tell me about you"],
    respond: aboutReply,
  },
];

function scoreIntent(intent: Intent, input: string): number {
  let score = 0;
  for (const kw of intent.keywords) {
    if (input.includes(kw)) score += kw.includes(" ") ? 3 : kw.length > 5 ? 2 : 1;
  }
  return score;
}

export function getReply(rawInput: string): ChatReply {
  const input = normalize(rawInput);
  if (!input) {
    return { text: "Try asking me something!", suggestions: DEFAULT_SUGGESTIONS };
  }

  let best: Intent | null = null;
  let bestScore = 0;
  for (const intent of INTENTS) {
    const s = scoreIntent(intent, input);
    if (s > bestScore) {
      bestScore = s;
      best = intent;
    }
  }

  if (best && bestScore > 0) return best.respond(input);

  // Graceful fallback with suggestion chips.
  return {
    text: `I'm not sure about that one — I'm a simple assistant! Try one of these:`,
    suggestions: DEFAULT_SUGGESTIONS,
  };
}

export const INITIAL_SUGGESTIONS = DEFAULT_SUGGESTIONS;
