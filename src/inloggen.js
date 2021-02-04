import * as React from 'react';
import { useState } from 'react';
import { Button, Text, TextInput, TouchableOpacity, View } from 'react-native';
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
  const [fahnekleur, zetfahnekleur] = useState("#ffffff");

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
        .catch(() => { zeterror3("De server is niet online op dit moment. probeer het op een ander moment. \n\n") })
    }
  };

  let naarhome = () => {
    navigation.navigate('Leerlingen home pagina')
  }

  let veranderfahne = () => {
    if (fahnekleur === "#ffffff") {
      zetfahnekleur("#171717")
    } else if (fahnekleur === "#ffeb33") {
      zetfahnekleur("#171717")
    } else if (fahnekleur === "#171717") {
      zetfahnekleur("#d40404")
    } else {
      zetfahnekleur("#ffeb33")
    }
  }

  let veranderterug = () => {
    zetfahnekleur("#ffffff")
  }

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: fahnekleur }}>
      <Text>
        <TouchableOpacity
          onPress={veranderfahne}
        >
          <Text>Hier kunt u</Text>
        </TouchableOpacity>
        {" "}
        <TouchableOpacity
          onPress={veranderterug}
        >
          <Text>inloggen! {"\n\n"}</Text>
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
  );
}