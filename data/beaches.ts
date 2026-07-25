import { Bilingual } from "./types";

export interface Beach {
  id: string;
  name: string;
  surface: Bilingual;
  description: Bilingual;
  urchinWarning: boolean;
  personalNote?: Bilingual;
  mapsQuery: string;
}

export const beaches: Beach[] = [
  {
    id: "plaza-okrug-gornji",
    name: "Plaža Okrug Gornji",
    surface: {
      de: "Kies/Beton, teils felsig",
      en: "Pebble/concrete, partly rocky",
      hr: "Šljunak/betonu, dijelom stjenovito",
      pl: "Żwir/beton, częściowo skaliste",
    },
    description: {
      de: "Der Hausstrand direkt vor Ort – gut für kurze Abkühlungen zwischendurch, mehrere Strandbars in Laufnähe.",
      en: "The local beach right on the doorstep – great for a quick dip, several beach bars nearby.",
      hr: "Lokalna plaža odmah pored smještaja – idealna za brzo osvježenje, nekoliko plažnih barova u blizini.",
      pl: "Lokalna plaża tuż przy zakwaterowaniu – idealna na szybką kąpiel, kilka barów plażowych w pobliżu.",
    },
    urchinWarning: true,
    personalNote: {
      de: "Mein Tipp: einfach zu Fuß hin, perfekt für eine schnelle Abkühlung zwischendurch.",
      en: "My tip: just walk over, perfect for a quick dip whenever you feel like it.",
      hr: "Moj savjet: jednostavno pješice, savršeno za brzo osvježenje kad god poželite.",
      pl: "Moja rada: po prostu pieszo, idealne na szybkie orzeźwienie w dowolnej chwili.",
    },
    mapsQuery: "Plaža Okrug Gornji Croatia",
  },
  {
    id: "copacabana-okrug",
    name: "Copacabana Beach Okrug Gornji",
    surface: { de: "Kies", en: "Pebble", hr: "Šljunak", pl: "Żwir" },
    description: {
      de: "Belebter Abschnitt mit Liegen, Sonnenschirmen und Wassersport-Verleih.",
      en: "Lively stretch with sun loungers, umbrellas and water sports rentals.",
      hr: "Živahan dio plaže s ležaljkama, suncobranima i iznajmljivanjem vodenih sportova.",
      pl: "Tętniący życiem odcinek z leżakami, parasolami i wypożyczalnią sprzętu wodnego.",
    },
    urchinWarning: false,
    mapsQuery: "Copacabana Beach Okrug Gornji Croatia",
  },
  {
    id: "medena-beach",
    name: "Medena Beach (Seget Donji)",
    surface: {
      de: "Kies, familienfreundlich",
      en: "Pebble, family-friendly",
      hr: "Šljunak, pogodno za obitelji",
      pl: "Żwir, przyjazna rodzinom",
    },
    description: {
      de: "Flach abfallender, ruhiger Strand – gut geeignet für Familien mit kleinen Kindern.",
      en: "Gently sloping, calm beach – well suited for families with young children.",
      hr: "Strand s blagim ulazom u more i mirnom vodom – pogodan za obitelji s malom djecom.",
      pl: "Łagodnie opadająca, spokojna plaża – dobrze nadaje się dla rodzin z małymi dziećmi.",
    },
    urchinWarning: false,
    mapsQuery: "Medena Beach Seget Donji Croatia",
  },
  {
    id: "ciovo-felsen",
    name: "Felsbuchten bei Čiovo",
    surface: { de: "Fels", en: "Rocky", hr: "Stijena", pl: "Skały" },
    description: {
      de: "Versteckte, ruhige Buchten mit klarem Wasser – etwas abenteuerlicher Zugang, dafür weniger Trubel.",
      en: "Hidden, quiet coves with clear water – a bit more of an adventurous access, but far less crowded.",
      hr: "Skrivene, mirne uvale s bistrom vodom – malo avanturističkiji pristup, ali znatno manje gužve.",
      pl: "Ukryte, ciche zatoczki z czystą wodą – dojście trochę bardziej wymagające, ale znacznie mniej tłoczno.",
    },
    urchinWarning: true,
    personalNote: {
      de: "Wenn du es ruhiger magst, ist das mein persönlicher Geheimtipp – wunderschön, aber weniger bekannt.",
      en: "If you like it quieter, this is my personal hidden gem – beautiful but less known.",
      hr: "Ako voliš mirnije, ovo je moj osobni skriveni biser – prekrasno, ali manje poznato.",
      pl: "Jeśli lubisz spokój, to moja osobista perełka – piękne, ale mniej znane.",
    },
    mapsQuery: "Čiovo rocky coves Croatia",
  },
];

export const urchinWarningText: Bilingual = {
  de: "Achtung Seeigel: Besonders an felsigen Stränden und Buchten rund um Okrug und Čiovo gibt es Seeigel. Badeschuhe schützen zuverlässig vor schmerzhaften Stichen.",
  en: "Watch out for sea urchins: especially on rocky beaches and coves around Okrug and Čiovo, sea urchins are common. Reef/water shoes reliably protect against painful stings.",
  hr: "Pažnja, morski ježinci: posebno na stjenovitim plažama i uvalama oko Okruga i Čiova ima morskih ježinaca. Cipele za kupanje pouzdano štite od bolnih uboda.",
  pl: "Uwaga na jeżowce: szczególnie na skalistych plażach i w zatoczkach wokół Okrug i Čiovo występują jeżowce. Buty do wody skutecznie chronią przed bolesnymi ukłuciami.",
};
