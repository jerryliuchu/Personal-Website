import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";
import { PROJECTS, type Project } from "@/data/resume";

function ProjectCard({ project }: { project: Project }) {
  const cardRef = useRef<HTMLDivElement>(null);
  // Pointer-driven 3D tilt.
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rotateX = useSpring(useTransform(my, [-0.5, 0.5], [7, -7]), { stiffness: 250, damping: 20 });
  const rotateY = useSpring(useTransform(mx, [-0.5, 0.5], [-7, 7]), { stiffness: 250, damping: 20 });

  const handleMove = (e: React.MouseEvent) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    mx.set((e.clientX - rect.left) / rect.width - 0.5);
    my.set((e.clientY - rect.top) / rect.height - 0.5);
  };
  const handleLeave = () => {
    mx.set(0);
    my.set(0);
  };

  return (
    <motion.div variants={fadeUp} style={{ perspective: 1000 }}>
      <motion.div
        ref={cardRef}
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="group relative h-full overflow-hidden rounded-3xl border border-border/70 bg-card/60 p-7 backdrop-blur transition-colors hover:border-accent/50"
      >
        {/* Accent gradient wash */}
        <div
          className={`pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-gradient-to-br ${project.accent} opacity-20 blur-2xl transition-opacity duration-500 group-hover:opacity-40`}
        />

        <div className="relative flex h-full flex-col">
          <div className="mb-5 flex items-start justify-between">
            <div
              className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${project.accent} text-2xl shadow-lg`}
            >
              {project.emoji}
            </div>
            <span className="font-mono text-xs text-muted-foreground">{project.date}</span>
          </div>

          <h3 className="font-display text-2xl font-bold tracking-tight">{project.name}</h3>
          <p className="mt-1 text-sm font-medium text-accent">{project.tagline}</p>
          <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
            {project.description}
          </p>

          <div className="mt-5 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-border/70 bg-background/60 px-2.5 py-1 font-mono text-xs text-muted-foreground"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="mt-6 flex items-center gap-4">
            {project.url && (
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-sm font-semibold text-foreground transition-colors hover:text-accent"
              >
                Live <ArrowUpRight className="h-4 w-4" />
              </a>
            )}
            {project.repo && (
              <a
                href={project.repo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-sm font-semibold text-muted-foreground transition-colors hover:text-accent"
              >
                <Github className="h-4 w-4" /> Code
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl scroll-mt-24 px-6 py-24 md:py-32">
      <SectionHeading
        index="03"
        title="Projects"
        subtitle="A few things I've built. More on GitHub."
      />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="grid gap-6 md:grid-cols-2"
      >
        {PROJECTS.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </motion.div>
    </section>
  );
}
