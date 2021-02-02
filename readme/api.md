
# API

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
"Succes" als het gelukt is.

## login

**Argumenten**:
* llnr
* wachtwoord

**Resultaat**:
Dit moet nog geimplementeerd worden.

## klas
Selecteerd alle informatie over de klas, inclusief alle leerlingen die er in zitten.

**Argumenten**:
* klas

**Resultaat**
?

## klassen
Selecteerd alle verschillende klassen. (Exclusief de leerlingen)

**Argumenten**
geen

**Resultaat**
?

## tekstniveau
Selecteerd alle teksten met een bepaald niveau.

**Argumenten**
* tekstniveau

**Resultaat**
?

## vraagsoort
Selecteerd alle vragen met een bepaalde vraagsoort.
s