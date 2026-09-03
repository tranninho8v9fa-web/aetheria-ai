"use client";

import { motion } from "framer-motion";
import { ArrowRight, Mail, Sparkles } from "lucide-react";
import { Starfield } from "./Starfield";

export function CTA() {
  return (
    <section id="contact" className="section relative overflow-hidden">
      <div aria-hidden className="absolute inset-0 -z-10">
        <Starfield count={120} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full bg-cyan/10 blur-[140px]" />
        <div className="absolute top-1/2 left-1/3 w-[500px] h-[500px] rounded-full bg-gold/10 blur-[120px]" />
        <div className="absolute top-1/2 right-1/4 w-[400px] h-[400px] rounded-full bg-magenta/10 blur-[100px]" />
      </div>

      <div className="max-w-4xl mx-auto text-center relative">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full glass"
        >
          <Sparkles className="w-3.5 h-3.5 text-cyan" />
          <span className="text-xs uppercase tracking-[0.3em] text-fg-muted">
            Готовы?
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-5xl md:text-8xl font-bold tracking-[-0.03em] mb-6 leading-[0.95]"
        >
          Готовы{" "}
          <span className="text-gradient-aurora glow-cyan">в космос?</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-2xl text-fg-muted max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          Расскажите о проекте — пришлём концепты в течение 24 часов.
          Без обязательств и воды.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <a href="mailto:hello@aetheria.ai" className="btn-gold text-lg">
            <Mail className="w-5 h-5" />
            Связаться с нами
            <ArrowRight className="w-5 h-5" />
          </a>
          <a href="#collection" className="btn-glass text-lg">
            Сначала посмотреть шаблоны
          </a>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-xs text-fg-subtle mt-10 tracking-wider uppercase"
        >
          Отвечаем в течение 2 часов · NDA по запросу
        </motion.p>
      </div>
    </section>
  );
}
