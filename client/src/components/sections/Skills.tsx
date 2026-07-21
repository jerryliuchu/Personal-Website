import { motion } from "framer-motion";
import { SectionHeading } from "@/components/SectionHeading";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";
import { SKILLS } from "@/data/resume";

export function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl scroll-mt-24 px-6 py-24 md:py-32">
      <SectionHeading
        index="04"
        title="Skills & Tools"
        subtitle="The stack I reach for across engineering, data, and research."
      />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="grid gap-6 sm:grid-cols-2"
      >
        {SKILLS.map((group) => (
          <motion.div
            key={group.category}
            variants={fadeUp}
            className="rounded-2xl border border-border/70 bg-card/60 p-6 backdrop-blur transition-colors hover:border-accent/50"
          >
            <h3 className="mb-4 font-mono text-sm uppercase tracking-widest text-muted-foreground">
              {group.category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-border/70 bg-background/60 px-3 py-1.5 text-sm font-medium transition-colors hover:border-accent hover:text-accent"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
