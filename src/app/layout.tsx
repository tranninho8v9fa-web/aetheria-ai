import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Aetheria AI — Luxury AI Sites Studio",
  description:
    "Premium AI-powered websites for ambitious brands. Curated templates, AI generation, instant deploy.",
  metadataBase: new URL("https://aetheria.ai"),
  openGraph: {
    title: "Aetheria AI",
    description: "Luxury websites, powered by AI.",
    type: "website",
  },
  twitter: { card: "summary_large_image", title: "Aetheria AI" },
};

export const viewport: Viewport = {
  themeColor: "#050505",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
