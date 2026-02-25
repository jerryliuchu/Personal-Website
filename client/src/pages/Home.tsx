import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowUpRight } from "lucide-react";
import cityscapeImg from "@assets/image_1768861733754.png";

// Resume Data
const WORK_EXPERIENCE = [
  {
    company: "Ti Lab at Berkeley",
    url: "https://tilabberkeley.com/research/",
    logoImage: "https://www.google.com/s2/favicons?domain=tilabberkeley.com&sz=128",
    role: "Undergraduate Researcher - Computational Biology",
    date: "Jan 2026 - Present",
    location: "Berkeley, CA",
    employmentType: "Part-Time",
    logo: "T",
    color: "bg-blue-600",
    bullets: [
      "Developed a Python-based algorithmic pipeline to automate the routing of DNA scaffold strands, successfully generating 15+ novel 3D nanostructures with varying geometries (cubes, tetrahedrons) with 78% yield while minimizing thermodynamic instability.",
      "Simulated folding pathways for DNA origami structures containing over 10,000 nucleotides, achieving a 94% prediction accuracy against experimental atomic force microscopy (AFM) results.",
      "Designed and rapid-prototyped custom experimental apparatuses (e.g., gel electrophoresis combs, centrifuge adapters) using Fusion 360, reducing lab equipment costs by approximately $3,000 compared to commercial alternatives."
    ]
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
    bullets: [
      "Contributed to core Berkeleytime platform, a campus-wide course enrollment tool used by 20,000+ students each semester.",
      "Built and maintained full-stack features using React, TypeScript, Express.js, and MongoDB, refactoring legacy frontend pages and backend APIs into modular, scalable components.",
      "Enhanced the Scheduler tool with historical grade distributions and enrollment trend visualizations, increasing student adoption by 26% and improving course planning accuracy.",
      "Optimized performance by implementing caching, restructuring frontend state management, and optimizing database queries, boosting frontend load speed by 26% and reducing backend latency by 41%."
    ]
  },
  {
    company: "Sports Analytics Group @ Berkeley",
    url: "https://sportsanalytics.studentorg.berkeley.edu/projects.html",
    logoImage: `${import.meta.env.BASE_URL}logos/sagb-logo.png`,
    role: "Data Scientist",
    date: "Aug 2025 - Dec 2025",
    location: "Berkeley, CA",
    employmentType: "Part-Time",
    logo: "S",
    color: "bg-amber-600",
    bullets: [
      "Executed a full data pipeline from SwingVision video analysis to structured CSV format via custom Python scripts.",
      "Conducted EDA and built statistical correlation models on real-time Cal Tennis data to isolate predictive features for successful tennis swings, such as court heatmaps and ball/swing speed, achieving 88% accuracy in classification.",
      "Developed a Gradient Boosting Classifier to predict the success of international WNBA prospects, achieving an F1-score of 0.82, validating the model with 5-fold cross-validation to directly inform draft decisions for the Minnesota Lynx WNBA team."
    ]
  },
  {
    company: "Anchor Logics",
    url: "https://www.anchorlogics.com/",
    logoImage: `${import.meta.env.BASE_URL}logos/anchor-logics-logo.png`,
    role: "Full Stack Engineering Internship",
    date: "May 2025 - Aug 2025",
    location: "Berkeley, CA, USA",
    employmentType: "Internship",
    logo: "A",
    color: "bg-purple-600",
    bullets: [
      "Developed a patient-facing Single-page Application (React/Redux on Node.js) for 300+ patients to securely access and visualize personalized medical wearable data; achieved 25% reduction in data retrieval requests.",
      "Engineered a high-conversion demo request page using TypeScript and Next.js, using form validation, API endpoint design, and integration with a CRM system (Salesforce) to streamline the sales pipeline.",
      "Operationalized the OpenPose ML model for real-time gait detection using a full-stack AWS architecture (S3) to determine optimal stimuli weight placements for PIEZO2, the company's medical wearable vest product."
    ]
  }
];

const PROJECTS = [
  {
    name: "Project Alpha",
    role: "Creator",
    date: "2025",
    description: "A cool project description goes here.",
    logo: "P",
    color: "bg-purple-600"
  },
  {
    name: "Beta App",
    role: "Lead Developer",
    date: "2024",
    description: "Another amazing project.",
    logo: "B",
    color: "bg-orange-600"
  }
];

const ACTIVITIES = [
  {
    name: "Hackathon Organizer",
    role: "Director",
    date: "2023 - 2025",
    logo: "H",
    color: "bg-pink-600"
  },
  {
    name: "Computer Science Club",
    role: "Member",
    date: "2022 - Present",
    logo: "CS",
    color: "bg-indigo-600"
  }
];

const WorkExperienceItem = ({ item }: { item: (typeof WORK_EXPERIENCE)[0] }) => {
  const [logoSrc, setLogoSrc] = React.useState<string | null>(item.logoImage ?? null);
  return (
  <motion.article
    initial={{ opacity: 0, y: 10 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ type: "spring", stiffness: 300 }}
    className="mb-10 last:mb-0"
  >
    <div className="flex gap-4">
      <div className={`shrink-0 w-10 h-10 rounded-md flex items-center justify-center text-white font-bold text-sm shadow-sm overflow-hidden ${logoSrc ? "bg-muted/50 p-0.5" : item.color || "bg-gray-800"}`}>
        {logoSrc ? (
          <img
            src={logoSrc}
            alt=""
            className="w-full h-full object-contain rounded-[6px]"
            onError={() => setLogoSrc(null)}
          />
        ) : (
          item.logo
        )}
      </div>
      <div className="flex-1 min-w-0">
        <h3 className="font-semibold text-foreground">{item.role}</h3>
        <p className="text-foreground/90 font-medium">
          {item.url ? (
            <a href={item.url} target="_blank" rel="noopener noreferrer" className="hover:text-primary underline underline-offset-2 transition-colors">
              {item.company}
            </a>
          ) : (
            item.company
          )}
        </p>
        <p className="text-sm text-muted-foreground mt-1">
          {[item.location, item.date, item.employmentType].filter(Boolean).join(" · ")}
        </p>
        {item.bullets && item.bullets.length > 0 && (
          <ul className="mt-4 space-y-2 list-disc list-inside text-sm text-muted-foreground">
            {item.bullets.map((bullet, i) => (
              <li key={i} className="leading-relaxed">{bullet}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  </motion.article>
  );
};

const ListItem = ({ item }: { item: any }) => (
  <motion.div 
    initial={{ opacity: 0, y: 10 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    whileHover={{ x: 5 }}
    transition={{ type: "spring", stiffness: 300 }}
    className="group flex items-center justify-between p-4 mb-2 hover:bg-muted/50 dark:hover:bg-muted/30 rounded-lg cursor-pointer transition-colors border border-transparent hover:border-border"
  >
    <div className="flex items-center gap-4">
      <div className={`w-10 h-10 rounded-md flex items-center justify-center text-white font-bold text-sm shadow-sm ${item.color || 'bg-gray-800'}`}>
        {item.logo}
      </div>
      <div>
        <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors flex items-center gap-2">
          {item.company || item.name}
        </h3>
        <p className="text-sm text-muted-foreground">{item.role}</p>
      </div>
    </div>
    <div className="flex items-center gap-4">
      <span className="text-sm text-muted-foreground font-mono">{item.date}</span>
      <ArrowUpRight className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
    </div>
  </motion.div>
);

export default function Home() {
  return (
    <div className="min-h-screen bg-background relative selection:bg-primary/20">
      
      {/* Background Cityscape */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <img 
          src={cityscapeImg} 
          alt="Cityscape" 
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/60 to-background" />
      </div>

      <div className="max-w-5xl mx-auto px-6 py-12 relative z-10">
        {/* Header */}
        <header className="flex justify-between items-center mb-24">
          <h1 className="font-bold text-lg tracking-tight">Jerry Chu</h1>
          <nav className="flex items-center gap-6">
            <a href="#education" className="text-sm font-medium hover:text-primary/70 transition-colors">Education</a>
            <a href="#work" className="text-sm font-medium hover:text-primary/70 transition-colors">Work</a>
            <a href="#projects" className="text-sm font-medium hover:text-primary/70 transition-colors">Projects</a>
            <a href="#activities" className="text-sm font-medium hover:text-primary/70 transition-colors">Activities</a>
          </nav>
        </header>

        {/* Hero */}
        <section className="mb-32 max-w-2xl">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-6 leading-tight"
          >
            Software Engineer and Data Scientist at UC Berkeley.
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-muted-foreground mb-8"
          >
            Building high-quality web experiences and exploring the intersection of design and engineering.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex gap-4"
          >
            <a href="mailto:jerry_chu@berkeley.edu" className="p-2 hover:bg-muted rounded-full transition-colors" aria-label="Email">
              <Mail className="w-5 h-5" />
            </a>
            <a href="https://www.linkedin.com/in/jerry-chu-33b776253" target="_blank" rel="noopener noreferrer" className="p-2 hover:bg-muted rounded-full transition-colors" aria-label="LinkedIn">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="https://github.com/jerryliuchu" target="_blank" rel="noopener noreferrer" className="p-2 hover:bg-muted rounded-full transition-colors" aria-label="GitHub">
              <Github className="w-5 h-5" />
            </a>
          </motion.div>
        </section>

        {/* Stacked Layout for Content */}
        <div className="flex flex-col gap-24">
          {/* Education */}
          <section id="education">
            <h2 className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-8">Education</h2>
            <motion.article
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 300 }}
              className="flex gap-4 items-center"
            >
              <div className="shrink-0 w-10 h-10 rounded-md flex items-center justify-center overflow-hidden bg-muted/50 p-0.5">
                <img
                  src="https://www.google.com/s2/favicons?domain=berkeley.edu&sz=128"
                  alt=""
                  className="w-full h-full object-contain rounded-[6px]"
                />
              </div>
              <div>
                <p className="font-semibold text-foreground">Computer Science and Data Science BA @ UC Berkeley</p>
              </div>
            </motion.article>
          </section>

          {/* Work Experience */}
          <section id="work">
            <h2 className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-8">Work Experience</h2>
            <div className="flex flex-col">
              {WORK_EXPERIENCE.map((item, index) => (
                <WorkExperienceItem key={index} item={item} />
              ))}
            </div>
          </section>

          {/* Projects */}
          <section id="projects">
            <h2 className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-8">Projects</h2>
            <div className="flex flex-col">
              {PROJECTS.map((item, index) => (
                <ListItem key={index} item={item} />
              ))}
            </div>
          </section>

          {/* Activities */}
          <section id="activities">
            <h2 className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-8">Activities</h2>
            <div className="flex flex-col">
              {ACTIVITIES.map((item, index) => (
                <ListItem key={index} item={item} />
              ))}
            </div>
          </section>
        </div>

        {/* Footer */}
        <footer className="mt-32 pt-8 border-t border-border flex justify-between text-sm text-muted-foreground">
          <p>© 2026 Jerry Chu</p>
        </footer>
      </div>
    </div>
  );
}
