import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Haus & Praktisches – Nenad's Guide",
  description:
    "Hausordnung, WLAN-Zugang, Parken, Wäsche waschen, Grillen und Wissenswertes für deinen Aufenthalt in Okrug Gornji.",
};

export default function HausLayout({ children }: { children: React.ReactNode }) {
  return children;
}
