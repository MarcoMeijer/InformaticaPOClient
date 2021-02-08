import Editor from "@monaco-editor/react";
import * as React from "react";
import { Text, TextInput, View } from "react-native";
import ExamTextComp from "./Gui/ExamTextComp";
import { styles } from "./Styles";

export default function ExamEditPage() {
  const [title, changeTitle] = React.useState("");
  const [text, changeText] = React.useState("");

  let examText = {
    title: title,
    text: text,
  };

  let code = JSON.stringify(examText, null, 4);

  const codeEditorOptions = {
    selectOnLineNumbers: true,
    readOnly: true,
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
        <Editor
          language="json"
          theme="light"
          value={code}
          options={codeEditorOptions}
        />
      </View>
    </View>
  );
}
