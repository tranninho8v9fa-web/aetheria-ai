"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

const nav = [
  { label: "Коллекция", href: "#collection" },
  { label: "Процесс", href: "#process" },
  { label: "Возможности", href: "#features" },
  { label: "Отзывы", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
];

export function Header() {
  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-4 inset-x-0 z-50 px-4"
    >
      <div className="max-w-7xl mx-auto glass rounded-full px-5 py-2.5 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2.5 group">
          <div className="relative w-8 h-8 rounded-lg bg-gradient-to-br from-cyan to-gold flex items-center justify-center shadow-[0_0_20px_rgba(0,240,255,0.4)] group-hover:shadow-[0_0_30px_rgba(0,240,255,0.7)] transition-shadow">
            <Sparkles className="w-4 h-4 text-black" strokeWidth={2.5} />
          </div>
          <span className="font-semibold tracking-tight text-base">
            Aetheria<span className="text-cyan">.AI</span>
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-7 text-sm text-fg-muted">
          {nav.map((n) => (
            <a key={n.href} href={n.href} className="hover:text-cyan transition-colors">
              {n.label}
            </a>
          ))}
        </nav>

        <a href="#contact" className="btn-glass text-sm py-1.5 px-4">
          Связаться
        </a>
      </div>
    </motion.header>
  );
}
