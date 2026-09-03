"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";

const faqs = [
  {
    q: "Сколько стоит сайт?",
    a: "От 1200$ за готовый шаблон из коллекции до 10 000$+ за полностью кастомный проект. Свяжитесь с нами для оценки вашего кейса — обычно отвечаем в течение 2 часов.",
  },
  {
    q: "Сколько времени занимает разработка?",
    a: "Готовый шаблон из коллекции — 24 часа от брифа до запуска. Кастомный проект — от 2 до 4 недель в зависимости от сложности и количества страниц.",
  },
  {
    q: "Можно ли редактировать сайт самому?",
    a: "Да, мы подключаем удобную админку (Sanity, Payload или Strapi) и передаём документацию. Можно менять текст, картинки, цены и состав страниц без знания кода.",
  },
  {
    q: "Что входит в поддержку?",
    a: "30 дней бесплатной поддержки после запуска: мелкие правки, контент, консультации. Дальше — тариф от 99$/месяц с приоритетным SLA и временем реакции до 2 часов.",
  },
  {
    q: "Можете сделать проект под мой бренд?",
    a: "Конечно. Кастомные проекты стартуют от 5000$. На выходе — уникальный сайт, который не повторяет ничего из коллекции, плюс полный пакет бренд-интеграций.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="section relative">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-xs uppercase tracking-[0.3em] text-cyan mb-3">
            Вопросы
          </p>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight">
            Часто{" "}
            <span className="text-gradient-aurora">спрашивают</span>
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((item, i) => (
            <motion.div
              key={item.q}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="gradient-border rounded-xl bg-bg-elev overflow-hidden"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between p-6 text-left gap-4 group"
                aria-expanded={open === i}
              >
                <span className="font-medium text-lg pr-4 group-hover:text-cyan transition-colors">
                  {item.q}
                </span>
                <Plus
                  className={`w-5 h-5 text-cyan flex-shrink-0 transition-transform duration-300 ${
                    open === i ? "rotate-45" : ""
                  }`}
                />
              </button>
              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <p className="px-6 pb-6 text-fg-muted leading-relaxed">
                      {item.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
