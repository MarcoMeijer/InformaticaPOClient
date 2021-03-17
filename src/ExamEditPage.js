import * as React from "react";
import { View } from "react-native";
import Text from "./Gui/Text";
import InputTextBox from "./Gui/InputTextBox";
import ExamTextComp from "./Gui/ExamTextComp";
import { styles } from "./Styles";
import { useTheme } from "@react-navigation/native";

export default function ExamEditPage() {
  const [title, changeTitle] = React.useState("");
  const [text, changeText] = React.useState("");
  const { colors } = useTheme();

  let examText = {
    title: title,
    text: text
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
        <ExamTextComp text={examText}></ExamTextComp>
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
      </View>
    </View>
  );
}
