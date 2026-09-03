import "dotenv/config";
import { prisma } from "../src/lib/prisma";

const products = [
  {
    title: "Obsidian Portfolio",
    price: 1200,
    description:
      "Эффектный личный сайт для дизайнеров, разработчиков и креаторов. Редакционная вёрстка, моушн-секции, встроенный сбор контактов.",
    imageUrl:
      "https://images.unsplash.com/photo-1558655146-d09347e92766?w=1200&q=80",
    demoUrl: "https://demo.aetheria.ai/obsidian",
  },
  {
    title: "Aether SaaS",
    price: 2400,
    description:
      "Лендинг для SaaS, заточенный под конверсию. Тарифы, фичи, анимированный hero, тёмная дизайн-система. Подключается к Stripe за вечер.",
    imageUrl:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200&q=80",
    demoUrl: "https://demo.aetheria.ai/aether-saas",
  },
  {
    title: "Noir Agency",
    price: 1800,
    description:
      "Смелая главная для агентства: кейсы в виде сетки, параллакс при скролле, модульные страницы проектов. Создан для студий, которые продают смысл.",
    imageUrl:
      "https://images.unsplash.com/photo-1487014679447-9f8336841d58?w=1200&q=80",
    demoUrl: "https://demo.aetheria.ai/noir-agency",
  },
  {
    title: "Helix Commerce",
    price: 3200,
    description:
      "Премиальный магазин для fashion и lifestyle-брендов. Продуктовые карточки, корзина, чекаут, готов под Stripe. Без костылей и Shopify-комиссий.",
    imageUrl:
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1200&q=80",
    demoUrl: "https://demo.aetheria.ai/helix-commerce",
  },
  {
    title: "Vertex Dashboard",
    price: 2800,
    description:
      "Шаблон админки в духе internal tools. Графики, таблицы, боковое меню, ролевая модель. Идеален для SaaS-операторов и команд роста.",
    imageUrl:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80",
    demoUrl: "https://demo.aetheria.ai/vertex-dashboard",
  },
  {
    title: "Lumen Editorial",
    price: 1500,
    description:
      "Длинный журнальный формат. Типографика, изображения, подписки, paywall, хуки под любую CMS. Для медиа, рассылок и бренд-журналов.",
    imageUrl:
      "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=1200&q=80",
    demoUrl: "https://demo.aetheria.ai/lumen-editorial",
  },
];

const slugify = (s: string) =>
  s
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

async function main() {
  console.log("→ Пересоздаю каталог (русские описания)…");
  let count = 0;
  for (const p of products) {
    const id = slugify(p.title);
    const result = await prisma.product.upsert({
      where: { id },
      create: { id, ...p },
      update: p,
    });
    console.log(`  ✓ ${result.title} ($${result.price})`);
    count += 1;
  }
  console.log(`Готово. ${count} продуктов в каталоге.`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
