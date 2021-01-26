import * as React from 'react';
import { TextInput ,View, Text } from 'react-native';
import { styles } from './Styles';

export default function Barten() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Hier kunt u zich registreren. {"\n\n"}</Text>
      <View style={styles.rowContainer}>
        <Text>Leerlingnummer:          </Text>
        <TextInput
          style={{ height: 25, borderColor: 'gray', borderWidth: 1 }}
        />
      </View>
      <View style={styles.rowContainer}>
        <Text>Voornaam:                    </Text>
        <TextInput
          style={{ height: 25, borderColor: 'gray', borderWidth: 1 }}
        />
      </View>
      <View style={styles.rowContainer}>
        <Text>Tussenvoegsel:             </Text>
        <TextInput
          style={{ height: 25, borderColor: 'gray', borderWidth: 1 }}
        />
      </View>
      <View style={styles.rowContainer}>
        <Text>Achternaam:                 </Text>
        <TextInput
          style={{ height: 25, borderColor: 'gray', borderWidth: 1 }}
        />
      </View>
      <View style={styles.rowContainer}>
        <Text>Klas:                              </Text>
        <TextInput
          style={{ height: 25, borderColor: 'gray', borderWidth: 1 }}
        />
      </View>
      <View style={styles.rowContainer}>
        <Text>Wachtwoord:                </Text>
        <TextInput
          style={{ height: 25, borderColor: 'gray', borderWidth: 1 }}
        />
      </View>
      <View style={styles.rowContainer}>
        <Text>Wachtwoord herhalen: </Text>
        <TextInput
          style={{ height: 25, borderColor: 'gray', borderWidth: 1 }}
        />
      </View>
    </View>
  );
}