import * as React from "react";
import { Text, TextInput, View } from "react-native";
import ExamTextComp from "./Gui/ExamTextComp";
import { styles } from "./Styles";

export default function ExamEditPage() {
  const [title, changeTitle] = React.useState("");
  const [text, changeText] = React.useState("");

  let examText = {
    title: title,
    text: text
  };

  return (
    <View style={{ flex: 1, flexDirection: "row" }}>
      <View style={styles.box}>
        <Text style={styles.text}>Titel:</Text>
        <TextInput
          style={styles.textBox}
          onChangeText={(text) => changeTitle(text)}
          value={title}
        />

        <Text style={styles.text}>Tekst:</Text>
        <TextInput
          multiline
          style={[styles.textBox, { flex: 1 }]}
          onChangeText={(text) => changeText(text)}
          value={text}
        />
      </View>
      <View style={styles.box}>
        <ExamTextComp text={examText}></ExamTextComp>
      </View>
      <View style={styles.box}>
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
