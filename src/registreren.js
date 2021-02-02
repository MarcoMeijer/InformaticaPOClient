import * as React from 'react';
import {useState} from 'react';
import { Text, TextInput, View, Button } from 'react-native';
import { styles } from './Styles';
import fetchData from './server/fetchData';

export default function Barten() {
  const [leerlingnummer, zetleerlingnummer] = useState("");
  const [voornaam, zetvoornaam] = useState("");
  const [tussenvoegsel, zettussenvoegsel] = useState("");
  const [achternaam, zetachternaam] = useState("");
  const [klas, zetklas] = useState("");
  const [wachtwoord, zetwachtwoord] = useState("");
  const [wachtwoordherhalen, zetwachtwoordherhalen] = useState("");
  const [error1, zeterror1] = useState("");
  
  let registreren = () => {
    if (leerlingnummer == "")
      {
        zeterror1("U heeft het leerlingnummer niet ingevuld.");
      }
    fetchData('register', {leerlingnummer: leerlingnummer, voornaam: voornaam,tussenvoegsel: tussenvoegsel,achternaam: achternaam,klas: klas,wachtwoord: wachtwoord,wachtwoordherhalen: wachtwoordherhalen});
  };
  
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Hier kunt u zich registreren. {"\n\n"}</Text>
      <Text>{error1}</Text>
      <View style={styles.rowContainer}>
        <Text>Leerlingnummer:          </Text>
        <TextInput
          style= {styles.barten}
          onChangeText={nieuweleerlingnummer => zetleerlingnummer(nieuweleerlingnummer)}
          value={leerlingnummer}
        />
      </View>
      <View style={styles.rowContainer}>
        <Text>Voornaam:                    </Text>
        <TextInput
          style= {styles.barten}
          onChangeText={nieuwevoornaam => zetvoornaam(nieuwevoornaam)}
          value={voornaam}          
        />
      </View>
      <View style={styles.rowContainer}>
        <Text>Tussenvoegsel:             </Text>
        <TextInput
          style= {styles.barten}
          onChangeText={nieuwetussenvoegsel => zettussenvoegsel(nieuwetussenvoegsel)}
          value={tussenvoegsel}
        />
      </View>
      <View style={styles.rowContainer}>
        <Text>Achternaam:                 </Text>
        <TextInput
          style= {styles.barten}
          onChangeText={nieuweachternaam => zetachternaam(nieuweachternaam)}
          value={achternaam}
        />
      </View>
      <View style={styles.rowContainer}>
        <Text>Klas:                              </Text>
        <TextInput
          style= {styles.barten}
          onChangeText={nieuweklas => zetklas(nieuweklas)}
          value={klas}
        />
      </View>
      <View style={styles.rowContainer}>
        <Text>Wachtwoord:                </Text>
        <TextInput
          style= {styles.barten}
          onChangeText={nieuwewachtwoord => zetwachtwoord(nieuwewachtwoord)}
          value={wachtwoord}
  	      secureTextEntry={true}
        />
      </View>
      <View style={styles.rowContainer}>
        <Text>Wachtwoord herhalen: </Text>
        <TextInput
          style= {styles.barten}
          onChangeText={nieuwewachtwoordherhalen => zetwachtwoordherhalen(nieuwewachtwoordherhalen)}
          value={wachtwoordherhalen}
          secureTextEntry={true}
        />
      </View>
      <View>
        <Button
          title="Registreren"
          onPress={registreren} 
        />
      </View>
    </View>
  );
}