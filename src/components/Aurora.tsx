"use client";

import { motion } from "framer-motion";

export function Aurora() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden>
      <motion.div
        className="absolute rounded-full"
        style={{
          width: 900,
          height: 900,
          background:
            "radial-gradient(circle, rgba(0,240,255,0.45), transparent 60%)",
          filter: "blur(100px)",
          top: "5%",
          left: "15%",
        }}
        animate={{
          x: [0, 200, -100, 0],
          y: [0, -80, 150, 0],
          scale: [1, 1.25, 0.9, 1],
        }}
        transition={{ duration: 28, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute rounded-full"
        style={{
          width: 700,
          height: 700,
          background:
            "radial-gradient(circle, rgba(212,175,55,0.32), transparent 60%)",
          filter: "blur(100px)",
          top: "30%",
          right: "5%",
        }}
        animate={{
          x: [0, -180, 100, 0],
          y: [0, 120, -100, 0],
          scale: [1, 0.85, 1.2, 1],
        }}
        transition={{ duration: 32, repeat: Infinity, ease: "easeInOut", delay: 3 }}
      />
      <motion.div
        className="absolute rounded-full"
        style={{
          width: 800,
          height: 800,
          background:
            "radial-gradient(circle, rgba(184,41,221,0.28), transparent 60%)",
          filter: "blur(120px)",
          bottom: "5%",
          left: "25%",
        }}
        animate={{
          x: [0, 100, -200, 0],
          y: [0, -120, 80, 0],
          scale: [1, 1.15, 0.9, 1],
        }}
        transition={{ duration: 36, repeat: Infinity, ease: "easeInOut", delay: 6 }}
      />
      <motion.div
        className="absolute rounded-full"
        style={{
          width: 500,
          height: 500,
          background:
            "radial-gradient(circle, rgba(0,240,255,0.25), transparent 60%)",
          filter: "blur(80px)",
          top: "60%",
          right: "20%",
        }}
        animate={{
          x: [0, -100, 150, 0],
          y: [0, 100, -80, 0],
          scale: [1, 0.9, 1.2, 1],
        }}
        transition={{ duration: 24, repeat: Infinity, ease: "easeInOut", delay: 4 }}
      />
    </div>
  );
}
