import { useTheme } from "@react-navigation/native";
import * as React from "react";
import { useState } from "react";
import { TouchableOpacity, View } from "react-native";
import fetchData, { setKey } from "../Database/fetchData";
import Button from "../Gui/Basic/Button";
import Enter from "../Gui/Basic/Enter";
import Text from "../Gui/Basic/Text";
import TextBox from "../Gui/Basic/TextBox";
import DarkModeSwitch from "../Gui/Pagina-layout/DarkModeSwitch";
import Jacket from "../Gui/Pagina-layout/Jacket";
import Logo from "../Gui/Pagina-layout/Logo";
import useFahneKleur from "../Hooks/FahneKleur";

export default function InlogPagina({ navigation }) {
  const { addError, addSucces } = useTheme();
  const [leerlingnummer, zetleerlingnummer] = useState("");
  const [wachtwoord, zetwachtwoord] = useState("");
  const [fahnekleur, veranderfahne, veranderterug] = useFahneKleur();

  let inloggen = () => {
    if (leerlingnummer === "") {
      addError("U heeft het leerling nummer niet ingevuld.");
    } else if (wachtwoord === "") {
      addError("U heeft uw wachtwoord niet ingevuld.");
    } else {
      fetchData("login", { llnr: leerlingnummer, wachtwoord: wachtwoord })
        .then((data) => {
          if (data === "fail") {
            addError("Uw wachtwoord of leerling nummer is niet juist.");
          } else {
            setKey(data.token);
            addSucces("U bent succesvol ingelogd.");
            if (data.bevoegdheid === "docent") {
              navigation.navigate("Leraren home pagina");
            } else {
              navigation.navigate("Leerlingen home pagina");
            }
          }
        })
        .catch(() => {
          addError("De server is niet online op dit moment.");
        });
    }
  };

  return (
    <Jacket kleur={fahnekleur}>
      <Logo size={0.9} />
      <Text style={{ marginBottom: 20, fontSize: 25 }}>
        <TouchableOpacity onPress={veranderfahne}>
          <Enter />
          <Text>Hier kunt u</Text>
        </TouchableOpacity>{" "}
        <TouchableOpacity onPress={veranderterug}>
          <Enter />
          <Text>inloggen!</Text>
        </TouchableOpacity>
      </Text>
      <View style={{ flexDirection: "collumn" }}>
        <TextBox
          title={"Leerling nummer"}
          onChangeText={(nieuweleerlingnummer) => {
            zetleerlingnummer(nieuweleerlingnummer);
          }}
          value={leerlingnummer}
        />
        <TextBox
          title={"Wachtwoord"}
          onChangeText={(nieuwewachtwoord) => {
            zetwachtwoord(nieuwewachtwoord);
          }}
          value={wachtwoord}
          secureTextEntry={true}
        />
        <Enter />
        <Button title="Inloggen" onPress={inloggen} />
        <Enter />
        <Enter />
        <Text
          style={{ color: "blue", alignSelf: "center" }}
          onPress={() => navigation.navigate("Registreren")}
        >
          Geen account? Maak een account!
        </Text>
        <Enter />
      </View>
      <DarkModeSwitch />
    </Jacket>
  );
}
