import * as React from 'react';
import { useState } from 'react';
import { Button, Image, Text, TextInput, TouchableOpacity, View } from 'react-native';
import logoPng from './afbeeldingen/logo.png';
import useFahneKleur from './Hooks/FahneKleur';
import fetchData from './server/fetchData';
import { styles } from './Styles';

export default function Barten2({ navigation }) {
  const [leerlingnummer, zetleerlingnummer] = useState("");
  const [wachtwoord, zetwachtwoord] = useState("");
  const [error1, zeterror1] = useState("");
  const [error2, zeterror2] = useState("");
  const [error3, zeterror3] = useState("");
  const [leerlingnummercolor, zetleerlingnummercolor] = useState("grey");
  const [wachtwoordcolor, zetwachtwoordcolor] = useState("grey");
  const [fahnekleur, veranderfahne, veranderterug] = useFahneKleur();

  let inloggen = () => {
    if (leerlingnummer === "") {
      zeterror1("U heeft het leerlingnummer niet ingevuld. \n\n");
      zetleerlingnummercolor("#ff0000");
    }
    else if (wachtwoord === "") {
      zeterror1("U heeft uw wachtwoord niet ingevuld. \n\n");
      zetwachtwoordcolor("#ff0000");
    }
    else {
      fetchData('login', { llnr: leerlingnummer, wachtwoord: wachtwoord })
        .then(data => {
          if (data.length === 0) {
            zeterror2("Uw wachtwoord of gebruikersnaam is niet juist. \n\n")
          } else {
            naarhome()
          }
        })
        .catch(() => { zeterror3("De server is niet online op dit moment. \n\n") })
    }
  };

  let naarhome = () => {
    navigation.navigate('Leerlingen home pagina')
  }

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: fahnekleur }}>
      <View style={{width: 450, height: 800 , backgroundColor: 'powderblue', alignItems: 'center', justifyContent: 'center'}}>
        <Image
          style={{width: 169, height: 74}}
          source={logoPng}
        />
        <Text style={{ marginBottom: 20, fontSize: 25 }}>
          <TouchableOpacity
            onPress={veranderfahne}
          >
            <Text>Hier kunt u</Text>
          </TouchableOpacity>
          {" "}
          <TouchableOpacity
            onPress={veranderterug}
          >
            <Text>inloggen!</Text>
          </TouchableOpacity>
        </Text>
        <Text style={{ color: '#ff0000' }}>{error1}</Text>
        <Text style={{ color: '#ff0000' }}>{error2}</Text>
        <Text style={{ color: '#ff0000' }}>{error3}</Text>
        <View style={styles.rowContainer}>
          <Text>Leerlingnummer:          </Text>
          <TextInput
            style={{ height: 25, borderColor: leerlingnummercolor, borderWidth: 1, backgroundColor: '#ffffff' }}
            onChangeText={nieuweleerlingnummer => { zetleerlingnummer(nieuweleerlingnummer); zetleerlingnummercolor("'grey'"); }}
            value={leerlingnummer}
          />
        </View>
        <View style={styles.rowContainer}>
          <Text>Wachtwoord:                </Text>
          <TextInput
            style={{ height: 25, borderColor: wachtwoordcolor, borderWidth: 1, backgroundColor: '#ffffff' }}
            onChangeText={nieuwewachtwoord => { zetwachtwoord(nieuwewachtwoord); zetwachtwoordcolor("'grey'") }}
            value={wachtwoord}
            secureTextEntry={true}
          />
        </View>
        <View>
          <Text>{"\n"}</Text>
          <Button
            title="Inloggen"
            onPress={inloggen}
          />
          <Text>{"\n"}</Text>
          <Button
            title="Heeft u nog geen account? Maak dan een account!"
            onPress={() => navigation.navigate('registreren')}
          />
        </View>
      </View>
    </View>
  );
}