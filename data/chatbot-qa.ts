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
      de: "Mein WLAN heißt SUNCE, das Passwort lautet 123456789.",
      en: "My WiFi is called SUNCE, the password is 123456789.",
      hr: "Moj WiFi se zove SUNCE, lozinka je 123456789.",
      pl: "Moje WiFi nazywa się SUNCE, hasło to 123456789.",
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
      de: "Du kannst bei mir kostenlos direkt auf dem Grundstück parken, Hausnummer 29.",
      en: "You can park with me free of charge right on the property, house number 29.",
      hr: "Kod mene možeš besplatno parkirati izravno na posjedu, kućni broj 29.",
      pl: "U mnie możesz parkować bezpłatnie bezpośrednio na posesji, numer domu 29.",
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
      de: "Ein Tipp von mir, bevor es Ärger gibt: Gelbe Bordsteinlinien und -zonen bedeuten Halte-/Parkverbot, in vielen Küstenorten gibt es zudem kostenpflichtige, oft mit Parkscheinautomat oder App abzurechnende Zonen. Falsch geparkte Autos werden auch in touristischen Orten häufig abgeschleppt – Beschilderung genau beachten.",
      en: "A tip from me before you run into trouble: yellow curb markings/zones mean no stopping or parking, and many coastal towns have paid zones payable via meter or app. Illegally parked cars are commonly towed even in touristy areas – always check the signage.",
      hr: "Savjet od mene prije nego što nastanu problemi: žute rubne linije i zone znače zabranu zaustavljanja/parkiranja, u mnogim priobalnim mjestima postoje i naplatne zone koje se plaćaju parkomatom ili aplikacijom. Pogrešno parkirani automobili često se odvoze i u turističkim mjestima – pažljivo pratite oznake.",
      pl: "Rada ode mnie, zanim wpadniesz w kłopoty: żółte linie i strefy przy krawężniku oznaczają zakaz zatrzymywania/parkowania, w wielu nadmorskich miejscowościach są też strefy płatne, rozliczane parkomatem lub aplikacją. Nieprawidłowo zaparkowane samochody są często odholowywane nawet w turystycznych miejscowościach – zwracaj uwagę na oznakowanie.",
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
      de: "Ein paar Dinge, die ich jedem Gast ans Herz lege, bevor er sich hier ans Steuer setzt: In Kroatien gilt ganzjährig Tagfahrlichtpflicht, die Promillegrenze liegt bei 0,5 ‰ (bei Fahrern unter 24 Jahren teils 0,0 ‰). Tempolimits: i.d.R. 50 km/h innerorts, 90 km/h außerorts, 130 km/h auf Autobahnen (sofern nicht anders ausgeschildert). Autobahnen sind mautpflichtig über Mautstationen (keine Vignette). Bitte aktuelle Regelungen vor Fahrtantritt prüfen.",
      en: "A few things I always tell my guests before they get behind the wheel here: Croatia requires headlights on at all times, the blood alcohol limit is 0.05% (often 0.0% for drivers under 24). Speed limits are generally 50 km/h in towns, 90 km/h outside towns, 130 km/h on motorways (unless signed otherwise). Motorways use toll booths, not a vignette sticker. Please verify current rules before driving.",
      hr: "Nekoliko stvari koje uvijek kažem gostima prije nego sjednu za volan ovdje: u Hrvatskoj je cijele godine obavezna vožnja s upaljenim kratkim svjetlima, granica alkohola je 0,5 ‰ (za vozače mlađe od 24 godine često 0,0 ‰). Ograničenja brzine: obično 50 km/h u naselju, 90 km/h izvan naselja, 130 km/h na autocestama (osim ako nije drukčije označeno). Autoceste su naplatne putem naplatnih postaja (bez vinjete). Molimo provjerite aktualne propise prije vožnje.",
      pl: "Kilka rzeczy, o których zawsze mówię swoim gościom, zanim usiądą za kierownicą: w Chorwacji obowiązuje całoroczny nakaz jazdy na światłach mijania, dopuszczalny limit alkoholu to 0,5 ‰ (dla kierowców poniżej 24 lat często 0,0 ‰). Limity prędkości: zwykle 50 km/h w terenie zabudowanym, 90 km/h poza nim, 130 km/h na autostradach (o ile nie oznaczono inaczej). Autostrady są płatne przez bramki (bez winiety). Przed jazdą sprawdź aktualne przepisy.",
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
      de: "Für den Fall der Fälle: Die europaweite Notrufnummer 112 funktioniert auch in Kroatien kostenlos für Polizei, Feuerwehr und Rettungsdienst.",
      en: "Just in case: the Europe-wide emergency number 112 works free of charge in Croatia for police, fire and ambulance.",
      hr: "Za svaki slučaj: europski broj za hitne slučajeve 112 besplatno funkcionira i u Hrvatskoj za policiju, vatrogasce i hitnu pomoć.",
      pl: "Na wszelki wypadek: ogólnoeuropejski numer alarmowy 112 działa bezpłatnie także w Chorwacji – dla policji, straży pożarnej i pogotowia.",
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
      de: "Ja, besonders an felsigen Stränden rund um Okrug und Čiovo – das sage ich jedem Gast gleich zu Beginn. Badeschuhe schützen zuverlässig vor Stichen.",
      en: "Yes, especially on rocky beaches around Okrug and Čiovo – it's the first thing I tell every guest. Reef/water shoes reliably protect you from getting stung.",
      hr: "Da, posebno na stjenovitim plažama oko Okruga i Čiova – to je prvo što kažem svakom gostu. Cipele za kupanje pouzdano štite od uboda.",
      pl: "Tak, szczególnie na skalistych plażach wokół Okrug i Čiovo – to pierwsza rzecz, o której mówię każdemu gościowi. Buty do wody skutecznie chronią przed ukłuciami.",
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
      de: "Ich freue mich, dich ab 15:00 Uhr willkommen zu heißen, Check-out ist dann bis 10:00 Uhr.",
      en: "I'm happy to welcome you from 3:00 PM, check-out is until 10:00 AM.",
      hr: "Veselim se dočekati te od 15:00, odjava je do 10:00.",
      pl: "Cieszę się, że przywitam Cię od 15:00, wymeldowanie jest do 10:00.",
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
      de: "Die Waschmaschine steht im Waschraum/Bad, Waschmittel liegt bereit – nutz sie gerne. Getrocknet wird bei mir wie in Kroatien üblich auf der Wäscheleine auf Terrasse/Garten, einen Trockner gibt es nicht.",
      en: "The washing machine is in the laundry area/bathroom, detergent is provided – feel free to use it. Drying happens on the clothesline on the terrace/garden, as is common in Croatia – there's no tumble dryer.",
      hr: "Perilica rublja nalazi se u praonici/kupaonici, deterdžent je pripremljen – slobodno je koristi. Suši se kod mene, kao što je uobičajeno u Hrvatskoj, na uzici na terasi/vrtu, sušilice nema.",
      pl: "Pralka znajduje się w pralni/łazience, detergent jest przygotowany – śmiało z niej korzystaj. Suszenie odbywa się u mnie, jak zwykle w Chorwacji, na sznurze na tarasie/w ogrodzie, suszarki nie ma.",
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
      de: "Ja, klar! Der Grill auf der Terrasse steht dir während deines Aufenthalts zur Verfügung – Kohle bringst du am besten selbst mit.",
      en: "Yes, of course! The grill on the terrace is yours to use during your stay – it's best to bring your own charcoal.",
      hr: "Da, naravno! Roštilj na terasi ti je na raspolaganju tijekom boravka – ugljen je najbolje ponijeti sam.",
      pl: "Tak, oczywiście! Grill na tarasie jest do Twojej dyspozycji podczas pobytu – węgiel najlepiej przynieść samemu.",
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
      de: "Kurz gesagt: Für Jetskis wird meist ein Bootsführerschein oder internationaler Kompetenznachweis (ICC) verlangt. Kleine Boote bis ca. 5 kW können oft ohne Führerschein gemietet werden. Bitte immer direkt beim Verleih die aktuellen Anforderungen prüfen.",
      en: "In a nutshell: jet skis usually require a boating license or International Certificate of Competence (ICC). Small boats up to roughly 5 kW can often be rented without a license. Always confirm current requirements directly with the rental company.",
      hr: "Ukratko: za jetski se obično traži dozvola za brodicu ili međunarodna svjedodžba (ICC). Manji brodovi do oko 5 kW često se mogu iznajmiti bez dozvole. Uvijek provjerite aktualne zahtjeve izravno kod iznajmljivača.",
      pl: "W skrócie: do skutera wodnego zwykle wymagany jest patent motorowodny lub międzynarodowy certyfikat kompetencji (ICC). Małe łodzie do ok. 5 kW można często wynająć bez licencji. Zawsze potwierdź aktualne wymagania bezpośrednio w wypożyczalni.",
    },
  },
  {
    id: "gepaeck",
    category: "haus",
    keywords: [
      "gepäck", "koffer", "luggage", "suitcase", "storage",
      "prtljaga", "kofer", "bagaż", "walizka",
    ],
    question: {
      de: "Kann ich mein Gepäck nach dem Check-out noch lagern?",
      en: "Can I store my luggage after check-out?",
      hr: "Mogu li ostaviti prtljagu nakon odjave?",
      pl: "Czy mogę zostawić bagaż po wymeldowaniu?",
    },
    answer: {
      de: "Klar, sag mir einfach kurz Bescheid, dann findet sich meistens eine Lösung, damit du dein Gepäck nach dem Check-out noch ein paar Stunden bei mir lassen kannst.",
      en: "Of course – just let me know in advance, and we'll usually find a way for you to leave your luggage with me for a few hours after check-out.",
      hr: "Naravno, samo mi javi unaprijed pa ćemo obično naći način da prtljagu ostaviš kod mene još nekoliko sati nakon odjave.",
      pl: "Jasne – daj mi tylko znać wcześniej, zwykle znajdziemy sposób, żebyś mógł zostawić bagaż u mnie jeszcze na kilka godzin po wymeldowaniu.",
    },
  },
  {
    id: "sim-daten",
    category: "allgemein",
    keywords: [
      "sim", "internet", "daten", "mobile data", "roaming",
      "mobitel", "podaci", "karta sim", "dane mobilne",
    ],
    question: {
      de: "Wie komme ich am besten an mobiles Internet/eine SIM-Karte?",
      en: "What's the best way to get mobile data / a SIM card?",
      hr: "Kako najlakše doći do mobilnog interneta/SIM kartice?",
      pl: "Jak najlepiej zdobyć mobilny internet/kartę SIM?",
    },
    answer: {
      de: "Seit 2023 gilt EU-Roaming, viele Handyverträge aus der EU funktionieren also einfach so weiter. Falls du extra eine SIM-Karte willst, bekommst du Prepaid-Karten der großen kroatischen Anbieter (A1, Telemach, Hrvatski Telekom) an fast jedem Kiosk oder Flughafen.",
      en: "Since 2023 EU roaming applies, so most EU phone plans simply keep working. If you'd like a local SIM anyway, prepaid cards from the big Croatian providers (A1, Telemach, Hrvatski Telekom) are sold at almost every kiosk and at the airport.",
      hr: "Od 2023. vrijedi EU roaming, pa većina EU tarifa jednostavno radi i ovdje. Ako ipak želiš lokalnu SIM karticu, prepaid kartice velikih hrvatskih operatera (A1, Telemach, Hrvatski Telekom) dobiješ na gotovo svakom kiosku i na aerodromu.",
      pl: "Od 2023 roku obowiązuje roaming UE, więc większość unijnych taryf po prostu działa dalej. Jeśli mimo to chcesz lokalną kartę SIM, karty prepaid od dużych chorwackich operatorów (A1, Telemach, Hrvatski Telekom) dostaniesz niemal na każdym kiosku i na lotnisku.",
    },
  },
  {
    id: "geldautomat",
    category: "allgemein",
    keywords: ["geldautomat", "bankomat", "atm", "cash", "bargeld", "novac", "gotówka"],
    question: {
      de: "Wo finde ich den nächsten Geldautomaten?",
      en: "Where's the nearest ATM?",
      hr: "Gdje je najbliži bankomat?",
      pl: "Gdzie jest najbliższy bankomat?",
    },
    answer: {
      de: "In Trogir und auch in Okrug Gornji selbst gibt es mehrere Geldautomaten, meist bei den größeren Supermärkten oder in der Nähe der Bank-Filialen. Kartenzahlung klappt aber ohnehin fast überall, Bargeld braucht man selten.",
      en: "There are several ATMs both in Trogir and right in Okrug Gornji, usually near the bigger supermarkets or bank branches. Card payment works almost everywhere anyway, so you rarely need cash.",
      hr: "U Trogiru, a i u samom Okrugu Gornjem ima nekoliko bankomata, obično pored većih trgovina ili poslovnica banaka. Plaćanje karticom ionako radi gotovo posvuda, gotovina rijetko treba.",
      pl: "W Trogirze, a także w samym Okrug Gornji jest kilka bankomatów, zwykle przy większych sklepach lub oddziałach banków. Płatność kartą i tak działa niemal wszędzie, gotówka rzadko jest potrzebna.",
    },
  },
  {
    id: "supermarkt",
    category: "allgemein",
    keywords: [
      "supermarkt", "einkaufen", "lebensmittel", "supermarket", "groceries", "shopping",
      "dućan", "trgovina", "sklep", "zakupy",
    ],
    question: {
      de: "Wo ist der nächste Supermarkt und wann hat er auf?",
      en: "Where's the nearest supermarket and what are its hours?",
      hr: "Gdje je najbliži supermarket i kada radi?",
      pl: "Gdzie jest najbliższy supermarket i jakie ma godziny otwarcia?",
    },
    answer: {
      de: "Ein kleiner Supermarkt ist nur wenige Gehminuten entfernt, größere findest du in Trogir. Ein Tipp von mir: sonntags haben viele Läden in Kroatien verkürzte Öffnungszeiten oder bleiben ganz zu – für den Sonntagseinkauf lieber vorher planen.",
      en: "There's a small supermarket just a few minutes' walk away, and bigger ones in Trogir. A tip from me: many shops in Croatia have shorter hours on Sundays or close entirely, so it's worth planning your Sunday shopping ahead.",
      hr: "Mali supermarket je udaljen svega nekoliko minuta hoda, veći ćeš naći u Trogiru. Moj savjet: nedjeljom mnogi dućani u Hrvatskoj rade kraće ili uopće ne rade – nedjeljnu kupovinu isplati se isplanirati unaprijed.",
      pl: "Mały supermarket jest zaledwie kilka minut spacerem, większe znajdziesz w Trogirze. Moja rada: w niedziele wiele sklepów w Chorwacji ma skrócone godziny albo jest zamkniętych – warto zaplanować niedzielne zakupy wcześniej.",
    },
  },
  {
    id: "gesundheit",
    category: "sicherheit",
    keywords: ["apotheke", "arzt", "doktor", "pharmacy", "doctor", "medical", "ljekarna", "liječnik", "apteka", "lekarz"],
    question: {
      de: "Wo finde ich eine Apotheke oder einen Arzt?",
      en: "Where can I find a pharmacy or a doctor?",
      hr: "Gdje mogu naći ljekarnu ili liječnika?",
      pl: "Gdzie znajdę aptekę lub lekarza?",
    },
    answer: {
      de: "Apotheken erkennst du am grünen Kreuz, es gibt mehrere in Trogir, teils mit Nachtdienst. Für ärztliche Versorgung ist die Gesundheitsstation bzw. das Krankenhaus in Trogir die richtige Anlaufstelle – bei einem echten Notfall bitte immer die 112 wählen.",
      en: "Pharmacies are marked by a green cross, there are several in Trogir, some with night service. For medical care, the health center / hospital in Trogir is the right place to go – for a real emergency, always call 112.",
      hr: "Ljekarne prepoznaješ po zelenom križu, ima ih nekoliko u Trogiru, neke rade i noću. Za liječničku pomoć je dom zdravlja odnosno bolnica u Trogiru pravo mjesto – u pravoj hitnoj situaciji uvijek nazovi 112.",
      pl: "Apteki rozpoznasz po zielonym krzyżu, jest ich kilka w Trogirze, część z dyżurem nocnym. W sprawach medycznych właściwym miejscem jest ośrodek zdrowia/szpital w Trogirze – w prawdziwym nagłym wypadku zawsze dzwoń pod 112.",
    },
  },
  {
    id: "bus-split-trogir",
    category: "verkehr",
    keywords: [
      "bus", "autobus", "split", "trogir", "öffentlicher verkehr", "public transport",
      "javni prijevoz", "transport publiczny",
    ],
    question: {
      de: "Gibt es einen Bus nach Split oder Trogir?",
      en: "Is there a bus to Split or Trogir?",
      hr: "Postoji li autobus do Splita ili Trogira?",
      pl: "Czy jest autobus do Splitu lub Trogiru?",
    },
    answer: {
      de: "Ja, zwischen Split, Trogir und Okrug Gornji verkehren regelmäßig Busse. Die Haltestelle ist zu Fuß erreichbar, aktuelle Fahrpläne checke ich am liebsten direkt vor Ort mit dir, da sie sich je nach Saison ändern.",
      en: "Yes, buses run regularly between Split, Trogir and Okrug Gornji. The stop is within walking distance – I'm happy to check the current timetable with you in person, since it changes with the season.",
      hr: "Da, između Splita, Trogira i Okruga Gornjeg redovito voze autobusi. Stanica je na dohvat noge – aktualni raspored najradije provjerim s tobom uživo jer se mijenja ovisno o sezoni.",
      pl: "Tak, między Splitem, Trogirem a Okrug Gornji regularnie kursują autobusy. Przystanek jest w zasięgu spaceru – aktualny rozkład najchętniej sprawdzę z Tobą na miejscu, bo zmienia się w zależności od sezonu.",
    },
  },
  {
    id: "markttag",
    category: "allgemein",
    keywords: ["markt", "market", "tržnica", "targ", "obst", "gemüse", "fruits", "vegetables"],
    question: {
      de: "Gibt es einen Markt in der Nähe?",
      en: "Is there a local market nearby?",
      hr: "Ima li obližnja tržnica?",
      pl: "Czy w pobliżu jest targ?",
    },
    answer: {
      de: "Ja, in Trogir gibt es einen schönen kleinen Markt mit frischem Obst, Gemüse und lokalen Produkten – ein echter Tipp von mir für alle, die gerne selbst kochen oder einfach durch die Stände schlendern wollen.",
      en: "Yes, Trogir has a lovely small market with fresh fruit, vegetables and local products – a real tip from me for anyone who likes to cook or just enjoys wandering through the stalls.",
      hr: "Da, u Trogiru postoji lijepa mala tržnica sa svježim voćem, povrćem i lokalnim proizvodima – moj pravi savjet za sve koji vole kuhati ili samo prošetati među štandovima.",
      pl: "Tak, w Trogirze jest ładny mały targ ze świeżymi owocami, warzywami i lokalnymi produktami – mój prawdziwy tip dla wszystkich, którzy lubią gotować albo po prostu lubią spacer między straganami.",
    },
  },
  {
    id: "familie-kinder",
    category: "allgemein",
    keywords: ["familie", "kinder", "family", "kids", "children", "obitelj", "djeca", "rodzina", "dzieci"],
    question: {
      de: "Ist die Unterkunft für Familien mit kleinen Kindern geeignet?",
      en: "Is the place suitable for families with young children?",
      hr: "Je li smještaj prikladan za obitelji s malom djecom?",
      pl: "Czy zakwaterowanie nadaje się dla rodzin z małymi dziećmi?",
    },
    answer: {
      de: "Auf jeden Fall! Der Garten und die Terrasse bieten genug Platz zum Spielen, und für einen ruhigen Strandtag mit Kindern empfehle ich den Medena Beach – flach abfallend und entspannt.",
      en: "Absolutely! The garden and terrace give plenty of room to play, and for a relaxed beach day with kids I recommend Medena Beach – gently sloping and calm.",
      hr: "Apsolutno! Vrt i terasa nude dovoljno prostora za igru, a za opušten dan na plaži s djecom preporučujem Medena Beach – blag ulazak u more i mirno.",
      pl: "Zdecydowanie! Ogród i taras dają dużo miejsca do zabawy, a na spokojny dzień na plaży z dziećmi polecam Medena Beach – łagodne wejście do wody i spokojnie.",
    },
  },
  {
    id: "haustiere",
    category: "haus",
    keywords: ["haustier", "hund", "katze", "pet", "dog", "cat", "ljubimac", "pas", "mačka", "zwierzę", "pies", "kot"],
    question: {
      de: "Sind Haustiere erlaubt?",
      en: "Are pets allowed?",
      hr: "Jesu li kućni ljubimci dopušteni?",
      pl: "Czy zwierzęta są dozwolone?",
    },
    answer: {
      de: "Das kläre ich am liebsten direkt mit dir vor der Buchung, damit es für alle passt – schreib mir also gerne kurz, wenn ihr mit Haustier anreisen möchtet.",
      en: "I prefer to sort this out directly with you before booking, so it works for everyone – just message me if you're planning to bring a pet.",
      hr: "To najradije dogovorim izravno s tobom prije rezervacije, kako bi odgovaralo svima – slobodno mi javi ako planirate doći s ljubimcem.",
      pl: "Najchętniej ustalam to bezpośrednio z Tobą przed rezerwacją, żeby wszystkim odpowiadało – napisz do mnie, jeśli planujecie przyjechać ze zwierzakiem.",
    },
  },
  {
    id: "beste-reisezeit",
    category: "allgemein",
    keywords: [
      "reisezeit", "beste zeit", "saison", "best time", "season",
      "kada doći", "vrijeme za posjet", "najlepszy czas", "sezon",
    ],
    question: {
      de: "Wann ist die beste Reisezeit für Okrug Gornji?",
      en: "What's the best time to visit Okrug Gornji?",
      hr: "Koje je najbolje vrijeme za posjet Okrugu Gornjem?",
      pl: "Kiedy jest najlepszy czas na przyjazd do Okrug Gornji?",
    },
    answer: {
      de: "Mein persönlicher Favorit ist die Vor- und Nachsaison (Mai/Juni oder September) – dann ist das Meer schon warm, aber es ist deutlich ruhiger und weniger überlaufen als im August.",
      en: "My personal favorite is shoulder season (May/June or September) – the sea is already warm, but it's noticeably calmer and less crowded than in August.",
      hr: "Moj osobni favorit je predsezona i posezona (svibanj/lipanj ili rujan) – more je već toplo, a puno je mirnije i manje gužve nego u kolovozu.",
      pl: "Moim osobistym faworytem jest przedsezon i posezon (maj/czerwiec lub wrzesień) – morze jest już ciepłe, a jest wyraźnie spokojniej i mniej tłoczno niż w sierpniu.",
    },
  },
  {
    id: "sonnenuntergang",
    category: "strand",
    keywords: ["sonnenuntergang", "sunset", "zalazak sunca", "zachód słońca"],
    question: {
      de: "Wo ist der schönste Platz für den Sonnenuntergang?",
      en: "Where's the best spot to watch the sunset?",
      hr: "Gdje je najljepše mjesto za promatranje zalaska sunca?",
      pl: "Gdzie jest najlepsze miejsce na oglądanie zachodu słońca?",
    },
    answer: {
      de: "Mein Lieblingsplatz ist die Promenade Richtung Čiovo mit Blick auf Trogir – am besten mit einem Kaffee oder Wein in der Hand. Auch von den Strandbars in Okrug Gornji aus lässt sich der Sonnenuntergang wunderbar genießen.",
      en: "My favorite spot is the promenade towards Čiovo with a view of Trogir – best enjoyed with a coffee or a glass of wine in hand. The beach bars in Okrug Gornji also offer a beautiful sunset view.",
      hr: "Moje omiljeno mjesto je riva prema Čiovu s pogledom na Trogir – najbolje uz kavu ili čašu vina u ruci. I plažni barovi u Okrugu Gornjem nude prekrasan pogled na zalazak sunca.",
      pl: "Moje ulubione miejsce to promenada w stronę Čiova z widokiem na Trogir – najlepiej z kawą lub kieliszkiem wina w dłoni. Bary plażowe w Okrug Gornji też oferują piękny widok na zachód słońca.",
    },
    featured: true,
  },
  {
    id: "nachbarn-ruhe",
    category: "haus",
    keywords: [
      "nachbarn", "ruhe", "lautstärke", "neighbors", "quiet", "noise",
      "susjedi", "tišina", "sąsiedzi", "cisza",
    ],
    question: {
      de: "Worauf sollte ich in der Nachbarschaft besonders achten?",
      en: "What should I be mindful of in the neighborhood?",
      hr: "Na što posebno trebam paziti u susjedstvu?",
      pl: "Na co powinienem szczególnie uważać w sąsiedztwie?",
    },
    answer: {
      de: "Es ist ein ruhiges Wohnviertel mit netten Nachbarn – ich bin dankbar, wenn besonders abends und nachts etwas Rücksicht auf die Lautstärke genommen wird, damit sich alle wohlfühlen.",
      en: "It's a quiet residential neighborhood with friendly neighbors – I'd be grateful for a bit of consideration with noise, especially in the evening and at night, so everyone feels comfortable.",
      hr: "To je mirno stambeno naselje s dragim susjedima – zahvalan sam ako se posebno navečer i noću malo pazi na buku, kako bi se svi ugodno osjećali.",
      pl: "To spokojna dzielnica mieszkalna z sympatycznymi sąsiadami – będę wdzięczny za odrobinę wyciszenia, zwłaszcza wieczorem i w nocy, aby wszyscy czuli się komfortowo.",
    },
  },
  {
    id: "bolt-app",
    category: "verkehr",
    keywords: ["uber", "taxi", "bolt", "app", "taksi", "taxi app"],
    question: {
      de: "Gibt es sowas wie Uber in Kroatien?",
      en: "Is there an Uber-like app in Croatia?",
      hr: "Postoji li nešto poput Ubera u Hrvatskoj?",
      pl: "Czy w Chorwacji jest coś w rodzaju Ubera?",
    },
    answer: {
      de: "Am gängigsten ist hier die App Bolt, die funktioniert ähnlich wie Uber und ist in Split/Trogir gut verfügbar. Ein praktischer Tipp von mir, gerade für spätabends.",
      en: "The most common option here is the Bolt app, which works similarly to Uber and is well available in Split/Trogir. A handy tip from me, especially for late evenings.",
      hr: "Najrasprostranjenija je ovdje aplikacija Bolt, radi slično kao Uber i dobro je dostupna u Splitu/Trogiru. Koristan savjet od mene, pogotovo za kasnu večer.",
      pl: "Najbardziej rozpowszechniona jest tu aplikacja Bolt, działa podobnie do Ubera i jest dobrze dostępna w Splicie/Trogirze. Przydatna wskazówka ode mnie, zwłaszcza na późny wieczór.",
    },
  },
  {
    id: "kroatisch-lernen",
    category: "allgemein",
    keywords: [
      "kroatisch", "sprache", "wörter", "croatian", "language", "words",
      "hrvatski", "jezik", "riječi", "chorwacki", "język", "słowa",
    ],
    question: {
      de: "Kannst du mir ein paar kroatische Wörter beibringen?",
      en: "Can you teach me a few Croatian words?",
      hr: "Možeš li me naučiti nekoliko hrvatskih riječi?",
      pl: "Czy możesz nauczyć mnie kilku chorwackich słów?",
    },
    answer: {
      de: "Gerne! 'Bok' heißt Hallo, 'Hvala' Danke, 'Molim' Bitte, und 'Živjeli!' sagt man beim Anstoßen. Damit kommst du hier schon sehr weit.",
      en: "Happy to! 'Bok' means hello, 'Hvala' means thank you, 'Molim' means please, and 'Živjeli!' is what you say when toasting. That'll get you very far here.",
      hr: "Rado! 'Bok' znači zdravo, 'Hvala' hvala, 'Molim' molim, a 'Živjeli!' kažeš kad nazdravljaš. S time ćeš ovdje daleko stići.",
      pl: "Chętnie! 'Bok' znaczy cześć, 'Hvala' dziękuję, 'Molim' proszę, a 'Živjeli!' mówi się przy toaście. Z tym zajdziesz tu naprawdę daleko.",
    },
  },
  {
    id: "tagesausfluege",
    category: "allgemein",
    keywords: [
      "ausflug", "tagesausflug", "split", "krka", "blaue lagune", "day trip", "excursion",
      "izlet", "wycieczka", "laguna",
    ],
    question: {
      de: "Welche Tagesausflüge empfiehlst du?",
      en: "What day trips do you recommend?",
      hr: "Koje dnevne izlete preporučuješ?",
      pl: "Jakie wycieczki jednodniowe polecasz?",
    },
    answer: {
      de: "Meine Favoriten: die Altstadt von Split (nur ca. 30 Min. entfernt), die Wasserfälle im Nationalpark Krka, und eine Bootstour zur Blauen Lagune – alle drei sind für einen Tagesausflug wunderbar machbar.",
      en: "My favorites: Split's old town (only about 30 min away), the waterfalls at Krka National Park, and a boat trip to the Blue Lagoon – all three work great as a day trip.",
      hr: "Moji favoriti: stari grad Split (samo oko 30 min vožnje), slapovi u nacionalnom parku Krka i brodski izlet do Modre lagune – sve troje savršeno je za jednodnevni izlet.",
      pl: "Moje ulubione: stare miasto w Splicie (tylko ok. 30 minut drogi), wodospady w parku narodowym Krka i wycieczka łodzią do Błękitnej Laguny – wszystkie trzy świetnie sprawdzają się jako wypad na jeden dzień.",
    },
  },
  {
    id: "muelltrennung",
    category: "haus",
    keywords: ["müll", "mülltrennung", "recycling", "waste", "otpad", "razvrstavanje", "śmieci", "segregacja"],
    question: {
      de: "Wie funktioniert die Mülltrennung in Kroatien?",
      en: "How does waste separation work in Croatia?",
      hr: "Kako funkcionira razvrstavanje otpada u Hrvatskoj?",
      pl: "Jak działa segregacja śmieci w Chorwacji?",
    },
    answer: {
      de: "In Kroatien wird nach Farben getrennt: gelb/orange meist für Verpackungen/Plastik, blau für Papier, grün für Glas, grau/schwarz für Restmüll. Bei uns findest du die passenden Behälter, ich zeige sie dir bei Bedarf gerne.",
      en: "In Croatia, waste is separated by color: yellow/orange is usually for packaging/plastic, blue for paper, green for glass, grey/black for general waste. You'll find the right bins here, and I'm happy to show you where if needed.",
      hr: "U Hrvatskoj se otpad razvrstava po bojama: žuta/narančasta obično za ambalažu/plastiku, plava za papir, zelena za staklo, siva/crna za miješani otpad. Kod nas ćeš naći odgovarajuće spremnike, rado ću ti pokazati po potrebi.",
      pl: "W Chorwacji odpady segreguje się według kolorów: żółty/pomarańczowy zwykle na opakowania/plastik, niebieski na papier, zielony na szkło, szary/czarny na odpady zmieszane. U nas znajdziesz odpowiednie pojemniki, chętnie pokażę w razie potrzeby.",
    },
  },
  {
    id: "klimaanlage",
    category: "haus",
    keywords: [
      "klimaanlage", "klima", "heizung", "air conditioning", "ac", "heating",
      "klima uređaj", "grijanje", "klimatyzacja", "ogrzewanie",
    ],
    question: {
      de: "Wie bediene ich die Klimaanlage?",
      en: "How do I operate the air conditioning?",
      hr: "Kako se koristi klima uređaj?",
      pl: "Jak obsługiwać klimatyzację?",
    },
    answer: {
      de: "Die Klimaanlage im Wohnbereich hat eine Fernbedienung, die griffbereit liegt – bei Fragen zur Bedienung melde dich einfach kurz bei mir, ich erkläre es dir gerne persönlich.",
      en: "The air conditioning in the living room has a remote control that's kept close by – if you have any questions about it, just message me and I'll gladly walk you through it.",
      hr: "Klima uređaj u dnevnom boravku ima daljinski upravljač koji je pri ruci – ako imaš pitanja o korištenju, samo mi se javi, rado ću ti osobno objasniti.",
      pl: "Klimatyzacja w salonie ma pilota, który jest pod ręką – w razie pytań po prostu do mnie napisz, chętnie wszystko wytłumaczę.",
    },
  },
  {
    id: "handtuecher-bettwaesche",
    category: "haus",
    keywords: [
      "handtücher", "bettwäsche", "towels", "bedding", "sheets",
      "ručnici", "posteljina", "ręczniki", "pościel",
    ],
    question: {
      de: "Gibt es zusätzliche Handtücher oder Bettwäsche?",
      en: "Are extra towels or bedding available?",
      hr: "Ima li dodatnih ručnika ili posteljine?",
      pl: "Czy dostępne są dodatkowe ręczniki lub pościel?",
    },
    answer: {
      de: "Ja, du findest zusätzliche Handtücher und Bettwäsche im Schrank – falls doch mal etwas fehlt, schreib mir einfach, ich kümmere mich schnell darum.",
      en: "Yes, you'll find extra towels and bedding in the closet – if something's still missing, just message me and I'll sort it out quickly.",
      hr: "Da, dodatne ručnike i posteljinu naći ćeš u ormaru – ako nešto ipak nedostaje, samo mi javi, brzo ću to riješiti.",
      pl: "Tak, dodatkowe ręczniki i pościel znajdziesz w szafie – jeśli czegoś jednak zabraknie, po prostu napisz do mnie, szybko to załatwię.",
    },
  },
];

export const chatCategories = [
  "haus",
  "verkehr",
  "sicherheit",
  "strand",
  "aktivitaeten",
  "allgemein",
] as const;
