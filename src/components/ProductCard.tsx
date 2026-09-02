"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
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
    maximumFractionDigits: 0,
  }).format(price);

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -6 }}
      className="group gradient-border rounded-2xl bg-bg-elev overflow-hidden"
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={imageUrl}
          alt={title}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/30 to-transparent" />
        <div className="absolute top-4 right-4 glass rounded-full px-3 py-1 text-xs font-semibold text-gold glow-gold">
          {formattedPrice}
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
            Live Demo
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
          <OrderButton productId={id} />
        </div>
      </div>
    </motion.article>
  );
}
