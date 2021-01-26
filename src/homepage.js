import * as React from 'react';
import { Button, Text, View } from 'react-native';

export default function HomePage({ navigation }) {
  return (
    <View>

      <Text>
        <Text>Welkom op deze mooie site</Text>
      </Text>

      <Button
        title="Ga naar login scherm"
        onPress={() => navigation.navigate('BartTest1')}
      />
      <Button
        title="Ga naar examen edit scherm"
        onPress={() => navigation.navigate('Edit exam')}
      />
      <Button
        title="Ga naar examen tekst"
        onPress={() => navigation.navigate('Examen tekst', { tekstid: 1, vraagid: 1 })}
      />

    </View>
  );
}
