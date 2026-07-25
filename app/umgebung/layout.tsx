import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Umgebung entdecken – Nenad's Guide",
  description:
    "Restaurants, Aktivitäten, Strände und Nightlife rund um Okrug Gornji und Trogir – Nenads persönliche Empfehlungen.",
};

export default function UmgebungLayout({ children }: { children: React.ReactNode }) {
  return children;
}
