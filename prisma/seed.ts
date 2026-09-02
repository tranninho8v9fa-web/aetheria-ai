import "dotenv/config";
import { prisma } from "../src/lib/prisma";

const products = [
  {
    title: "Obsidian Portfolio",
    price: 1200,
    description:
      "A high-impact personal site for designers, devs, and creators. Editorial layout, motion-driven sections, contact capture.",
    imageUrl:
      "https://images.unsplash.com/photo-1558655146-d09347e92766?w=1200&q=80",
    demoUrl: "https://demo.aetheria.ai/obsidian",
  },
  {
    title: "Aether SaaS",
    price: 2400,
    description:
      "Conversion-first SaaS landing page. Pricing tables, feature grids, animated hero, dark-first design system.",
    imageUrl:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200&q=80",
    demoUrl: "https://demo.aetheria.ai/aether-saas",
  },
  {
    title: "Noir Agency",
    price: 1800,
    description:
      "Bold agency homepage with case study grid, parallax scroll, and modular project pages. Built for studios.",
    imageUrl:
      "https://images.unsplash.com/photo-1487014679447-9f8336841d58?w=1200&q=80",
    demoUrl: "https://demo.aetheria.ai/noir-agency",
  },
  {
    title: "Helix Commerce",
    price: 3200,
    description:
      "Premium storefront for fashion and lifestyle brands. Editorial product detail, cart, checkout, Stripe-ready.",
    imageUrl:
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1200&q=80",
    demoUrl: "https://demo.aetheria.ai/helix-commerce",
  },
  {
    title: "Vertex Dashboard",
    price: 2800,
    description:
      "Internal-tool-style admin template. Charts, tables, side nav, role-based UI — perfect for SaaS operators.",
    imageUrl:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80",
    demoUrl: "https://demo.aetheria.ai/vertex-dashboard",
  },
  {
    title: "Lumen Editorial",
    price: 1500,
    description:
      "Long-form magazine layout. Type-driven, image-led, with subscriptions, paywall, and CMS hooks.",
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
  console.log("→ Seeding catalogue…");
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
  console.log(`Done. ${count} products in catalogue.`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
