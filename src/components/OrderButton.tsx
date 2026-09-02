"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Check, Loader2, ShoppingBag } from "lucide-react";

type Status = "idle" | "loading" | "success" | "error";

export function OrderButton({ productId }: { productId: string }) {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState<string>("");

  async function handleClick() {
    if (status === "loading") return;
    setStatus("loading");
    setMessage("");
    try {
      const res = await fetch("/api/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ productId }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        setStatus("error");
        setMessage((data as { error?: string }).error ?? "Failed");
        setTimeout(() => setStatus("idle"), 2400);
        return;
      }
      setStatus("success");
      setMessage("Order placed");
      setTimeout(() => setStatus("idle"), 2200);
    } catch {
      setStatus("error");
      setMessage("Network error");
      setTimeout(() => setStatus("idle"), 2400);
    }
  }

  return (
    <motion.button
      onClick={handleClick}
      disabled={status === "loading"}
      whileTap={{ scale: 0.96 }}
      className="btn-gold text-sm py-2 px-4"
    >
      <AnimatePresence mode="wait" initial={false}>
        {status === "idle" && (
          <motion.span
            key="idle"
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.15 }}
            className="inline-flex items-center gap-1.5"
          >
            <ShoppingBag className="w-3.5 h-3.5" />
            Buy
          </motion.span>
        )}
        {status === "loading" && (
          <motion.span
            key="loading"
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.15 }}
            className="inline-flex items-center gap-1.5"
          >
            <Loader2 className="w-3.5 h-3.5 animate-spin" />
            Placing
          </motion.span>
        )}
        {status === "success" && (
          <motion.span
            key="success"
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.15 }}
            className="inline-flex items-center gap-1.5"
          >
            <Check className="w-3.5 h-3.5" />
            {message}
          </motion.span>
        )}
        {status === "error" && (
          <motion.span
            key="error"
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.15 }}
            className="inline-flex items-center gap-1.5"
          >
            {message}
          </motion.span>
        )}
      </AnimatePresence>
    </motion.button>
  );
}
