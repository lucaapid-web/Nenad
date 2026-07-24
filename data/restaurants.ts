import { Bilingual } from "./types";

export type PriceTier = "€" | "€€" | "€€€";

export interface Restaurant {
  id: string;
  name: string;
  tier: PriceTier;
  cuisine: Bilingual;
  description: Bilingual;
  mapsQuery: string;
}

export const restaurantsDisclaimer: Bilingual = {
  de: "Beispielhafte Empfehlungen – bitte aktuelle Öffnungszeiten und Bewertungen vor Ort bzw. online prüfen.",
  en: "Example recommendations – please check current opening hours and reviews locally or online.",
};

export const restaurants: Restaurant[] = [
  {
    id: "konoba-trs",
    name: "Konoba Trs",
    tier: "€€",
    cuisine: { de: "Dalmatinisch, traditionell", en: "Dalmatian, traditional" },
    description: {
      de: "Familiär geführte Konoba mit Fokus auf frischen Fisch und Grillfleisch, gemütlicher Innenhof.",
      en: "Family-run konoba focused on fresh fish and grilled meat, cozy courtyard seating.",
    },
    mapsQuery: "Konoba Trogir Croatia",
  },
  {
    id: "riva-fish",
    name: "Riva Fish Restaurant",
    tier: "€€€",
    cuisine: { de: "Meeresfrüchte, gehoben", en: "Seafood, upscale" },
    description: {
      de: "Restaurant direkt an der Promenade von Trogir mit Blick aufs Wasser – ideal für einen besonderen Abend.",
      en: "Waterfront restaurant on Trogir's promenade – great for a special evening.",
    },
    mapsQuery: "Riva Restaurant Trogir",
  },
  {
    id: "pizzeria-okrug",
    name: "Pizzeria Okrug",
    tier: "€",
    cuisine: { de: "Pizza, Fast Casual", en: "Pizza, fast casual" },
    description: {
      de: "Einfache, günstige Pizzeria in Laufnähe – gut für einen entspannten Abend ohne großen Aufwand.",
      en: "Simple, budget-friendly pizzeria within walking distance – great for a relaxed, low-key evening.",
    },
    mapsQuery: "Pizzeria Okrug Gornji Croatia",
  },
  {
    id: "bistro-luka",
    name: "Bistro Luka",
    tier: "€",
    cuisine: { de: "Kroatische Hausmannskost", en: "Croatian home cooking" },
    description: {
      de: "Kleines Bistro mit Tagesgerichten zu fairen Preisen – beliebt bei Einheimischen.",
      en: "Small bistro with daily specials at fair prices – popular with locals.",
    },
    mapsQuery: "Bistro Okrug Donji Croatia",
  },
];
