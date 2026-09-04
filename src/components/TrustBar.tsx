"use client";

import { motion } from "framer-motion";

const publications = [
  { name: "Forbes", style: "serif italic" },
  { name: "TechCrunch", style: "sans" },
  { name: "Awwwards", style: "serif" },
  { name: "ProductHunt", style: "sans" },
  { name: "Behance", style: "serif" },
  { name: "SiteInspire", style: "sans" },
];

export function TrustBar() {
  return (
    <section className="py-12 md:py-16 border-y border-[var(--color-border)] relative">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-center text-[10px] md:text-xs uppercase tracking-[0.3em] text-fg-subtle mb-8">
          Нас заметили
        </p>
        <div className="flex flex-wrap justify-center items-center gap-x-10 md:gap-x-16 gap-y-6">
          {publications.map((pub, i) => (
            <motion.span
              key={pub.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="text-lg md:text-2xl font-bold tracking-wide text-fg-muted hover:text-cyan transition-colors cursor-default"
              style={{ fontFamily: pub.style === "serif" ? "ui-serif, Georgia, serif" : "ui-sans-serif, system-ui, sans-serif" }}
            >
              {pub.name}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
}
