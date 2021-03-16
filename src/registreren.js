import * as React from "react";
import { useEffect, useState } from "react";
import { TouchableOpacity, View } from "react-native";
import Text from "./Gui/Text";
import DropDownMenu from "./Gui/DropDownMenu";
import Enter from "./Gui/Enter";
import Button from "./Gui/Button";
import Logo from "./Gui/Logo";
import useFahneKleur from "./Hooks/FahneKleur";
import fetchData from "./server/fetchData";
import { styles } from "./Styles";
import Jacket from "./Gui/Jacket";
import TextBox from "./Gui/TextBox";
import { useTheme } from "@react-navigation/native";

export default function Barten({ navigation }) {
  const { addError } = useTheme();
  const [leerlingnummer, zetleerlingnummer] = useState("");
  const [voornaam, zetvoornaam] = useState("");
  const [tussenvoegsel, zettussenvoegsel] = useState("");
  const [achternaam, zetachternaam] = useState("");
  const [klas, zetklas] = useState("");
  const [wachtwoord, zetwachtwoord] = useState("");
  const [wachtwoordherhalen, zetwachtwoordherhalen] = useState("");
  const [klassen, zetklassen] = useState([]);
  const [fahnekleur, veranderfahne, veranderterug] = useFahneKleur();

  let registreren = () => {
    if (leerlingnummer === "") {
      addError("U heeft het leerlingnummer niet ingevuld.");
    } else if (voornaam === "") {
      addError("U heeft uw voornaam niet ingevuld.");
    } else if (achternaam === "") {
      addError("U heeft uw achternaam niet ingevuld.");
    } else if (klas === "") {
      addError("U heeft uw klas niet ingevuld.");
    } else if (wachtwoord === "") {
      addError("U heeft uw wachtwoord niet ingevuld.");
    } else if (wachtwoordherhalen === "") {
      addError("U heeft uw wachtwoord herhalen niet ingevuld.");
    } else if (wachtwoord !== wachtwoordherhalen) {
      addError(
        "Uw wachtwoord komt niet overeen met het wachtwoord dat u heeft herhaald."
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
        .then(() => {
          navigation.navigate("Home");
        })
        .catch(() => {
          addError(
            "De server is niet online op dit moment. probeer het op een ander moment."
          );
        });
    }
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
          addError(
            "De server is niet online op dit moment. probeer het op een ander moment."
          );
        });
    }
  }, [klassen]);

  return (
    <View style={{ flex: 1 }}>
      <Jacket kleur={fahnekleur}>
        <Logo size={0.9} />
        <Text style={{ marginBottom: 10, fontSize: 25 }}>
          <TouchableOpacity onPress={veranderfahne}>
            <Enter />
            <Text>Hier kunt u zich</Text>
          </TouchableOpacity>{" "}
          <TouchableOpacity onPress={veranderterug}>
            <Enter />
            <Text>registreren!</Text>
          </TouchableOpacity>
        </Text>
        <View style={{ flexDirection: "collumn", zIndex: 2 }}>
          <TextBox
            title="Leerling nummer"
            style={styles.inputBox}
            onChangeText={zetleerlingnummer}
            value={leerlingnummer}
          />
          <TextBox
            title="Voornaam"
            style={styles.inputBox}
            onChangeText={zetvoornaam}
            value={voornaam}
          />
          <TextBox
            title="Tussenvoegsel"
            style={styles.inputBox}
            onChangeText={zettussenvoegsel}
            value={tussenvoegsel}
          />
          <TextBox
            title="Achternaam"
            style={styles.inputBox}
            onChangeText={zetachternaam}
            value={achternaam}
          />
          <TextBox
            title="Wachtwoord"
            style={styles.inputBox}
            onChangeText={zetwachtwoord}
            value={wachtwoord}
            secureTextEntry={true}
          />
          <TextBox
            title="Wachtwoord herhalen"
            style={styles.inputBox}
            onChangeText={zetwachtwoordherhalen}
            value={wachtwoordherhalen}
            secureTextEntry={true}
          />
          <View style={{ flexDirection: "row", margin: 8 }}>
            <DropDownMenu
              opties={klassen}
              onChangeText={(nieuweklas) => zetklas(nieuweklas)}
              value={klas}
              title="Selecteer een klas"
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
    </View>
  );
}
