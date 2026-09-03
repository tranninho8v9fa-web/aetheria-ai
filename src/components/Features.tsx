"use client";

import { motion } from "framer-motion";
import { Brain, Sparkles, Zap, Moon, Search, Headphones } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "AI-дизайн",
    text: "Десятки концептов за часы — не недели. Выбираете лучший, мы доводим до продакшна.",
  },
  {
    icon: Sparkles,
    title: "Голографические анимации",
    text: "Каждый элемент дышит и реагирует на движение мыши. Framer Motion + WebGL.",
  },
  {
    icon: Zap,
    title: "Скорость света",
    text: "100/100 Lighthouse, загрузка < 1 секунды. Edge-рендеринг, минимум JS.",
  },
  {
    icon: Moon,
    title: "Тёмная тема",
    text: "Глубокий космический чёрный, без белых пятен. Глаза скажут спасибо.",
  },
  {
    icon: Search,
    title: "SEO из коробки",
    text: "Schema, OpenGraph, sitemap, индексация за часы. Google полюбит с первого взгляда.",
  },
  {
    icon: Headphones,
    title: "Поддержка 24/7",
    text: "30 дней бесплатно после запуска. Дальше — тариф от 99$/мес с приоритетным SLA.",
  },
];

export function Features() {
  return (
    <section id="features" className="section relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <p className="text-xs uppercase tracking-[0.3em] text-cyan mb-3">
            Возможности
          </p>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight">
            Что <span className="text-gradient-aurora">входит</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              whileHover={{ y: -4 }}
              className="gradient-border rounded-2xl bg-bg-elev p-8 group hover:bg-cyan-soft/20 transition-colors"
            >
              <f.icon className="w-10 h-10 text-cyan mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-semibold mb-3">{f.title}</h3>
              <p className="text-sm text-fg-muted leading-relaxed">{f.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
