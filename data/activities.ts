import { Bilingual } from "./types";

export interface Activity {
  id: string;
  name: string;
  type: "jetski" | "boot";
  priceHint?: Bilingual;
  description: Bilingual;
  licenseNote: Bilingual;
  personalNote?: Bilingual;
  mapsQuery: string;
}

export const activitiesDisclaimer: Bilingual = {
  de: "Beispielhafte Anbieter – bitte Verfügbarkeit, Preise und aktuelle Lizenzanforderungen direkt beim Verleih erfragen.",
  en: "Example providers – please confirm availability, prices and current license requirements directly with the rental company.",
  hr: "Primjeri pružatelja usluga – dostupnost, cijene i aktualne zahtjeve za dozvolom provjerite izravno kod iznajmljivača.",
  pl: "Przykładowi dostawcy usług – dostępność, ceny i aktualne wymagania licencyjne prosimy potwierdzić bezpośrednio w wypożyczalni.",
};

export const activities: Activity[] = [
  {
    id: "jetski-okrug",
    name: "Jet Ski Rental Okrug",
    type: "jetski",
    priceHint: {
      de: "ca. 30–60 € / 30 Min.",
      en: "approx. €30–60 / 30 min",
      hr: "oko 30–60 € / 30 min",
      pl: "ok. 30–60 € / 30 min",
    },
    description: {
      de: "Jetski-Verleih direkt am Strand von Okrug Gornji, geführte Touren entlang der Küste von Čiovo möglich.",
      en: "Jet ski rental right on the Okrug Gornji beach, guided tours along the Čiovo coastline available.",
      hr: "Iznajmljivanje jet skija izravno na plaži Okrug Gornji, moguće su vođene ture uz obalu Čiova.",
      pl: "Wypożyczalnia skuterów wodnych tuż przy plaży w Okrug Gornji, dostępne są też wycieczki z przewodnikiem wzdłuż wybrzeża Čiovo.",
    },
    licenseNote: {
      de: "Für Jetskis wird in Kroatien in der Regel ein Bootsführerschein bzw. ein internationaler Kompetenznachweis (ICC) verlangt, teils reicht auch eine kurze Einweisung durch den Verleih. Bitte aktuelle Anforderungen direkt beim Anbieter erfragen.",
      en: "Jet skis in Croatia generally require a boating license or an International Certificate of Competence (ICC); some rentals accept a short briefing instead. Please confirm current requirements directly with the provider.",
      hr: "Za jet ski se u Hrvatskoj obično traži dozvola za upravljanje brodicom odnosno međunarodna svjedodžba (ICC), no ponekad je dovoljna kratka uputa od strane iznajmljivača. Aktualne zahtjeve provjerite izravno kod pružatelja usluge.",
      pl: "Do jazdy na skuterze wodnym w Chorwacji zazwyczaj wymagany jest patent motorowodny lub międzynarodowy certyfikat kompetencji (ICC); niektóre wypożyczalnie akceptują krótki instruktaż. Aktualne wymagania prosimy potwierdzić bezpośrednio u dostawcy.",
    },
    personalNote: {
      de: "Für einen Adrenalinkick zwischendurch schicke ich Gäste am liebsten hierhin – direkt am Hausstrand.",
      en: "For a quick adrenaline rush, this is where I send guests first – right on our home beach.",
      hr: "Za dozu adrenalina gostima najradije preporučim baš ovo – odmah na našoj plaži.",
      pl: "Na dawkę adrenaliny najchętniej polecam gościom właśnie to miejsce – tuż przy naszej plaży.",
    },
    mapsQuery: "Jet Ski Rental Okrug Gornji Croatia",
  },
  {
    id: "boot-trogir",
    name: "Boat Rental Trogir Marina",
    type: "boot",
    priceHint: {
      de: "ab ca. 90 € / Tag",
      en: "from approx. €90 / day",
      hr: "od oko 90 € / dan",
      pl: "od ok. 90 € / dzień",
    },
    description: {
      de: "Kleine Motorboote ohne Führerschein bis zu einer bestimmten Motorleistung, größere Boote mit Skipper buchbar.",
      en: "Small motorboats available without a license up to a certain engine power, larger boats bookable with a skipper.",
      hr: "Manji motorni čamci dostupni bez dozvole do određene snage motora, veći brodovi mogu se rezervirati sa skiperom.",
      pl: "Małe łodzie motorowe dostępne bez licencji do określonej mocy silnika, większe łodzie można zarezerwować ze skiperem.",
    },
    licenseNote: {
      de: "Boote bis ca. 5 kW (rund 15 PS) können in Kroatien häufig ohne Führerschein gemietet werden, oberhalb dessen ist meist ein Bootsführerschein ('Voditelj brodice') nötig. Grenzwerte ändern sich – bitte beim Verleih verifizieren.",
      en: "Boats up to roughly 5 kW (about 15 hp) can often be rented in Croatia without a license; above that a boating license ('Voditelj brodice') is usually required. Thresholds can change – please verify with the rental company.",
      hr: "Brodice do oko 5 kW (otprilike 15 KS) u Hrvatskoj se često mogu iznajmiti bez dozvole, iznad toga obično je potrebna dozvola ('Voditelj brodice'). Granice se mijenjaju – provjerite kod iznajmljivača.",
      pl: "Łodzie do ok. 5 kW (ok. 15 KM) można w Chorwacji często wynająć bez licencji, powyżej tej mocy zwykle wymagany jest patent żeglarski ('Voditelj brodice'). Progi mogą się zmieniać – prosimy zweryfikować w wypożyczalni.",
    },
    mapsQuery: "Boat Rental Trogir Marina Croatia",
  },
  {
    id: "kajak-ciovo",
    name: "Kayak & SUP Okrug",
    type: "boot",
    priceHint: {
      de: "ca. 15–25 € / Std.",
      en: "approx. €15–25 / hr",
      hr: "oko 15–25 € / sat",
      pl: "ok. 15–25 € / godz.",
    },
    description: {
      de: "Kajaks und Stand-Up-Paddles zum Erkunden der ruhigen Buchten rund um Čiovo, ideal für Anfänger.",
      en: "Kayaks and stand-up paddleboards for exploring the calm bays around Čiovo, great for beginners.",
      hr: "Kajaci i daske za veslanje stojeći za istraživanje mirnih uvala oko Čiova, idealno za početnike.",
      pl: "Kajaki i deski SUP do odkrywania spokojnych zatoczek wokół Čiova, idealne dla początkujących.",
    },
    licenseNote: {
      de: "Für Kajak und SUP ist kein Führerschein nötig, Schwimmweste wird empfohlen.",
      en: "No license needed for kayaks or SUP, a life vest is recommended.",
      hr: "Za kajak i SUP nije potrebna dozvola, preporučuje se prsluk za spašavanje.",
      pl: "Do kajaka i SUP-a nie jest potrzebna licencja, zalecana jest kamizelka ratunkowa.",
    },
    personalNote: {
      de: "Meine Empfehlung für einen ruhigen Vormittag – die Buchten dort sind wirklich idyllisch.",
      en: "My tip for a calm morning – the bays there are truly idyllic.",
      hr: "Moja preporuka za miran jutarnji izlazak – uvale su tamo stvarno idilične.",
      pl: "Mój sposób na spokojny poranek – tamtejsze zatoczki są naprawdę urokliwe.",
    },
    mapsQuery: "Kayak SUP Rental Okrug Gornji Croatia",
  },
];
