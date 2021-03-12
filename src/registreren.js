import * as React from "react";
import { useEffect, useState } from "react";
import { Button, Text, TextInput, TouchableOpacity, View } from "react-native";
import DropDownMenu from "./Gui/DropDownMenu";
import Enter from "./Gui/Enter";
import Pagina from "./Gui/Pagina";
import Logo from "./Gui/Logo";
import useFahneKleur from "./Hooks/FahneKleur";
import fetchData from "./server/fetchData";
import { styles } from "./Styles";
import Jacket from "./Gui/Jacket";

export default function Barten({ navigation }) {
  const [leerlingnummer, zetleerlingnummer] = useState("");
  const [voornaam, zetvoornaam] = useState("");
  const [tussenvoegsel, zettussenvoegsel] = useState("");
  const [achternaam, zetachternaam] = useState("");
  const [klas, zetklas] = useState("");
  const [wachtwoord, zetwachtwoord] = useState("");
  const [wachtwoordherhalen, zetwachtwoordherhalen] = useState("");
  const [error1, zeterror1] = useState("");
  const [error2, zeterror2] = useState("");
  const [error3, zeterror3] = useState("");
  const [leerlingnummercolor, zetleerlingnummercolor] = useState("grey");
  const [voornaamcolor, zetvoornaamcolor] = useState("grey");
  const [achternaamcolor, zetachternaamcolor] = useState("grey");
  const [wachtwoordcolor, zetwachtwoordcolor] = useState("grey");
  const [wachtwoordherhalencolor, zetwachtwoordherhalencolor] = useState(
    "grey"
  );
  const [klassen, zetklassen] = useState([]);
  const [fahnekleur, veranderfahne, veranderterug] = useFahneKleur();

  let registreren = () => {
    if (leerlingnummer === "") {
      zeterror1("U heeft het leerlingnummer niet ingevuld. \n\n");
      zetleerlingnummercolor("#ff0000");
    } else if (voornaam === "") {
      zeterror1("U heeft uw voornaam niet ingevuld. \n\n");
      zetvoornaamcolor("#ff0000");
    } else if (achternaam === "") {
      zeterror1("U heeft uw achternaam niet ingevuld. \n\n");
      zetachternaamcolor("#ff0000");
    } else if (klas === "") {
      zeterror1("U heeft uw klas niet ingevuld. \n\n");
    } else if (wachtwoord === "") {
      zeterror1("U heeft uw wachtwoord niet ingevuld. \n\n");
      zetwachtwoordcolor("#ff0000");
    } else if (wachtwoordherhalen === "") {
      zeterror1("U heeft uw wachtwoord herhalen niet ingevuld. \n\n");
      zetwachtwoordherhalencolor("#ff0000");
    } else if (wachtwoord !== wachtwoordherhalen) {
      zeterror3(
        "Uw wachtwoord komt niet overeen met het wachtwoord dat u heeft herhaald. \n\n"
      );
    } else {
      const data = {
        llnr: leerlingnummer,
        voornaam: voornaam,
        tussenvoegsel: tussenvoegsel,
        achternaam: achternaam,
        klas: klas,
        wachtwoord: wachtwoord,
        wachtwoordherhalen: wachtwoordherhalen
      };

      fetchData("register", data)
        .then(naarhome)
        .catch(() => {
          zeterror2(
            "De server is niet online op dit moment. probeer het op een ander moment. \n\n"
          );
        });
    }
  };

  let naarhome = () => {
    navigation.navigate("Home");
  };

  useEffect(() => {
    if (klassen.length === 0) {
      fetchData("klassen")
        .then((data) => {
          let nieuweKlassen = [];
          for (let klas of data) {
            nieuweKlassen.push(klas.klas);
          }
          zetklassen(nieuweKlassen);
        })
        .catch(() => {
          zeterror2("De server is niet online op dit moment. \n\n");
        });
    }
  }, [klassen]);

  return (
    <Pagina navigation={navigation}>
      <Jacket kleur={fahnekleur}>
        <Logo size={0.9} />
        <Text style={{ marginBottom: 20, fontSize: 25 }}>
          <TouchableOpacity onPress={veranderfahne}>
            <Enter />
            <Text>Hier kunt u zich</Text>
          </TouchableOpacity>{" "}
          <TouchableOpacity onPress={veranderterug}>
            <Enter />
            <Text>registreren!</Text>
          </TouchableOpacity>
        </Text>
        <Text style={{ color: "#ff0000" }}>{error1}</Text>
        <Text
          style={{
            color: "#ff0000",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          {error2}
        </Text>
        <Text style={{ color: "#ff0000" }}>{error3}</Text>
        <View style={{ flexDirection: "row", zIndex: 2 }}>
          <View
            style={{
              flexDirection: "collumn",
              justifyContent: "space-around"
            }}
          >
            <Text>Leerlingnummer: </Text>
            <Text>Voornaam: </Text>
            <Text>Tussenvoegsel: </Text>
            <Text>Achternaam: </Text>
            <Text>Klas: </Text>
            <Text>Wachtwoord: </Text>
            <Text>Wachtwoord herhalen: </Text>
          </View>
          <View style={{ flexDirection: "collumn" }}>
            <TextInput
              style={[styles.inputBox, { borderColor: leerlingnummercolor }]}
              onChangeText={(nieuweleerlingnummer) => {
                zetleerlingnummer(nieuweleerlingnummer);
                zetleerlingnummercolor("'grey'");
              }}
              value={leerlingnummer}
            />
            <TextInput
              style={[styles.inputBox, { borderColor: voornaamcolor }]}
              onChangeText={(nieuwevoornaam) => {
                zetvoornaam(nieuwevoornaam);
                zetvoornaamcolor("'grey'");
              }}
              value={voornaam}
            />
            <TextInput
              style={[styles.inputBox]}
              onChangeText={(nieuwetussenvoegsel) =>
                zettussenvoegsel(nieuwetussenvoegsel)
              }
              value={tussenvoegsel}
            />
            <TextInput
              style={[styles.inputBox, { borderColor: achternaamcolor }]}
              onChangeText={(nieuweachternaam) => {
                zetachternaam(nieuweachternaam);
                zetachternaamcolor("'grey'");
              }}
              value={achternaam}
            />
            <DropDownMenu
              opties={klassen}
              onChangeText={(nieuweklas) => zetklas(nieuweklas)}
              value={klas}
            />
            <TextInput
              style={[styles.inputBox, { borderColor: wachtwoordcolor }]}
              onChangeText={(nieuwewachtwoord) => {
                zetwachtwoord(nieuwewachtwoord);
                zetwachtwoordcolor("'grey'");
              }}
              value={wachtwoord}
              secureTextEntry={true}
            />
            <TextInput
              style={[
                styles.inputBox,
                { borderColor: wachtwoordherhalencolor }
              ]}
              onChangeText={(nieuwewachtwoordherhalen) => {
                zetwachtwoordherhalen(nieuwewachtwoordherhalen);
                zetwachtwoordherhalencolor("'grey'");
              }}
              value={wachtwoordherhalen}
              secureTextEntry={true}
            />
          </View>
        </View>
        <Enter />
        <Button title="Registreren" onPress={registreren} />
        <Enter />
        <Text
          style={{ color: "blue" }}
          onPress={() => navigation.navigate("Home")}
        >
          Heeft u al een account? Log dan in!
        </Text>
      </Jacket>
    </Pagina>
  );
}
