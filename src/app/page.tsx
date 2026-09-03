import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { ProductGrid } from "@/components/ProductGrid";
import { Process } from "@/components/Process";
import { Features } from "@/components/Features";
import { TechStack } from "@/components/TechStack";
import { Testimonials } from "@/components/Testimonials";
import { FAQ } from "@/components/FAQ";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";
import { ScrollProgress } from "@/components/ScrollProgress";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <div className="noise" aria-hidden />
      <Header />
      <main className="flex-1">
        <Hero />
        <Marquee />
        <ProductGrid />
        <Process />
        <Features />
        <TechStack />
        <Testimonials />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
