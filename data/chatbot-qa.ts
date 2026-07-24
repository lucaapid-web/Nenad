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
    keywords: ["wlan", "wifi", "internet", "passwort", "password", "netzwerk", "sunce", "lozinka", "mreža", "hasło", "sieć"],
    question: {
      de: "Wie lautet das WLAN-Passwort?",
      en: "What's the WiFi password?",
      hr: "Koja je lozinka za WiFi?",
      pl: "Jakie jest hasło do WiFi?",
    },
    answer: {
      de: "Das WLAN-Netzwerk heißt SUNCE, das Passwort lautet 123456789.",
      en: "The WiFi network is called SUNCE, the password is 123456789.",
      hr: "WiFi mreža se zove SUNCE, lozinka je 123456789.",
      pl: "Sieć WiFi nazywa się SUNCE, hasło to 123456789.",
    },
    featured: true,
  },
  {
    id: "parken",
    category: "haus",
    keywords: ["parken", "parking", "parkplatz", "auto", "stellplatz", "parkiranje", "parkirati", "miejsce parkingowe"],
    question: {
      de: "Wo kann ich parken?",
      en: "Where can I park?",
      hr: "Gdje mogu parkirati?",
      pl: "Gdzie mogę zaparkować?",
    },
    answer: {
      de: "Ihr parkt kostenlos direkt auf dem Grundstück, Hausnummer 29.",
      en: "You can park free of charge right on the property, house number 29.",
      hr: "Besplatno parkirate izravno na posjedu, kućni broj 29.",
      pl: "Możesz parkować bezpłatnie bezpośrednio na posesji, numer domu 29.",
    },
    featured: true,
  },
  {
    id: "parkverbote-kroatien",
    category: "verkehr",
    keywords: [
      "parkverbot", "no parking", "gelbe linie", "yellow line", "strafzettel", "abschleppen",
      "zabrana parkiranja", "žuta linija", "zakaz parkowania", "żółta linia",
    ],
    question: {
      de: "Gibt es besondere Parkverbote in Kroatien?",
      en: "Are there special no-parking rules in Croatia?",
      hr: "Postoje li posebna pravila o zabrani parkiranja u Hrvatskoj?",
      pl: "Czy w Chorwacji obowiązują specjalne zakazy parkowania?",
    },
    answer: {
      de: "Gelbe Bordsteinlinien und -zonen bedeuten Halte-/Parkverbot, in vielen Küstenorten gibt es zudem kostenpflichtige, oft mit Parkscheinautomat oder App abzurechnende Zonen. Falsch geparkte Autos werden auch in touristischen Orten häufig abgeschleppt – Beschilderung genau beachten.",
      en: "Yellow curb markings/zones mean no stopping or parking, and many coastal towns have paid zones payable via meter or app. Illegally parked cars are commonly towed even in touristy areas – always check the signage.",
      hr: "Žute rubne linije i zone znače zabranu zaustavljanja/parkiranja, u mnogim priobalnim mjestima postoje i naplatne zone koje se plaćaju parkomatom ili aplikacijom. Pogrešno parkirani automobili često se odvoze i u turističkim mjestima – pažljivo pratite oznake.",
      pl: "Żółte linie i strefy przy krawężniku oznaczają zakaz zatrzymywania/parkowania, w wielu nadmorskich miejscowościach są też strefy płatne, rozliczane parkomatem lub aplikacją. Nieprawidłowo zaparkowane samochody są często odholowywane nawet w turystycznych miejscowościach – zwracaj uwagę na oznakowanie.",
    },
    featured: true,
  },
  {
    id: "verkehrsregeln-kroatien",
    category: "verkehr",
    keywords: [
      "verkehrsregeln", "traffic rules", "tempolimit", "speed limit", "licht", "headlights", "promille", "alcohol", "maut", "toll",
      "prometna pravila", "ograničenje brzine", "alkohol", "przepisy drogowe", "limit prędkości",
    ],
    question: {
      de: "Was muss ich bei den Verkehrsregeln in Kroatien beachten?",
      en: "What should I know about traffic rules in Croatia?",
      hr: "Na što trebam paziti kod prometnih pravila u Hrvatskoj?",
      pl: "Na co powinienem zwrócić uwagę w przepisach drogowych w Chorwacji?",
    },
    answer: {
      de: "In Kroatien gilt ganzjährig Tagfahrlichtpflicht, die Promillegrenze liegt bei 0,5 ‰ (bei Fahrern unter 24 Jahren teils 0,0 ‰). Tempolimits: i.d.R. 50 km/h innerorts, 90 km/h außerorts, 130 km/h auf Autobahnen (sofern nicht anders ausgeschildert). Autobahnen sind mautpflichtig über Mautstationen (keine Vignette). Bitte aktuelle Regelungen vor Fahrtantritt prüfen.",
      en: "Croatia requires headlights on at all times, the blood alcohol limit is 0.05% (often 0.0% for drivers under 24). Speed limits are generally 50 km/h in towns, 90 km/h outside towns, 130 km/h on motorways (unless signed otherwise). Motorways use toll booths, not a vignette sticker. Please verify current rules before driving.",
      hr: "U Hrvatskoj je cijele godine obavezna vožnja s upaljenim kratkim svjetlima, granica alkohola je 0,5 ‰ (za vozače mlađe od 24 godine često 0,0 ‰). Ograničenja brzine: obično 50 km/h u naselju, 90 km/h izvan naselja, 130 km/h na autocestama (osim ako nije drukčije označeno). Autoceste su naplatne putem naplatnih postaja (bez vinjete). Molimo provjerite aktualne propise prije vožnje.",
      pl: "W Chorwacji obowiązuje całoroczny nakaz jazdy na światłach mijania, dopuszczalny limit alkoholu to 0,5 ‰ (dla kierowców poniżej 24 lat często 0,0 ‰). Limity prędkości: zwykle 50 km/h w terenie zabudowanym, 90 km/h poza nim, 130 km/h na autostradach (o ile nie oznaczono inaczej). Autostrady są płatne przez bramki (bez winiety). Przed jazdą sprawdź aktualne przepisy.",
    },
    featured: true,
  },
  {
    id: "notruf",
    category: "sicherheit",
    keywords: [
      "notruf", "emergency", "112", "polizei", "police", "krankenwagen", "ambulance", "feuerwehr",
      "hitna pomoć", "vatrogasci", "pogotowie", "straż pożarna",
    ],
    question: {
      de: "Was ist die Notrufnummer in Kroatien?",
      en: "What's the emergency number in Croatia?",
      hr: "Koji je broj hitne pomoći u Hrvatskoj?",
      pl: "Jaki jest numer alarmowy w Chorwacji?",
    },
    answer: {
      de: "Die europaweite Notrufnummer 112 funktioniert auch in Kroatien kostenlos für Polizei, Feuerwehr und Rettungsdienst.",
      en: "The Europe-wide emergency number 112 works free of charge in Croatia for police, fire and ambulance.",
      hr: "Europski broj za hitne slučajeve 112 besplatno funkcionira i u Hrvatskoj za policiju, vatrogasce i hitnu pomoć.",
      pl: "Ogólnoeuropejski numer alarmowy 112 działa bezpłatnie także w Chorwacji – dla policji, straży pożarnej i pogotowia.",
    },
    featured: true,
  },
  {
    id: "seeigel",
    category: "strand",
    keywords: [
      "seeigel", "sea urchin", "strand", "beach", "stich", "sting", "badeschuhe",
      "morski ježinci", "plaža", "jeżowce", "plaża",
    ],
    question: {
      de: "Gibt es Seeigel an den Stränden hier?",
      en: "Are there sea urchins at the beaches here?",
      hr: "Ima li morskih ježinaca na plažama ovdje?",
      pl: "Czy na tutejszych plażach są jeżowce?",
    },
    answer: {
      de: "Ja, besonders an felsigen Stränden rund um Okrug und Čiovo gibt es Seeigel. Badeschuhe schützen zuverlässig vor Stichen.",
      en: "Yes, especially on rocky beaches around Okrug and Čiovo. Reef/water shoes reliably protect you from getting stung.",
      hr: "Da, posebno na stjenovitim plažama oko Okruga i Čiova ima morskih ježinaca. Cipele za kupanje pouzdano štite od uboda.",
      pl: "Tak, szczególnie na skalistych plażach wokół Okrug i Čiovo. Buty do wody skutecznie chronią przed ukłuciami.",
    },
    featured: true,
  },
  {
    id: "waehrung",
    category: "allgemein",
    keywords: ["währung", "currency", "euro", "geld", "money", "bezahlen", "karte", "valuta", "novac", "waluta", "pieniądze"],
    question: {
      de: "Mit welcher Währung wird in Kroatien bezahlt?",
      en: "What currency is used in Croatia?",
      hr: "Kojom valutom se plaća u Hrvatskoj?",
      pl: "Jaką walutą płaci się w Chorwacji?",
    },
    answer: {
      de: "Seit 2023 ist der Euro (€) die offizielle Währung in Kroatien. Kartenzahlung ist fast überall möglich.",
      en: "Since 2023 the Euro (€) is Croatia's official currency. Card payment is accepted almost everywhere.",
      hr: "Od 2023. euro (€) je službena valuta u Hrvatskoj. Plaćanje karticom moguće je gotovo posvuda.",
      pl: "Od 2023 roku euro (€) jest oficjalną walutą Chorwacji. Płatność kartą możliwa jest niemal wszędzie.",
    },
  },
  {
    id: "trinkgeld",
    category: "allgemein",
    keywords: ["trinkgeld", "tip", "tipping", "restaurant", "napojnica", "napiwek"],
    question: {
      de: "Ist Trinkgeld in Kroatien üblich?",
      en: "Is tipping common in Croatia?",
      hr: "Je li napojnica uobičajena u Hrvatskoj?",
      pl: "Czy napiwki są powszechne w Chorwacji?",
    },
    answer: {
      de: "Trinkgeld ist nicht verpflichtend, aber bei gutem Service sind ca. 10% üblich.",
      en: "Tipping isn't mandatory, but around 10% for good service is common.",
      hr: "Napojnica nije obavezna, ali za dobru uslugu uobičajeno je oko 10%.",
      pl: "Napiwek nie jest obowiązkowy, ale przy dobrej obsłudze zwyczajowo daje się ok. 10%.",
    },
  },
  {
    id: "leitungswasser",
    category: "allgemein",
    keywords: [
      "leitungswasser", "tap water", "trinkwasser", "drinking water",
      "voda iz slavine", "pitka voda", "woda z kranu", "woda pitna",
    ],
    question: {
      de: "Kann man das Leitungswasser trinken?",
      en: "Can you drink the tap water?",
      hr: "Može li se piti voda iz slavine?",
      pl: "Czy można pić wodę z kranu?",
    },
    answer: {
      de: "Ja, Leitungswasser ist in Kroatien generell unbedenklich trinkbar.",
      en: "Yes, tap water is generally safe to drink in Croatia.",
      hr: "Da, voda iz slavine u Hrvatskoj je općenito sigurna za piće.",
      pl: "Tak, woda z kranu w Chorwacji jest generalnie bezpieczna do picia.",
    },
  },
  {
    id: "hausordnung-checkin",
    category: "haus",
    keywords: [
      "checkin", "check-in", "check in", "ankunft", "arrival time", "checkout", "check-out", "check out", "abreise",
      "prijava", "odjava", "zameldowanie", "wymeldowanie",
    ],
    question: {
      de: "Wann ist Check-in und Check-out?",
      en: "When is check-in and check-out?",
      hr: "Kada je prijava i odjava?",
      pl: "Kiedy jest zameldowanie i wymeldowanie?",
    },
    answer: {
      de: "Check-in ist ab 15:00 Uhr, Check-out bis 10:00 Uhr.",
      en: "Check-in is from 3:00 PM, check-out is until 10:00 AM.",
      hr: "Prijava je od 15:00, odjava do 10:00.",
      pl: "Zameldowanie od 15:00, wymeldowanie do 10:00.",
    },
    featured: true,
  },
  {
    id: "waesche-chat",
    category: "haus",
    keywords: ["wäsche", "laundry", "waschmaschine", "washing machine", "wäscheleine", "rublje", "perilica", "pranie", "pralka"],
    question: {
      de: "Wo kann ich Wäsche waschen?",
      en: "Where can I do laundry?",
      hr: "Gdje mogu oprati rublje?",
      pl: "Gdzie mogę zrobić pranie?",
    },
    answer: {
      de: "Die Waschmaschine steht im Waschraum/Bad, Waschmittel liegt bereit. Getrocknet wird auf der Wäscheleine auf Terrasse/Garten – wie in Kroatien üblich gibt es keinen Trockner.",
      en: "The washing machine is in the laundry area/bathroom, detergent is provided. Drying is on the clothesline on the terrace/garden – as is common in Croatia, there's no tumble dryer.",
      hr: "Perilica rublja nalazi se u praonici/kupaonici, deterdžent je pripremljen. Suši se na uzici na terasi/vrtu – kao što je uobičajeno u Hrvatskoj, nema sušilice.",
      pl: "Pralka znajduje się w pralni/łazience, detergent jest przygotowany. Suszenie odbywa się na sznurze na tarasie/w ogrodzie – jak zwykle w Chorwacji, nie ma suszarki.",
    },
  },
  {
    id: "grillen-chat",
    category: "haus",
    keywords: ["grill", "bbq", "grillen", "barbecue", "roštilj", "roštiljati", "grillować"],
    question: {
      de: "Darf ich grillen?",
      en: "Can I use the grill?",
      hr: "Smijem li roštiljati?",
      pl: "Czy mogę grillować?",
    },
    answer: {
      de: "Ja, der Grill auf der Terrasse darf während des Aufenthalts genutzt werden – Kohle bitte selbst besorgen.",
      en: "Yes, the grill on the terrace is available during your stay – please bring your own charcoal.",
      hr: "Da, roštilj na terasi može se koristiti tijekom boravka – ugljen molimo sami nabavite.",
      pl: "Tak, grill na tarasie jest dostępny podczas pobytu – prosimy przynieść własny węgiel.",
    },
  },
  {
    id: "notfall-license",
    category: "aktivitaeten",
    keywords: [
      "jetski", "jet ski", "lizenz", "license", "führerschein", "boot lizenz",
      "dozvola", "vozačka za brod", "licencja", "patent",
    ],
    question: {
      de: "Brauche ich eine Lizenz für Jetski oder Boot?",
      en: "Do I need a license for a jetski or boat?",
      hr: "Trebam li dozvolu za jetski ili brod?",
      pl: "Czy potrzebuję licencji na skuter wodny lub łódź?",
    },
    answer: {
      de: "Für Jetskis wird meist ein Bootsführerschein oder internationaler Kompetenznachweis (ICC) verlangt. Kleine Boote bis ca. 5 kW können oft ohne Führerschein gemietet werden. Bitte immer direkt beim Verleih die aktuellen Anforderungen prüfen.",
      en: "Jet skis usually require a boating license or International Certificate of Competence (ICC). Small boats up to roughly 5 kW can often be rented without a license. Always confirm current requirements directly with the rental company.",
      hr: "Za jetski se obično traži dozvola za brodicu ili međunarodna svjedodžba (ICC). Manji brodovi do oko 5 kW često se mogu iznajmiti bez dozvole. Uvijek provjerite aktualne zahtjeve izravno kod iznajmljivača.",
      pl: "Do skutera wodnego zwykle wymagany jest patent motorowodny lub międzynarodowy certyfikat kompetencji (ICC). Małe łodzie do ok. 5 kW można często wynająć bez licencji. Zawsze potwierdź aktualne wymagania bezpośrednio w wypożyczalni.",
    },
  },
];
