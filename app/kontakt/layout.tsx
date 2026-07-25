import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kontakt – Nenad's Guide",
  description:
    "Lern deinen Gastgeber Nenad kennen und erreiche ihn direkt per Anruf oder WhatsApp.",
};

export default function KontaktLayout({ children }: { children: React.ReactNode }) {
  return children;
}
