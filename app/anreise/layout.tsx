import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Anreise – Nenad's Guide",
  description:
    "Adresse, Maps-Links und Infos zur Anreise vom Flughafen Split nach Okrug Gornji.",
};

export default function AnreiseLayout({ children }: { children: React.ReactNode }) {
  return children;
}
