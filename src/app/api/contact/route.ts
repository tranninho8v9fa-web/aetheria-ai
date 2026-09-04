import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

export async function POST(req: NextRequest) {
  try {
    const body = (await req.json().catch(() => ({}))) as Record<string, unknown>;
    const name = typeof body.name === "string" ? body.name.trim() : "";
    const email = typeof body.email === "string" ? body.email.trim().toLowerCase() : "";
    const company = typeof body.company === "string" ? body.company.trim() : "";
    const message = typeof body.message === "string" ? body.message.trim() : "";
    const budget = typeof body.budget === "string" ? body.budget.trim() : "";
    const source = typeof body.source === "string" ? body.source : "contact_form";

    if (name.length < 2) {
      return NextResponse.json({ error: "Имя слишком короткое" }, { status: 400 });
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: "Некорректный email" }, { status: 400 });
    }
    if (message.length < 5) {
      return NextResponse.json({ error: "Опишите проект подробнее (минимум 5 символов)" }, { status: 400 });
    }
    if (message.length > 4000) {
      return NextResponse.json({ error: "Слишком длинное сообщение" }, { status: 400 });
    }

    const lead = await prisma.lead.create({
      data: {
        name: name.slice(0, 100),
        email: email.slice(0, 200),
        company: company ? company.slice(0, 100) : null,
        message: message.slice(0, 4000),
        budget: budget ? budget.slice(0, 50) : null,
        source: source.slice(0, 50),
      },
    });

    return NextResponse.json({ ok: true, leadId: lead.id });
  } catch (err) {
    console.error("POST /api/contact failed:", err);
    return NextResponse.json(
      { error: "Не удалось отправить заявку. Попробуйте позже или напишите на hello@aetheria.ai" },
      { status: 500 }
    );
  }
}
