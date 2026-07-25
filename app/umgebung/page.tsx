"use client";

import Link from "next/link";
import { Utensils, Sailboat, Waves as WavesIcon, Music } from "lucide-react";
import { useLanguage } from "@/lib/language";
import { ui } from "@/data/i18n/ui";
import { FadeIn } from "@/components/motion/FadeIn";
import { StaggerList, StaggerItem } from "@/components/motion/StaggerList";
import { PhotoSlot } from "@/components/ui/PhotoSlot";

const sections = [
  {
    href: "/umgebung/restaurants",
    icon: Utensils,
    key: "restaurants" as const,
    category: "restaurants" as const,
    image: "/images/restaurants/riva-fish.jpg",
    text: {
      de: "Gute und preisgünstige Restaurants in Okrug Gornji und Trogir.",
      en: "Great and budget-friendly restaurants in Okrug Gornji and Trogir.",
      hr: "Dobri i pristupačni restorani u Okrug Gornjem i Trogiru.",
      pl: "Dobre i tanie restauracje w Okrug Gornji i Trogirze.",
    },
  },
  {
    href: "/umgebung/aktivitaeten",
    icon: Sailboat,
    key: "aktivitaeten" as const,
    category: "activities" as const,
    image: "/images/activities/boot-trogir.jpg",
    text: {
      de: "Jetski, Boot & Kajak mieten – inkl. Lizenz-Hinweisen und Routen-Start.",
      en: "Rent a jet ski, boat or kayak – incl. license notes and one-tap route start.",
      hr: "Iznajmi jetski, brod ili kajak – uz napomene o dozvolama i pokretanje rute.",
      pl: "Wynajmij skuter wodny, łódź lub kajak – z informacjami o licencjach i startem trasy.",
    },
  },
  {
    href: "/umgebung/straende",
    icon: WavesIcon,
    key: "straende" as const,
    category: "beaches" as const,
    image: "/images/beaches/ciovo-felsen.jpg",
    text: {
      de: "Die schönsten Strände rund um Okrug und Čiovo – inkl. Seeigel-Warnung.",
      en: "The best beaches around Okrug and Čiovo – incl. sea urchin warning.",
      hr: "Najljepše plaže oko Okruga i Čiova – uz upozorenje o morskim ježincima.",
      pl: "Najpiękniejsze plaże wokół Okrug i Čiovo – wraz z ostrzeżeniem o jeżowcach.",
    },
  },
  {
    href: "/umgebung/nightlife",
    icon: Music,
    key: "nightlife" as const,
    category: "nightlife" as const,
    image: "/images/nightlife/lounge-ciovo.jpg",
    text: {
      de: "Bars, Lounges und Clubs für den Abend.",
      en: "Bars, lounges and clubs for the evening.",
      hr: "Barovi, loungeovi i klubovi za večer.",
      pl: "Bary, lounge i kluby na wieczór.",
    },
  },
];

export default function UmgebungPage() {
  const { lang } = useLanguage();

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
      <FadeIn>
        <h1 className="mb-2 font-display text-3xl font-semibold text-sea-900 sm:text-4xl">
          {ui.nav.umgebung[lang]}
        </h1>
        <p className="mb-8 max-w-xl text-sea-900/70">{ui.pages.umgebungHubIntro[lang]}</p>
      </FadeIn>

      <StaggerList className="grid gap-5 sm:grid-cols-2">
        {sections.map((s) => (
          <StaggerItem key={s.href}>
            <Link href={s.href} className="group block overflow-hidden rounded-2xl border border-sand-200 bg-white shadow-sm transition-shadow hover:shadow-md">
              <div className="overflow-hidden">
                <PhotoSlot category={s.category} alt={ui.umgebungSub[s.key][lang]} className="h-40 w-full" zoomOnHover src={s.image} />
              </div>
              <div className="p-5">
                <div className="mb-1 flex items-center gap-2 font-display text-lg font-semibold text-sea-900">
                  <s.icon className="h-5 w-5 text-terracotta-500" />
                  {ui.umgebungSub[s.key][lang]}
                </div>
                <p className="text-sm text-sea-900/70">{s.text[lang]}</p>
              </div>
            </Link>
          </StaggerItem>
        ))}
      </StaggerList>
    </div>
  );
}
