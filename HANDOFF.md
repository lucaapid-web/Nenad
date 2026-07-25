# Projekt-Übergabe: Nenad's Guide (Airbnb-Gastinfo-Website)

Diese Datei ist für einen neuen (lokalen) Claude-Code-Chat gedacht, der nahtlos an der
Cloud-Session weiterarbeiten soll. Einfach als erste Nachricht sagen:
**"Lies HANDOFF.md und mach von da weiter."**

## Was das Projekt ist

Guest-Info-Website für die Airbnb-Unterkunft von Nenad Habek in Okrug Gornji, Kroatien
(nahe Trogir/Split). Next.js App Router, TypeScript, Tailwind, Framer Motion,
lucide-react. Kein Backend, kein API-Key nötig – der Chatbot ist eine lokale
Wissensdatenbank (Keyword-/Fuzzy-Matching in `lib/chat-matcher.ts` +
`data/chatbot-qa.ts`).

Branch: `claude/nenad-airbnb-website-0rwoky` (Standard-Branch des Repos)

## Fertig gebaut

- Startseite, `/haus` (Hausordnung, Wäsche, Grillen, Aufenthaltsbereiche, WLAN/Parken,
  Wissenswertes), `/anreise`, `/kontakt`, `/umgebung` Hub + 4 Unterseiten
  (Restaurants, Aktivitäten, Strände, Nightlife)
- 4 Sprachen: Deutsch (Standard), Englisch, Kroatisch, Polnisch –
  `data/i18n/ui.ts` + `Bilingual`-Type in `data/types.ts` (eigentlich 4-sprachig,
  Name ist historisch)
- Insider-Chatbot: 32 Themen, Tippfehler-toleranter Fuzzy-Match, "Meintest du...?"-
  Vorschläge, Kategorie-Filter, spricht in Nenads Ich-Perspektive
- Persönlicher Anstrich: `components/home/HostIntro.tsx` (Nenad-Vorstellung),
  "Nenads Tipp"-Boxen (`components/ui/PersonalNote.tsx`) auf ausgewählten
  Restaurant-/Aktivitäts-/Strand-/Nightlife-Karten, Ich-Perspektive in Editorial-Texten
- SEO: Route-Metadata (`app/*/layout.tsx`), `opengraph-image.tsx`, `robots.ts`,
  `sitemap.ts`, Print-Stil für `/haus`
- Redesign-Politur (nach `redesign-existing-projects`-Skill-Checkliste): getönte
  Card-Schatten statt generischem Grau+Border, Press-Feedback, `text-wrap:balance`,
  dezentes Grain-Overlay
- Netlify-Config (`netlify.toml`) vorhanden, aber noch nicht deployed

## Offener Punkt: Echte Bilder fehlen noch

`public/images/` enthält nur `.gitkeep`-Platzhalter. `components/ui/PhotoSlot.tsx`
zeigt ehrlich "Foto folgt" statt eines Fotos, solange keine Datei am Zielpfad liegt
(kein Rebuild nötig, sobald eine Datei da ist).

20 KI-generierte Bilder (Higgsfield) sind bereits generiert, aber aus dieser
Cloud-Session heraus nicht herunterladbar (Netzwerk-Policy blockt die Higgsfield-CDN,
HTTP 403). **Lösungsweg:** Download-Links + exakte Zielpfade stehen in
`public/images/README.md` – Nenad lädt sie manuell über die GitHub-Weboberfläche
hoch (Repo → Branch wechseln → `public/images/<kategorie>/` → "Add file" →
"Upload files" → Dateiname exakt setzen → "Commit directly to the branch").

Falls diese Aufgabe lokal weitergeführt wird: lokal gibt es keine Netzwerk-Sperre,
d.h. die Higgsfield-Links in der README könnten dort direkt heruntergeladen und ins
Repo kopiert werden.

## Installierte Skills (im Repo, `.claude/skills/` + `.agents/skills/`)

Aus `Leonxlnx/taste-skill` und `emilkowalski/skill` – Design-/Animations-Taste-Skills
(z.B. `redesign-existing-projects`, `improve-animations`, `pick-ui-library`). Inhalt
wurde vor dem Commit auf verdächtige Inhalte geprüft, unauffällig.

## Verifikation vor jedem Commit

```bash
npx tsc --noEmit
npm run build
```

Beides muss sauber durchlaufen. Danach `git add`, `git commit`, `git push origin
claude/nenad-airbnb-website-0rwoky`.

## Sonst offen

Aktuell keine offenen Aufgaben auf der ursprünglichen Roadmap – alle Kernfeatures
sind gebaut und gepusht. Nächste sinnvolle Schritte wären: echte Bilder einsetzen
(siehe oben), ggf. Netlify-Deploy einrichten, oder weitere Wünsche von Nenad
umsetzen.
