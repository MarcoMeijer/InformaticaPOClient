import * as React from "react";
import { useState } from "react";
import { Button, Text, TouchableOpacity, View } from "react-native";
import Enter from "./Gui/Enter";
import Jacket from "./Gui/Jacket";
import Logo from "./Gui/Logo";
import Pagina from "./Gui/Pagina";
import TextBox from "./Gui/TextBox";
import useErrorState from "./Hooks/errorState";
import useFahneKleur from "./Hooks/FahneKleur";
import fetchData, { setKey } from "./server/fetchData";
import { styles } from "./Styles";

export default function HomePage({ navigation }) {
  const [leerlingnummer, zetleerlingnummer] = useState("");
  const [wachtwoord, zetwachtwoord] = useState("");
  const [errors, addError] = useErrorState();
  const [leerlingnummercolor, zetleerlingnummercolor] = useState("grey");
  const [wachtwoordcolor, zetwachtwoordcolor] = useState("grey");
  const [fahnekleur, veranderfahne, veranderterug] = useFahneKleur();

  let inloggen = () => {
    if (leerlingnummer === "") {
      addError("U heeft het leerlingnummer niet ingevuld.");
      zetleerlingnummercolor("#ff0000");
    } else if (wachtwoord === "") {
      addError("U heeft uw wachtwoord niet ingevuld.");
      zetwachtwoordcolor("#ff0000");
    } else {
      fetchData("login", { llnr: leerlingnummer, wachtwoord: wachtwoord })
        .then((data) => {
          if (data === "fail") {
            addError("Uw wachtwoord of gebruikersnaam is niet juist.");
          } else {
            setKey(data.token);
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
    <Pagina navigation={navigation} errors={errors}>
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
        </View>
        <Enter />
        <Button title="Inloggen" onPress={inloggen} />
        <Enter />
        <Text
          style={{ color: "blue" }}
          onPress={() => navigation.navigate("registreren")}
        >
          Geen account? Maak een account!
        </Text>
      </Jacket>
    </Pagina>
  );
}
