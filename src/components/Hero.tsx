"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Play } from "lucide-react";
import { Starfield } from "./Starfield";
import { Aurora } from "./Aurora";
import { PlanetRing } from "./PlanetRing";

const ease = [0.16, 1, 0.3, 1] as const;

const stats = [
  { v: "120+", l: "Запущенных сайтов" },
  { v: "98%", l: "Довольных клиентов" },
  { v: "24ч", l: "До запуска" },
];

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.92]);

  return (
    <section
      ref={ref}
      className="relative min-h-[100svh] flex flex-col items-center justify-center overflow-hidden px-6 pt-32 pb-20"
    >
      {/* Layered cosmic background */}
      <div aria-hidden className="absolute inset-0 -z-10">
        <Starfield count={280} />
        <PlanetRing />
        <Aurora />
        <div className="absolute inset-0 cosmic-grid opacity-50" />
      </div>

      {/* Content */}
      <motion.div
        style={{ y, opacity, scale }}
        className="max-w-6xl text-center relative z-10"
      >
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease }}
          className="inline-flex items-center gap-2.5 px-4 py-2 mb-10 rounded-full glass"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full rounded-full bg-cyan opacity-75 animate-ping" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan" />
          </span>
          <span className="text-[10px] sm:text-xs uppercase tracking-[0.3em] text-fg-muted">
            AI Studio · Осн. 2026
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.1, ease }}
          className="text-[clamp(3rem,9vw,8rem)] font-bold leading-[0.95] tracking-[-0.03em] mb-8"
        >
          <span className="block">Создаём сайты</span>
          <span className="block text-gradient-aurora glow-cyan">из будущего.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease }}
          className="max-w-2xl mx-auto text-base sm:text-lg md:text-2xl text-fg-muted mb-12 leading-relaxed"
        >
          Премиальные AI-сайты для амбициозных брендов. Голографические
          анимации, космический дизайн, запуск за 24 часа.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <a href="#collection" className="btn-gold text-base sm:text-lg">
            Смотреть коллекцию
            <ArrowRight className="w-4 h-4" />
          </a>
          <a href="#process" className="btn-glass text-base sm:text-lg">
            <Play className="w-4 h-4" />
            Как мы работаем
          </a>
        </motion.div>
      </motion.div>

      {/* Stats */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.8, ease }}
        className="mt-24 grid grid-cols-3 gap-4 sm:gap-16 max-w-3xl w-full relative z-10"
      >
        {stats.map((s) => (
          <div key={s.l} className="text-center">
            <div className="text-4xl sm:text-6xl font-bold text-cyan glow-cyan tabular-nums">
              {s.v}
            </div>
            <div className="text-[10px] sm:text-xs uppercase tracking-[0.2em] text-fg-subtle mt-2">
              {s.l}
            </div>
          </div>
        ))}
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 text-fg-subtle"
      >
        <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-10 bg-gradient-to-b from-cyan to-transparent"
        />
      </motion.div>
    </section>
  );
}
