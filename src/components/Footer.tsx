import { Sparkles, Send } from "lucide-react";

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.92.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.36-3.88-1.36-.52-1.32-1.28-1.67-1.28-1.67-1.04-.71.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.28 1.18-3.08-.12-.29-.51-1.46.11-3.04 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.58.24 2.75.12 3.04.74.8 1.18 1.82 1.18 3.08 0 4.42-2.69 5.4-5.25 5.68.41.36.78 1.05.78 2.12v3.14c0 .31.21.67.8.56C20.21 21.39 23.5 17.08 23.5 12 23.5 5.65 18.35.5 12 .5z" />
    </svg>
  );
}

function TwitterIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M18.244 2H21l-6.51 7.43L22 22h-6.79l-4.79-6.27L4.8 22H2l7.04-8.04L2 2h6.91l4.36 5.77L18.24 2zm-1.19 18h1.7L7.04 4H5.2l11.85 16z" />
    </svg>
  );
}

const sections = [
  {
    title: "Продукт",
    links: [
      { label: "Коллекция", href: "#collection" },
      { label: "Почему Aetheria", href: "#why" },
      { label: "Кейсы", href: "#cases" },
      { label: "Тарифы", href: "#pricing" },
    ],
  },
  {
    title: "Компания",
    links: [
      { label: "О нас", href: "#about" },
      { label: "Контакт", href: "#contact" },
      { label: "Кейсы", href: "#cases" },
      { label: "FAQ", href: "#faq" },
    ],
  },
  {
    title: "Документы",
    links: [
      { label: "Договор-оферта", href: "#" },
      { label: "Политика конфиденциальности", href: "#" },
      { label: "Cookies", href: "#" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-[var(--color-border)] mt-12 relative">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          <div className="col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan to-gold flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-black" strokeWidth={2.5} />
              </div>
              <span className="font-semibold tracking-tight text-lg">
                Aetheria<span className="text-cyan">.AI</span>
              </span>
            </div>
            <p className="text-sm text-fg-muted max-w-sm leading-relaxed mb-6">
              Премиальные AI-сайты для амбициозных брендов. Создаём цифровые
              продукты из будущего — сегодня. Москва, 2026.
            </p>
            <div className="flex items-center gap-3 mb-6">
              <a
                href="#"
                className="w-9 h-9 rounded-full glass flex items-center justify-center hover:border-cyan/40 hover:text-cyan transition-colors"
                aria-label="Telegram"
              >
                <Send className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full glass flex items-center justify-center hover:border-cyan/40 hover:text-cyan transition-colors"
                aria-label="Twitter"
              >
                <TwitterIcon className="w-3.5 h-3.5" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full glass flex items-center justify-center hover:border-cyan/40 hover:text-cyan transition-colors"
                aria-label="GitHub"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
            </div>
            <a
              href="mailto:hello@aetheria.ai"
              className="text-sm text-cyan hover:underline"
            >
              hello@aetheria.ai
            </a>
          </div>

          {sections.map((s) => (
            <div key={s.title}>
              <h4 className="text-xs uppercase tracking-widest text-cyan mb-4">
                {s.title}
              </h4>
              <ul className="space-y-2 text-sm text-fg-muted">
                {s.links.map((l) => (
                  <li key={l.label}>
                    <a href={l.href} className="hover:text-fg transition-colors">
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-[var(--color-border)] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-fg-subtle tracking-wider uppercase">
            © 2026 Aetheria AI · ИП «Aetheria» · Москва
          </p>
          <p className="text-xs text-fg-subtle">
            Сделано на Next.js · Prisma · Neon · Cosmic Energy
          </p>
        </div>
      </div>
    </footer>
  );
}
