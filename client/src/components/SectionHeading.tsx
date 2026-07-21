import { motion } from "framer-motion";
import { fadeUp, viewportOnce } from "@/lib/motion";

export function SectionHeading({
  index,
  title,
  subtitle,
}: {
  index: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      className="mb-12"
    >
      <div className="mb-3 flex items-center gap-3 font-mono text-sm text-accent">
        <span>{index}</span>
        <span className="h-px w-10 bg-accent/50" />
      </div>
      <h2 className="font-display text-3xl font-bold tracking-tight md:text-5xl">{title}</h2>
      {subtitle && <p className="mt-3 max-w-xl text-muted-foreground">{subtitle}</p>}
    </motion.div>
  );
}
