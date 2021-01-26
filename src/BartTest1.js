import Editor from "@monaco-editor/react";
import * as React from 'react';
import { Button, Text, TextInput, View } from 'react-native';
import ExamTextComp from './Gui/ExamTextComp';
import { styles } from './Styles';

export default function BartTest1() {
  const [llnr, changellnr] = React.useState('');
  const [password, changepassword] = React.useState('');
  return (
    <View>
      <Text style={styles.text}>
          leerlingnummer:
        </Text>
    
        <TextInput
          style={styles.textBox}
          onChangeText={text => changellnr(text)}
          value={llnr}
        />
       <Text style={styles.text}>
          wachtwoord:
       </Text>

        <TextInput
        style={styles.textbox}
        onChangeText={text => changepassword(text)}
        value={password}
        secureTextEntry={true}
        />
    </View>
  );
}
