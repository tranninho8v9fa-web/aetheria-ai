import { prisma } from "./prisma";
import type { Product } from "@/generated/prisma/client";

export async function getProducts(): Promise<Product[]> {
  return prisma.product.findMany({
    orderBy: { price: "asc" },
  });
}

export async function getProduct(id: string): Promise<Product | null> {
  return prisma.product.findUnique({ where: { id } });
}
