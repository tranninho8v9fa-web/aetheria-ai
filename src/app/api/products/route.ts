import { NextResponse } from "next/server";
import { getProducts } from "@/lib/products";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

export async function GET() {
  try {
    const products = await getProducts();
    return NextResponse.json(
      products.map((p) => ({ ...p, price: Number(p.price) }))
    );
  } catch (err) {
    console.error("GET /api/products failed:", err);
    return NextResponse.json(
      { error: "Failed to fetch products" },
      { status: 500 }
    );
  }
}
