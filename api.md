
# API

Als je wil weten hoe een object er precies uit ziet.
(Welke waardes ze allemaal hebben)
Dan kan je gebruiken maken van de functie "console.log(data)".
Data is dan het object dat je wilt bekijken.
Als je in google chrome dan op f12 klikt, en dan op console, kan je zien hoe het object er uit ziet.

## register
Dit voegt een nieuw account toe aan de database.
Dit account is automatisch een leerling.

**Argumenten**:
* llnr
* voornaam
* tussenvoegsel
* achternaam
* klas
* wachtwoord

**Resultaat**:
Geeft een string terug.
"succes" als het gelukt is.
"fout" als er iets fout gaat (b.v. llnr is al in gebruik)

## login

**Argumenten**:
* llnr
* wachtwoord

**Resultaat**:
Geeft een array terug met leerling objecten
Deze array is leeg als de llnr of wachtwoord fout is.
Anders heeft de array precies 1 leerling.

## klas
Selecteerd alle informatie over de klas, inclusief alle leerlingen die er in zitten.

**Argumenten**:
* klas

**Resultaat**
Een array van leerling objecten.

## klassen
Selecteerd alle verschillende klassen. (Exclusief de leerlingen)

**Argumenten**
geen

**Resultaat**
Een array van strings, de verschillende klassen.

## tekstniveau
Selecteerd alle teksten met een bepaald niveau.

**Argumenten**
* tekstniveau

**Resultaat**
Een array van tekst objecten.

## vraagsoort
Selecteerd alle vragen met een bepaalde vraagsoort.

**Argumenten**
* vraagsoort, een string

**Resultaat**
Een array van vraag objecten.

## vraag
Selecteerd een vraag met een bepaald id.

**Argumenten**
* vraagid

**Resultaat**
Een vraag object, of undefined als het niet bestaat.

## vraagvolgorde
Selecteerd een vraag die op een bepaalde positie bij een tekst hoord.

**Argumenten**
* teksid
* vraagvolgorde

**Resultaat**
Een vraag object, of undefined als het niet bestaat.

## tekst
Selecteerd een tekst met een bepaald id.

**Argumenten**
* tekstid

**Resultaat**
Een tekst object, of undefined als het niet bestaat.

## teksten
Selecteerd alle teksten in de database.

**Argumenten**
Geen

**Resultaat**
Een array met tekst objecten.

## gemaakt
Selecteerd alle opdrachten die je hebt gemaakt.

**Argumenten**
Geen, je moet alleen ingelogt zijn.

**Resultaat**
Een array van gemaakteopdrachten objecten(zie database).

## insertvraagsoort
Dit voegt een nieuwe vraag soort in de database.
Om dit te sturen moet je ingelogt zijn als leraar.

**Argumenten**
* vraagsoort, een string

**Resultaat**
?

## inserttekst
Dit voegt een nieuwe tekst toe aan de database.
Om dit te sturen moet je ingelogt zijn als leraar.

**Argumenten**
* tekstinhoud, een json string (doe JSON.stringify op een tekst object)
* tekstniveau, een getal dat aangeeft hoe moeilijk de tekst is.

**Resultaat**
?

## insertvraag
Dit voegt een nieuwe vraag toe aan de database.
Om dit te sturen moet je ingelogt zijn als leraar.

**Argumenten**

**Resultaat**
