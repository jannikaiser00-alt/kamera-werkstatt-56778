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


## Abschlussaudit und Teilen-Funktion · 25.10.2026

Ergebnis: Nein, Rechnung und Abbildung sind nicht als zu 100 Prozent physikalisch exakt bestätigt. In den geprüften Kernberechnungen des idealen Dünnlinsenmodells wurde kein Fehler gefunden. Die 39 Rechentestgruppen bestehen; zusätzlich wurden 525 Kombinationen über unabhängig berechnete Bildweiten (1/f = 1/s + 1/v) gegen Hintergrundunschärfe und Schärfegrenzen geprüft. Die 624 Randplatzierungsfälle und 18 Flucht-/Bodenkontaktfälle bestehen. Frühere Browsermatrizen sind historische Prüfungen, keine erneute vollständige Liveprüfung dieser Version.

Verbleibende konkrete Darstellungsabweichungen: Alle Pixel des Hintergrundfotos erhalten dieselbe Entfernung. Daher wird auch der Boden unmittelbar am fokussierten Motiv wie der entfernte Hintergrund unscharf. Vorhandene Unschärfe des Originalfotos bleibt erhalten. Perspektive, Kontaktfläche und Beleuchtung sind visuell angepasst, nicht aus einer vermessenen 3D-Szene berechnet. Fotozoom und Unschärfefilter sind begrenzt. Beugung und anamorphotische Darstellung sind Näherungen. Ein echter Objektiv-/Kameraaufbau kann daher anders aussehen.

Teilen-Schaltfläche, Ereignisbehandlung und überholte Hilfe dazu entfernt. Falsche barrierefreie Lichtbeschreibung im Kreuzgang korrigiert. Frischer Browsercheck: Brennweite 50 mm, Blende 8, Fokus 3 m, Vollformat mit Standard-CoC ergibt Nahgrenze 2.36 m, Ferngrenze 4.12 m, Gesamtbereich 1.76 m; kein Teilen-Knopf und keine protokollierten JavaScript-Fehler.

## Gemeinsame Projektion · 25.10.2026

Die vorherige Untergrenze des Fotozooms hielt den Hintergrund bei kurzen Brennweiten konstant. Sie ist entfernt. Foto und Motiv verwenden nun dieselbe Bildweite f · (1 + Abbildungsmassstab) und Sensorabmessungen. Auch die angezeigte horizontale Bildwinkelberechnung berücksichtigt diese Bildweite. Der separate, nicht räumlich konsistente Schalter zur Hintergrund-Entfernungsskalierung wurde entfernt.

Die fünf gelieferten JPEG-Originale wurden auf EXIF geprüft: Brennweite, 35-mm-Äquivalent und Kameramodell fehlen. Die Foto-Projektion verwendet deshalb ausdrücklich angenommene 12 mm / Vollformat als Referenz, sichtbar unter der Vorschau. Das ist keine bekannte Originalbrennweite. Fehlende Bildbereiche werden nicht erfunden, Motiv und Schatten werden auf vorhandene Fotofläche beschnitten.

Der Kreuzgang verwendet eine angenäherte Bodenebene und 1.25 m Kamerahöhe (unter Erweitert veränderbar). Die Fussposition hängt von Kamerahöhe und Entfernung ab, nicht mehr von der Grösse des Hundes oder der Person. Kein erzwungener Kopfrand verändert die Bodenposition. Motive hinter der darstellbaren Bodenfläche werden mit Hinweis ausgeblendet. Am Boden wird die Unschärfe zeilenweise anhand der Ebenentiefe berechnet; der Bodenfilter bleibt eine Gauß-Näherung. Wände, Landschaften und Licht sind weiterhin nicht dreidimensional rekonstruiert.

Prüfung: 39 optische Testgruppen sowie 128 neue Projektionstests bestanden. Die Projektionstests prüfen unter anderem kontinuierlichen Fotozoom von 8 bis 1200 mm, Sensorwechsel, Formatwechsel und identischen Bodenkontakt unterschiedlich hoher Motive. 20 Browserwechsel (fünf Orte, Frau/Hund, 35/200 mm) luden ohne protokollierte JavaScript-Fehler. Desktop und 390-Pixel-Mobilansicht visuell kontrolliert.

Kein Anspruch auf vollständige physikalische Genauigkeit: Referenzkamera, Fluchtpunkt und Bodenmaske sind Annahmen. Für eine quantitativ korrekte Raumdarstellung braucht es Aufnahmekalibrierung, Tiefendaten und zusätzliche Bildinformation bzw. ein echtes 3D-Modell. Ein einzelnes Foto kann insbesondere nicht die bei einer Kamerabewegung sichtbar werdenden Flächen liefern.


## Eigenständiger 3D-Kreuzgang · 26.10.2026

Auf Wunsch des Auftraggebers wurde ein plausibles eigenes Raummodell erstellt; zusätzliche Vermessungsdaten liegen nicht vor. Lichte Breite 6.8 m, Höhe 4.5 m, Bogenraster 3 m, Bogenradius 1.13 m. Die virtuelle Rückwand folgt der Hintergrundentfernung; die Option unendlich entfernt die Rückwand. Boden, Decke, Seitenwände, Öffnungen und Pfeiler werden als räumliche Geometrie geschnitten. Die OBJ-Datei unter model-3d/ ist eine facettierte exportierbare Variante des 18 m langen Grundraums.

Der WebGL-2-Renderer integriert 48 Blendenpositionen mit einer idealen Dünnlinse. Die Bildweite entspricht 1/(1/f - 1/s). Der Boden erhält keine pauschale Hintergrundunschärfe mehr. Das Ergebnis wird in linearem Licht in RGBA16F-Puffern akkumuliert und erst anschliessend nach sRGB umgerechnet. Eine vertikale Bildverschiebung zentriert das Motiv, ohne die Fokusebene zu neigen. Die Arbeitsauflösung ist auf 900 Pixel lange Kante begrenzt, die Ausgabe kann grösser sein.

Prüfungen: 39 optische Testgruppen bestanden; 1542 unabhängige Strahl-/Ebenenvergleiche gegen analytische Unschärfedurchmesser und 1680 Massstabsprüfungen bestanden. 16 Browserfälle aus vier Motiven und 18/35/85/200 mm wurden jeweils bis zu 48 fertigen Samples gerendert, ohne protokollierte JavaScript-Fehler. Hund bei 50 mm, f/1.4, 3 m visuell geprüft: Bodenkontakt und Tiefenverlauf. PNG-Export tatsächlich gespeichert und als lesbares Bild mit 1200 × 800 Pixel verifiziert.

Offene Grenzen: Der Raum ist kein vermessener Basler Kreuzgang. Personen und Hund bleiben zweidimensionale Fotokarten; sie sind keine 3D-Körper und besitzen keine rekonstruierte Eigenbeleuchtung oder Tiefenstruktur. Raumlicht ist ein vereinfachtes direktes Lichtmodell mit Umgebungsanteil, kein vollständiger Lichttransport. Kontaktabdunklung, Materialtexturen, Beugungsfilter, Anamorphot und endliche Strahlenabtastung bleiben Näherungen. Die anderen vier Orte bleiben Fotomontagen. Deshalb ist dies ein überprüfter 3D-Ausbau und keine Bestätigung vollständiger physikalischer Genauigkeit oder absoluter Fehlerfreiheit.
