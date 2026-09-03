import { Code2 } from "lucide-react";

const techs = [
  "Next.js 16",
  "React 19",
  "TypeScript",
  "Tailwind v4",
  "Framer Motion",
  "Prisma 7",
  "Neon Postgres",
  "Vercel Edge",
  "WebGL",
  "Three.js",
  "Lucide Icons",
  "ESLint",
];

export function TechStack() {
  return (
    <section className="section relative">
      <div className="max-w-5xl mx-auto text-center">
        <p className="text-xs uppercase tracking-[0.3em] text-cyan mb-3 inline-flex items-center gap-2">
          <Code2 className="w-3.5 h-3.5" />
          Технологии
        </p>
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-12">
          Стек, на котором мы <span className="text-gradient-aurora">летим</span>
        </h2>
        <div className="flex flex-wrap justify-center gap-3">
          {techs.map((t) => (
            <span
              key={t}
              className="px-4 py-2 rounded-full glass text-sm text-fg-muted hover:text-cyan hover:border-cyan/30 transition-colors"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
