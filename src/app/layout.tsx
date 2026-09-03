import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Aetheria AI — Студия AI-сайтов из будущего",
  description:
    "Премиальные AI-сайты для амбициозных брендов. Голографические анимации, космический дизайн, запуск за 24 часа.",
  metadataBase: new URL("https://aetheria.ai"),
  openGraph: {
    title: "Aetheria AI — Студия AI-сайтов из будущего",
    description: "Премиальные AI-сайты для амбициозных брендов.",
    type: "website",
    locale: "ru_RU",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aetheria AI",
    description: "Премиальные AI-сайты из будущего.",
  },
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
    <html lang="ru" className="dark h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
