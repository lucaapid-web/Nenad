import { Bilingual } from "./types";

export interface HostProfile {
  name: string;
  tagline: Bilingual;
  bio: Bilingual;
  signature: Bilingual;
}

export const hostProfile: HostProfile = {
  name: "Nenad Habek",
  tagline: {
    de: "Dein Gastgeber an der Adria",
    en: "Your host on the Adriatic",
    hr: "Tvoj domaćin na Jadranu",
    pl: "Twój gospodarz nad Adriatykiem",
  },
  bio: {
    de: "Ich bin Nenad und lebe für die Momente, in denen der Duft von Salzwasser und Pinien durch die offene Terrassentür zieht. Dieses Haus in Okrug Gornji ist mehr als eine Unterkunft für mich – es ist der Ort, an dem ich selbst am liebsten die Seele baumeln lasse, und ich freue mich, ihn mit dir zu teilen. Ob Insider-Tipp für den besten Sonnenuntergang oder die Frage nach dem WLAN-Passwort: Ich bin für dich da, damit dein Aufenthalt an der Adria genauso unvergesslich wird wie meiner.",
    en: "I'm Nenad, and I live for the moments when the scent of salt water and pine drifts in through the open terrace door. This house in Okrug Gornji is more than just a place to stay for me – it's where I go to unwind myself, and I'm happy to share it with you. Whether it's an insider tip for the best sunset or a question about the WiFi password: I'm here for you, so your stay on the Adriatic becomes just as unforgettable as mine.",
    hr: "Ja sam Nenad i živim za trenutke kad kroz otvorena vrata terase dopire miris mora i borova. Ova kuća u Okrugu Gornjem za mene je više od smještaja – to je mjesto gdje se i sâm najradije opustim, i drago mi je što je mogu podijeliti s tobom. Bilo da trebaš insajderski savjet za najljepši zalazak sunca ili pitanje o WiFi lozinci: tu sam za tebe, da tvoj boravak na Jadranu bude jednako nezaboravan kao i moj.",
    pl: "Jestem Nenad i żyję dla chwil, gdy przez otwarte drzwi tarasu wpada zapach morskiej wody i sosen. Ten dom w Okrug Gornji to dla mnie coś więcej niż miejsce noclegowe – to miejsce, w którym sam najchętniej odpoczywam, i cieszę się, że mogę się nim z Tobą podzielić. Czy to wskazówka od insidera na najpiękniejszy zachód słońca, czy pytanie o hasło do WiFi: jestem tu dla Ciebie, aby Twój pobyt nad Adriatykiem był równie niezapomniany jak mój.",
  },
  signature: {
    de: "Bis bald an der Adria – Nenad",
    en: "See you soon by the Adriatic – Nenad",
    hr: "Vidimo se uskoro na Jadranu – Nenad",
    pl: "Do zobaczenia niebawem nad Adriatykiem – Nenad",
  },
};
