"use client";

import { motion } from "framer-motion";

/**
 * EnergyBeams — animated light streaks that sweep across the screen.
 * Add subtle energy / motion to any container.
 */
export function EnergyBeams({
  count = 3,
  color = "0, 240, 255",
  className = "",
}: {
  count?: number;
  color?: string;
  className?: string;
}) {
  return (
    <div
      aria-hidden
      className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}
    >
      {Array.from({ length: count }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute h-px"
          style={{
            width: "140%",
            top: `${15 + i * 25 + Math.random() * 10}%`,
            left: "-20%",
            background: `linear-gradient(90deg, transparent, rgba(${color},0.6) 50%, transparent)`,
            filter: "blur(0.5px)",
          }}
          animate={{
            x: ["-30%", "30%"],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 6 + i * 1.5,
            repeat: Infinity,
            delay: i * 1.4,
            ease: "linear",
          }}
        />
      ))}
      {/* Vertical beams, fewer */}
      {Array.from({ length: 2 }).map((_, i) => (
        <motion.div
          key={`v-${i}`}
          className="absolute w-px"
          style={{
            height: "140%",
            top: "-20%",
            left: `${20 + i * 60}%`,
            background: `linear-gradient(180deg, transparent, rgba(${color},0.5) 50%, transparent)`,
            filter: "blur(0.5px)",
          }}
          animate={{
            y: ["-30%", "30%"],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 8 + i * 2,
            repeat: Infinity,
            delay: i * 2 + 1,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
}
