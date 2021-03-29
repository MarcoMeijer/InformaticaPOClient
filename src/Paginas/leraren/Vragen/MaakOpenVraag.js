import { useTheme } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { TextInput, View } from "react-native";
import Text from "../../../Gui/Basic/Text";
import { KrijgVraagSoort } from "../../../Gui/ExamenTekst/Vraag";
import { styles } from "../../../Styles";

export default function MaakOpenVraag({ oudeVraag, zetVraagMethode }) {
  const { colors } = useTheme();
  const [nakijkAntwoord, zetNakijkAntwoord] = useState(
    KrijgVraagSoort(oudeVraag) === "Open vraag" ? oudeVraag.antwoord : ""
  );

  useEffect(() => {
    zetVraagMethode({
      antwoord: nakijkAntwoord
    });
  }, [zetVraagMethode, nakijkAntwoord]);

  return (
    <View>
      <Text>Nakijk opmerkingen:</Text>
      <TextInput
        multiline
        numberOfLines={10}
        style={[
          styles.textBox,
          {
            flex: 1,
            backgroundColor: colors.inputTextBoxBackgroundKleur,
            borderColor: colors.inputTextBoxBackgroundKleur,
            color: colors.tekstKleur,
            borderRadius: 10
          }
        ]}
        onChangeText={zetNakijkAntwoord}
        value={nakijkAntwoord}
      />
    </View>
  );
}
