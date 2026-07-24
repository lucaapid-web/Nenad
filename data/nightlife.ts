import { Bilingual } from "./types";

export interface NightlifeSpot {
  id: string;
  name: string;
  type: Bilingual;
  description: Bilingual;
  mapsQuery: string;
}

export const nightlifeDisclaimer: Bilingual = {
  de: "Beispielhafte Auswahl – Öffnungszeiten und Programme wechseln je nach Saison.",
  en: "Example selection – opening hours and programs change depending on the season.",
};

export const nightlifeSpots: NightlifeSpot[] = [
  {
    id: "beach-bar-okrug",
    name: "Beach Bar Okrug",
    type: { de: "Strandbar", en: "Beach bar" },
    description: {
      de: "Entspannte Cocktailbar direkt am Wasser, gute Sonnenuntergangs-Stimmung.",
      en: "Relaxed cocktail bar right by the water, great sunset vibes.",
    },
    mapsQuery: "Beach Bar Okrug Gornji Croatia",
  },
  {
    id: "club-trogir",
    name: "Club Trogir",
    type: { de: "Club", en: "Club" },
    description: {
      de: "Beliebter Club in Trogir mit wechselndem DJ-Programm in der Hauptsaison.",
      en: "Popular club in Trogir with a rotating DJ lineup during peak season.",
    },
    mapsQuery: "Club Trogir Croatia",
  },
  {
    id: "lounge-ciovo",
    name: "Lounge Čiovo",
    type: { de: "Lounge/Bar", en: "Lounge/bar" },
    description: {
      de: "Ruhigere Lounge mit Terrasse für einen entspannten Absacker.",
      en: "Quieter lounge with a terrace, good for a relaxed nightcap.",
    },
    mapsQuery: "Lounge Bar Čiovo Croatia",
  },
];
