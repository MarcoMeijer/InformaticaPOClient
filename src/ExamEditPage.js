import Editor from "@monaco-editor/react";
import * as React from 'react';
import { Button, Text, TextInput, View } from 'react-native';
import ExamTextComp from './Gui/ExamTextComp';
import { styles } from './Styles';

export default function ExamEditPage({ navigation }) {
  const [title, changeTitle] = React.useState('');
  const [text, changeText] = React.useState('');

  let examText = {
    title: title,
    text: text
  };

  let code = JSON.stringify(examText, null, 4);

  const codeEditorOptions = {
    selectOnLineNumbers: true,
    readOnly: true
  };

  return (
    <View style={styles.rowContainer}>
      <View style={styles.box}>
        <Text style={styles.text}>
          Titel:
        </Text>
        <TextInput
          style={styles.textBox}
          onChangeText={text => changeTitle(text)}
          value={title}
        />

        <Text style={styles.text}>
          Tekst:
        </Text>
        <TextInput
          multiline
          numberOfLines={30}
          style={styles.textBox}
          onChangeText={text => changeText(text)}
          value={text}
        />
        <Button
          title="Terug"
          onPress={() => navigation.goBack()}
        />
      </View>
      <View style={styles.box}>
        <ExamTextComp text={examText}>
        </ExamTextComp>
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
