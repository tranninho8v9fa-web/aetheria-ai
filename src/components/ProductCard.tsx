"use client";

import { motion, useMotionValue, useTransform } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { useRef } from "react";
import { OrderButton } from "./OrderButton";

type ProductCardProps = {
  id: string;
  title: string;
  description: string;
  price: number;
  imageUrl: string;
  demoUrl: string;
  index: number;
};

export function ProductCard({
  id,
  title,
  description,
  price,
  imageUrl,
  demoUrl,
  index,
}: ProductCardProps) {
  const formattedPrice = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
  }).format(price);

  // 3D tilt on hover
  const ref = useRef<HTMLElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rotateX = useTransform(my, [-0.5, 0.5], [6, -6]);
  const rotateY = useTransform(mx, [-0.5, 0.5], [-6, 6]);

  function handleMove(e: React.MouseEvent<HTMLElement>) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    mx.set((e.clientX - rect.left) / rect.width - 0.5);
    my.set((e.clientY - rect.top) / rect.height - 0.5);
  }
  function handleLeave() {
    mx.set(0);
    my.set(0);
  }

  return (
    <motion.article
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d", perspective: 1000 }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="group gradient-border rounded-2xl bg-bg-elev overflow-hidden relative"
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={imageUrl}
          alt={title}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/30 to-transparent" />
        <div className="absolute top-4 right-4 glass rounded-full px-3 py-1 text-xs font-semibold text-gold glow-gold">
          {formattedPrice}
        </div>
        <div className="absolute top-4 left-4 glass rounded-full px-3 py-1 text-[10px] uppercase tracking-widest text-cyan">
          Шаблон
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-semibold tracking-tight mb-2 group-hover:text-cyan transition-colors">
          {title}
        </h3>
        <p className="text-sm text-fg-muted leading-relaxed mb-6 line-clamp-2">
          {description}
        </p>
        <div className="flex items-center justify-between gap-3">
          <a
            href={demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-sm text-fg-muted hover:text-cyan transition-colors"
          >
            Демо
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
          <OrderButton productId={id} />
        </div>
      </div>
    </motion.article>
  );
}
