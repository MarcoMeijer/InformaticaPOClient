import * as React from 'react';
import { useState } from 'react';
import { Text, View, Button, TouchableOpacity } from 'react-native';
import { styles } from './Styles';
import fetchData from './server/fetchData';

export default function Barten3({ navigation }) {
  const [fahnekleur, zetfahnekleur] = useState("#ffffff");

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