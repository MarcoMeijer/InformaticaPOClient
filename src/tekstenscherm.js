import * as React from 'react';
import { useState } from 'react';
import { Button, Text, TouchableOpacity, View } from 'react-native';
import useFahneKleur from './Hooks/FahneKleur';

export default function Barten3({ navigation }) {
  const [fahnekleur, veranderfahne, veranderterug] = useFahneKleur();
  const [teksten, zetTeksten] = useState([]);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: fahnekleur }}>
      <Text>
        <TouchableOpacity
          onPress={veranderfahne}
        >
          Hier kunt u alle teksten
            </TouchableOpacity>
        {" "}
        <TouchableOpacity
          onPress={veranderterug}
        >
          bekijken! {"\n\n"}
        </TouchableOpacity>
      </Text>
      <Text>{"\n"}</Text>
      <Button
        title="Hier kunt u all teksten bekijken"
        onPress={() => navigation.navigate('registreren')}
      />
    </View>
  );
}