import { useTheme } from "@react-navigation/native";
import { getDocumentAsync } from "expo-document-picker";
import * as React from "react";
import { useState } from "react";
import { TextInput, View } from "react-native";
import fetchData from "../../Database/fetchData";
import Button from "../../Gui/Basic/Button";
import NumberInput from "../../Gui/Basic/NumberInput";
import Text from "../../Gui/Basic/Text";
import ExamenSelecteerder from "../../Gui/ExamenTekst/ExamenSelecteerder";
import ExamenTekst from "../../Gui/ExamenTekst/ExamenTekst";
import { styles } from "../../Styles";

export default function TekstMakenPagina({ navigation }) {
  const [title, changeTitle] = useState("");
  const [text, changeText] = useState("");
  const [afbeelding, zetAfbeelding] = useState("");
  const [afbeeldingX, zetAfbeeldingX] = useState(0);
  const [afbeeldingY, zetAfbeeldingY] = useState(0);
  const [afbeeldingW, zetAfbeeldingW] = useState(0);
  const [afbeeldingH, zetAfbeeldingH] = useState(0);
  const [afbeeldingGrote, zetAfbeeldingGrote] = useState(1);
  const [geselecteerdExamen, zetGeselecteerdExamen] = useState("");
  const { colors } = useTheme();

  const examText = {
    title: title,
    text: text,
    afbeelding: afbeelding,
    afbeeldingX: afbeeldingX,
    afbeeldingY: afbeeldingY,
    afbeeldingW: afbeeldingW * afbeeldingGrote,
    afbeeldingH: afbeeldingH * afbeeldingGrote
  };

  const selecteerAfbeelding = ({ uri }) => {
    zetAfbeelding(uri);

    const img = new Image();
    img.src = uri;

    img.onload = () => {
      zetAfbeeldingW(img.naturalWidth);
      zetAfbeeldingH(img.naturalHeight);
    };
  };

  const voegTekstToe = () => {
    fetchData("inserttekst", {
      examennaam: geselecteerdExamen,
      teksttitel: title,
      tekstinhoud: JSON.stringify(examText),
      tekstniveau: 1
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
          title="Selecteer afbeelding"
          style={{ margin: 5 }}
          onPress={() => {
            getDocumentAsync({ type: "image/*" }).then(selecteerAfbeelding);
          }}
        />
        <View style={{ flexDirection: "row", justifyContent: "flex-start" }}>
          <NumberInput
            style={{ flexGrow: 1 }}
            number={afbeeldingX}
            title="Afbeelding x"
            onChangeNumber={zetAfbeeldingX}
          />
          <NumberInput
            style={{ flexGrow: 1 }}
            number={afbeeldingY}
            title="Afbeelding y"
            onChangeNumber={zetAfbeeldingY}
          />
        </View>
        <NumberInput
          title="Afbeelding grote"
          number={afbeeldingGrote}
          onChangeNumber={zetAfbeeldingGrote}
          float={true}
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
