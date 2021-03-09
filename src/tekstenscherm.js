import * as React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import useFahneKleur from "./Hooks/FahneKleur";
import TekstenLijst from "./Gui/TekstenLijst";

export default function TekstenScherm({ navigation }) {
  const [fahnekleur, veranderfahne, veranderterug] = useFahneKleur();

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: fahnekleur
      }}
    >
      <View
        style={{
          width: 450,
          height: 800,
          alignSelf: "center",
          backgroundColor: "powderblue",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
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
      </View>
    </View>
  );
}
