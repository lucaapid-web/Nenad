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
    title: { de: "Hausordnung", en: "House Rules", hr: "Kućni red", pl: "Regulamin domu" },
    intro: {
      de: "Damit du dich bei mir wohlfühlst, halte ich es einfach: hier meine paar Hausregeln.",
      en: "So you feel right at home with me, I like to keep it simple: here are my few house rules.",
      hr: "Kako bi se osjećao/la kao kod kuće, sve držim jednostavnim: evo mojih nekoliko kućnih pravila.",
      pl: "Abyś czuł/a się u mnie jak w domu, staram się utrzymać wszystko w prostocie: oto moje kilka zasad domowych.",
    },
    facts: [
      {
        label: { de: "Check-in", en: "Check-in", hr: "Prijava", pl: "Zameldowanie" },
        value: { de: "ab 15:00 Uhr", en: "from 3:00 PM", hr: "od 15:00", pl: "od 15:00" },
      },
      {
        label: { de: "Check-out", en: "Check-out", hr: "Odjava", pl: "Wymeldowanie" },
        value: { de: "bis 10:00 Uhr", en: "until 10:00 AM", hr: "do 10:00", pl: "do 10:00" },
      },
      {
        label: { de: "Ruhezeiten", en: "Quiet hours", hr: "Vrijeme mira", pl: "Cisza nocna" },
        value: {
          de: "22:00 – 08:00 Uhr",
          en: "10:00 PM – 8:00 AM",
          hr: "22:00 – 08:00",
          pl: "22:00 – 08:00",
        },
      },
      {
        label: { de: "Rauchen", en: "Smoking", hr: "Pušenje", pl: "Palenie" },
        value: {
          de: "nur im Freien",
          en: "outdoors only",
          hr: "samo na otvorenom",
          pl: "tylko na zewnątrz",
        },
      },
    ],
    bullets: [
      {
        de: "Bitte behandelt die Wohnung und die Einrichtung pfleglich.",
        en: "Please treat the apartment and furnishings with care.",
        hr: "Molimo pažljivo se odnosite prema stanu i namještaju.",
        pl: "Prosimy o dbałe obchodzenie się z mieszkaniem i wyposażeniem.",
      },
      {
        de: "Zusätzliche Gäste/Besuch bitte vorher mit Nenad abstimmen.",
        en: "Please check with Nenad in advance about additional guests/visitors.",
        hr: "Dodatne goste/posjete molimo unaprijed dogovoriti s Nenadom.",
        pl: "Dodatkowych gości/odwiedziny prosimy wcześniej uzgodnić z Nenadem.",
      },
      {
        de: "Haustürschlüssel bei Abreise bitte an der vereinbarten Stelle hinterlegen.",
        en: "Please leave the front door key at the agreed spot on departure.",
        hr: "Ključ ulaznih vrata pri odlasku ostavite na dogovorenom mjestu.",
        pl: "Klucz do drzwi wejściowych przy wyjeździe prosimy zostawić w uzgodnionym miejscu.",
      },
    ],
  },
  {
    id: "waesche",
    title: { de: "Wäsche waschen", en: "Doing Laundry", hr: "Pranje rublja", pl: "Pranie" },
    intro: {
      de: "Die Waschmaschine steht im Waschraum/Bad – nutz sie während deines Aufenthalts gerne.",
      en: "The washing machine is in the laundry area/bathroom – feel free to use it during your stay.",
      hr: "Perilica rublja nalazi se u praonici/kupaonici – slobodno je koristi tijekom boravka.",
      pl: "Pralka znajduje się w pralni/łazience – śmiało korzystaj z niej podczas pobytu.",
    },
    bullets: [
      {
        de: "Waschmittel steht griffbereit neben der Maschine – bitte sparsam verwenden.",
        en: "Detergent is provided next to the machine – please use it sparingly.",
        hr: "Deterdžent se nalazi pored perilice – molimo koristite ga štedljivo.",
        pl: "Detergent znajduje się obok pralki – prosimy używać go oszczędnie.",
      },
      {
        de: "Standardprogramm (ca. 40–60 Min.) reicht für die meisten Sachen völlig aus.",
        en: "The standard cycle (approx. 40–60 min) is enough for most laundry.",
        hr: "Standardni program (oko 40–60 min) sasvim je dovoljan za većinu stvari.",
        pl: "Program standardowy (ok. 40–60 min) w zupełności wystarczy do większości rzeczy.",
      },
      {
        de: "Einen Wäschetrockner gibt es nicht – wie in Kroatien üblich, wird die Wäsche auf der Leine auf der Terrasse/im Garten getrocknet. Wäscheklammern liegen bereit.",
        en: "There is no tumble dryer – as is common in Croatia, laundry is air-dried on the line on the terrace/in the garden. Clothes pegs are provided.",
        hr: "Sušilice za rublje nema – kao što je uobičajeno u Hrvatskoj, rublje se suši na uzici na terasi/u vrtu. Štipaljke su pripremljene.",
        pl: "Nie ma suszarki do ubrań – jak to zwykle w Chorwacji, pranie suszy się na sznurze na tarasie/w ogrodzie. Spinacze do prania są przygotowane.",
      },
      {
        de: "Bitte die Maschine nach Gebrauch leer und die Tür einen Spalt offen lassen.",
        en: "Please leave the machine empty and the door slightly open after use.",
        hr: "Nakon korištenja molimo ostavite perilicu praznu i vrata odškrinuta.",
        pl: "Po użyciu prosimy zostawić pralkę pustą, a drzwiczki uchylone.",
      },
    ],
  },
  {
    id: "grillen",
    title: { de: "Grillen", en: "BBQ / Grilling", hr: "Roštiljanje", pl: "Grillowanie" },
    intro: {
      de: "Den Grill auf der Terrasse darfst du während deines Aufenthalts gerne nutzen.",
      en: "You're welcome to use the grill on the terrace during your stay.",
      hr: "Roštilj na terasi slobodno možeš koristiti tijekom boravka.",
      pl: "Grill na tarasie możesz swobodnie wykorzystywać podczas pobytu.",
    },
    bullets: [
      {
        de: "Grillkohle/Anzünder bitte selbst besorgen (kleiner Supermarkt in der Nähe, siehe Umgebung).",
        en: "Please bring your own charcoal/firelighters (small supermarket nearby, see the Surroundings section).",
        hr: "Ugljen/potpalu za roštilj molimo sami nabavite (mali supermarket u blizini, vidi Okolica).",
        pl: "Węgiel/podpałkę do grilla prosimy zakupić we własnym zakresie (mały supermarket w pobliżu, patrz Okolica).",
      },
      {
        de: "Grill nie unbeaufsichtigt lassen und ausreichend Abstand zu Möbeln/Pflanzen halten.",
        en: "Never leave the grill unattended and keep sufficient distance from furniture/plants.",
        hr: "Roštilj nikada ne ostavljajte bez nadzora i držite dovoljan razmak od namještaja/biljaka.",
        pl: "Nigdy nie zostawiaj grilla bez nadzoru i zachowaj odpowiednią odległość od mebli/roślin.",
      },
      {
        de: "Nach dem Grillen bitte vollständig abkühlen lassen und den Rost grob reinigen.",
        en: "Please let it cool down completely after use and give the grate a rough clean.",
        hr: "Nakon roštiljanja pustite da se potpuno ohladi i grubo očistite rešetku.",
        pl: "Po grillowaniu poczekaj, aż całkowicie ostygnie, i zgrubnie oczyść ruszt.",
      },
      {
        de: "Asche bitte erst am Folgetag in den dafür vorgesehenen Metallbehälter entsorgen.",
        en: "Please dispose of ashes only the next day, in the designated metal container.",
        hr: "Pepeo molimo odložite tek sljedeći dan u za to predviđenu metalnu posudu.",
        pl: "Popiół prosimy wyrzucić dopiero następnego dnia do przeznaczonego do tego metalowego pojemnika.",
      },
    ],
  },
  {
    id: "aufenthaltsbereiche",
    title: { de: "Aufenthaltsbereiche", en: "Common Areas", hr: "Prostori za boravak", pl: "Strefy wypoczynku" },
    intro: {
      de: "Diese Bereiche gehören ganz dir während deines Aufenthalts – mach es dir gemütlich.",
      en: "These areas are all yours during your stay – make yourself at home.",
      hr: "Ovi prostori u potpunosti su tvoji tijekom boravka – uživaj.",
      pl: "Te strefy są w pełni Twoje podczas pobytu – rozgość się.",
    },
    bullets: [
      {
        de: "Terrasse: gemütlicher Sitzbereich für Frühstück, Grillabende und Sonnenuntergänge.",
        en: "Terrace: cozy seating area for breakfast, BBQ evenings and sunsets.",
        hr: "Terasa: udoban prostor za sjedenje za doručak, večeri uz roštilj i zalaske sunca.",
        pl: "Taras: przytulne miejsce do siedzenia na śniadanie, wieczory przy grillu i zachody słońca.",
      },
      {
        de: "Garten: schattige Plätze zum Entspannen, ideal für einen Mittagsschlaf in der Hängematte.",
        en: "Garden: shaded spots to relax, perfect for an afternoon nap in the hammock.",
        hr: "Vrt: zasjenjena mjesta za opuštanje, idealna za popodnevni odmor u ležaljci.",
        pl: "Ogród: zacienione miejsca do relaksu, idealne na poobiednią drzemkę w hamaku.",
      },
      {
        de: "Wohnbereich: klimatisiert, mit Sofa, TV und WLAN – gut für regnerische Stunden.",
        en: "Living room: air-conditioned, with sofa, TV and WiFi – great for rainy hours.",
        hr: "Dnevni boravak: klimatiziran, s kaučem, TV-om i WiFi-jem – dobar za kišne sate.",
        pl: "Salon: klimatyzowany, z sofą, telewizorem i WiFi – idealny na deszczowe godziny.",
      },
    ],
    imageId: "aufenthalt",
  },
  {
    id: "wifi-parken",
    title: { de: "WLAN & Parken", en: "WiFi & Parking", hr: "WiFi i parking", pl: "WiFi i parking" },
    facts: [
      {
        label: { de: "WLAN-Netzwerk", en: "WiFi network", hr: "WiFi mreža", pl: "Sieć WiFi" },
        value: { de: "SUNCE", en: "SUNCE", hr: "SUNCE", pl: "SUNCE" },
        copyable: true,
      },
      {
        label: { de: "WLAN-Passwort", en: "WiFi password", hr: "WiFi lozinka", pl: "Hasło WiFi" },
        value: { de: "123456789", en: "123456789", hr: "123456789", pl: "123456789" },
        copyable: true,
      },
      {
        label: { de: "Parken", en: "Parking", hr: "Parking", pl: "Parking" },
        value: {
          de: "kostenlos auf dem Grundstück, Hausnummer 29",
          en: "free of charge on the property, house number 29",
          hr: "besplatno na posjedu, kućni broj 29",
          pl: "bezpłatnie na posesji, numer domu 29",
        },
      },
    ],
    bullets: [
      {
        de: "Der Parkplatz befindet sich direkt auf dem Grundstück – kein öffentliches Parken nötig.",
        en: "The parking spot is right on the property – no need to look for public parking.",
        hr: "Parkirno mjesto nalazi se izravno na posjedu – nije potrebno javno parkiranje.",
        pl: "Miejsce parkingowe znajduje się bezpośrednio na posesji – nie trzeba szukać parkingu publicznego.",
      },
    ],
  },
  {
    id: "wissenswertes",
    title: { de: "Wissenswertes für Gäste", en: "Good to Know", hr: "Korisne informacije", pl: "Warto wiedzieć" },
    intro: {
      de: "Ein paar praktische Dinge, die ich jedem meiner Gäste gerne mitgebe.",
      en: "A few practical things I like to share with every one of my guests.",
      hr: "Nekoliko praktičnih stvari koje rado podijelim sa svakim gostom.",
      pl: "Kilka praktycznych rzeczy, którymi chętnie dzielę się z każdym moim gościem.",
    },
    facts: [
      {
        label: { de: "Notrufnummer", en: "Emergency number", hr: "Broj hitne pomoći", pl: "Numer alarmowy" },
        value: {
          de: "112 (europaweit, kostenlos)",
          en: "112 (Europe-wide, free)",
          hr: "112 (diljem Europe, besplatno)",
          pl: "112 (w całej Europie, bezpłatnie)",
        },
      },
      {
        label: { de: "Leitungswasser", en: "Tap water", hr: "Voda iz slavine", pl: "Woda z kranu" },
        value: {
          de: "in Kroatien generell trinkbar",
          en: "generally safe to drink in Croatia",
          hr: "u Hrvatskoj je općenito pitka",
          pl: "w Chorwacji generalnie nadaje się do picia",
        },
      },
      {
        label: { de: "Währung", en: "Currency", hr: "Valuta", pl: "Waluta" },
        value: {
          de: "Euro (€) – seit 2023 in Kroatien",
          en: "Euro (€) – Croatia adopted it in 2023",
          hr: "Euro (€) – u Hrvatskoj od 2023.",
          pl: "Euro (€) – w Chorwacji od 2023 roku",
        },
      },
      {
        label: { de: "Trinkgeld", en: "Tipping", hr: "Napojnica", pl: "Napiwek" },
        value: {
          de: "nicht verpflichtend, ca. 10% bei gutem Service üblich",
          en: "not mandatory, ca. 10% for good service is common",
          hr: "nije obavezna, uobičajeno oko 10% za dobru uslugu",
          pl: "nieobowiązkowy, przy dobrej obsłudze zwyczajowo ok. 10%",
        },
      },
      {
        label: { de: "Steckdosen", en: "Power sockets", hr: "Utičnice", pl: "Gniazdka elektryczne" },
        value: {
          de: "Typ C/F, 230V (wie in Kontinentaleuropa)",
          en: "Type C/F, 230V (same as continental Europe)",
          hr: "Tip C/F, 230V (kao u kontinentalnoj Europi)",
          pl: "Typ C/F, 230V (jak w Europie kontynentalnej)",
        },
      },
    ],
    bullets: [
      {
        de: "Die Sonne ist an der Adria stärker als sie wirkt – Sonnencreme und ausreichend Wasser nicht vergessen.",
        en: "The Adriatic sun is stronger than it feels – don't forget sunscreen and enough water.",
        hr: "Sunce na Jadranu jače je nego što se čini – ne zaboravite kremu za sunčanje i dovoljno vode.",
        pl: "Słońce nad Adriatykiem jest silniejsze, niż się wydaje – nie zapomnij o kremie z filtrem i wystarczającej ilości wody.",
      },
      {
        de: "Apotheken erkennt man am grünen Kreuz, viele haben auch nachts einen Notdienst.",
        en: "Pharmacies are marked by a green cross, many offer a night service too.",
        hr: "Ljekarne prepoznajete po zelenom križu, mnoge imaju i noćno dežurstvo.",
        pl: "Apteki rozpoznasz po zielonym krzyżu, wiele z nich ma też dyżur nocny.",
      },
    ],
  },
];
