"use client";

import { useMemo } from "react";

type Star = {
  x: number;
  y: number;
  size: number;
  delay: number;
  duration: number;
  baseOpacity: number;
  glow: boolean;
};

export function Starfield({
  count = 250,
  className = "",
}: {
  count?: number;
  className?: string;
}) {
  const stars = useMemo<Star[]>(() => {
    return Array.from({ length: count }, () => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 1.8 + 0.3,
      delay: Math.random() * 6,
      duration: 2 + Math.random() * 4,
      baseOpacity: 0.2 + Math.random() * 0.8,
      glow: Math.random() > 0.92,
    }));
  }, [count]);

  return (
    <div
      className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}
      aria-hidden
    >
      {stars.map((s, i) => (
        <span
          key={i}
          className="absolute rounded-full bg-white"
          style={{
            left: `${s.x}%`,
            top: `${s.y}%`,
            width: `${s.size}px`,
            height: `${s.size}px`,
            opacity: s.baseOpacity,
            animation: `twinkle ${s.duration}s ease-in-out ${s.delay}s infinite`,
            boxShadow: s.glow
              ? "0 0 6px rgba(0, 240, 255, 0.9), 0 0 12px rgba(0, 240, 255, 0.5)"
              : "none",
          }}
        />
      ))}
    </div>
  );
}
