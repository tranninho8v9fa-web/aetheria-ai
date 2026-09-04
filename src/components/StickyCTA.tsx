"use client";

import { motion } from "framer-motion";
import { Calendar, MessageCircle } from "lucide-react";

export function StickyCTA() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 2, duration: 0.6 }}
      className="fixed bottom-6 right-6 z-40 flex flex-col gap-3"
    >
      <a
        href="#contact"
        className="btn-gold shadow-[0_0_30px_rgba(212,175,55,0.4)] flex items-center gap-2 group"
      >
        <Calendar className="w-4 h-4" />
        <span className="hidden sm:inline">Заказать сайт</span>
        <span className="sm:hidden">Заказать</span>
      </a>
    </motion.div>
  );
}
