import { Bilingual } from "./types";

export interface ChatEntry {
  id: string;
  category: string;
  keywords: string[];
  question: Bilingual;
  answer: Bilingual;
  featured?: boolean;
}

export const chatbotQA: ChatEntry[] = [
  {
    id: "wifi",
    category: "haus",
    keywords: ["wlan", "wifi", "internet", "passwort", "password", "netzwerk", "sunce"],
    question: { de: "Wie lautet das WLAN-Passwort?", en: "What's the WiFi password?" },
    answer: {
      de: "Das WLAN-Netzwerk heißt SUNCE, das Passwort lautet 123456789.",
      en: "The WiFi network is called SUNCE, the password is 123456789.",
    },
    featured: true,
  },
  {
    id: "parken",
    category: "haus",
    keywords: ["parken", "parking", "parkplatz", "auto", "stellplatz"],
    question: { de: "Wo kann ich parken?", en: "Where can I park?" },
    answer: {
      de: "Ihr parkt kostenlos direkt auf dem Grundstück, Hausnummer 29.",
      en: "You can park free of charge right on the property, house number 29.",
    },
    featured: true,
  },
  {
    id: "parkverbote-kroatien",
    category: "verkehr",
    keywords: ["parkverbot", "no parking", "gelbe linie", "yellow line", "strafzettel", "abschleppen"],
    question: { de: "Gibt es besondere Parkverbote in Kroatien?", en: "Are there special no-parking rules in Croatia?" },
    answer: {
      de: "Gelbe Bordsteinlinien und -zonen bedeuten Halte-/Parkverbot, in vielen Küstenorten gibt es zudem kostenpflichtige, oft mit Parkscheinautomat oder App abzurechnende Zonen. Falsch geparkte Autos werden auch in touristischen Orten häufig abgeschleppt – Beschilderung genau beachten.",
      en: "Yellow curb markings/zones mean no stopping or parking, and many coastal towns have paid zones payable via meter or app. Illegally parked cars are commonly towed even in touristy areas – always check the signage.",
    },
    featured: true,
  },
  {
    id: "verkehrsregeln-kroatien",
    category: "verkehr",
    keywords: ["verkehrsregeln", "traffic rules", "tempolimit", "speed limit", "licht", "headlights", "promille", "alcohol", "maut", "toll"],
    question: { de: "Was muss ich bei den Verkehrsregeln in Kroatien beachten?", en: "What should I know about traffic rules in Croatia?" },
    answer: {
      de: "In Kroatien gilt ganzjährig Tagfahrlichtpflicht, die Promillegrenze liegt bei 0,5 ‰ (bei Fahrern unter 24 Jahren teils 0,0 ‰). Tempolimits: i.d.R. 50 km/h innerorts, 90 km/h außerorts, 130 km/h auf Autobahnen (sofern nicht anders ausgeschildert). Autobahnen sind mautpflichtig über Mautstationen (keine Vignette). Bitte aktuelle Regelungen vor Fahrtantritt prüfen.",
      en: "Croatia requires headlights on at all times, the blood alcohol limit is 0.05% (often 0.0% for drivers under 24). Speed limits are generally 50 km/h in towns, 90 km/h outside towns, 130 km/h on motorways (unless signed otherwise). Motorways use toll booths, not a vignette sticker. Please verify current rules before driving.",
    },
    featured: true,
  },
  {
    id: "notruf",
    category: "sicherheit",
    keywords: ["notruf", "emergency", "112", "polizei", "police", "krankenwagen", "ambulance", "feuerwehr"],
    question: { de: "Was ist die Notrufnummer in Kroatien?", en: "What's the emergency number in Croatia?" },
    answer: {
      de: "Die europaweite Notrufnummer 112 funktioniert auch in Kroatien kostenlos für Polizei, Feuerwehr und Rettungsdienst.",
      en: "The Europe-wide emergency number 112 works free of charge in Croatia for police, fire and ambulance.",
    },
    featured: true,
  },
  {
    id: "seeigel",
    category: "strand",
    keywords: ["seeigel", "sea urchin", "strand", "beach", "stich", "sting", "badeschuhe"],
    question: { de: "Gibt es Seeigel an den Stränden hier?", en: "Are there sea urchins at the beaches here?" },
    answer: {
      de: "Ja, besonders an felsigen Stränden rund um Okrug und Čiovo gibt es Seeigel. Badeschuhe schützen zuverlässig vor Stichen.",
      en: "Yes, especially on rocky beaches around Okrug and Čiovo. Reef/water shoes reliably protect you from getting stung.",
    },
    featured: true,
  },
  {
    id: "waehrung",
    category: "allgemein",
    keywords: ["währung", "currency", "euro", "geld", "money", "bezahlen", "karte"],
    question: { de: "Mit welcher Währung wird in Kroatien bezahlt?", en: "What currency is used in Croatia?" },
    answer: {
      de: "Seit 2023 ist der Euro (€) die offizielle Währung in Kroatien. Kartenzahlung ist fast überall möglich.",
      en: "Since 2023 the Euro (€) is Croatia's official currency. Card payment is accepted almost everywhere.",
    },
  },
  {
    id: "trinkgeld",
    category: "allgemein",
    keywords: ["trinkgeld", "tip", "tipping", "restaurant"],
    question: { de: "Ist Trinkgeld in Kroatien üblich?", en: "Is tipping common in Croatia?" },
    answer: {
      de: "Trinkgeld ist nicht verpflichtend, aber bei gutem Service sind ca. 10% üblich.",
      en: "Tipping isn't mandatory, but around 10% for good service is common.",
    },
  },
  {
    id: "leitungswasser",
    category: "allgemein",
    keywords: ["leitungswasser", "tap water", "trinkwasser", "drinking water"],
    question: { de: "Kann man das Leitungswasser trinken?", en: "Can you drink the tap water?" },
    answer: {
      de: "Ja, Leitungswasser ist in Kroatien generell unbedenklich trinkbar.",
      en: "Yes, tap water is generally safe to drink in Croatia.",
    },
  },
  {
    id: "hausordnung-checkin",
    category: "haus",
    keywords: ["checkin", "check-in", "check in", "ankunft", "arrival time", "checkout", "check-out", "check out", "abreise"],
    question: { de: "Wann ist Check-in und Check-out?", en: "When is check-in and check-out?" },
    answer: {
      de: "Check-in ist ab 15:00 Uhr, Check-out bis 10:00 Uhr.",
      en: "Check-in is from 3:00 PM, check-out is until 10:00 AM.",
    },
    featured: true,
  },
  {
    id: "waesche-chat",
    category: "haus",
    keywords: ["wäsche", "laundry", "waschmaschine", "washing machine", "wäscheleine"],
    question: { de: "Wo kann ich Wäsche waschen?", en: "Where can I do laundry?" },
    answer: {
      de: "Die Waschmaschine steht im Waschraum/Bad, Waschmittel liegt bereit. Getrocknet wird auf der Wäscheleine auf Terrasse/Garten – wie in Kroatien üblich gibt es keinen Trockner.",
      en: "The washing machine is in the laundry area/bathroom, detergent is provided. Drying is on the clothesline on the terrace/garden – as is common in Croatia, there's no tumble dryer.",
    },
  },
  {
    id: "grillen-chat",
    category: "haus",
    keywords: ["grill", "bbq", "grillen", "barbecue"],
    question: { de: "Darf ich grillen?", en: "Can I use the grill?" },
    answer: {
      de: "Ja, der Grill auf der Terrasse darf während des Aufenthalts genutzt werden – Kohle bitte selbst besorgen.",
      en: "Yes, the grill on the terrace is available during your stay – please bring your own charcoal.",
    },
  },
  {
    id: "notfall-license",
    category: "aktivitaeten",
    keywords: ["jetski", "jet ski", "lizenz", "license", "führerschein", "boot lizenz"],
    question: { de: "Brauche ich eine Lizenz für Jetski oder Boot?", en: "Do I need a license for a jetski or boat?" },
    answer: {
      de: "Für Jetskis wird meist ein Bootsführerschein oder internationaler Kompetenznachweis (ICC) verlangt. Kleine Boote bis ca. 5 kW können oft ohne Führerschein gemietet werden. Bitte immer direkt beim Verleih die aktuellen Anforderungen prüfen.",
      en: "Jet skis usually require a boating license or International Certificate of Competence (ICC). Small boats up to roughly 5 kW can often be rented without a license. Always confirm current requirements directly with the rental company.",
    },
  },
];
