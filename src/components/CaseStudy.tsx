"use client";

import { motion } from "framer-motion";
import { TrendingUp, Clock, Users, DollarSign, ArrowUpRight } from "lucide-react";
import Image from "next/image";

const metrics = [
  { icon: TrendingUp, value: "+47%", label: "Конверсия" },
  { icon: Clock, value: "3.2x", label: "Время на сайте" },
  { icon: Users, value: "+62%", label: "Лиды" },
  { icon: DollarSign, value: "14,7 млн ₽", label: "Выручка/мес" },
];

export function CaseStudy() {
  return (
    <section id="cases" className="section">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-xs uppercase tracking-[0.3em] text-cyan mb-3">Кейс</p>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight">
            Как мы сделали{" "}
            <span className="text-gradient-aurora">14,7 млн ₽/мес</span>
            <br />
            для Bloom за 12 дней
          </h2>
          <p className="max-w-2xl mx-auto text-fg-muted mt-6 text-lg">
            Магазин органической косметики. Перенесли с шаблонного Shopify на кастомный стек. Цифры — за 90 дней после запуска.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="gradient-border rounded-3xl bg-bg-elev overflow-hidden"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="relative aspect-[4/3] lg:aspect-auto lg:min-h-[500px]">
              <Image
                src="https://images.unsplash.com/photo-1556228720-195a672e8a03?w=1200&q=80"
                alt="Bloom — кейс Aetheria"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bg-elev via-transparent to-transparent lg:bg-gradient-to-r" />
            </div>
            <div className="p-8 lg:p-12 flex flex-col justify-center">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-xs uppercase tracking-[0.3em] text-cyan">Bloom</span>
                <span className="text-fg-subtle">·</span>
                <span className="text-xs uppercase tracking-[0.2em] text-fg-muted">E-commerce</span>
              </div>
              <h3 className="text-3xl font-bold mb-4">
                От Shopify-шаблона к премиальному e-com
              </h3>
              <p className="text-fg-muted mb-8 leading-relaxed">
                Клиент пришёл с Shopify-магазином, который выглядел на 2015 год и терял 78% пользователей на этапе чекаута. За 12 дней мы перенесли на кастомный Next.js + Stripe, оптимизировали воронку, добавили editorial-секции и подключили CRM.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                {metrics.map((m) => (
                  <div key={m.label} className="p-4 rounded-xl bg-bg border border-[var(--color-border)]">
                    <m.icon className="w-5 h-5 text-cyan mb-2" />
                    <div className="text-2xl font-bold text-gradient-aurora">{m.value}</div>
                    <div className="text-xs text-fg-muted uppercase tracking-wider mt-1">{m.label}</div>
                  </div>
                ))}
              </div>
              <a href="#contact" className="inline-flex items-center gap-2 text-cyan hover:gap-3 transition-all">
                Хочу такие же результаты
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
