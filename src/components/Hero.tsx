"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";

const ease = [0.16, 1, 0.3, 1] as const;

const stats = [
  { v: "120+", l: "Live Sites" },
  { v: "98%", l: "Client Satisfaction" },
  { v: "24h", l: "Avg. Delivery" },
];

export function Hero() {
  return (
    <section className="relative min-h-[100svh] flex flex-col items-center justify-center overflow-hidden px-6 pt-32 pb-20">
      {/* Background orbs */}
      <div aria-hidden className="absolute inset-0 -z-10 pointer-events-none">
        <motion.div
          className="orb bg-cyan"
          style={{
            width: 620,
            height: 620,
            top: "8%",
            left: "50%",
            marginLeft: -310,
            opacity: 0.18,
          }}
          animate={{ scale: [1, 1.1, 1], opacity: [0.18, 0.28, 0.18] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="orb bg-gold"
          style={{
            width: 420,
            height: 420,
            bottom: "2%",
            left: "10%",
            opacity: 0.12,
          }}
          animate={{ scale: [1, 1.15, 1], opacity: [0.12, 0.22, 0.12] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
        <motion.div
          className="orb bg-cyan"
          style={{
            width: 360,
            height: 360,
            top: "30%",
            right: "4%",
            opacity: 0.10,
          }}
          animate={{ scale: [1, 1.2, 1], opacity: [0.10, 0.18, 0.10] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
      </div>

      <div className="max-w-5xl text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease }}
          className="inline-flex items-center gap-2.5 px-3.5 py-1.5 mb-8 rounded-full glass"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full rounded-full bg-cyan opacity-75 animate-ping" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan" />
          </span>
          <span className="text-[10px] sm:text-xs uppercase tracking-[0.25em] text-fg-muted">
            AI Studio · Est. 2026
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease }}
          className="text-[clamp(2.5rem,7.5vw,5.75rem)] font-bold leading-[1.02] tracking-[-0.02em] mb-6"
        >
          <span className="block">Luxury websites,</span>
          <span className="block text-gradient-aurora glow-cyan">
            powered by AI.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25, ease }}
          className="max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-fg-muted mb-12 leading-relaxed"
        >
          Aetheria crafts premium, AI-generated sites for ambitious brands.
          Choose a template, customise in minutes, ship today.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease }}
          className="flex flex-col sm:flex-row gap-3 justify-center items-center"
        >
          <a href="#collection" className="btn-gold">
            Browse Collection
            <ArrowRight className="w-4 h-4" />
          </a>
          <a href="#process" className="btn-glass">
            <Play className="w-4 h-4" />
            Watch Showreel
          </a>
        </motion.div>
      </div>

      {/* Stats */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6, ease }}
        className="mt-20 grid grid-cols-3 gap-4 sm:gap-12 max-w-3xl w-full relative z-10"
      >
        {stats.map((s) => (
          <div key={s.l} className="text-center">
            <div className="text-3xl sm:text-5xl font-bold text-cyan glow-cyan tabular-nums">
              {s.v}
            </div>
            <div className="text-[10px] sm:text-xs uppercase tracking-[0.2em] text-fg-subtle mt-2">
              {s.l}
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
