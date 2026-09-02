import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

const DEMO_USER_EMAIL = "guest@aetheria.local";

export async function POST(req: NextRequest) {
  try {
    const body = (await req.json().catch(() => ({}))) as {
      productId?: string;
      email?: string;
      name?: string;
    };
    const { productId, email, name } = body;

    if (!productId || typeof productId !== "string") {
      return NextResponse.json(
        { error: "productId is required" },
        { status: 400 }
      );
    }

    const product = await prisma.product.findUnique({
      where: { id: productId },
    });
    if (!product) {
      return NextResponse.json(
        { error: "Product not found" },
        { status: 404 }
      );
    }

    // If a real email is supplied, attach to that user; otherwise use a single
    // demo user so the purchase flow can be demoed without auth.
    let userId: string;
    if (email && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      const user = await prisma.user.upsert({
        where: { email },
        create: { email, name: name ?? email.split("@")[0] },
        update: name ? { name } : {},
      });
      userId = user.id;
    } else {
      const demoUser = await prisma.user.upsert({
        where: { email: DEMO_USER_EMAIL },
        create: { email: DEMO_USER_EMAIL, name: "Guest" },
        update: {},
      });
      userId = demoUser.id;
    }

    const order = await prisma.order.create({
      data: {
        userId,
        productId,
        status: "PENDING",
      },
    });

    return NextResponse.json({ ok: true, orderId: order.id, status: order.status });
  } catch (err) {
    console.error("POST /api/orders failed:", err);
    return NextResponse.json(
      { error: "Failed to create order" },
      { status: 500 }
    );
  }
}
