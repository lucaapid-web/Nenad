import { Bilingual } from "./types";

export interface NightlifeSpot {
  id: string;
  name: string;
  type: Bilingual;
  description: Bilingual;
  personalNote?: Bilingual;
  mapsQuery: string;
}

export const nightlifeDisclaimer: Bilingual = {
  de: "Beispielhafte Auswahl – Öffnungszeiten und Programme wechseln je nach Saison.",
  en: "Example selection – opening hours and programs change depending on the season.",
  hr: "Primjer izbora – radno vrijeme i program mijenjaju se ovisno o sezoni.",
  pl: "Przykładowy wybór – godziny otwarcia i program zmieniają się w zależności od sezonu.",
};

export const nightlifeSpots: NightlifeSpot[] = [
  {
    id: "beach-bar-okrug",
    name: "Beach Bar Okrug",
    type: { de: "Strandbar", en: "Beach bar", hr: "Plažni bar", pl: "Bar plażowy" },
    description: {
      de: "Entspannte Cocktailbar direkt am Wasser, gute Sonnenuntergangs-Stimmung.",
      en: "Relaxed cocktail bar right by the water, great sunset vibes.",
      hr: "Opušten koktel bar tik uz more, odlična atmosfera za zalazak sunca.",
      pl: "Zrelaksowany bar z koktajlami tuż nad wodą, świetny klimat o zachodzie słońca.",
    },
    personalNote: {
      de: "Zum Sonnenuntergang gehe ich hier selbst am liebsten auf einen Cocktail vorbei.",
      en: "For sunset drinks, this is where I love to stop by myself.",
      hr: "Za piće uz zalazak sunca ja sam najradije ovdje.",
      pl: "Na drinka o zachodzie słońca najchętniej wpadam właśnie tutaj.",
    },
    mapsQuery: "Beach Bar Okrug Gornji Croatia",
  },
  {
    id: "club-trogir",
    name: "Club Trogir",
    type: { de: "Club", en: "Club", hr: "Klub", pl: "Klub" },
    description: {
      de: "Beliebter Club in Trogir mit wechselndem DJ-Programm in der Hauptsaison.",
      en: "Popular club in Trogir with a rotating DJ lineup during peak season.",
      hr: "Popularan klub u Trogiru s izmjeničnim DJ programom tijekom glavne sezone.",
      pl: "Popularny klub w Trogirze ze zmieniającym się programem DJ-skim w szczycie sezonu.",
    },
    mapsQuery: "Club Trogir Croatia",
  },
  {
    id: "lounge-ciovo",
    name: "Lounge Čiovo",
    type: { de: "Lounge/Bar", en: "Lounge/bar", hr: "Lounge/bar", pl: "Lounge/bar" },
    description: {
      de: "Ruhigere Lounge mit Terrasse für einen entspannten Absacker.",
      en: "Quieter lounge with a terrace, good for a relaxed nightcap.",
      hr: "Mirniji lounge s terasom za opušteno piće za kraj večeri.",
      pl: "Spokojniejszy lounge z tarasem, dobry na relaksujący drink na koniec wieczoru.",
    },
    personalNote: {
      de: "Für einen entspannten Absacker ohne Trubel ist das mein persönlicher Favorit.",
      en: "For a relaxed nightcap without the crowds, this is my personal favorite.",
      hr: "Za opušteno piće za kraj večeri bez gužve, ovo mi je osobni favorit.",
      pl: "Na spokojnego drinka na koniec wieczoru bez tłoku to mój osobisty faworyt.",
    },
    mapsQuery: "Lounge Bar Čiovo Croatia",
  },
];
