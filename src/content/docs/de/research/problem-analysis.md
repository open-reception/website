---
title: Problemanalyse
description: Die Ergebnisse unserer Problemanalyse
---

Wir haben im Juni und Juli 2025 qualitative Interviews mit Arztpraxen geführt. Dabei haben wir Ärzte und deren Personal zu _Problemen_ bei der Buchung von Online-Terminen befragt. Die Ergebnisse fließen in die Konzeption und Gestaltung von OpenReception ein.

> Auch wenn wir eine Online-Terminbuchung am Beispiel von Arztpraxen entwickeln, wollen wir ein allgemeingültiges Tool entwickeln.

## Wie liefen die Interviews ab?

Wir haben strukturierte Interviews mit interessierten Praxen geführt. Darin haben wir in einem etwa 15-minütigen Gespräch

- die Abläufe innerhalb ihrer Praxis,
- welche Software eventuell aktuell schon eingesetzt wird und
- welche Probleme mit der aktuellen Lösung bestehen

abgefragt. Dieses Gespräch haben wir zunächst mit Praxisinhabern (Ärzten) sowie im Anschluss mit deren Personal geführt. So konnten wir Unterschiede in der Zufriedenheit und Bewertung von Problemen feststellen.

Zusätzlich haben wir viele implizite (weniger strukturierte) Interviews mit Ärztinnen und Ärzten geführt.

## Identifizierte Probleme

In unseren Gesprächen haben wir mit unseren Interviewpartnern folgende Probleme und Anforderungen identifiziert:

- Patienten wissen nicht, welchen Termin sie benötigen. Dann muss oft Rücksprache gehalten werden.
- Freie Arztwahl muss möglich sein.
- (Manche) Termine bedürfen einer Bestätigung.
- (Manche) Termine dürfen nur unter bestimmten Bedingungen angeboten werden (bisher wird dafür ein Code herausgegeben).
- Daten, die Patienten angeben, sind oft unvollständig (Telefonnummer, E-Mail-Adresse fehlen oft).
- Ein individueller Fragebogen fehlt.
- Bei einem Anbieter ist es schwer, einen Kalendereintrag sowie zugehörige Patienten und Nachrichten zu finden.
- Bei einem Anbieter ist die Terminverschiebung relativ umständlich.
- Bei einem Anbieter ist es schwer zu erkennen, um welche Art von Termin es sich handelt, wenn ein Termin noch nicht belegt ist.
- Bei angebotenen Terminen muss klar sein, dass der/die betreffende Ärztin da ist.
- Kalender- und Praxissystem sprechen nicht miteinander; wenn Schnittstellen vorhanden sind, sind diese sehr teuer.
- Bei einem Anbieter müsste man bei der Auswertung von Patientendaten die Filter selbst wählen können (Controlling).

### Weitere Ergebnisse

- Die Verwendung von Slots (Zeitfenstern) wird oft bevorzugt, da diese auf Basis von Praxisabläufen erstellt werden können.
- Manche Termine soll nur das Personal buchen können.
- Manche Termine sollen externe Ärzte buchen können (geringe Nutzung).
- Es muss eine Möglichkeit geben, Abwesenheiten zu planen.
- Ärzte allein können nicht die Grundlage für die verfügbaren Termine sein. Vielmehr muss es ein Mix aus Ärzten und Geräten/Räumen/Untersuchungen sein.

## Strukturelle Entscheidungen

Auf Basis der identifizierten Probleme haben wir einige strukturelle Entscheidungen für OpenReception getroffen:

- Wir arbeiten mit Kanälen. Dies können Untersuchungen, Räume oder Geräte sein. Kanäle enthalten Slots, die nach einem beliebigen Muster erzeugt werden.
- Wir arbeiten mit Akteuren, dies können Ärzte, Abteilungen oder Gruppen sein. Es müssen keine Akteure angelegt werden.
- Akteure können Kanälen zugewiesen werden. Ist das erfolgt, wird die Verfügbarkeit des Akteurs dadurch beeinflusst. So können Arbeitstage geplant werden.
- Kanäle, denen keine Akteure zugeordnet sind, laufen nebenher.
- Kanäle können als nicht-öffentlich markiert werden, damit nur Praxispersonal dort einen Termin einbuchen kann.
- Je Kanal kann eingestellt werden, ob eine Bestätigung eines Termins durch die Praxis erfolgen muss.
- Kanäle können deaktiviert werden, damit Patienten darin keine neuen Termine buchen.
- E-Mail-Adressen und Telefonnummern von Patienten, die einen Termin buchen wollen, können auf Mandantenebene als erforderliche Eingaben festgelegt werden.

## Identifizierte User-Stories

In unseren Interviews haben wir folgende User-Stories (Nutzeranforderungen) identifiziert:

### Technisches Setup

- Setup durch einen System-Admin
- Hinzufügen eines Mandanten durch einen System-Admin
- Mandant wird eingeladen und richtet sein Termin-Portal ein
- Mandant erzeugt Kanal

### Termine

- Ein Klient bucht einen Termin
- Eine Praxis belegt einen Termin mit einer Person am Telefon
- Eine Praxis erhält eine Terminanfrage (die bestätigt werden muss)
- Ein Klient möchte einen Termin absagen
- Ein Klient möchte einen Termin verschieben
- Ein Klient geht zu einem Termin
- Das Praxispersonal empfängt einen Klienten mit Termin an der Anmeldung
- Ein Akteur ist nicht verfügbar. Termine müssen umgebucht/abgesagt werden
- Ein Klient wird informiert, dass ein Akteur nicht verfügbar ist

Neben den Anforderungen, die wir durch unsere Probleminterviews herausgearbeitet haben, ergeben sich weitere Anforderungen, auf die wir an dieser Stelle nicht eingehen. Diese sind zumeist technischer Natur und sollen den reibungslosen Betrieb und die Sicherheit der Patientendaten gewährleisten.
