"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Building2, Check, Loader2, Mail, MessageSquare, Send, User } from "lucide-react";

type Status = "idle" | "loading" | "success" | "error";

const budgets = [
  "до $2,000",
  "$2,000 — $5,000",
  "$5,000 — $15,000",
  "от $15,000",
  "Не определился",
];

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setError("");

    const form = e.currentTarget;
    const fd = new FormData(form);
    const data = {
      name: fd.get("name"),
      email: fd.get("email"),
      company: fd.get("company") || null,
      budget: fd.get("budget") || null,
      message: fd.get("message"),
      source: "contact_form",
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = (await res.json().catch(() => ({}))) as { error?: string };
      if (!res.ok) {
        setError(json.error ?? "Ошибка отправки");
        setStatus("error");
        setTimeout(() => setStatus("idle"), 3500);
        return;
      }
      setStatus("success");
      form.reset();
    } catch {
      setError("Сеть недоступна. Попробуйте позже.");
      setStatus("error");
      setTimeout(() => setStatus("idle"), 3500);
    }
  }

  return (
    <section id="contact" className="section relative overflow-hidden">
      <div aria-hidden className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full bg-cyan/10 blur-[140px]" />
        <div className="absolute top-1/2 left-1/3 w-[500px] h-[500px] rounded-full bg-gold/10 blur-[120px]" />
      </div>

      <div className="max-w-4xl mx-auto relative">
        <div className="text-center mb-12">
          <p className="text-xs uppercase tracking-[0.3em] text-cyan mb-3">Контакт</p>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">
            Готовы{" "}
            <span className="text-gradient-aurora glow-cyan">в космос?</span>
          </h2>
          <p className="text-lg text-fg-muted max-w-2xl mx-auto">
            Опишите проект в 2-3 предложениях — вернёмся с оценкой и сроками в течение 2 часов.
          </p>
        </div>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          onSubmit={handleSubmit}
          className="gradient-border rounded-2xl bg-bg-elev p-8 md:p-12 space-y-6"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-xs uppercase tracking-wider text-fg-muted mb-2">
                <User className="inline w-3 h-3 mr-1" /> Имя *
              </label>
              <input
                name="name"
                type="text"
                required
                minLength={2}
                disabled={status === "loading" || status === "success"}
                className="w-full px-4 py-3 rounded-xl bg-bg border border-[var(--color-border)] focus:border-cyan focus:outline-none transition-colors disabled:opacity-50"
                placeholder="Иван Петров"
              />
            </div>
            <div>
              <label className="block text-xs uppercase tracking-wider text-fg-muted mb-2">
                <Mail className="inline w-3 h-3 mr-1" /> Email *
              </label>
              <input
                name="email"
                type="email"
                required
                disabled={status === "loading" || status === "success"}
                className="w-full px-4 py-3 rounded-xl bg-bg border border-[var(--color-border)] focus:border-cyan focus:outline-none transition-colors disabled:opacity-50"
                placeholder="ivan@company.com"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-xs uppercase tracking-wider text-fg-muted mb-2">
                <Building2 className="inline w-3 h-3 mr-1" /> Компания
              </label>
              <input
                name="company"
                type="text"
                disabled={status === "loading" || status === "success"}
                className="w-full px-4 py-3 rounded-xl bg-bg border border-[var(--color-border)] focus:border-cyan focus:outline-none transition-colors disabled:opacity-50"
                placeholder="Название"
              />
            </div>
            <div>
              <label className="block text-xs uppercase tracking-wider text-fg-muted mb-2">
                Бюджет
              </label>
              <select
                name="budget"
                disabled={status === "loading" || status === "success"}
                className="w-full px-4 py-3 rounded-xl bg-bg border border-[var(--color-border)] focus:border-cyan focus:outline-none transition-colors disabled:opacity-50"
              >
                <option value="">Не указан</option>
                {budgets.map((b) => (
                  <option key={b} value={b}>
                    {b}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs uppercase tracking-wider text-fg-muted mb-2">
              <MessageSquare className="inline w-3 h-3 mr-1" /> О проекте *
            </label>
            <textarea
              name="message"
              required
              minLength={5}
              rows={4}
              disabled={status === "loading" || status === "success"}
              className="w-full px-4 py-3 rounded-xl bg-bg border border-[var(--color-border)] focus:border-cyan focus:outline-none transition-colors resize-none disabled:opacity-50"
              placeholder="Что за бизнес, какой сайт нужен, какие сроки, что не устраивает в текущем сайте…"
            />
          </div>

          <div className="flex items-center justify-between gap-4 flex-wrap pt-2">
            <p className="text-xs text-fg-subtle">
              * — обязательные поля. NDA по запросу. Без спама.
            </p>
            <button
              type="submit"
              disabled={status === "loading" || status === "success"}
              className="btn-gold text-base disabled:opacity-60 disabled:cursor-not-allowed min-w-[200px] justify-center"
            >
              <AnimatePresence mode="wait" initial={false}>
                {status === "idle" && (
                  <motion.span
                    key="idle"
                    initial={{ opacity: 0, y: 4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -4 }}
                    transition={{ duration: 0.15 }}
                    className="inline-flex items-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    Отправить заявку
                  </motion.span>
                )}
                {status === "loading" && (
                  <motion.span
                    key="loading"
                    initial={{ opacity: 0, y: 4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -4 }}
                    transition={{ duration: 0.15 }}
                    className="inline-flex items-center gap-2"
                  >
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Отправляем
                  </motion.span>
                )}
                {status === "success" && (
                  <motion.span
                    key="success"
                    initial={{ opacity: 0, y: 4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -4 }}
                    transition={{ duration: 0.15 }}
                    className="inline-flex items-center gap-2"
                  >
                    <Check className="w-4 h-4" />
                    Заявка получена
                  </motion.span>
                )}
                {status === "error" && (
                  <motion.span
                    key="error"
                    initial={{ opacity: 0, y: 4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -4 }}
                    transition={{ duration: 0.15 }}
                    className="inline-flex items-center gap-2"
                  >
                    {error}
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
          </div>

          <AnimatePresence>
            {status === "success" && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="overflow-hidden text-center text-cyan pt-4 border-t border-[var(--color-border)]"
              >
                <p className="text-sm">
                  Спасибо! Заявка #{/* id would be nice but we don't show */} в очереди. Мы свяжемся с вами в течение 2 часов.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.form>
      </div>
    </section>
  );
}
