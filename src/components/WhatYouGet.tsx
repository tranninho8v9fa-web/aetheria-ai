"use client";

import { motion } from "framer-motion";
import { Check, X } from "lucide-react";

const tiers = [
  {
    name: "Готовый шаблон",
    price: "от 99 000 ₽",
    description: "Идеально для быстрого старта и тестирования гипотез",
    features: [
      { text: "Готовый дизайн из коллекции", included: true },
      { text: "До 5 страниц", included: true },
      { text: "Базовая SEO-оптимизация", included: true },
      { text: "Адаптивная вёрстка", included: true },
      { text: "30 дней поддержки", included: true },
      { text: "Домен + хостинг на 1 год", included: true },
      { text: "Кастомные секции", included: false },
      { text: "Интеграция с CRM/ERP", included: false },
    ],
  },
  {
    name: "Кастом Pro",
    price: "от 399 000 ₽",
    description: "Уникальный сайт, заточенный под ваш бренд",
    features: [
      { text: "Уникальный дизайн с нуля", included: true },
      { text: "До 15 страниц", included: true },
      { text: "Продвинутая SEO + аналитика", included: true },
      { text: "Адаптив + PWA", included: true },
      { text: "90 дней поддержки", included: true },
      { text: "Домен + CDN", included: true },
      { text: "Кастомные секции и анимации", included: true },
      { text: "Интеграция с CRM/ERP", included: true },
    ],
    featured: true,
  },
  {
    name: "Корпоративный",
    price: "от 999 000 ₽",
    description: "Для больших продуктов и команд",
    features: [
      { text: "Всё из Pro-тарифа", included: true },
      { text: "Безлимит страниц", included: true },
      { text: "Backend + API + админка", included: true },
      { text: "Multi-language", included: true },
      { text: "365 дней поддержки", included: true },
      { text: "SLA 99.9%", included: true },
      { text: "Выделенная команда", included: true },
      { text: "Обучение команды клиента", included: true },
    ],
  },
];

export function WhatYouGet() {
  return (
    <section id="pricing" className="section relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-xs uppercase tracking-[0.3em] text-cyan mb-3">Тарифы</p>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight">
            Что вы <span className="text-gradient-aurora">получаете</span>
          </h2>
          <p className="max-w-2xl mx-auto text-fg-muted mt-6 text-lg">
            Три пакета под любой бюджет. Цена = цена. Без скрытых платежей.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {tiers.map((tier, i) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`relative rounded-2xl p-8 ${
                tier.featured
                  ? "gradient-border bg-bg-elev ring-2 ring-cyan/30"
                  : "gradient-border bg-bg-elev"
              }`}
            >
              {tier.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-cyan to-gold text-black text-xs font-bold uppercase tracking-wider">
                  Популярный
                </div>
              )}
              <div className="text-xs uppercase tracking-[0.2em] text-fg-muted mb-2">
                {tier.name}
              </div>
              <div className="text-4xl font-bold text-gradient-aurora mb-2">
                {tier.price}
              </div>
              <p className="text-sm text-fg-muted mb-6 min-h-[40px]">{tier.description}</p>
              <ul className="space-y-3 mb-8">
                {tier.features.map((f) => (
                  <li key={f.text} className="flex items-start gap-2 text-sm">
                    {f.included ? (
                      <Check className="w-4 h-4 text-cyan mt-0.5 flex-shrink-0" />
                    ) : (
                      <X className="w-4 h-4 text-fg-subtle mt-0.5 flex-shrink-0" />
                    )}
                    <span className={f.included ? "" : "text-fg-subtle line-through"}>
                      {f.text}
                    </span>
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className={`w-full inline-flex items-center justify-center py-3 rounded-full font-semibold transition-all ${
                  tier.featured ? "btn-gold" : "btn-glass"
                }`}
              >
                Заказать
              </a>
            </motion.div>
          ))}
        </div>

        <p className="text-center text-sm text-fg-subtle mt-10">
          Не уверены какой пакет?{" "}
          <a href="#contact" className="text-cyan hover:underline">
            Расскажите о проекте
          </a>{" "}
          — подберём.
        </p>
      </div>
    </section>
  );
}
