import * as React from 'react';
import { useEffect, useState } from 'react';
import { Button, Text, TouchableOpacity, View } from 'react-native';
import useFahneKleur from './Hooks/FahneKleur';
import fetchData from './server/fetchData';

export default function Barten3({ navigation }) {
  const [fahnekleur, veranderfahne, veranderterug] = useFahneKleur();
  const [teksten, zetTeksten] = useState([]);

  useEffect(() => {
    if (teksten.length === 0) {
      fetchData('teksten')
        .then(data => {
          zetTeksten(data.map(tekst => {
            let nieuweTekst = JSON.parse(tekst.tekstinhoud);
            nieuweTekst.tekstid = tekst.tekstid;
            return nieuweTekst;
          }));
        });
    }
  }, [teksten]);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: fahnekleur }}>
      <Text>
        <TouchableOpacity
          onPress={veranderfahne}
        >
          <Text>Hier kunt u alle teksten</Text>
        </TouchableOpacity>
        {" "}
        <TouchableOpacity
          onPress={veranderterug}
        >
          <Text>bekijken! {"\n\n"}</Text>
        </TouchableOpacity>
      </Text>
      {
        teksten.map((tekst, index) => {
          return (
            <Button
              title={tekst.title}
              onPress={() => {
                navigation.navigate('Examen tekst', { tekstid: tekst.tekstid });
              }}
            />
          )
        })
      }
    </View>
  );
}