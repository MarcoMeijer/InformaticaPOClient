import * as React from 'react';
import { Text, TextInput, View, Button } from 'react-native';
import { styles } from './Styles';
import fetchData from './server/fetchData';

export default function LoginPagina({ navigation }) {
  const [llnr, changellnr] = React.useState('');
  const [password, changepassword] = React.useState('');
  const [result, setResult] = React.useState(undefined);

  let login = () => {
    setResult("wachten");
    fetchData("login", { leerlingnummer: llnr, wachtwoord: password })
      .then(data => {
        if (data.length === 0) {
          setResult("fail");
        } else {
          setResult("success");
        }
      });
  }
  return (
    <View style={styles.loginmain}>
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
          onPress={login}
        />
      </View>
      <View style={styles.loginbutton2}>
        <Button
          title="Maak hier een account aan"
          onPress={() => navigation.navigate('registreren')}
        />
      </View>
    </View>
  );
}
