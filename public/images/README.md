# Bilder-Ordner

Lege hier echte oder KI-generierte Fotos ab, um die Platzhalter-Grafiken zu ersetzen:

- `hero/` – Titelbild der Startseite
- `house/` – Terrasse, Wohnbereich, Garten, Außenansicht
- `beaches/` – Strände (Dateiname = `id` aus `data/beaches.ts`)
- `restaurants/` – Restaurants (Dateiname = `id` aus `data/restaurants.ts`)
- `activities/` – Jetski/Boot/Kajak (Dateiname = `id` aus `data/activities.ts`)
- `og/` – Social-Media-Vorschaubild

Sobald ein Bild hier liegt, im jeweiligen Datenfile beim passenden Eintrag ein `src`-Feld mit dem Pfad (z.B. `/images/beaches/plaza-okrug-gornji.jpg`) ergänzen und an die entsprechende `PhotoSlot`-Komponente übergeben.
