export type Lang = "de" | "en" | "hr" | "pl";

export const ALL_LANGS: { code: Lang; label: string; flag: string }[] = [
  { code: "de", label: "Deutsch", flag: "🇩🇪" },
  { code: "hr", label: "Hrvatski", flag: "🇭🇷" },
  { code: "en", label: "English", flag: "🇬🇧" },
  { code: "pl", label: "Polski", flag: "🇵🇱" },
];

export const ui = {
  nav: {
    home: { de: "Start", en: "Home", hr: "Početna", pl: "Start" },
    haus: { de: "Das Haus", en: "The House", hr: "Kuća", pl: "Dom" },
    umgebung: { de: "Umgebung", en: "Surroundings", hr: "Okolica", pl: "Okolica" },
    anreise: { de: "Anreise", en: "Arrival", hr: "Dolazak", pl: "Przyjazd" },
    kontakt: { de: "Kontakt", en: "Contact", hr: "Kontakt", pl: "Kontakt" },
  },
  umgebungSub: {
    restaurants: { de: "Restaurants", en: "Restaurants", hr: "Restorani", pl: "Restauracje" },
    aktivitaeten: { de: "Aktivitäten", en: "Activities", hr: "Aktivnosti", pl: "Atrakcje" },
    straende: { de: "Strände", en: "Beaches", hr: "Plaže", pl: "Plaże" },
    nightlife: { de: "Nightlife", en: "Nightlife", hr: "Noćni život", pl: "Życie nocne" },
  },
  common: {
    copy: { de: "Kopieren", en: "Copy", hr: "Kopiraj", pl: "Kopiuj" },
    copied: { de: "Kopiert!", en: "Copied!", hr: "Kopirano!", pl: "Skopiowano!" },
    routeStarten: { de: "Route starten", en: "Start route", hr: "Pokreni rutu", pl: "Rozpocznij trasę" },
    inAppleMapsOeffnen: {
      de: "In Apple Maps öffnen",
      en: "Open in Apple Maps",
      hr: "Otvori u Apple Maps",
      pl: "Otwórz w Apple Maps",
    },
    inGoogleMapsOeffnen: {
      de: "In Google Maps öffnen",
      en: "Open in Google Maps",
      hr: "Otvori u Google Maps",
      pl: "Otwórz w Google Maps",
    },
    anrufen: { de: "Anrufen", en: "Call", hr: "Nazovi", pl: "Zadzwoń" },
    whatsapp: {
      de: "WhatsApp schreiben",
      en: "Message on WhatsApp",
      hr: "Piši na WhatsAppu",
      pl: "Napisz na WhatsAppie",
    },
    mehrErfahren: { de: "Mehr erfahren", en: "Learn more", hr: "Saznaj više", pl: "Dowiedz się więcej" },
    gastgeber: { de: "Gastgeber", en: "Host", hr: "Domaćin", pl: "Gospodarz" },
    notFoundText: {
      de: "Diese Seite gibt es nicht – aber die Adria wartet trotzdem auf dich.",
      en: "This page doesn't exist – but the Adriatic is still waiting for you.",
      hr: "Ova stranica ne postoji – ali Jadran te ipak čeka.",
      pl: "Ta strona nie istnieje – ale Adriatyk i tak na Ciebie czeka.",
    },
    notFoundCta: { de: "Zur Startseite", en: "Back to homepage", hr: "Na početnu", pl: "Strona główna" },
    langAriaLabel: {
      de: "Sprache wechseln",
      en: "Change language",
      hr: "Promijeni jezik",
      pl: "Zmień język",
    },
  },
  hero: {
    kicker: {
      de: "Willkommen in Okrug Gornji",
      en: "Welcome to Okrug Gornji",
      hr: "Dobrodošli u Okrug Gornji",
      pl: "Witamy w Okrug Gornji",
    },
    title: {
      de: "Dein Zuhause an der Adria",
      en: "Your home on the Adriatic",
      hr: "Tvoj dom na Jadranu",
      pl: "Twój dom nad Adriatykiem",
    },
    subtitle: {
      de: "Alle Infos zu deiner Unterkunft und der Umgebung – auf einen Blick.",
      en: "Everything about your stay and the surroundings – at a glance.",
      hr: "Sve informacije o tvom smještaju i okolici – na jednom mjestu.",
      pl: "Wszystkie informacje o Twoim pobycie i okolicy – w jednym miejscu.",
    },
    ctaHaus: { de: "Zu den Haus-Infos", en: "House info", hr: "Info o kući", pl: "Informacje o domu" },
    ctaUmgebung: {
      de: "Umgebung entdecken",
      en: "Explore surroundings",
      hr: "Istraži okolicu",
      pl: "Odkryj okolicę",
    },
  },
  chat: {
    title: { de: "Insider-Chat", en: "Insider Chat", hr: "Insider chat", pl: "Czat z insiderem" },
    subtitle: {
      de: "Frag mich alles rund um dein Zuhause auf Zeit",
      en: "Ask me anything about your home away from home",
      hr: "Pitaj me sve o tvom domu na putovanju",
      pl: "Zapytaj mnie o wszystko związane z Twoim domem na czas pobytu",
    },
    placeholder: {
      de: "Frag mich z.B. nach dem WLAN…",
      en: "Ask me e.g. about the WiFi…",
      hr: "Pitaj me npr. za WiFi…",
      pl: "Zapytaj mnie np. o WiFi…",
    },
    intro: {
      de: "Hallo! Ich bin dein Insider-Chat für Okrug Gornji – frag mich nach WLAN, Parken, Verkehrsregeln, Notfallnummern oder Seeigeln.",
      en: "Hi! I'm your insider chat for Okrug Gornji – ask me about WiFi, parking, traffic rules, emergency numbers or sea urchins.",
      hr: "Bok! Ja sam tvoj insider chat za Okrug Gornji – pitaj me o WiFi-ju, parkiranju, prometnim pravilima, hitnim brojevima ili morskim ježincima.",
      pl: "Cześć! Jestem Twoim czatem z insiderem dla Okrug Gornji – zapytaj mnie o WiFi, parkowanie, przepisy drogowe, numery alarmowe albo jeżowce.",
    },
    fallback: {
      de: "Das weiß ich leider nicht genau – frag Nenad direkt oder probiere eine der Vorschlagsfragen unten.",
      en: "I'm not sure about that one – ask Nenad directly, or try one of the suggested questions below.",
      hr: "To nažalost ne znam točno – pitaj izravno Nenada ili isprobaj jedno od predloženih pitanja ispod.",
      pl: "Niestety nie jestem tego pewien – zapytaj bezpośrednio Nenada lub spróbuj jednego z sugerowanych pytań poniżej.",
    },
    disclaimer: {
      de: "Allgemeine, unverbindliche Infos – bitte aktuelle Regeln vor Reiseantritt prüfen.",
      en: "General, non-binding information – please check current rules before you travel.",
      hr: "Opće, neobvezujuće informacije – prije putovanja provjeri aktualna pravila.",
      pl: "Ogólne, niewiążące informacje – przed podróżą sprawdź aktualne przepisy.",
    },
  },
  home: {
    quickInfoTitle: {
      de: "Das Wichtigste auf einen Blick",
      en: "The essentials at a glance",
      hr: "Najvažnije na prvi pogled",
      pl: "Najważniejsze informacje w skrócie",
    },
    glimpseOfHome: {
      de: "Ein Eindruck von zu Hause",
      en: "A glimpse of home",
      hr: "Dojam doma",
      pl: "Zajrzyj do domu",
    },
    umgebungEntdeckenTitle: {
      de: "Umgebung entdecken",
      en: "Explore the surroundings",
      hr: "Istraži okolicu",
      pl: "Odkryj okolicę",
    },
  },
  pages: {
    anreiseIntro: {
      de: "So findest du zu deinem Zuhause auf Zeit in Okrug Gornji.",
      en: "Here's how to find your home away from home in Okrug Gornji.",
      hr: "Ovako ćeš pronaći svoj dom na putovanju u Okrug Gornjem.",
      pl: "Tak trafisz do swojego domu na czas pobytu w Okrug Gornji.",
    },
    adresseLabel: { de: "Adresse", en: "Address", hr: "Adresa", pl: "Adres" },
    kontaktIntro: {
      de: "Bei Fragen oder Anliegen rund um deinen Aufenthalt meld dich jederzeit gerne.",
      en: "For any questions or concerns about your stay, feel free to reach out any time.",
      hr: "Za sva pitanja ili nedoumice vezane uz tvoj boravak slobodno se javi u bilo kojem trenutku.",
      pl: "W razie pytań lub spraw związanych z Twoim pobytem śmiało się odzywaj o każdej porze.",
    },
    umgebungHubIntro: {
      de: "Okrug Gornji und die Umgebung haben einiges zu bieten – hier findest du alles auf einen Blick.",
      en: "Okrug Gornji and its surroundings have a lot to offer – find everything at a glance here.",
      hr: "Okrug Gornji i okolica nude štošta – ovdje je sve na jednom mjestu.",
      pl: "Okrug Gornji i okolica mają wiele do zaoferowania – tutaj znajdziesz wszystko w jednym miejscu.",
    },
    restaurantsIntro: {
      de: "Von gehobener Küche bis zur schnellen, günstigen Pizza.",
      en: "From upscale dining to a quick, affordable pizza.",
      hr: "Od vrhunske kuhinje do brze i jeftine pizze.",
      pl: "Od wykwintnej kuchni po szybką, tanią pizzę.",
    },
    aktivitaetenIntro: {
      de: "Jetski, Boot oder Kajak – mit einem Klick direkt zur Route.",
      en: "Jet ski, boat or kayak – one tap to start your route.",
      hr: "Jet ski, brod ili kajak – jednim klikom izravno do rute.",
      pl: "Skuter wodny, łódź czy kajak – jedno kliknięcie i masz trasę.",
    },
    straendeIntro: {
      de: "Von belebten Strandbars bis zu ruhigen Felsbuchten.",
      en: "From lively beach bars to quiet rocky coves.",
      hr: "Od živahnih plažnih barova do mirnih stjenovitih uvala.",
      pl: "Od tętniących życiem barów plażowych po ciche, skaliste zatoczki.",
    },
    nightlifeIntro: {
      de: "Für alle, die den Abend noch ausklingen lassen möchten.",
      en: "For anyone who wants to keep the evening going.",
      hr: "Za sve koji žele produžiti večer.",
      pl: "Dla wszystkich, którzy chcą przedłużyć wieczór.",
    },
    seeigelWarnungKurz: {
      de: "Achtung: Seeigel möglich – Badeschuhe empfohlen.",
      en: "Caution: sea urchins possible – water shoes recommended.",
      hr: "Pažnja: mogući morski ježinci – preporučuju se cipele za kupanje.",
      pl: "Uwaga: możliwe jeżowce – zalecane buty do wody.",
    },
  },
};
