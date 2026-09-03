"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    text: "Конверсия выросла на 40% за первый месяц. Команда Aetheria реально понимает продукт, а не просто рисует пиксели.",
    name: "Алексей Петров",
    role: "CEO @ TechCorp",
  },
  {
    text: "Наш бренд теперь выглядит так, как мы всегда мечтали. Космос в каждой детали. Клиенты пишут «какой красивый сайт».",
    name: "Мария Иванова",
    role: "Founder @ Bloom Studio",
  },
  {
    text: "Сайт запустили за 18 часов. Серьёзно. Не шучу. За такие деньги — это магия.",
    name: "Дмитрий Сидоров",
    role: "CTO @ Quantum",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="section relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <p className="text-xs uppercase tracking-[0.3em] text-cyan mb-3">
            Отзывы
          </p>
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
              className="gradient-border rounded-2xl bg-bg-elev p-8"
            >
              <Quote className="w-8 h-8 text-cyan mb-4" />
              <blockquote className="text-lg leading-relaxed mb-6">
                «{t.text}»
              </blockquote>
              <figcaption className="text-sm">
                <div className="font-semibold text-cyan">{t.name}</div>
                <div className="text-fg-muted">{t.role}</div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
