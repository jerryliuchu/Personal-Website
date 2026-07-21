import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Github, Linkedin, Mail, ArrowDown, MapPin, FileText } from "lucide-react";
import cityscapeImg from "@assets/image_1768861733754.png";
import { PROFILE } from "@/data/resume";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Parallax: background drifts slower than the page, text fades as you scroll.
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "35%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section
      ref={ref}
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden"
    >
      {/* Parallax cityscape + grid backdrop */}
      <motion.div style={{ y: bgY }} className="pointer-events-none absolute inset-0 z-0">
        <img
          src={cityscapeImg}
          alt=""
          className="h-full w-full object-cover opacity-20 dark:opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/70 to-background" />
        <div className="bg-grid absolute inset-0 opacity-60" />
        {/* Accent glow */}
        <div className="absolute -top-40 left-1/2 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-accent/20 blur-[120px]" />
      </motion.div>

      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative z-10 mx-auto w-full max-w-6xl px-6 pt-28"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-border/70 bg-background/50 px-4 py-1.5 text-sm text-muted-foreground backdrop-blur"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
          </span>
          Open to internship opportunities
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.05 }}
          className="font-display font-bold leading-[0.95] tracking-tight"
          style={{ fontSize: "clamp(2.75rem, 9vw, 7rem)" }}
        >
          Hi, I'm <span className="text-gradient">{PROFILE.firstName}</span>.
          <br />
          I build with
          <br />
          <span className="text-accent">code</span> &amp; data.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-8 max-w-xl text-lg text-muted-foreground md:text-xl"
        >
          {PROFILE.role} at UC Berkeley.
          <br />
          Currently interning @ SLB. Previous @ Anchor Logics.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <a
            href="#work"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("work")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="group inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 font-semibold text-accent-foreground transition-transform hover:scale-[1.03] accent-glow"
          >
            View my work
            <ArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
          </a>

          <a
            href={PROFILE.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-background/50 px-6 py-3 font-semibold backdrop-blur transition-colors hover:border-accent hover:text-accent"
          >
            <FileText className="h-4 w-4" />
            Résumé
          </a>

          <div className="flex items-center gap-1">
            <IconLink href={`mailto:${PROFILE.email}`} label="Email">
              <Mail className="h-5 w-5" />
            </IconLink>
            <IconLink href={PROFILE.linkedin} label="LinkedIn" external>
              <Linkedin className="h-5 w-5" />
            </IconLink>
            <IconLink href={PROFILE.github} label="GitHub" external>
              <Github className="h-5 w-5" />
            </IconLink>
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-8 inline-flex items-center gap-1.5 font-mono text-sm text-muted-foreground"
        >
          <MapPin className="h-4 w-4" /> {PROFILE.location}
        </motion.p>
      </motion.div>
    </section>
  );
}

function IconLink({
  href,
  label,
  external,
  children,
}: {
  href: string;
  label: string;
  external?: boolean;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      aria-label={label}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className="rounded-full p-3 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
    >
      {children}
    </a>
  );
}
