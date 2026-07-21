import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowUpRight, FileText } from "lucide-react";
import { fadeUp, viewportOnce } from "@/lib/motion";
import { PROFILE } from "@/data/resume";

export function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-6xl scroll-mt-24 px-6 py-24 md:py-32">
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="relative overflow-hidden rounded-3xl border border-border/70 bg-card/50 p-10 text-center backdrop-blur md:p-16"
      >
        <div className="pointer-events-none absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-accent/20 blur-[100px]" />
        <div className="relative">
          <p className="mb-3 font-mono text-sm text-accent">05 — Contact</p>
          <h2 className="font-display text-4xl font-bold tracking-tight md:text-6xl">
            Let's build something.
          </h2>
          <p className="mx-auto mt-5 max-w-md text-muted-foreground">
            I'm open to internship opportunities. The fastest way to reach me is email —
            or say hi to the chat assistant in the corner.
          </p>

          <a
            href={`mailto:${PROFILE.email}`}
            className="group mt-8 inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 font-semibold text-accent-foreground transition-transform hover:scale-[1.03] accent-glow"
          >
            <Mail className="h-5 w-5" />
            {PROFILE.email}
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>

          <div className="mt-8 flex items-center justify-center gap-2">
            <a
              href={PROFILE.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Download résumé"
              className="inline-flex items-center gap-2 rounded-full border border-border/70 px-4 py-3 text-sm font-semibold text-muted-foreground transition-colors hover:border-accent hover:text-accent"
            >
              <FileText className="h-5 w-5" /> Résumé
            </a>
            <a
              href={PROFILE.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="rounded-full border border-border/70 p-3 text-muted-foreground transition-colors hover:border-accent hover:text-accent"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href={PROFILE.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="rounded-full border border-border/70 p-3 text-muted-foreground transition-colors hover:border-accent hover:text-accent"
            >
              <Github className="h-5 w-5" />
            </a>
          </div>
        </div>
      </motion.div>

      <footer className="mt-16 flex flex-col items-center justify-between gap-2 border-t border-border/60 pt-8 text-sm text-muted-foreground sm:flex-row">
        <p>© {2026} {PROFILE.name}</p>
        <p className="font-mono">Built with React · Vite · Framer Motion</p>
      </footer>
    </section>
  );
}
