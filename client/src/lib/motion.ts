import type { Variants } from "framer-motion";

// Shared framer-motion variants used across sections for a consistent feel.
// Motion is automatically neutralized by the global prefers-reduced-motion rule
// in index.css and framer-motion's own reduced-motion handling.

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6 } },
};

// Parent container that staggers its children into view.
export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.05 },
  },
};

// Sensible defaults for whileInView reveals.
export const viewportOnce = { once: true, margin: "-80px" } as const;
