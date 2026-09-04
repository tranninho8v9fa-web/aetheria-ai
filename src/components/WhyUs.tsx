"use client";

import { motion } from "framer-motion";
import { Zap, Brain, Shield, Clock } from "lucide-react";

const advantages = [
  {
    icon: Zap,
    title: "До запуска за 24 часа",
    text: "Готовый шаблон — за сутки. Кастом — за 2-4 недели. Не «когда-нибудь», а с датой в договоре.",
  },
  {
    icon: Brain,
    title: "AI + команда дизайнеров",
    text: "Нейросеть генерирует десятки концептов, наши дизайнеры доводят лучший до продакшна. Не заменяем людей — усиливаем.",
  },
  {
    icon: Shield,
    title: "30 дней гарантии возврата",
    text: "Не понравился результат — вернём 100% оплаты. Без вопросов, без бюрократии. Это наша ответственность за качество.",
  },
  {
    icon: Clock,
    title: "Поддержка с реальным человеком",
    text: "30 дней после запуска — бесплатно. Потом тариф от $99/мес. Отвечает живой человек, не бот и не тикет-система.",
  },
];

export function WhyUs() {
  return (
    <section id="why" className="section relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-xs uppercase tracking-[0.3em] text-cyan mb-3">Почему Aetheria</p>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight">
            Чем мы <span className="text-gradient-aurora">отличаемся</span>
          </h2>
          <p className="max-w-2xl mx-auto text-fg-muted mt-6 text-lg">
            Десятки студий обещают «AI-дизайн за копейки». Вот что мы делаем по-другому.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {advantages.map((a, i) => (
            <motion.div
              key={a.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="gradient-border rounded-2xl bg-bg-elev p-8 group"
            >
              <a.icon className="w-10 h-10 text-cyan mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-semibold mb-3">{a.title}</h3>
              <p className="text-fg-muted leading-relaxed">{a.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
