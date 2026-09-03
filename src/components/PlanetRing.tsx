"use client";

import { motion } from "framer-motion";

export function PlanetRing() {
  return (
    <div
      className="absolute pointer-events-none"
      style={{
        top: "8%",
        left: "50%",
        transform: "translate(-50%, 0) rotate(-22deg)",
      }}
      aria-hidden
    >
      <div className="relative" style={{ width: 1700, height: 420 }}>
        {/* Outermost ring */}
        <div
          className="absolute rounded-full"
          style={{
            inset: -40,
            border: "1px solid rgba(0, 240, 255, 0.08)",
            boxShadow:
              "0 0 80px rgba(0, 240, 255, 0.06), inset 0 0 80px rgba(0, 240, 255, 0.04)",
          }}
        />
        {/* Outer ring */}
        <div
          className="absolute rounded-full"
          style={{
            inset: 0,
            border: "1px solid rgba(0, 240, 255, 0.18)",
            boxShadow:
              "0 0 60px rgba(0, 240, 255, 0.12), inset 0 0 60px rgba(0, 240, 255, 0.10)",
          }}
        />
        {/* Mid ring */}
        <div
          className="absolute rounded-full"
          style={{
            inset: 60,
            border: "1px solid rgba(212, 175, 55, 0.15)",
            boxShadow:
              "0 0 50px rgba(212, 175, 55, 0.08), inset 0 0 50px rgba(212, 175, 55, 0.08)",
          }}
        />
        {/* Inner ring */}
        <div
          className="absolute rounded-full"
          style={{
            inset: 130,
            border: "1px solid rgba(184, 41, 221, 0.15)",
            boxShadow:
              "0 0 40px rgba(184, 41, 221, 0.10), inset 0 0 40px rgba(184, 41, 221, 0.08)",
          }}
        />

        {/* Planet at center, slowly rotating */}
        <motion.div
          className="absolute"
          style={{
            top: "50%",
            left: "50%",
            width: 220,
            height: 220,
            marginLeft: -110,
            marginTop: -110,
            borderRadius: "50%",
            background:
              "radial-gradient(circle at 30% 30%, #f5d57a 0%, #d4af37 18%, #8a5a2b 50%, #2a1233 80%, #050505 100%)",
            boxShadow:
              "0 0 80px rgba(212, 175, 55, 0.45), 0 0 160px rgba(184, 41, 221, 0.25), inset -30px -30px 60px rgba(0,0,0,0.6)",
          }}
          animate={{ rotate: 360 }}
          transition={{ duration: 200, repeat: Infinity, ease: "linear" }}
        >
          {/* Planet surface texture */}
          <div
            className="absolute inset-0 rounded-full opacity-40"
            style={{
              background:
                "radial-gradient(ellipse at 70% 60%, rgba(184, 41, 221, 0.5), transparent 50%), radial-gradient(ellipse at 30% 40%, rgba(0, 240, 255, 0.3), transparent 50%)",
            }}
          />
        </motion.div>
      </div>
    </div>
  );
}
