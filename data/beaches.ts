import { Bilingual } from "./types";

export interface Beach {
  id: string;
  name: string;
  surface: Bilingual;
  description: Bilingual;
  urchinWarning: boolean;
  mapsQuery: string;
}

export const beaches: Beach[] = [
  {
    id: "plaza-okrug-gornji",
    name: "Plaža Okrug Gornji",
    surface: { de: "Kies/Beton, teils felsig", en: "Pebble/concrete, partly rocky" },
    description: {
      de: "Der Hausstrand direkt vor Ort – gut für kurze Abkühlungen zwischendurch, mehrere Strandbars in Laufnähe.",
      en: "The local beach right on the doorstep – great for a quick dip, several beach bars nearby.",
    },
    urchinWarning: true,
    mapsQuery: "Plaža Okrug Gornji Croatia",
  },
  {
    id: "copacabana-okrug",
    name: "Copacabana Beach Okrug Gornji",
    surface: { de: "Kies", en: "Pebble" },
    description: {
      de: "Belebter Abschnitt mit Liegen, Sonnenschirmen und Wassersport-Verleih.",
      en: "Lively stretch with sun loungers, umbrellas and water sports rentals.",
    },
    urchinWarning: false,
    mapsQuery: "Copacabana Beach Okrug Gornji Croatia",
  },
  {
    id: "medena-beach",
    name: "Medena Beach (Seget Donji)",
    surface: { de: "Kies, familienfreundlich", en: "Pebble, family-friendly" },
    description: {
      de: "Flach abfallender, ruhiger Strand – gut geeignet für Familien mit kleinen Kindern.",
      en: "Gently sloping, calm beach – well suited for families with young children.",
    },
    urchinWarning: false,
    mapsQuery: "Medena Beach Seget Donji Croatia",
  },
  {
    id: "ciovo-felsen",
    name: "Felsbuchten bei Čiovo",
    surface: { de: "Fels", en: "Rocky" },
    description: {
      de: "Versteckte, ruhige Buchten mit klarem Wasser – etwas abenteuerlicher Zugang, dafür weniger Trubel.",
      en: "Hidden, quiet coves with clear water – a bit more of an adventurous access, but far less crowded.",
    },
    urchinWarning: true,
    mapsQuery: "Čiovo rocky coves Croatia",
  },
];

export const urchinWarningText: Bilingual = {
  de: "Achtung Seeigel: Besonders an felsigen Stränden und Buchten rund um Okrug und Čiovo gibt es Seeigel. Badeschuhe schützen zuverlässig vor schmerzhaften Stichen.",
  en: "Watch out for sea urchins: especially on rocky beaches and coves around Okrug and Čiovo, sea urchins are common. Reef/water shoes reliably protect against painful stings.",
};
