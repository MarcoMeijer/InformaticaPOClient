import { useTheme } from "@react-navigation/native";
import * as React from "react";
import { useState } from "react";
import { View } from "react-native";
import Button from "../../Gui/Basic/Button";
import Enter from "../../Gui/Basic/Enter";
import InputTextBox from "../../Gui/Basic/InputTextBox";
import Text from "../../Gui/Basic/Text";
import ExamenTekst from "../../Gui/ExamenTekst/ExamenTekst";
import Pagina from "../../Gui/Pagina-layout/Pagina";
import { styles } from "../../Styles";

export default function TekstMakenPagina({ navigation }) {
  const [title, changeTitle] = useState("");
  const [text, changeText] = useState("");
  const { colors } = useTheme();

  let examText = {
    title: title,
    text: text
  };

  return (
    <Pagina>
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
          <Text style={styles.text}>Titel:</Text>
          <InputTextBox
            style={[styles.textBox]}
            onChangeText={(text) => changeTitle(text)}
            value={title}
          />

          <Text style={styles.text}>Tekst:</Text>
          <InputTextBox
            multiline
            style={[styles.textBox, { flex: 1 }]}
            onChangeText={(text) => changeText(text)}
            value={text}
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
            <Enter />
            <Button
              style={{ margin: 3, flex: 1 }}
              title="Ga terug naar de vorige pagina"
              onPress={() => navigation.goBack()}
            />
          </View>
        </View>
      </View>
    </Pagina>
  );
}
