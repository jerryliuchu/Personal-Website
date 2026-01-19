import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowUpRight } from "lucide-react";
import cityscapeImg from "@assets/image_1768861733754.png";

// Resume Data
const WORK_EXPERIENCE = [
  {
    company: "Company Name Placeholder",
    role: "Software Engineer Intern",
    date: "Summer 2025",
    logo: "C", // Placeholder letter if no logo
    color: "bg-blue-600"
  },
  {
    company: "Another Tech Co",
    role: "Full Stack Developer",
    date: "Jan 2024 - Present",
    logo: "A",
    color: "bg-emerald-600"
  },
  // Add more as needed based on user's actual resume if they provided it,
  // but they only provided contact info, so I'll leave placeholders or generic structure.
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
            Software Engineer based in Berkeley.
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
          {/* Work Experience */}
          <section id="work">
            <h2 className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-8">Work Experience</h2>
            <div className="flex flex-col">
              {WORK_EXPERIENCE.map((item, index) => (
                <ListItem key={index} item={item} />
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
          <p>Designed with Replit</p>
        </footer>
      </div>
    </div>
  );
}
