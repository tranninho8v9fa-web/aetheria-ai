import { Sparkles } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-[var(--color-border)] mt-12">
      <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2.5">
          <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-cyan to-gold flex items-center justify-center">
            <Sparkles className="w-3.5 h-3.5 text-black" strokeWidth={2.5} />
          </div>
          <span className="font-semibold tracking-tight text-sm">
            Aetheria<span className="text-cyan">.AI</span>
          </span>
        </div>
        <p className="text-xs text-fg-subtle tracking-wider uppercase">
          © 2026 Aetheria AI · Crafted with Next.js & Prisma
        </p>
        <div className="flex items-center gap-5 text-sm text-fg-muted">
          <a href="#" className="hover:text-cyan transition-colors">Twitter</a>
          <a href="#" className="hover:text-cyan transition-colors">GitHub</a>
          <a href="#" className="hover:text-cyan transition-colors">Dribbble</a>
        </div>
      </div>
    </footer>
  );
}
