"use client";

import { motion } from "framer-motion";
import { MessageSquare, Sparkles, Wrench, Rocket } from "lucide-react";

const steps = [
  {
    n: "01",
    icon: MessageSquare,
    title: "Бриф",
    text: "Рассказываете о бренде, целях, ЦА. Изучаем нишу и конкурентов в один созвон.",
  },
  {
    n: "02",
    icon: Sparkles,
    title: "AI-концепты",
    text: "Нейросеть генерирует десятки вариантов дизайна за часы — не недели.",
  },
  {
    n: "03",
    icon: Wrench,
    title: "Доводка",
    text: "Команда превращает лучший концепт в готовый продукт с анимациями и интеграциями.",
  },
  {
    n: "04",
    icon: Rocket,
    title: "Запуск",
    text: "Деплоим на быстрый хостинг, передаём доступы, 30 дней поддержки в подарок.",
  },
];

export function Process() {
  return (
    <section id="process" className="section relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <p className="text-xs uppercase tracking-[0.3em] text-cyan mb-3">
            Процесс
          </p>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight">
            От идеи до{" "}
            <span className="text-gradient-aurora">запуска за 4 шага</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="gradient-border rounded-2xl bg-bg-elev p-6 relative group"
            >
              <div className="text-7xl font-bold text-gradient-aurora opacity-30 absolute top-4 right-4 select-none">
                {s.n}
              </div>
              <s.icon className="w-8 h-8 text-cyan mb-4" />
              <h3 className="text-xl font-semibold mb-2">{s.title}</h3>
              <p className="text-sm text-fg-muted leading-relaxed">{s.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
