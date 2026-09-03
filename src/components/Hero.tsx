"use client";

import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef } from "react";
import { ArrowRight, Play } from "lucide-react";
import { Starfield } from "./Starfield";
import { Aurora } from "./Aurora";
import { PlanetRing } from "./PlanetRing";
import { MouseGlow } from "./MouseGlow";
import { EnergyBeams } from "./EnergyBeams";
import { AnimatedCounter } from "./AnimatedCounter";

const ease = [0.16, 1, 0.3, 1] as const;

const headlineWords = ["Создаём", "сайты", "из", "будущего."];

const stats = [
  { v: 120, s: "+", l: "Запущенных сайтов" },
  { v: 98, s: "%", l: "Довольных клиентов" },
  { v: 24, s: "ч", l: "До запуска" },
];

export function Hero() {
  const ref = useRef<HTMLElement>(null);

  // Mouse parallax (-1..1 normalized)
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  useEffect(() => {
    function handleMove(e: MouseEvent) {
      mx.set((e.clientX / window.innerWidth - 0.5) * 2);
      my.set((e.clientY / window.innerHeight - 0.5) * 2);
    }
    window.addEventListener("mousemove", handleMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMove);
  }, [mx, my]);

  // Smoothed parallax
  const planetX = useSpring(useTransform(mx, [-1, 1], [-80, 80]), { stiffness: 40, damping: 18 });
  const planetY = useSpring(useTransform(my, [-1, 1], [-50, 50]), { stiffness: 40, damping: 18 });
  const auroraX = useSpring(useTransform(mx, [-1, 1], [60, -60]), { stiffness: 25, damping: 18 });
  const auroraY = useSpring(useTransform(my, [-1, 1], [30, -30]), { stiffness: 25, damping: 18 });

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const titleScale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);

  return (
    <section
      ref={ref}
      className="relative min-h-[100svh] flex flex-col items-center justify-center overflow-hidden px-6 pt-32 pb-20"
    >
      {/* Mouse-following glow */}
      <MouseGlow size={600} opacity={0.22} blur={100} />

      {/* Cosmic background with parallax */}
      <div aria-hidden className="absolute inset-0 -z-10">
        <Starfield count={400} />
        <motion.div style={{ x: planetX, y: planetY }} className="absolute inset-0">
          <PlanetRing />
        </motion.div>
        <motion.div style={{ x: auroraX, y: auroraY }} className="absolute inset-0">
          <Aurora />
        </motion.div>
        <div className="absolute inset-0 cosmic-grid opacity-70" />
        <EnergyBeams count={4} />
      </div>

      {/* Content */}
      <motion.div
        style={{ y, opacity, scale: titleScale }}
        className="max-w-[90rem] text-center relative z-10"
      >
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease }}
          className="inline-flex items-center gap-3 px-5 py-2.5 mb-14 rounded-full glass"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full rounded-full bg-cyan opacity-75 animate-ping" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-cyan" />
          </span>
          <span className="text-xs uppercase tracking-[0.3em] text-fg-muted font-semibold">
            AI Studio · Est. 2026
          </span>
        </motion.div>

        {/* MASSIVE headline with letter-by-letter reveal */}
        <h1 className="text-[clamp(3rem,12vw,11rem)] font-black leading-[0.85] tracking-[-0.05em] mb-12 select-none">
          {headlineWords.map((word, i) => (
            <span key={i} className="inline-block overflow-hidden align-bottom mr-[0.18em] last:mr-0">
              <motion.span
                initial={{ y: "110%", filter: "blur(30px)", opacity: 0 }}
                animate={{ y: "0%", filter: "blur(0px)", opacity: 1 }}
                transition={{
                  duration: 1.1,
                  delay: 0.15 + i * 0.18,
                  ease,
                }}
                className="inline-block"
              >
                {i === headlineWords.length - 1 ? (
                  <span className="text-gradient-aurora glow-cyan">{word}</span>
                ) : (
                  word
                )}
              </motion.span>
            </span>
          ))}
        </h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.0, ease }}
          className="max-w-3xl mx-auto text-base sm:text-lg md:text-2xl text-fg-muted mb-14 leading-relaxed"
        >
          Премиальные AI-сайты для амбициозных брендов. Голографические
          анимации, космический дизайн, запуск за 24 часа.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2, ease }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <a href="#collection" className="btn-gold text-base sm:text-lg">
            Смотреть коллекцию
            <ArrowRight className="w-5 h-5" />
          </a>
          <a href="#process" className="btn-glass text-base sm:text-lg">
            <Play className="w-4 h-4" />
            Как мы работаем
          </a>
        </motion.div>
      </motion.div>

      {/* Stats with animated counter */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.4, ease }}
        className="mt-24 grid grid-cols-3 gap-4 sm:gap-20 max-w-4xl w-full relative z-10"
      >
        {stats.map((s) => (
          <div key={s.l} className="text-center">
            <div className="text-5xl sm:text-7xl font-black text-cyan glow-cyan tabular-nums leading-none">
              <AnimatedCounter to={s.v} suffix={s.s} duration={2.2} />
            </div>
            <div className="text-[10px] sm:text-xs uppercase tracking-[0.25em] text-fg-subtle mt-3">
              {s.l}
            </div>
          </div>
        ))}
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 text-fg-subtle"
      >
        <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
        <motion.div
          animate={{ y: [0, 12, 0], opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-14 bg-gradient-to-b from-cyan to-transparent"
        />
      </motion.div>
    </section>
  );
}
