import { useTheme } from "@react-navigation/native";
import { useState } from "react";
import { View } from "react-native";
import fetchData from "../../../Database/fetchData";
import Button from "../../../Gui/Basic/Button";
import TextBox from "../../../Gui/Basic/TextBox";

export default function VraagsoortAanmakenMenu({ onCreate }) {
  const [tekst, zetTekst] = useState("");
  const { addSucces } = useTheme();

  return <View
    style={{flexDirection: "row", alignItems: "flex-end", justifyContent: "center"}}
  >
    <TextBox
      title="Vraag soort"
      value={tekst}
      onChangeText={zetTekst}
    />
    <Button
      title="Creëer vraag soort"
      onPress={() => {
        fetchData("insertvraagsoort", {vraagsoort: tekst})
          .then(() => {
            addSucces("Vraag soort succesvol aangemaakt.");
            if(onCreate) onCreate();
          });
      }}
    />
  </View>;
}