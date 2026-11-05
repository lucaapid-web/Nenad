# Fresh Cars – Live-Tracking (Demo)

Kunden-App von **Fresh Cars Lack & Karosserie (Herne)**, mit der Kunden live sehen, wie weit die Reparatur ihres Fahrzeugs ist und wann es abholbereit ist.

## Starten

```bash
cd freshcars-tracking
npm install
npx expo start
```

- **Handy:** App **Expo Go** installieren (iOS/Android) und den QR-Code im Terminal scannen. Handy und PC müssen im selben WLAN sein. Wenn das nicht klappt: `npx expo start --tunnel`.
- **Browser:** im Terminal `w` drücken.

## Demo-Zugänge

| Auftragsnr. | Kennzeichen | Fahrzeug | Status zu Beginn |
|---|---|---|---|
| FC-24017 | HER-FC 217 | BMW 320d Touring | Lackierung |
| FC-24018 | HER-AE 552 | Audi A4 Avant | Trocknung |
| FC-24019 | BO-MK 834 | VW Golf 8 | Abholbereit |
| FC-24020 | HER-LS 77 | Mercedes C-Klasse | Annahme |
| FC-24021 | GE-TR 4410 | Tesla Model 3 | Karosseriebau |

Die Demo-Fahrzeuge lassen sich auf dem Login-Screen auch direkt antippen.

**Link statt Login:** `/t/<code>` öffnet den Status direkt, z. B. `/t/bmw7k2`, `/t/golf8m3` (abholbereit).
Im Status-Screen erzeugt der Teilen-Button diesen Link für SMS/WhatsApp.

## Funktionen

- **Live-Status** mit Fortschrittsring, Abholprognose (Werkstattzeiten), Ablauf, Benachrichtigungen
- **Aus der Werkstatt:** Bilder zu jedem Schritt (Beispielbilder, echte Fotos sobald hochgeladen)
- **Vorher/Nachher-Slider** sobald das Auto fertig ist
- **Abholzeit wählen** per Bottom-Sheet
- **Schaden melden:** Fotos (Kamera/Galerie), Bereich, Beschreibung, Kontakt → an Fresh Cars
- **Termin buchen:** Anliegen, Tag + freie Uhrzeit, Kontakt
- **Werkstatt-Modus** (Startseite → „Werkstatt-Modus für Mitarbeiter“): alle Autos auf einem Board,
  „Fertig“ schließt den Schritt ab, Kamera hängt ein Foto an – die Kundenansicht ist sofort aktuell.
Unten im Status-Screen schaltet **Zeitraffer** die simulierte Werkstatt-Zeit schneller (1 s = 20 min), **↻** setzt alles zurück.

## Aufbau

```
src/
  app/            Screens (Expo Router): index = Login, status = Sendungsverfolgung
  components/     Fortschrittsring, Timeline, Benachrichtigung, Animationen
  config/         Firmendaten (Telefon, Adresse, Öffnungszeiten) – vor Livegang prüfen
  data/           Prozessschritte + Demo-Aufträge
  lib/            Arbeitszeit-Rechnung (Mo–Fr 8–17 Uhr), Formatierung, Session
  services/       tracking.ts + requests.ts – die Stellen, die für das echte System getauscht werden
```

## Anbindung an das echte Werkstattsystem (Phase 2)

`src/services/tracking.ts` definiert das Interface `TrackingService` (`login`, `subscribe`).
Für den Livebetrieb wird die Demo-Implementierung durch einen echten Server ersetzt:

```
Werkstatt-/Prozesssoftware  →  Backend (z. B. Supabase)  →  App
       (API / Webhook / DB-Export / Tablet-Eingabe)        (Realtime + Push)
```

Offene Punkte: welche Software steuert die Abläufe, Schnittstelle dazu, Push-Benachrichtigungen, DSGVO. Logo: assets/logo-*.png (aus dem Original-Logo, weiß freigestellt).
