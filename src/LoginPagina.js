import * as React from 'react';
import { Text, TextInput, View } from 'react-native';
import { styles } from './Styles';

export default function LoginPagina() {
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
