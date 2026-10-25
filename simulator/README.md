# Schärfentiefe Studio · Prüfung der Überarbeitung

Aktueller Stand 25.10.2026: Der ergänzte Boden ist vollständig aus der Darstellung entfernt. Im Kreuzgang folgen Motive jetzt der Perspektive des vorhandenen Bodens. Bei den Landschaften sind kleine Motive an der unteren Bildkante verankert; Füsse und Pfoten werden ausserhalb des Bildes beschnitten. Die folgenden Abschnitte dokumentieren auch frühere Versionen.

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

## Fotoversion · 25.10.2026

Fünf vom Auftraggeber bereitgestellte Originalfotos eingebunden: Gempen, Basler Münster im Hochformat, Rheinpanorama, Kreuzgang und Merian Gärten. Die Originaldateien auf LaCie wurden nicht verändert. Webkopien sind auf 1800 Pixel lange Kante begrenzt.

Frau, Mann, Kind und Hund wurden mit dem eingebauten Bildgenerator als transparente Fotoatlanten erstellt. Jeder Atlas enthält drei Lichtvarianten: Tageslicht, Abendlicht und warmes Seitenlicht. Der Ort wählt automatisch die passende Variante. Individuelle Helligkeitsanpassungen und Kontaktschatten verbinden die Ebenen. Für Landschaften ohne Standfläche wird eine KI-generierte Kiesfläche ergänzt. Die Montage ist ausdrücklich gekennzeichnet.

Alle 20 Ort-Motiv-Kombinationen im Browser geladen und visuell verglichen. Hochformat/Portrait und Ganzkörper kontrolliert. 39 bisherige Rechentestgruppen weiterhin bestanden. Zusätzliche Prüfung: 20 Blendenkerne, 10 Bilddateien und 12 Motiv-Ausschnitte. Export einer echten PNG-Datei erfolgreich (1067 × 1601 Pixel im geprüften Hochformat). Keine JavaScript-Fehler bei den geprüften Wechseln.

Zusätzlich behoben: Farbstufen durch additive 8-Bit-Mittelung, sichtbare Unterkante der Standfläche, zu weit seitlich platzierte Motive im Hochformat und Export während eines noch laufenden Bildwechsels.

Die Fotos sind keine dreidimensional vermessenen Szenen. Ihre gesamte Tiefe wird für die Hintergrundunschärfe vereinfacht als eine Ebene behandelt. Bereits vorhandene Unschärfe in den Originalfotos bleibt erhalten. Der verfügbare Fotoausschnitt begrenzt die Darstellung bei extremen Bildwinkeln; ein Hinweis erscheint, während die optische Rechnung unverändert bleibt. Die Lichtanpassung ist eine visuelle Annäherung und keine Rekonstruktion der tatsächlichen Beleuchtung vor Ort.


## Bildrand-Verankerung · 25.10.2026

Künstlichen Kiesboden und Kontaktschatten entfernt, Bodenasset wird nicht mehr geladen. Personen werden am unteren Bildrand mit 6 Prozent Beschnitt, der Hund mit 16 Prozent Beschnitt platziert, damit auch die Hinterpfoten nicht scheinbar über dem Hintergrund schweben. Beim Entfernen sinkt die Motivoberkante stetig nach unten. Nahe Portraits behalten 8 Prozent Kopfraum. Die projizierte Motivgrösse kommt weiterhin aus dem optischen Modell. Es handelt sich um eine bewusste Ausschnittführung, keine Simulation einer festen Kameraneigung.

Prüfung: 624 Kombinationen aus Motivhöhe, Entfernung und Hoch-/Querformat bestätigen die stetige Bewegung nach unten sowie die Lage der Füsse ausserhalb des Bildrandes. Zusätzlich 60 Browserwechsel (fünf Orte, vier Motive, drei Entfernungen) ohne Lade- oder JavaScript-Fehler. Die 39 optischen Testgruppen bestehen weiterhin.


## Originalboden und Flucht · 25.10.2026

Für den Kreuzgang gibt es eine eigene Platzierung auf dem vorhandenen Fotoboden. Der visuell gewählte Fluchtpunkt wird mit demselben Bildausschnitt und Zoom wie das Foto transformiert. Fussposition und horizontale Position laufen beim Verkleinern entlang derselben Fluchtlinie nach hinten. Ein dezenter Kontaktschatten sitzt direkt unter dem Motiv. Es wird kein Boden ergänzt. Bei Landschaften bleibt der Beschnitt an der unteren Bildkante bestehen. Die Perspektive ist eine visuelle Anpassung an das Foto, keine metrische Raumrekonstruktion.

18 geometrische Flucht-/Bodenkontaktprüfungen und 24 Browserkombinationen aus vier Motiven, drei Entfernungen und zwei Formaten bestanden. Keine protokollierten JavaScript-Fehler. Die 624 Randplatzierungsprüfungen für Landschaften bestehen weiter.
