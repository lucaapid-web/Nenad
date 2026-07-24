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
  hr: "Primjeri preporuka – molimo provjerite aktualno radno vrijeme i recenzije na licu mjesta ili online.",
  pl: "Przykładowe rekomendacje – prosimy sprawdzić aktualne godziny otwarcia i opinie na miejscu lub online.",
};

export const restaurants: Restaurant[] = [
  {
    id: "konoba-trs",
    name: "Konoba Trs",
    tier: "€€",
    cuisine: {
      de: "Dalmatinisch, traditionell",
      en: "Dalmatian, traditional",
      hr: "Dalmatinska, tradicionalna",
      pl: "Dalmatyńska, tradycyjna",
    },
    description: {
      de: "Familiär geführte Konoba mit Fokus auf frischen Fisch und Grillfleisch, gemütlicher Innenhof.",
      en: "Family-run konoba focused on fresh fish and grilled meat, cozy courtyard seating.",
      hr: "Obiteljska konoba s fokusom na svježu ribu i roštilj, ugodno dvorište.",
      pl: "Rodzinna konoba specjalizująca się w świeżych rybach i daniach z grilla, przytulny dziedziniec.",
    },
    mapsQuery: "Konoba Trogir Croatia",
  },
  {
    id: "riva-fish",
    name: "Riva Fish Restaurant",
    tier: "€€€",
    cuisine: {
      de: "Meeresfrüchte, gehoben",
      en: "Seafood, upscale",
      hr: "Plodovi mora, vrhunska kuhinja",
      pl: "Owoce morza, wykwintna kuchnia",
    },
    description: {
      de: "Restaurant direkt an der Promenade von Trogir mit Blick aufs Wasser – ideal für einen besonderen Abend.",
      en: "Waterfront restaurant on Trogir's promenade – great for a special evening.",
      hr: "Restoran uz samu rivu u Trogiru s pogledom na more – idealan za poseban izlazak.",
      pl: "Restauracja tuż przy promenadzie w Trogirze z widokiem na wodę – idealna na wyjątkowy wieczór.",
    },
    mapsQuery: "Riva Restaurant Trogir",
  },
  {
    id: "pizzeria-okrug",
    name: "Pizzeria Okrug",
    tier: "€",
    cuisine: {
      de: "Pizza, Fast Casual",
      en: "Pizza, fast casual",
      hr: "Pizza, brza i ležerna",
      pl: "Pizza, szybkie i swobodne",
    },
    description: {
      de: "Einfache, günstige Pizzeria in Laufnähe – gut für einen entspannten Abend ohne großen Aufwand.",
      en: "Simple, budget-friendly pizzeria within walking distance – great for a relaxed, low-key evening.",
      hr: "Jednostavna, pristupačna pizzerija u blizini – dobra za opušteno veče bez puno truda.",
      pl: "Prosta, tania pizzeria w zasięgu spaceru – idealna na spokojny wieczór bez zachodu.",
    },
    mapsQuery: "Pizzeria Okrug Gornji Croatia",
  },
  {
    id: "bistro-luka",
    name: "Bistro Luka",
    tier: "€",
    cuisine: {
      de: "Kroatische Hausmannskost",
      en: "Croatian home cooking",
      hr: "Hrvatska domaća kuhinja",
      pl: "Chorwacka kuchnia domowa",
    },
    description: {
      de: "Kleines Bistro mit Tagesgerichten zu fairen Preisen – beliebt bei Einheimischen.",
      en: "Small bistro with daily specials at fair prices – popular with locals.",
      hr: "Malen bistro s dnevnim jelovnikom po povoljnim cijenama – omiljen kod mještana.",
      pl: "Mały bistro z daniami dnia w rozsądnych cenach – popularny wśród mieszkańców.",
    },
    mapsQuery: "Bistro Okrug Donji Croatia",
  },
];
