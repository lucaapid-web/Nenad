import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/components/i18n/LanguageProvider";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ChatWidget } from "@/components/chat/ChatWidget";
import { ScrollProgress } from "@/components/motion/ScrollProgress";
import { siteUrl } from "@/data/contact";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Nenad's Guide – Okrug Gornji",
    template: "%s",
  },
  description:
    "Alle Infos zu deiner Unterkunft in Okrug Gornji, Kroatien: Hausregeln, WLAN, Anreise und die schönsten Ecken der Umgebung.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de" className={`${fraunces.variable} ${inter.variable}`}>
      <body className="flex min-h-screen flex-col font-body">
        <LanguageProvider>
          <div className="grain-overlay print:hidden" aria-hidden="true" />
          <ScrollProgress />
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <ChatWidget />
        </LanguageProvider>
      </body>
    </html>
  );
}
