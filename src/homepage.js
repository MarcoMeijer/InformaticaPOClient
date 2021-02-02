import * as React from 'react';
import { Button, Text, View } from 'react-native';

export default function HomePage({ navigation }) {
  return (
    <View>

      <Text>
        <Text>Welkom op deze mooie site</Text>
      </Text>

      <Button
        title="Ga naar login pagina"
        onPress={() => navigation.navigate('Login pagina')}
      />
      <Button
        title="Ga naar examen tekst"
        onPress={() => navigation.navigate('Examen tekst', { tekstid: 1, vraagid: 1 })}
      />
      <Button
        title="Ga naar leerlingen home paginga"
        onPress={() => navigation.navigate('Leerlingen home pagina')}
      />
      <Button
        title="Ga naar leraren home paginga"
        onPress={() => navigation.navigate('Leraren home pagina')}
      />
      <Button
        title="registreren"
        onPress={() => navigation.navigate('registreren')}
      />
    </View>
  );
}
