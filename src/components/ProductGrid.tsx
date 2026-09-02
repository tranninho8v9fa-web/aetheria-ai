import { getProducts } from "@/lib/products";
import { ProductCard } from "./ProductCard";

export async function ProductGrid() {
  const products = await getProducts().catch((err) => {
    console.error("Failed to load products:", err);
    return [];
  });

  return (
    <section id="collection" className="section">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-xs uppercase tracking-[0.3em] text-cyan mb-3">
            The Collection
          </p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Curated <span className="text-gradient-aurora">AI Sites</span>
          </h2>
          <p className="max-w-xl mx-auto text-fg-muted leading-relaxed">
            Each template is hand-tuned and tested. Pick one, we deploy it for
            you in 24 hours.
          </p>
        </div>

        {products.length === 0 ? (
          <div className="text-center text-fg-muted py-20 glass rounded-2xl">
            <p className="text-lg mb-2">No products yet — check back soon.</p>
            <p className="text-sm text-fg-subtle">
              (Run{" "}
              <code className="text-cyan bg-cyan-soft px-1.5 py-0.5 rounded">
                npm run db:seed
              </code>{" "}
              to populate the catalogue.)
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((p, i) => (
              <ProductCard
                key={p.id}
                id={p.id}
                title={p.title}
                description={p.description}
                price={Number(p.price)}
                imageUrl={p.imageUrl}
                demoUrl={p.demoUrl}
                index={i}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
