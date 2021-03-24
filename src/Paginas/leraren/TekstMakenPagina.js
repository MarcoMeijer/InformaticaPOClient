import { useTheme } from "@react-navigation/native";
import * as React from "react";
import { useState } from "react";
import { TextInput, View } from "react-native";
import fetchData from "../../Database/fetchData";
import Button from "../../Gui/Basic/Button";
import Text from "../../Gui/Basic/Text";
import ExamenTekst from "../../Gui/ExamenTekst/ExamenTekst";
import ExamenSelecteerder from "../../Gui/ExamenTekst/ExamenSelecteerder";
import { styles } from "../../Styles";
import { getDocumentAsync } from "expo-document-picker";

export default function TekstMakenPagina({ navigation }) {
  const [title, changeTitle] = useState("");
  const [text, changeText] = useState("");
  const [geselecteerdExamen, zetGeselecteerdExamen] = useState("");
  const { colors } = useTheme();

  let examText = {
    title: title,
    text: text
  };

  const voegTekstToe = () => {
    fetchData("inserttekst", {
      tekstniveau: 1,
      examenid: geselecteerdExamen,
      teksttitel: title,
      tekstinoud: JSON.stringify(examText)
    })
      .then((data) => {
        console.log(data);
        navigation.goBack();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <View
      style={{
        flex: 1,
        flexDirection: "row",
        backgroundColor: colors.achtergrondKleur
      }}
    >
      <View
        style={[
          styles.box,
          {
            backgroundColor: colors.blueboxKleur,
            borderColor: colors.blueboxKleur
          }
        ]}
      >
        <ExamenSelecteerder onChangeText={zetGeselecteerdExamen} />
        <Text style={styles.text}>Titel:</Text>
        <TextInput
          style={[
            styles.textBox,
            {
              backgroundColor: colors.inputTextBoxBackgroundKleur,
              borderColor: colors.inputTextBoxBorderKleur,
              borderWidth: 1,
              color: colors.tekstKleur
            }
          ]}
          onChangeText={(text) => changeTitle(text)}
          value={title}
        />

        <Text style={styles.text}>Tekst:</Text>
        <TextInput
          style={[
            styles.textBox,
            {
              flex: 1,
              backgroundColor: colors.inputTextBoxBackgroundKleur,
              borderColor: colors.inputTextBoxBorderKleur,
              borderWidth: 1,
              color: colors.tekstKleur
            }
          ]}
          multiline
          onChangeText={(text) => changeText(text)}
          value={text}
        />
        <Button
          title="Selecteer afbeelding (png)"
          onPress={() => {
            getDocumentAsync({ type: ".png" }).then(() => {});
          }}
        />
      </View>
      <View
        style={[
          styles.box,
          {
            backgroundColor: colors.blueboxKleur,
            borderColor: colors.blueboxKleur
          }
        ]}
      >
        <ExamenTekst text={examText}></ExamenTekst>
      </View>
      <View style={{ alignItems: "center" }}>
        <View
          style={[
            styles.box,
            {
              backgroundColor: colors.blueboxKleur,
              borderColor: colors.blueboxKleur,
              alignItems: "center"
            }
          ]}
        >
          <Text>
            <b>Tools om de tekst te stylen:</b> <br />
            <br />
            {"\u2022"} Text <b>dikgedrukt</b> maken: <br /> {`<b> text </b>`}{" "}
            <br /> <br />
            {"\u2022"} Text <i>schuingedrukt</i> maken:
            <br /> {`<i> text </i>`} <br /> <br />
            {"\u2022"} Paragraaf maken: <br /> {`<p> text </p>`} <br />
            <br /> De titel is automatisch dikgedrukt.
          </Text>
          <Button title="Voeg tekst toe." onPress={voegTekstToe} />
        </View>
      </View>
    </View>
  );
}
