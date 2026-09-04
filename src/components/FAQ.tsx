"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";

const faqs = [
  {
    q: "Сколько стоит сайт?",
    a: "Готовый шаблон — от $1,200. Кастом Pro — от $4,800. Корпоративный — от $12,000. Свяжитесь для оценки вашего кейса — обычно отвечаем за 2 часа.",
  },
  {
    q: "Сколько времени занимает разработка?",
    a: "Готовый шаблон из коллекции — 24 часа от брифа до запуска. Кастом Pro — 2-4 недели. Корпоративный — от 1 месяца. Сроки прописываем в договоре.",
  },
  {
    q: "Можно ли редактировать сайт самому?",
    a: "Да, подключаем удобную админку (Sanity, Payload или Strapi) и передаём документацию. Меняйте текст, картинки, цены и состав страниц без знания кода.",
  },
  {
    q: "Что если мне не понравится результат?",
    a: "30 дней гарантии возврата денег. Без вопросов, без задержек. Также в стоимость входят 3 раунда ревизий — успеваем поправить до запуска.",
  },
  {
    q: "Кому принадлежит сайт после оплаты?",
    a: "Вам. Полностью. Код, дизайн, контент, домен, хостинг — никаких подписок или vendor lock-in.",
  },
  {
    q: "Как происходит оплата?",
    a: "50% до старта, 50% после запуска. Для проектов от $10,000 возможна разбивка на 3 части. Работаем с ИП, ООО, физлицами. Безналичный расчёт, договор, акты.",
  },
  {
    q: "Сколько стоит поддержка после запуска?",
    a: "30 дней — бесплатно. Дальше — тариф от $99/мес с временем реакции до 2 часов. Можно обслуживаться самостоятельно или передать нам.",
  },
  {
    q: "Можете сделать проект под мой бренд?",
    a: "Конечно. Кастомные проекты — от $4,800. Полностью уникальный дизайн, никаких шаблонов. Бриф → концепты → дизайн → разработка → запуск.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="section relative">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-xs uppercase tracking-[0.3em] text-cyan mb-3">Вопросы</p>
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
