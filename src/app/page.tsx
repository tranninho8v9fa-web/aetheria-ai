import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { TrustBar } from "@/components/TrustBar";
import { Marquee } from "@/components/Marquee";
import { ProductGrid } from "@/components/ProductGrid";
import { WhyUs } from "@/components/WhyUs";
import { CaseStudy } from "@/components/CaseStudy";
import { WhatYouGet } from "@/components/WhatYouGet";
import { Process } from "@/components/Process";
import { Features } from "@/components/Features";
import { TechStack } from "@/components/TechStack";
import { Guarantees } from "@/components/Guarantees";
import { Testimonials } from "@/components/Testimonials";
import { FAQ } from "@/components/FAQ";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";
import { ScrollProgress } from "@/components/ScrollProgress";
import { StickyCTA } from "@/components/StickyCTA";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <div className="noise" aria-hidden />
      <Header />
      <main className="flex-1">
        <Hero />
        <TrustBar />
        <Marquee />
        <ProductGrid />
        <WhyUs />
        <CaseStudy />
        <WhatYouGet />
        <Process />
        <Features />
        <Guarantees />
        <TechStack />
        <Testimonials />
        <FAQ />
        <ContactForm />
      </main>
      <Footer />
      <StickyCTA />
    </>
  );
}
