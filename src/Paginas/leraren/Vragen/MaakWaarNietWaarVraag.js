import { useTheme } from "@react-navigation/native";
import { useEffect } from "react";
import { CheckBox, TextInput, View } from "react-native";
import Button from "../../../Gui/Basic/Button";
import Text from "../../../Gui/Basic/Text";
import useArrayState from "../../../Hooks/arrayState";
import { styles } from "../../../Styles";

export default function MaakWaarNietWaarVraag({ zetVraagMethode }) {
  const [stellingen, zetStellingen, zetStelling] = useArrayState();
  const { colors } = useTheme();

  useEffect(() => {
    zetVraagMethode({
      juist: stellingen.map(({ tekst }) => tekst),
      antwoord: stellingen.map(({ waar }) => waar)
    });
  }, [stellingen, zetVraagMethode]);

  return (
    <View>
      <Text style={styles.text}>Stellingen:</Text>
      {stellingen.map((value, index) => {
        return (
          <View style={{ flexDirection: "row" }} key={index}>
            <TextInput
              style={[
                styles.textBox,
                {
                  backgroundColor: colors.inputTextBoxBackgroundKleur,
                  flex: 1,
                  borderColor: colors.inputTextBoxBackgroundKleur
                }
              ]}
              onChangeText={(tekst) => {
                zetStelling(index)({ ...stellingen[index], tekst: tekst });
              }}
              value={value.tekst}
            />
            <Text>{` Waar?  `}</Text>
            <CheckBox
              style={{
                backgroundColor: colors.textboxAchtergrondKleur,
                borderColor: colors.inputTextBoxBackgroundKleur
              }}
              value={value.waar}
              onValueChange={(waar) => {
                zetStelling(index)({ ...stellingen[index], waar: waar });
              }}
            />
          </View>
        );
      })}
      <Button
        title="Voeg stelling toe."
        onPress={() =>
          zetStellingen([...stellingen, { tekst: "", waar: false }])
        }
      />
      <Text>Voor elk fout antwoord wordt een punt weggehaald.</Text>
    </View>
  );
}
