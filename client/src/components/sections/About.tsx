import { useState } from "react";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/SectionHeading";
import { fadeUp, viewportOnce } from "@/lib/motion";
import { PROFILE } from "@/data/resume";

function ProfilePhoto() {
  const [failed, setFailed] = useState(false);

  return (
    <div className="relative overflow-hidden rounded-3xl border border-border/70 bg-card/60 accent-glow">
      <div className="aspect-[3/4] w-full">
        {failed ? (
          // Fallback when no photo has been added yet.
          <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-accent/25 via-card to-primary/20">
            <span className="font-display text-6xl font-bold text-accent">JC</span>
          </div>
        ) : (
          <img
            src={PROFILE.photoUrl}
            alt={PROFILE.name}
            className="h-full w-full object-cover object-[45%_center]"
            onError={() => setFailed(true)}
          />
        )}
      </div>
    </div>
  );
}

export function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl scroll-mt-24 px-6 py-24 md:py-32">
      <SectionHeading index="01" title="About" />

      <div className="grid gap-12 md:grid-cols-5">
        {/* Left: intro + bio + interests */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="md:col-span-3"
        >
          <p className="font-mono text-sm text-accent">Hi there 👋 I'm</p>
          <h3 className="mt-1 font-display text-3xl font-bold tracking-tight md:text-4xl">
            {PROFILE.name}
          </h3>

          <p className="mt-6 text-xl leading-relaxed text-foreground/90 md:text-2xl">{PROFILE.bio}</p>
          <p className="mt-6 text-muted-foreground">
            Currently pursuing a dual{" "}
            <span className="font-medium text-foreground">B.A. in Data Science &amp; Computer Science</span>{" "}
            at UC Berkeley (GPA 3.93). I've worked across full-stack engineering, agentic AI tooling,
            and computational-biology research — and I like problems where good software and good data
            meet.
          </p>

          {/* Interests */}
          <div className="mt-8">
            <p className="mb-3 font-mono text-sm uppercase tracking-widest text-muted-foreground">
              Interests
            </p>
            <div className="flex flex-wrap gap-2">
              {PROFILE.interests.map((interest) => (
                <span
                  key={interest}
                  className="rounded-full border border-border/70 bg-card/60 px-3 py-1.5 text-sm font-medium backdrop-blur transition-colors hover:border-accent hover:text-accent"
                >
                  {interest}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Right: photo + personal note */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="md:col-span-2"
        >
          <ProfilePhoto />
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            {PROFILE.personalNote}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
