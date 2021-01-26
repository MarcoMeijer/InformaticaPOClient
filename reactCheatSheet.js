
// ====================================== //
// Informatie tussen pagina's doorgeven
// ====================================== //

const { useState } = require("react");
const { ActivityIndicator } = require("react-native");
const { TextInput } = require("react-native-gesture-handler");
const { default: fetchData } = require("./src/server/fetchData");

// informatie doorgeven aan andere pagina's
function pagina1({ navigation }) {
  return (
    <View>
      <Button
        title="Knop"
        onPress={() => navigation.navigate('pagina2', {info1: "hallo", info2: 42})}
      />
    </View>
  );
}

// doorgegeven informatie ontvangen
function pagina2({ route, navigation }) { // let op dat route toegevoegd is
  const {info1, info2} = route; // info1 = "hallo", info2 = 42

  return (
    <View>
      <Text> Informatie 1 is gelijk aan: {info1} </Text>
      <Text> Informatie 2 is gelijk aan: {info2} </Text>
      <Button
        title="Terug"
        onPress={() => navigation.goBack()}
      />
    </View>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="pagina 1" component={pagina1} />
        <Stack.Screen name="pagina 2" component={pagina2} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// ====================================== //
// Interactiefe paginas
// ====================================== //

/*
Normale php/html pagina's zijn niet "interactief".
Je kan niet de html code aanpassen nadat de website geladen is.
Met javascript kan dat wel.
Hiervoor gebruik je de useState() functie.
Dit geeft aan dat je een variabel aanmaakt, die belankrijk is voor de layout van de pagina.
Als je deze variabel aan past, herlaad de pagina automatisch.
Een nadeel van hoe react werkt is dat de tekst in textboxen ook interactief zijn.
Voor die tekst moet je zoals hier onder gedaan wordt ook de useState() functie gebruiken.
*/

function pagina() {
  const [teller, zetTeller] = useState(0); // 0 is de begin waarde.
  const [tekst, zetTekst] = useState("Voer hier tekst in");
  /*
  tekst geeft hier aan wat de huidige tekst is,
  en zetTekst is een functie waarmee je de huidige tekst kan veranderen.
  bv: zetTekst("nieuwe tekst")
  De namen die je ze geeft maakt niet uit, alleen de volgorde geeft aan welke wat is.
  */

  return (
    <View>
      <TextInput  
        multiline
        numberOfLines={5}
        onChangeText={nieuweTekst => zetTekst(nieuweTekst)}
        value={tekst}
      />
      <Text> Er is {teller} keer op de knop gedrukt. </Text>
      <Button
        title="Knop"
        onPress={() => zetTeller(teller + 1)} // voeg 1 aan de teller toe
      />
    </View>
  );
}

// ====================================== //
// Informatie van sql data base ontvangen
// ====================================== //

/*
(Dit systeem heb ik geprogrammeerd dus je kan er online niet echt informatie over vinden)
Als je met de server wil communiceren moet je de fetchData() functie gebruiken.
Deze kan je inporten vanuit src/server/fetchData.js
Het eerste argument dat je moet geven is de naam van de query. (bv: "login")
Het tweede argument is de extra informatie die je wilt doorgeven aan de query.
Dit is voor elke query soort anders, en voor sommige zelf niet eens nodig.
bijvoorbeeld: fetchData("login", {llnr: "118962", wachtwoord: "Wachtwoord"})
Om dan iets met de data te doen zie je onderin hoe dat moet
*/

function logInPaginaVoorbeeld({ navigation }) {
  const [llnr, zetLlnr] = useState("");
  const [wachtwoord, zetWachtwoord] = useState("");
  const [resultaat, zetResultaat] = useState(undefined);
  /*
  omdat inloggen interactief is gebruiken we hiervoor useState
  */

  return (
    <View>
      <TextInput
        onChangeText={tekst => zetLlnr(tekst)}
        value={llnr}
      />
      <TextInput
        onChangeText={tekst => zetWachtwoord(tekst)}
        value={wachtwoord}
      />
      <Button
        title="Log in"
        onPress={() => {
          /*
          na fetchData doe je .then() wat aangeeft wat er moet gebeuren als je een antwoord van de server terug krijgt
          */
          zetResultaat("wachten");
          fetchData("login", {llnr: llnr, wachtwoord: wachtwoord})
          .then(data => {
            /*
            data is een array met alle leerlingen die dit leerlingnummer en wachtwoord hebben (maximaal 1)
            als de lengte dus 0 is heb je een verkeerd wachtwoord/leerlingnummer ingevoerd
            */
            if(data.length === 0) {
              zetResultaat("fail");
            } else {
              zetResultaat("success");
            }
          });
        }}
      />
      {
        resultaat === "wachten" && (<ActivityIndicator/>) // gebruik een activity indicator om aan te geven dat je op de server aan het wachten bent
      }
      {
        resultaat === "succes" && (<Text>Je bent ingelogt.</Text>)
      }
      {
        resultaat === "fail" && (<Text>Onjuist leerlingnummer/wachtwoord.</Text>)
      }
    </View>
  );
}
