# Schärfentiefe Studio · Prüfung der Überarbeitung

Stand: 24.10.2026. Eigenständige Umsetzung, keine Kopie des fremden Programmcodes.

## Behobene Fehler

- Hyperfokaldistanz mit Beugung unabhängig von der bisherigen Fokusentfernung berechnet; Nah- und Ferngrenze gegen das kombinierte Unschärfekriterium geprüft.
- Bildausschnitt-Sperre berücksichtigt Sensorwechsel, Hochformat, 16:9 und Konverter. Ausgeschaltete Sperre übernimmt keine alte Kompensationswahl mehr.
- Physikalische Mindestdistanz und Abstand zum Hintergrund auch nach gekoppelten Änderungen eingehalten.
- Ungültige Eingaben werden angezeigt und beim Verlassen zurückgesetzt; beschädigte gespeicherte Auswahlwerte werden bereinigt.
- Aktive erweiterte Optionen bleiben in der einfachen Ansicht erkennbar.
- Hintergrundvergrösserung folgt Brennweite und optional Entfernung. Unschärfe skaliert korrekt zur tatsächlichen Sensorachse in Hochformat und Anamorphot; Weitwinkel erzeugt keine rechteckige Bodenfläche mehr.
- Unscharfer Hintergrund wird am Rand erweitert statt zur Kaschierung der Ränder vergrössert.
- Entfernungsdiagramm mit stabiler Skala während des Ziehens, Koordinatenumrechnung und Tastaturbedienung.
- Vergleiche nach effektiver Brennweite/Blende sortiert. Einheiten und Beschriftungen synchronisiert.

## Rechenprüfung

39 Testgruppen bestanden, einschliesslich 240 Extremkombinationen und 2’000 deterministischen Zufallsfällen. Nah- und Ferngrenzen werden unabhängig durch Einsetzen in die Strahlen-Unschärfeformel geprüft.

Vier im DOFMaster-Rechner bediente Referenzen (gleicher Zerstreuungskreis):

| Brennweite / Blende / Distanz | CoC | Nahgrenze | Ferngrenze |
|---|---|---|---|
| 50 mm / f8 / 5 m | 0.030 mm | 3.39 m | 9.53 m |
| 85 mm / f2 / 3 m | 0.030 mm | 2.93 m | 3.07 m |
| 24 mm / f16 / 3 m | 0.020 mm | 1.13 m | unendlich |
| 200 mm / f4 / 10 m | 0.030 mm | 9.71 m | 10.3 m |

Quellen: https://www.dofmaster.com/equations.html und https://www.dofmaster.com/dofjs.html ; https://www.cambridgeincolour.com/tutorials/depth-of-field.htm ; https://www.cambridgeincolour.com/tutorials/diffraction-photography.htm

## Browser und Gestaltung

Eingabevalidierung, Zurücksetzen, Hyperfokal mit Beugung, Meter/Feet (3 m = 9.843 ft), Speichern/Wiederherstellen/Löschen eines Testvergleichs und Teilen-Link geprüft. PNG-Export ausgelöst und Erfolgsmeldung geprüft. Desktop ohne horizontalen Seitenüberlauf; mobile Darstellung bei 390 px visuell geprüft. Keine protokollierten JavaScript-Fehler während dieser Prüfung.

Gestaltung anhand der aktuellen Akademie-Homepage: Blau #11447c, graue Akzente, Roboto und vorhandenes Logo. Mobile Schnellnavigation und grössere Eingabefelder.

## Grenzen

Die Illustration ist eine didaktische, gezeichnete Annäherung, keine fotorealistische Objektivsimulation. Rechenmodell: dünne Linse, Standard-CoC Sensordiagonale/1500; Beugung für 550 nm. Reale Objektive, Fokus-Breathing, Aberrationen und individuelle Schärfewahrnehmung können abweichen. Zwei Kameravorgaben und zehn allgemeine Objektivvorgaben ersetzen keine vollständige Gerätedatenbank. Tests belegen den genannten Umfang, keine absolute Fehlerfreiheit auf jedem Gerät.
