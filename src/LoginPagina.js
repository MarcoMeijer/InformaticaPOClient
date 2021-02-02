import * as React from 'react';
import { Text, TextInput, View, Button } from 'react-native';
import { styles } from './Styles';

export default function LoginPagina() {
  const [llnr, changellnr] = React.useState('');
  const [password, changepassword] = React.useState('');
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={styles.text}>
        leerlingnummer:
        </Text>

      <TextInput
        style={styles.barten}
        onChangeText={text => changellnr(text)}
        value={llnr}
      />
      <Text style={styles.text}>
        wachtwoord:
       </Text>

      <TextInput
        style={styles.barten}
        onChangeText={text => changepassword(text)}
        value={password}
        secureTextEntry={true}
//hide view button misschien
      />
      <View style={styles.loginbutton}>
        <Button
          title="Log in"
          onPress={() => { }}
        />
      </View>
    </View>
  );
}
