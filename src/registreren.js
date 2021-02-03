import * as React from 'react';
import { useState } from 'react';
import { Button, Text, TextInput, View } from 'react-native';
import fetchData from './server/fetchData';
import { styles } from './Styles';

export default function Barten({navigation}) {
  const [leerlingnummer, zetleerlingnummer] = useState("");
  const [voornaam, zetvoornaam] = useState("");
  const [tussenvoegsel, zettussenvoegsel] = useState("");
  const [achternaam, zetachternaam] = useState("");
  const [klas, zetklas] = useState("");
  const [wachtwoord, zetwachtwoord] = useState("");
  const [wachtwoordherhalen, zetwachtwoordherhalen] = useState("");
  const [error1, zeterror1] = useState("");
  const [error2, zeterror2] = useState("");
  const [leerlingnummercolor, zetleerlingnummercolor] = useState("'grey'");
  const [voornaamcolor, zetvoornaamcolor] = useState("'grey'");
  const [achternaamcolor, zetachternaamcolor] = useState("'grey'");
  const [klascolor, zetklascolor] = useState("'grey'");
  const [wachtwoordcolor, zetwachtwoordcolor] = useState("'grey'");
  const [wachtwoordherhalencolor, zetwachtwoordherhalencolor] = useState("'grey'");
  
  let registreren = () => {
    if (leerlingnummer === "")
      {
        zeterror1("U heeft het leerlingnummer niet ingevuld. \n\n");
        zetleerlingnummercolor("#ff0000");
      }      
    else if (voornaam === "")
      {
        zeterror1("U heeft uw voornaam niet ingevuld. \n\n");
        zetvoornaamcolor("#ff0000");
      }
    else if (achternaam === "")
      {
        zeterror1("U heeft uw achternaam niet ingevuld. \n\n");
        zetachternaamcolor("#ff0000");
      }
    else if (klas === "")
      {
        zeterror1("U heeft uw klas niet ingevuld. \n\n");
        zetklascolor("#ff0000");
      }
    else if (wachtwoord === "")
      {
        zeterror1("U heeft uw wachtwoord niet ingevuld. \n\n");
        zetwachtwoordcolor("#ff0000");
      }
    else if (wachtwoordherhalen === "")
      {
        zeterror1("U heeft uw wachtwoord herhalen niet ingevuld. \n\n");
        zetwachtwoordherhalencolor("#ff0000");
      }
    else
      {              
        fetchData('register', {llnr: leerlingnummer, voornaam: voornaam,tussenvoegsel: tussenvoegsel,achternaam: achternaam,klas: klas,wachtwoord: wachtwoord,wachtwoordherhalen: wachtwoordherhalen})
        .then (naarhome)
        .catch (zeterror_2)
      }
  };

  let naarhome = () => {
    navigation.navigate('Home')
  }

  let zeterror_2 = () => {
    zeterror2("De server is niet online op dit moment. probeer het op een ander moment. \n\n");
  }
  
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Hier kunt u zich registreren! {"\n\n"}</Text>
      <Text style={{ color: '#ff0000' }}>{error1}</Text>
      <Text style={{ color: '#ff0000' }}>{error2}</Text>
      <View style={styles.rowContainer}>
        <Text>Leerlingnummer:          </Text>
        <TextInput
          style= {{height: 25, borderColor: leerlingnummercolor, borderWidth: 1 }}
          onChangeText={nieuweleerlingnummer => {zetleerlingnummer(nieuweleerlingnummer) ; zetleerlingnummercolor("'grey'")}}
          value={leerlingnummer}
        />
      </View>
      <View style={styles.rowContainer}>
        <Text>Voornaam:                    </Text>
        <TextInput
          style= {{height: 25, borderColor: voornaamcolor, borderWidth: 1 }}
          onChangeText= { nieuwevoornaam => {zetvoornaam(nieuwevoornaam) ; zetvoornaamcolor("'grey'")}}
          value={voornaam}          
        />
      </View>
      <View style={styles.rowContainer}>
        <Text>Tussenvoegsel:             </Text>
        <TextInput
          style= {{height: 25, borderColor: 'gray', borderWidth: 1 }}
          onChangeText={nieuwetussenvoegsel => zettussenvoegsel(nieuwetussenvoegsel) }
          value={tussenvoegsel}
        />
      </View>
      <View style={styles.rowContainer}>
        <Text>Achternaam:                 </Text>
        <TextInput
          style= {{height: 25, borderColor: achternaamcolor, borderWidth: 1 }}
          onChangeText={nieuweachternaam => {zetachternaam(nieuweachternaam) ; zetachternaamcolor("'grey'")}}
          value={achternaam}
        />
      </View>
      <View style={styles.rowContainer}>
        <Text>Klas:                              </Text>
        <TextInput
          style= {{height: 25, borderColor: klascolor, borderWidth: 1 }}
          onChangeText={nieuweklas => {zetklas(nieuweklas) ; zetklascolor("'grey'")}}
          value={klas}
        />
      </View>
      <View style={styles.rowContainer}>
        <Text>Wachtwoord:                </Text>
        <TextInput
          style= {{height: 25, borderColor: wachtwoordcolor, borderWidth: 1 }}
          onChangeText={nieuwewachtwoord => {zetwachtwoord(nieuwewachtwoord) ; zetwachtwoordcolor("'grey'")}}
          value={wachtwoord}
  	      secureTextEntry={true}
        />
      </View>
      <View style={styles.rowContainer}>
        <Text>Wachtwoord herhalen: </Text>
        <TextInput
          style= {{height: 25, borderColor: wachtwoordherhalencolor, borderWidth: 1 }}
          onChangeText={nieuwewachtwoordherhalen => {zetwachtwoordherhalen(nieuwewachtwoordherhalen) ; zetwachtwoordherhalencolor("'grey'")}}
          value={wachtwoordherhalen}
          secureTextEntry={true}
        />
      </View>
      <View>
        <Text>{"\n"}</Text>
        <Button
          title="Registreren"
          onPress={registreren} 
        />
        <Text>{"\n"}</Text>
        <Button
          title = "Heeft u al een account? Log dan in!"
          onPress={() => navigation.navigate('Login pagina')}
        />
      </View>
    </View>
  );
}