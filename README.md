# html-form-2-csv

Tracking von Trainingsdaten via HTML-Formular und Export als CSV-Datei.

## Verfügbare Eingabe-/Auswahlfelder

- Patient, manuelle Eingabe
- Datum, manuelle Eingabe oder Kalenderauswahl
- Übung, Auswahl aus Drop-Down Liste
- Gewicht/Zeit, manuelle Eingabe
- Wdh #1, manuelle Eingabe
- Wdh #2, manuelle Eingabe
- Wdh #3, manuelle Eingabe

## Live Eingabe der Trainingsdaten

1. Name des Patienten im Feld **Patient** eintragen
2. Datum des Trainingstages mittel Drop-down Kalender auswählen
3. Übung mittels Drop-down Liste auswählen
4. Das Trainingsgewicht, sofern erforderlich, der Übung eintragen
5. Anzahl der Wiederholungen des ersten Satzes eintragen
6. Anzahl der Wiederholungen des zweiten Satzes eintragen
7. Anzahl der Wiederholungen des dritten Satzes eintragen
8. Schaltfläche **Hinzufügen** betätigen, um den ersten Datensatz zum Trainingsplan hinzuzufügen
9. 3. bis 8. Punkt so oft wiederholen, bis alle angedachten Übungen hinzugefügt wurden
10. Nachdem alle Daten hinterlegt wurden die Schaltfläche **Export** betätigen, um den gegenwärtigen Plan lokal als `.csv` Datei zu speichern

## Vorausgefüllte Nutzung

Um einen Trainingsplan vorab zu erstellen ist wie folgt vorzugehen:

1. Name des Patienten im Feld **Patient** eintragen
2. Datum des Trainingstages mittel Drop-down Kalender auswählen
3. Übung mittels Drop-down Liste auswählen
4. Das Trainingsgewicht, sofern erforderlich, der Übung eintragen
5. Schaltfläche **Hinzufügen** betätigen, um den ersten Datensatz zum Trainingsplan hinzuzufügen
6. 3. bis 5. Punkt so oft wiederholen, bis alle angedachten Übungen hinzugefügt wurden
7. Mittels Doppelklick die fehlenden Daten (Anzahl der Wiederholungen) im unteren Teils des Formulars eintragen
8. Nachdem alle Daten hinterlegt wurden die Schaltfläche **Export** betätigen, um den gegenwärtigen Plan lokal als `.csv` Datei zu speichern

## Eintragung vollständiger Datensätze

Anders als bei der ***vorausgefüllten Nutzung*** kann die jeweilige Anzahl an Wiederholungen auch direkt eingetragen werden
