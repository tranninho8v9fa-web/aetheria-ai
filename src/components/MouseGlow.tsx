"use client";

import { useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

type Props = {
  size?: number;
  color?: string;
  opacity?: number;
  blur?: number;
  className?: string;
};

/**
 * MouseGlow — fixed-position radial glow that follows the cursor.
 * Smoothing via spring; cheap to render.
 */
export function MouseGlow({
  size = 500,
  color = "0, 240, 255",
  opacity = 0.18,
  blur = 80,
  className = "",
}: Props) {
  const x = useMotionValue(-2000);
  const y = useMotionValue(-2000);

  useEffect(() => {
    function handleMove(e: MouseEvent) {
      x.set(e.clientX);
      y.set(e.clientY);
    }
    window.addEventListener("mousemove", handleMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMove);
  }, [x, y]);

  const sx = useSpring(x, { stiffness: 60, damping: 22, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 60, damping: 22, mass: 0.4 });

  return (
    <motion.div
      aria-hidden
      className={`pointer-events-none fixed top-0 left-0 z-20 ${className}`}
      style={{
        x: useTransform(sx, (v) => v - size / 2),
        y: useTransform(sy, (v) => v - size / 2),
        width: size,
        height: size,
        background: `radial-gradient(circle, rgba(${color},${opacity}), transparent 60%)`,
        filter: `blur(${blur}px)`,
        mixBlendMode: "screen",
      }}
    />
  );
}
