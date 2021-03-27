import { useTheme } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { TextInput, View } from "react-native";
import { ToevoegenKnop, VerwijderKnop } from "../../../Gui/Basic/Knoppen";
import Text from "../../../Gui/Basic/Text";
import { KrijgVraagSoort } from "../../../Gui/ExamenTekst/Vraag";
import useArrayState from "../../../Hooks/arrayState";
import { styles } from "../../../Styles";

export default function MaakMeerKeuzeVraag({ oudeVraag, zetVraagMethode }) {
  let standaardAntwoorden = [];
  let standaardJuisteAntwoord = "";
  if(KrijgVraagSoort(oudeVraag) === "Meer keuze vraag") {
    standaardAntwoorden = oudeVraag.opties;
    standaardJuisteAntwoord = oudeVraag.antwoord;
  }

  const [antwoorden, zetAntwoorden, zetAntwoord] = useArrayState(standaardAntwoorden);
  const [juisteAntwoord, zetJuisteAntwoord] = useState(standaardJuisteAntwoord);
  const { colors } = useTheme();

  useEffect(() => {
    zetVraagMethode({
      opties: antwoorden,
      antwoord: juisteAntwoord
    });
  }, [zetVraagMethode, antwoorden, juisteAntwoord]);

  return (
    <View>
      <Text>Mogelijke antwoorden:</Text>
      {antwoorden.map((value, index) => {
        return (
          <View style={{ flexDirection: "row" }}>
            <TextInput
              key={index}
              style={[styles.textBox, {flex: 1}]}
              onChangeText={zetAntwoord(index)}
              value={value}
            />
            <VerwijderKnop
              style={{margin: 5}}
              onPress={() => {
                zetAntwoorden(antwoorden.filter((_, i) => i !== index));
              }}
            />
          </View>
        );
      })}
      <ToevoegenKnop
        style={{ margin: 5, alignSelf: "center" }}
        size={20}
        onPress={() => zetAntwoorden([...antwoorden, ""])}
      />
      <Text style={styles.text}>Juiste antwoord:</Text>
      <TextInput
        style={[
          styles.textBox,
          {
            backgroundColor: colors.inputTextBoxBackgroundKleur,
            borderColor: colors.inputTextBoxBackgroundKleur
          }
        ]}
        onChangeText={zetJuisteAntwoord}
        value={juisteAntwoord}
      />
    </View>
  );
}
