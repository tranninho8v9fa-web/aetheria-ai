"use client";

import { motion } from "framer-motion";

const items = [
  "AI-ДИЗАЙН",
  "ГОЛОГРАММЫ",
  "КОСМОС",
  "БУДУЩЕЕ",
  "NEXT.JS",
  "NEURAL",
  "3D",
  "AURORA",
  "CYAN",
  "GOLD",
  "СКОРОСТЬ",
  "БЕЗГРАНИЧНОСТЬ",
  "LIGHTHOUSE 100",
  "DARK MODE",
];

export function Marquee() {
  const repeated = [...items, ...items, ...items];
  return (
    <div className="relative overflow-hidden py-10 border-y border-[var(--color-border)]">
      <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-bg to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-bg to-transparent z-10 pointer-events-none" />
      <motion.div
        className="flex gap-8 whitespace-nowrap"
        animate={{ x: ["0%", "-33.33%"] }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
      >
        {repeated.map((item, i) => (
          <span
            key={i}
            className="text-2xl md:text-3xl font-bold tracking-[0.2em] text-fg-muted flex items-center gap-8"
          >
            {item}
            <span className="text-cyan">✦</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}
