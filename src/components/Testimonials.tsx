"use client";

import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    text: "Сайт запустили за 11 дней вместо обещанных 14. Конверсия выросла на 47% за первый месяц, средний чек +23%. Лучшее вложение года.",
    name: "Алексей Морозов",
    role: "CEO & Founder",
    company: "TechCorp",
    industry: "B2B SaaS",
    avatar: "А",
    rating: 5,
  },
  {
    text: "Выбирали между 4 студиями. Aetheria — единственные, кто показал реальные метрики и не обещал «сделаем красиво». Получили сайт, который продаёт на 62% больше.",
    name: "Мария Соколова",
    role: "Founder",
    company: "Bloom",
    industry: "E-commerce",
    avatar: "М",
    rating: 5,
  },
  {
    text: "Команда понимает продукт. Не просто пиксели двигают, а помогают решить бизнес-задачу. Lighthouse 100, загрузка 0.4 сек, ноль багов за 4 месяца.",
    name: "Дмитрий Волков",
    role: "CTO",
    company: "Quantum",
    industry: "FinTech",
    avatar: "Д",
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="section relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-xs uppercase tracking-[0.3em] text-cyan mb-3">Отзывы</p>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight">
            Что говорят{" "}
            <span className="text-gradient-aurora">клиенты</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.figure
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="gradient-border rounded-2xl bg-bg-elev p-8 flex flex-col"
            >
              <div className="flex items-center justify-between mb-4">
                <Quote className="w-8 h-8 text-cyan" />
                <div className="flex gap-0.5">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} className="w-3.5 h-3.5 fill-gold text-gold" />
                  ))}
                </div>
              </div>
              <blockquote className="text-base leading-relaxed mb-6 flex-1">
                «{t.text}»
              </blockquote>
              <figcaption className="flex items-center gap-3 pt-4 border-t border-[var(--color-border)]">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan to-gold flex items-center justify-center font-bold text-black">
                  {t.avatar}
                </div>
                <div>
                  <div className="font-semibold text-sm">{t.name}</div>
                  <div className="text-xs text-fg-muted">
                    {t.role} · {t.company}
                  </div>
                  <div className="text-[10px] text-cyan uppercase tracking-wider mt-0.5">
                    {t.industry}
                  </div>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
