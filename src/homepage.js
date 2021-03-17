import * as React from "react";
import { useState } from "react";
import { TouchableOpacity, View } from "react-native";
import Enter from "./Gui/Enter";
import Text from "./Gui/Text";
import Button from "./Gui/Button";
import Jacket from "./Gui/Jacket";
import Logo from "./Gui/Logo";
import TextBox from "./Gui/TextBox";
import useFahneKleur from "./Hooks/FahneKleur";
import fetchData, { setKey } from "./server/fetchData";
import { useTheme } from "@react-navigation/native";
import { styles } from "./Styles";
import DarkModeSwitch from "./Gui/DarkModeSwitch";

export default function HomePage({ navigation }) {
  const { colors, addError, addSucces } = useTheme();
  const [leerlingnummer, zetleerlingnummer] = useState("");
  const [wachtwoord, zetwachtwoord] = useState("");
  const [leerlingnummercolor, zetleerlingnummercolor] = useState("grey");
  const [wachtwoordcolor, zetwachtwoordcolor] = useState("grey");
  const [fahnekleur, veranderfahne, veranderterug] = useFahneKleur({
    kleur: colors.achtergrondKleur
  });

  let inloggen = () => {
    if (leerlingnummer === "") {
      addError("U heeft het leerling nummer niet ingevuld.");
      zetleerlingnummercolor("#ff0000");
    } else if (wachtwoord === "") {
      addError("U heeft uw wachtwoord niet ingevuld.");
      zetwachtwoordcolor("#ff0000");
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
        .catch((error) => {
          console.log(error);
          addError("De server is niet online op dit moment.");
        });
    }
  };

  return (
    <View style={{ flex: 1 }}>
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
            style={[styles.inputBox, { borderColor: leerlingnummercolor }]}
            onChangeText={(nieuweleerlingnummer) => {
              zetleerlingnummer(nieuweleerlingnummer);
              zetleerlingnummercolor("'grey'");
            }}
            value={leerlingnummer}
          />
          <TextBox
            title={"Wachtwoord"}
            style={[styles.inputBox, { borderColor: wachtwoordcolor }]}
            onChangeText={(nieuwewachtwoord) => {
              zetwachtwoord(nieuwewachtwoord);
              zetwachtwoordcolor("'grey'");
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
            onPress={() => navigation.navigate("registreren")}
          >
            Geen account? Maak een account!
          </Text>
          <Enter />
        </View>
        <DarkModeSwitch />
      </Jacket>
    </View>
  );
}
