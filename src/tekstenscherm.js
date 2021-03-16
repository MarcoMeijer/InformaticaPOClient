import * as React from "react";
import { TouchableOpacity } from "react-native";
import Text from "./Gui/Text";
import useFahneKleur from "./Hooks/FahneKleur";
import TekstenLijst from "./Gui/TekstenLijst";
import Jacket from "./Gui/Jacket";

export default function TekstenScherm({ navigation }) {
  const [fahnekleur, veranderfahne, veranderterug] = useFahneKleur();

  return (
    <Jacket kleur={fahnekleur}>
      <Text>
        <TouchableOpacity onPress={veranderfahne}>
          <Text>
            <b>Hier kunt u alle teksten</b>
          </Text>
        </TouchableOpacity>{" "}
        <TouchableOpacity onPress={veranderterug}>
          <Text>
            <b>bekijken!</b> {"\n\n"}
          </Text>
        </TouchableOpacity>
      </Text>
      <TekstenLijst
        onPress={(tekstid) => {
          navigation.navigate("Examen tekst", {
            tekstid: tekstid
          });
        }}
      />
    </Jacket>
  );
}
