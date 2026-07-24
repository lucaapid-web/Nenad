import { Bilingual } from "./types";

export interface ArrivalInfo {
  title: Bilingual;
  text: Bilingual;
}

export const arrivalInfos: ArrivalInfo[] = [
  {
    title: {
      de: "Nächster Flughafen",
      en: "Nearest airport",
      hr: "Najbliža zračna luka",
      pl: "Najbliższe lotnisko",
    },
    text: {
      de: "Flughafen Split (SPU) ist der nächstgelegene internationale Flughafen, etwa 30–40 Autominuten von Okrug Gornji entfernt.",
      en: "Split Airport (SPU) is the nearest international airport, roughly a 30–40 minute drive from Okrug Gornji.",
      hr: "Zračna luka Split (SPU) najbliža je međunarodna zračna luka, oko 30–40 minuta vožnje od Okrug Gornjeg.",
      pl: "Lotnisko w Splicie (SPU) to najbliższe lotnisko międzynarodowe, około 30–40 minut jazdy od Okrug Gornji.",
    },
  },
  {
    title: {
      de: "Transfer vom Flughafen",
      en: "Airport transfer",
      hr: "Transfer sa zračne luke",
      pl: "Transfer z lotniska",
    },
    text: {
      de: "Vom Flughafen erreicht ihr uns per Taxi, vorab gebuchtem Shuttle oder Mietwagen. Preise und Anbieter ändern sich häufig – ein aktueller Vergleich lohnt sich kurz vor Anreise.",
      en: "From the airport you can reach us by taxi, a pre-booked shuttle, or a rental car. Prices and providers change frequently, so it's worth comparing options shortly before you arrive.",
      hr: "Sa zračne luke do nas možete stići taksijem, unaprijed rezerviranim shuttleom ili unajmljenim automobilom. Cijene i pružatelji usluga često se mijenjaju – isplati se usporediti opcije neposredno prije dolaska.",
      pl: "Z lotniska dojedziecie do nas taksówką, wcześniej zarezerwowanym shuttle'em lub wynajętym samochodem. Ceny i oferty często się zmieniają – warto porównać opcje tuż przed przyjazdem.",
    },
  },
  {
    title: { de: "Mit dem Auto", en: "By car", hr: "Automobilom", pl: "Samochodem" },
    text: {
      de: "Okrug Gornji liegt auf der Insel Čiovo, die über eine Brücke direkt mit Trogir verbunden ist – kein Fährticket nötig.",
      en: "Okrug Gornji is on the island of Čiovo, connected directly to Trogir by a bridge – no ferry ticket needed.",
      hr: "Okrug Gornji nalazi se na otoku Čiovu, koji je mostom izravno povezan s Trogirom – nije potrebna karta za trajekt.",
      pl: "Okrug Gornji leży na wyspie Čiovo, która jest połączona mostem bezpośrednio z Trogirem – bilet na prom nie jest potrzebny.",
    },
  },
  {
    title: {
      de: "Anreise mit Fähre/Bus",
      en: "By ferry/bus",
      hr: "Dolazak trajektom/autobusom",
      pl: "Przyjazd promem/autobusem",
    },
    text: {
      de: "Alternativ verkehren Busse zwischen Split und Trogir/Okrug Gornji; von dort ist die Unterkunft in wenigen Minuten zu Fuß oder per Taxi erreichbar.",
      en: "Alternatively, buses run between Split and Trogir/Okrug Gornji; from there the property is a short walk or taxi ride away.",
      hr: "Alternativno, autobusi voze između Splita i Trogira/Okrug Gornjeg; odatle je smještaj dostupan za nekoliko minuta pješice ili taksijem.",
      pl: "Alternatywnie kursują autobusy między Splitem a Trogirem/Okrug Gornji; stamtąd do zakwaterowania dojdziecie pieszo w kilka minut lub dojedziecie taksówką.",
    },
  },
];
