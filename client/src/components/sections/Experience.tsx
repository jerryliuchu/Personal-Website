import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { fadeUp, viewportOnce } from "@/lib/motion";
import { WORK_EXPERIENCE, EDUCATION, type WorkExperience } from "@/data/resume";

function CompanyLogo({ item }: { item: WorkExperience }) {
  const [src, setSrc] = useState<string | null>(item.logoImage ?? null);
  return (
    <div
      className={`flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-xl text-sm font-bold text-white shadow-sm ${
        src ? `${item.logoBg ?? "bg-muted/60"} p-1` : item.color
      }`}
    >
      {src ? (
        <img
          src={src}
          alt=""
          className="h-full w-full rounded-lg object-contain"
          onError={() => setSrc(null)}
        />
      ) : (
        item.logo
      )}
    </div>
  );
}

function ExperienceCard({ item, isLast }: { item: WorkExperience; isLast: boolean }) {
  return (
    <motion.article
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      className="relative pl-8 md:pl-10"
    >
      {/* Timeline line + node */}
      <span className="absolute left-[7px] top-2 h-3 w-3 rounded-full border-2 border-accent bg-background md:left-[9px]" />
      {!isLast && (
        <span className="absolute left-[12px] top-6 h-full w-px bg-border md:left-[14px]" />
      )}

      <div className="mb-12 rounded-2xl border border-border/70 bg-card/50 p-6 backdrop-blur transition-colors hover:border-accent/50 md:p-7">
        <div className="flex gap-4">
          <CompanyLogo item={item} />
          <div className="min-w-0 flex-1">
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <h3 className="font-display text-lg font-bold">{item.role}</h3>
              <span className="font-mono text-xs text-muted-foreground">{item.date}</span>
            </div>
            <p className="mt-0.5 font-medium">
              {item.url ? (
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-accent underline-offset-4 hover:underline"
                >
                  {item.company}
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              ) : (
                item.company
              )}
            </p>
            <p className="mt-1 font-mono text-xs text-muted-foreground">
              {[item.location, item.employmentType].filter(Boolean).join(" · ")}
            </p>

            <ul className="mt-4 space-y-2.5">
              {item.bullets.map((bullet, i) => (
                <li key={i} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

export function Experience() {
  return (
    <section id="work" className="mx-auto max-w-6xl scroll-mt-24 px-6 py-24 md:py-32">
      <SectionHeading
        index="02"
        title="Experience"
        subtitle="Roles across engineering, data science, and research."
      />

      {/* Education highlight */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="mb-10 rounded-2xl border border-accent/40 bg-accent/5 p-5"
      >
        <div className="flex items-start gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-muted/60 p-1">
            <img
              src={EDUCATION.logoImage}
              alt="UC Berkeley seal"
              className="h-full w-full rounded-lg object-contain"
            />
          </div>
          <div className="min-w-0 flex-1">
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <p className="font-display font-bold">{EDUCATION.degree}</p>
              <span className="font-mono text-xs text-muted-foreground">{EDUCATION.gradYear}</span>
            </div>
            <p className="text-sm text-muted-foreground">
              {EDUCATION.school} · GPA {EDUCATION.gpa}
            </p>

            <p className="mt-3 font-mono text-xs uppercase tracking-widest text-muted-foreground">
              Relevant coursework
            </p>
            <div className="mt-2 flex flex-wrap gap-2">
              {EDUCATION.coursework.map((course) => (
                <span
                  key={course}
                  className="rounded-full border border-border/70 bg-background/60 px-2.5 py-1 text-xs text-muted-foreground"
                >
                  {course}
                </span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      <div>
        {WORK_EXPERIENCE.map((item, i) => (
          <ExperienceCard key={item.company} item={item} isLast={i === WORK_EXPERIENCE.length - 1} />
        ))}
      </div>
    </section>
  );
}
