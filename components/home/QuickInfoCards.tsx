"use client";

import Link from "next/link";
import { Wifi, ParkingSquare, Clock, MapPin } from "lucide-react";
import { useLanguage } from "@/lib/language";
import { ui } from "@/data/i18n/ui";
import { FadeIn } from "@/components/motion/FadeIn";
import { StaggerList, StaggerItem } from "@/components/motion/StaggerList";
import { Card } from "@/components/ui/Card";

const cards = [
  {
    icon: Wifi,
    href: "/haus#wifi-parken",
    title: { de: "WLAN", en: "WiFi", hr: "WiFi", pl: "WiFi" },
    value: { de: "SUNCE · 123456789", en: "SUNCE · 123456789", hr: "SUNCE · 123456789", pl: "SUNCE · 123456789" },
  },
  {
    icon: ParkingSquare,
    href: "/haus#wifi-parken",
    title: { de: "Parken", en: "Parking", hr: "Parkiranje", pl: "Parking" },
    value: { de: "Kostenlos, Nr. 29", en: "Free, no. 29", hr: "Besplatno, kbr. 29", pl: "Bezpłatnie, nr 29" },
  },
  {
    icon: Clock,
    href: "/haus#hausordnung",
    title: { de: "Check-in / -out", en: "Check-in / -out", hr: "Prijava / odjava", pl: "Zameldowanie / wymeldowanie" },
    value: {
      de: "15:00 Uhr / 10:00 Uhr",
      en: "3:00 PM / 10:00 AM",
      hr: "15:00 / 10:00",
      pl: "15:00 / 10:00",
    },
  },
  {
    icon: MapPin,
    href: "/anreise",
    title: { de: "Adresse", en: "Address", hr: "Adresa", pl: "Adres" },
    value: { de: "Okrug Gornji 29", en: "Okrug Gornji 29", hr: "Okrug Gornji 29", pl: "Okrug Gornji 29" },
  },
];

export function QuickInfoCards() {
  const { lang } = useLanguage();

  return (
    <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
      <FadeIn>
        <h2 className="mb-6 text-center font-display text-2xl font-semibold text-sea-900 sm:text-3xl">
          {ui.home.quickInfoTitle[lang]}
        </h2>
      </FadeIn>
      <StaggerList className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {cards.map((c) => (
          <StaggerItem key={c.title.de}>
            <Link href={c.href}>
              <Card className="flex h-full flex-col items-start gap-2">
                <div className="rounded-full bg-sea-50 p-2 text-sea-700">
                  <c.icon className="h-5 w-5" />
                </div>
                <p className="text-sm font-medium text-sea-900/60">{c.title[lang]}</p>
                <p className="font-display text-lg font-semibold text-sea-900">{c.value[lang]}</p>
              </Card>
            </Link>
          </StaggerItem>
        ))}
      </StaggerList>
    </section>
  );
}
