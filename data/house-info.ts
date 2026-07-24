import { Bilingual } from "./types";

export interface HouseFact {
  label: Bilingual;
  value: Bilingual;
  copyable?: boolean;
}

export interface HouseSection {
  id: string;
  title: Bilingual;
  intro?: Bilingual;
  facts?: HouseFact[];
  bullets?: Bilingual[];
  imageId?: string;
}

/**
 * Check-in/-out und Ruhezeiten sind typische Defaults – bei Bedarf hier anpassen.
 */
export const houseSections: HouseSection[] = [
  {
    id: "hausordnung",
    title: { de: "Hausordnung", en: "House Rules" },
    intro: {
      de: "Damit sich alle wohlfühlen, bitten wir um Einhaltung dieser einfachen Regeln.",
      en: "So everyone feels at home, please keep these simple rules in mind.",
    },
    facts: [
      {
        label: { de: "Check-in", en: "Check-in" },
        value: { de: "ab 15:00 Uhr", en: "from 3:00 PM" },
      },
      {
        label: { de: "Check-out", en: "Check-out" },
        value: { de: "bis 10:00 Uhr", en: "until 10:00 AM" },
      },
      {
        label: { de: "Ruhezeiten", en: "Quiet hours" },
        value: { de: "22:00 – 08:00 Uhr", en: "10:00 PM – 8:00 AM" },
      },
      {
        label: { de: "Rauchen", en: "Smoking" },
        value: { de: "nur im Freien", en: "outdoors only" },
      },
    ],
    bullets: [
      {
        de: "Bitte behandelt die Wohnung und die Einrichtung pfleglich.",
        en: "Please treat the apartment and furnishings with care.",
      },
      {
        de: "Zusätzliche Gäste/Besuch bitte vorher mit Nenad abstimmen.",
        en: "Please check with Nenad in advance about additional guests/visitors.",
      },
      {
        de: "Haustürschlüssel bei Abreise bitte an der vereinbarten Stelle hinterlegen.",
        en: "Please leave the front door key at the agreed spot on departure.",
      },
    ],
  },
  {
    id: "waesche",
    title: { de: "Wäsche waschen", en: "Doing Laundry" },
    intro: {
      de: "Die Waschmaschine steht im Waschraum/Bad und darf gerne genutzt werden.",
      en: "The washing machine is in the laundry area/bathroom and is available for guest use.",
    },
    bullets: [
      {
        de: "Waschmittel steht griffbereit neben der Maschine – bitte sparsam verwenden.",
        en: "Detergent is provided next to the machine – please use it sparingly.",
      },
      {
        de: "Standardprogramm (ca. 40–60 Min.) reicht für die meisten Sachen völlig aus.",
        en: "The standard cycle (approx. 40–60 min) is enough for most laundry.",
      },
      {
        de: "Einen Wäschetrockner gibt es nicht – wie in Kroatien üblich, wird die Wäsche auf der Leine auf der Terrasse/im Garten getrocknet. Wäscheklammern liegen bereit.",
        en: "There is no tumble dryer – as is common in Croatia, laundry is air-dried on the line on the terrace/in the garden. Clothes pegs are provided.",
      },
      {
        de: "Bitte die Maschine nach Gebrauch leer und die Tür einen Spalt offen lassen.",
        en: "Please leave the machine empty and the door slightly open after use.",
      },
    ],
  },
  {
    id: "grillen",
    title: { de: "Grillen", en: "BBQ / Grilling" },
    intro: {
      de: "Der Grill steht auf der Terrasse und darf während des Aufenthalts genutzt werden.",
      en: "The grill is on the terrace and may be used during your stay.",
    },
    bullets: [
      {
        de: "Grillkohle/Anzünder bitte selbst besorgen (kleiner Supermarkt in der Nähe, siehe Umgebung).",
        en: "Please bring your own charcoal/firelighters (small supermarket nearby, see the Surroundings section).",
      },
      {
        de: "Grill nie unbeaufsichtigt lassen und ausreichend Abstand zu Möbeln/Pflanzen halten.",
        en: "Never leave the grill unattended and keep sufficient distance from furniture/plants.",
      },
      {
        de: "Nach dem Grillen bitte vollständig abkühlen lassen und den Rost grob reinigen.",
        en: "Please let it cool down completely after use and give the grate a rough clean.",
      },
      {
        de: "Asche bitte erst am Folgetag in den dafür vorgesehenen Metallbehälter entsorgen.",
        en: "Please dispose of ashes only the next day, in the designated metal container.",
      },
    ],
  },
  {
    id: "aufenthaltsbereiche",
    title: { de: "Aufenthaltsbereiche", en: "Common Areas" },
    intro: {
      de: "Diese Bereiche stehen euch während des Aufenthalts frei zur Verfügung.",
      en: "These areas are all yours to relax in during your stay.",
    },
    bullets: [
      {
        de: "Terrasse: gemütlicher Sitzbereich für Frühstück, Grillabende und Sonnenuntergänge.",
        en: "Terrace: cozy seating area for breakfast, BBQ evenings and sunsets.",
      },
      {
        de: "Garten: schattige Plätze zum Entspannen, ideal für einen Mittagsschlaf in der Hängematte.",
        en: "Garden: shaded spots to relax, perfect for an afternoon nap in the hammock.",
      },
      {
        de: "Wohnbereich: klimatisiert, mit Sofa, TV und WLAN – gut für regnerische Stunden.",
        en: "Living room: air-conditioned, with sofa, TV and WiFi – great for rainy hours.",
      },
    ],
    imageId: "aufenthalt",
  },
  {
    id: "wifi-parken",
    title: { de: "WLAN & Parken", en: "WiFi & Parking" },
    facts: [
      {
        label: { de: "WLAN-Netzwerk", en: "WiFi network" },
        value: { de: "SUNCE", en: "SUNCE" },
        copyable: true,
      },
      {
        label: { de: "WLAN-Passwort", en: "WiFi password" },
        value: { de: "123456789", en: "123456789" },
        copyable: true,
      },
      {
        label: { de: "Parken", en: "Parking" },
        value: {
          de: "kostenlos auf dem Grundstück, Hausnummer 29",
          en: "free of charge on the property, house number 29",
        },
      },
    ],
    bullets: [
      {
        de: "Der Parkplatz befindet sich direkt auf dem Grundstück – kein öffentliches Parken nötig.",
        en: "The parking spot is right on the property – no need to look for public parking.",
      },
    ],
  },
  {
    id: "wissenswertes",
    title: { de: "Wissenswertes für Gäste", en: "Good to Know" },
    intro: {
      de: "Ein paar praktische Infos, die im Ausland oft anders sind als zu Hause.",
      en: "A few practical things that are often different abroad than at home.",
    },
    facts: [
      {
        label: { de: "Notrufnummer", en: "Emergency number" },
        value: { de: "112 (europaweit, kostenlos)", en: "112 (Europe-wide, free)" },
      },
      {
        label: { de: "Leitungswasser", en: "Tap water" },
        value: { de: "in Kroatien generell trinkbar", en: "generally safe to drink in Croatia" },
      },
      {
        label: { de: "Währung", en: "Currency" },
        value: { de: "Euro (€) – seit 2023 in Kroatien", en: "Euro (€) – Croatia adopted it in 2023" },
      },
      {
        label: { de: "Trinkgeld", en: "Tipping" },
        value: {
          de: "nicht verpflichtend, ca. 10% bei gutem Service üblich",
          en: "not mandatory, ca. 10% for good service is common",
        },
      },
      {
        label: { de: "Steckdosen", en: "Power sockets" },
        value: { de: "Typ C/F, 230V (wie in Kontinentaleuropa)", en: "Type C/F, 230V (same as continental Europe)" },
      },
    ],
    bullets: [
      {
        de: "Die Sonne ist an der Adria stärker als sie wirkt – Sonnencreme und ausreichend Wasser nicht vergessen.",
        en: "The Adriatic sun is stronger than it feels – don't forget sunscreen and enough water.",
      },
      {
        de: "Apotheken erkennt man am grünen Kreuz, viele haben auch nachts einen Notdienst.",
        en: "Pharmacies are marked by a green cross, many offer a night service too.",
      },
    ],
  },
];
