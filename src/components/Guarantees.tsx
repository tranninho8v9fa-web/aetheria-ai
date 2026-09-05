"use client";

import { motion } from "framer-motion";
import { Headphones, Lock, RefreshCw, ShieldCheck } from "lucide-react";

const guarantees = [
  {
    icon: ShieldCheck,
    title: "30 дней гарантии возврата",
    text: "Не понравился результат — вернём 100% оплаты. Без вопросов, без задержек, без юридических уловок.",
  },
  {
    icon: RefreshCw,
    title: "Бесплатные ревизии",
    text: "До 3 раунда правок включены в стоимость каждого тарифа. Дальше — доп. согласование по часам.",
  },
  {
    icon: Headphones,
    title: "Поддержка после запуска",
    text: "30 дней бесплатной поддержки, потом тариф от 8 000 ₽/мес. Реальный человек на связи, не бот и не тикет-система.",
  },
  {
    icon: Lock,
    title: "Сайт = ваша собственность",
    text: "Код, дизайн, контент, домен, хостинг — всё ваше. Никаких подписок, vendor lock-in или скрытых платежей.",
  },
];

export function Guarantees() {
  return (
    <section id="guarantees" className="section">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="gradient-border rounded-3xl bg-bg-elev p-8 md:p-12 relative overflow-hidden"
        >
          <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-cyan/20 blur-[100px]" />
          <div className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-gold/20 blur-[100px]" />

          <div className="relative">
            <div className="text-center mb-12">
              <p className="text-xs uppercase tracking-[0.3em] text-cyan mb-3">Гарантии</p>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
                Мы <span className="text-gradient-aurora">отвечаем</span> за результат
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {guarantees.map((g, i) => (
                <motion.div
                  key={g.title}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <g.icon className="w-8 h-8 text-cyan flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold mb-2">{g.title}</h3>
                    <p className="text-sm text-fg-muted leading-relaxed">{g.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
