import { useEffect, useState } from "react";
import { TextInput, View } from "react-native";
import Button from "../../../Gui/Basic/Button";
import Text from "../../../Gui/Basic/Text";
import useArrayState from "../../../Hooks/arrayState";
import { styles } from "../../../Styles";

export default function MaakMeerKeuzeVraag({ zetVraagMethode }) {
  const [antwoorden, zetAntwoorden, zetAntwoord] = useArrayState();
  const [juisteAntwoord, zetJuisteAntwoord] = useState("");

  useEffect(() => {
    zetVraagMethode({
      opties: antwoorden,
      antwoord: juisteAntwoord
    });
  }, [zetVraagMethode, antwoorden, juisteAntwoord]);

  return (
    <View>
      <Text style={styles.text}>Mogelijke antwoorden:</Text>
      {antwoorden.map((value, index) => {
        return (
          <TextInput
            key={index}
            style={styles.textBox}
            onChangeText={zetAntwoord(index)}
            value={value}
          />
        );
      })}
      <Button
        title="Voeg antwoord optie toe."
        onPress={() => zetAntwoorden([...antwoorden, ""])}
      />
      <Text style={styles.text}>Juiste antwoord:</Text>
      <TextInput
        style={styles.textBox}
        onChangeText={zetJuisteAntwoord}
        value={juisteAntwoord}
      />
    </View>
  );
}