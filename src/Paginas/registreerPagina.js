import { useTheme } from "@react-navigation/native";
import * as React from "react";
import { useState } from "react";
import { TouchableOpacity, View } from "react-native";
import fetchData, { setKey } from "../Database/fetchData";
import Button from "../Gui/Basic/Button";
import DropDownMenu from "../Gui/Basic/DropDownMenu";
import Enter from "../Gui/Basic/Enter";
import Text from "../Gui/Basic/Text";
import TextBox from "../Gui/Basic/TextBox";
import Jacket from "../Gui/Pagina-layout/Jacket";
import Logo from "../Gui/Pagina-layout/Logo";
import useFahneKleur from "../Hooks/FahneKleur";
import useFetch from "../Hooks/useFetch";

export default function RegistreerPagina({ navigation }) {
  const { addError, addSucces } = useTheme();
  const [leerlingnummer, zetleerlingnummer] = useState("");
  const [voornaam, zetvoornaam] = useState("");
  const [tussenvoegsel, zettussenvoegsel] = useState("");
  const [achternaam, zetachternaam] = useState("");
  const [klas, zetklas] = useState("");
  const [wachtwoord, zetwachtwoord] = useState("");
  const [wachtwoordherhalen, zetwachtwoordherhalen] = useState("");
  const [klassen] = useFetch("klassen", {}, (data) =>
    data.map((klas) => klas.klas)
  );
  const [fahnekleur, veranderfahne, veranderterug] = useFahneKleur();

  let inloggen = () => {
    fetchData("login", { llnr: leerlingnummer, wachtwoord: wachtwoord }).then(
      (data) => {
        if (data === "fail") {
          addError("Er is een onbekende fout opgetreden.");
        } else {
          setKey(data.token);
          addSucces(
            "Uw account is succesvol aangemaakt. U bent automatisch ingelogd."
          );
          navigation.navigate("Leerlingen home pagina");
        }
      }
    );
  };

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
          inloggen();
        })
        .catch(() => {
          addError(
            "De server is niet online op dit moment. probeer het op een ander moment."
          );
        });
    }
  };

  return (
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
          onChangeText={zetleerlingnummer}
          value={leerlingnummer}
        />
        <TextBox title="Voornaam" onChangeText={zetvoornaam} value={voornaam} />
        <TextBox
          title="Tussenvoegsel"
          onChangeText={zettussenvoegsel}
          value={tussenvoegsel}
        />
        <TextBox
          title="Achternaam"
          onChangeText={zetachternaam}
          value={achternaam}
        />
        <TextBox
          title="Wachtwoord"
          onChangeText={zetwachtwoord}
          value={wachtwoord}
          secureTextEntry={true}
        />
        <TextBox
          title="Wachtwoord herhalen"
          onChangeText={zetwachtwoordherhalen}
          value={wachtwoordherhalen}
          secureTextEntry={true}
        />
        <View style={{ flexDirection: "row", margin: 8 }}>
          <DropDownMenu
            opties={klassen || []}
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
  );
}
