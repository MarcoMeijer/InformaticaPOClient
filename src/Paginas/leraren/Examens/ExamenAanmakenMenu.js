import { useTheme } from "@react-navigation/native";
import { useState } from "react";
import { View } from "react-native";
import Button from "../../../Gui/Basic/Button";
import TextBox from "../../../Gui/Basic/TextBox";

export default function ExamenAanmakenMenu({ onCreate }) {
  const [tekst, zetTekst] = useState("");
  const { addSucces } = useTheme();

  return <View
    style={{flexDirection: "row", alignItems: "flex-end", justifyContent: "center"}}
  >
    <TextBox
      title="Examen naam"
      value={tekst}
      onChangeText={zetTekst}
    />
    <Button
      title="Creëer examen"
      onPress={() => {
          if(onCreate) onCreate(tekst);
      }}
    />
  </View>;
}