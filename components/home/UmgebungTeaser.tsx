"use client";

import Link from "next/link";
import { Utensils, Waves as WavesIcon, Sailboat, Music } from "lucide-react";
import { useLanguage } from "@/lib/language";
import { ui } from "@/data/i18n/ui";
import { FadeIn } from "@/components/motion/FadeIn";
import { StaggerList, StaggerItem } from "@/components/motion/StaggerList";
import { PhotoSlot } from "@/components/ui/PhotoSlot";

const teasers = [
  {
    href: "/umgebung/restaurants",
    icon: Utensils,
    key: "restaurants" as const,
    category: "restaurants" as const,
    image: "/images/restaurants/konoba-trs.jpg",
    text: { de: "Gute und günstige Restaurants in der Nähe.", en: "Great and budget-friendly restaurants nearby." },
  },
  {
    href: "/umgebung/aktivitaeten",
    icon: Sailboat,
    key: "aktivitaeten" as const,
    category: "activities" as const,
    image: "/images/activities/jetski-okrug.jpg",
    text: { de: "Jetski & Boot mieten – inkl. Routen-Start.", en: "Rent a jet ski or boat – with route start." },
  },
  {
    href: "/umgebung/straende",
    icon: WavesIcon,
    key: "straende" as const,
    category: "beaches" as const,
    image: "/images/beaches/plaza-okrug-gornji.jpg",
    text: { de: "Die schönsten Strände – und wo Seeigel lauern.", en: "The best beaches – and where sea urchins hide." },
  },
  {
    href: "/umgebung/nightlife",
    icon: Music,
    key: "nightlife" as const,
    category: "house" as const,
    image: "/images/nightlife/beach-bar-okrug.jpg",
    text: { de: "Bars und Clubs für den Abend.", en: "Bars and clubs for the evening." },
  },
];

export function UmgebungTeaser() {
  const { lang } = useLanguage();

  return (
    <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
      <FadeIn>
        <div className="mb-6 flex items-end justify-between">
          <h2 className="font-display text-2xl font-semibold text-sea-900 sm:text-3xl">
            {lang === "de" ? "Umgebung entdecken" : "Explore the surroundings"}
          </h2>
          <Link href="/umgebung" className="text-sm font-semibold text-sea-700 hover:text-sea-900">
            {ui.common.mehrErfahren[lang]} →
          </Link>
        </div>
      </FadeIn>
      <StaggerList className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {teasers.map((t) => (
          <StaggerItem key={t.href}>
            <Link href={t.href} className="group block overflow-hidden rounded-2xl border border-sand-200 bg-white shadow-sm transition-shadow hover:shadow-md">
              <div className="overflow-hidden">
                <PhotoSlot category={t.category} alt={t.text[lang]} className="h-32 w-full" zoomOnHover src={t.image} />
              </div>
              <div className="p-4">
                <div className="mb-1 flex items-center gap-2 font-display font-semibold text-sea-900">
                  <t.icon className="h-4 w-4 text-terracotta-500" />
                  {ui.umgebungSub[t.key][lang]}
                </div>
                <p className="text-sm text-sea-900/70">{t.text[lang]}</p>
              </div>
            </Link>
          </StaggerItem>
        ))}
      </StaggerList>
    </section>
  );
}
