import { useEffect, useState } from "react";
import { TextInput, View } from "react-native";
import Text from "../../../Gui/Basic/Text";
import { styles } from "../../../Styles";

export default function MaakOpenVraag({ zetVraagMethode }) {
  const [nakijkAntwoord, zetNakijkAntwoord] = useState("");

  useEffect(() => {
    zetVraagMethode({
      antwoord: nakijkAntwoord
    });
  }, [zetVraagMethode, nakijkAntwoord]);

  return (
    <View>
      <Text style={styles.text}>Nakijk opmerkingen:</Text>
      <TextInput
        multiline
        numberOfLines={10}
        style={[styles.textBox, { flex: 1 }]}
        onChangeText={zetNakijkAntwoord}
        value={nakijkAntwoord}
      />
    </View>
  );
}