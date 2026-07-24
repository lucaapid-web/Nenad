import { Bilingual } from "./types";

export interface ArrivalInfo {
  title: Bilingual;
  text: Bilingual;
}

export const arrivalInfos: ArrivalInfo[] = [
  {
    title: { de: "Nächster Flughafen", en: "Nearest airport" },
    text: {
      de: "Flughafen Split (SPU) ist der nächstgelegene internationale Flughafen, etwa 30–40 Autominuten von Okrug Gornji entfernt.",
      en: "Split Airport (SPU) is the nearest international airport, roughly a 30–40 minute drive from Okrug Gornji.",
    },
  },
  {
    title: { de: "Transfer vom Flughafen", en: "Airport transfer" },
    text: {
      de: "Vom Flughafen erreicht ihr uns per Taxi, vorab gebuchtem Shuttle oder Mietwagen. Preise und Anbieter ändern sich häufig – ein aktueller Vergleich lohnt sich kurz vor Anreise.",
      en: "From the airport you can reach us by taxi, a pre-booked shuttle, or a rental car. Prices and providers change frequently, so it's worth comparing options shortly before you arrive.",
    },
  },
  {
    title: { de: "Mit dem Auto", en: "By car" },
    text: {
      de: "Okrug Gornji liegt auf der Insel Čiovo, die über eine Brücke direkt mit Trogir verbunden ist – kein Fährticket nötig.",
      en: "Okrug Gornji is on the island of Čiovo, connected directly to Trogir by a bridge – no ferry ticket needed.",
    },
  },
  {
    title: { de: "Anreise mit Fähre/Bus", en: "By ferry/bus" },
    text: {
      de: "Alternativ verkehren Busse zwischen Split und Trogir/Okrug Gornji; von dort ist die Unterkunft in wenigen Minuten zu Fuß oder per Taxi erreichbar.",
      en: "Alternatively, buses run between Split and Trogir/Okrug Gornji; from there the property is a short walk or taxi ride away.",
    },
  },
];
