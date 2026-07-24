import { Bilingual } from "./types";

export interface Activity {
  id: string;
  name: string;
  type: "jetski" | "boot";
  priceHint?: Bilingual;
  description: Bilingual;
  licenseNote: Bilingual;
  mapsQuery: string;
}

export const activitiesDisclaimer: Bilingual = {
  de: "Beispielhafte Anbieter – bitte Verfügbarkeit, Preise und aktuelle Lizenzanforderungen direkt beim Verleih erfragen.",
  en: "Example providers – please confirm availability, prices and current license requirements directly with the rental company.",
};

export const activities: Activity[] = [
  {
    id: "jetski-okrug",
    name: "Jet Ski Rental Okrug",
    type: "jetski",
    priceHint: { de: "ca. 30–60 € / 30 Min.", en: "approx. €30–60 / 30 min" },
    description: {
      de: "Jetski-Verleih direkt am Strand von Okrug Gornji, geführte Touren entlang der Küste von Čiovo möglich.",
      en: "Jet ski rental right on the Okrug Gornji beach, guided tours along the Čiovo coastline available.",
    },
    licenseNote: {
      de: "Für Jetskis wird in Kroatien in der Regel ein Bootsführerschein bzw. ein internationaler Kompetenznachweis (ICC) verlangt, teils reicht auch eine kurze Einweisung durch den Verleih. Bitte aktuelle Anforderungen direkt beim Anbieter erfragen.",
      en: "Jet skis in Croatia generally require a boating license or an International Certificate of Competence (ICC); some rentals accept a short briefing instead. Please confirm current requirements directly with the provider.",
    },
    mapsQuery: "Jet Ski Rental Okrug Gornji Croatia",
  },
  {
    id: "boot-trogir",
    name: "Boat Rental Trogir Marina",
    type: "boot",
    priceHint: { de: "ab ca. 90 € / Tag", en: "from approx. €90 / day" },
    description: {
      de: "Kleine Motorboote ohne Führerschein bis zu einer bestimmten Motorleistung, größere Boote mit Skipper buchbar.",
      en: "Small motorboats available without a license up to a certain engine power, larger boats bookable with a skipper.",
    },
    licenseNote: {
      de: "Boote bis ca. 5 kW (rund 15 PS) können in Kroatien häufig ohne Führerschein gemietet werden, oberhalb dessen ist meist ein Bootsführerschein ('Voditelj brodice') nötig. Grenzwerte ändern sich – bitte beim Verleih verifizieren.",
      en: "Boats up to roughly 5 kW (about 15 hp) can often be rented in Croatia without a license; above that a boating license ('Voditelj brodice') is usually required. Thresholds can change – please verify with the rental company.",
    },
    mapsQuery: "Boat Rental Trogir Marina Croatia",
  },
  {
    id: "kajak-ciovo",
    name: "Kayak & SUP Okrug",
    type: "boot",
    priceHint: { de: "ca. 15–25 € / Std.", en: "approx. €15–25 / hr" },
    description: {
      de: "Kajaks und Stand-Up-Paddles zum Erkunden der ruhigen Buchten rund um Čiovo, ideal für Anfänger.",
      en: "Kayaks and stand-up paddleboards for exploring the calm bays around Čiovo, great for beginners.",
    },
    licenseNote: {
      de: "Für Kajak und SUP ist kein Führerschein nötig, Schwimmweste wird empfohlen.",
      en: "No license needed for kayaks or SUP, a life vest is recommended.",
    },
    mapsQuery: "Kayak SUP Rental Okrug Gornji Croatia",
  },
];
