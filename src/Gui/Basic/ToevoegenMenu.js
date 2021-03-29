import { useState } from "react";
import { View } from "react-native";
import Button from "./Button";
import TextBox from "./TextBox";
import { ToevoegenKnop } from "./Knoppen";
import { useTheme } from "@react-navigation/native";

export default function ToevoegenMenu({ naam, onCreate }) {
  const [open, zetOpen] = useState(false);
  const [tekst, zetTekst] = useState("");
  const { colors } = useTheme();

  return (
    <View>
      {open && (
        <View
          style={{
            flexDirection: "row",
            alignItems: "flex-end",
            justifyContent: "center",
            backgroundColor: colors.fouwDoosHeaderBackgroundKleur,
            borderRadius: 10,
            borderWidth: 1,
            borderColor: colors.inputTextBoxBorderNew2,
            margin: 1,
            paddingBottom: 10
          }}
        >
          <TextBox
            title={`Naam ${naam}`}
            value={tekst}
            onChangeText={zetTekst}
          />
          <Button
            title={`Creëer ${naam}`}
            onPress={() => {
              onCreate(tekst);
              zetOpen(false);
              zetTekst("");
            }}
          />
        </View>
      )}
      <ToevoegenKnop
        style={{ margin: 5, alignSelf: "center", color: colors.tekstKleur }}
        size={20}
        onPress={() => zetOpen(!open)}
      />
    </View>
  );
}
