import * as React from 'react';
import { Button, View, Text, Alert } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
 
function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Geachte leerling, welkom op jouw online examenteksten oefenen portal. Klik hieronder om direct aan de slag te gaan. Zie rechts de bijbeltekst van vandaag, met dagopening van meneer Stamhuis.</Text>
      <Button
        title="Teksten gaan oefenen"
        onPress={() => navigation.navigate('TekstenOefenen')}
    />
    </View>
  );
}

function TekstenOefenen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Teksten komen hier</Text>
    </View>
  );
}

const Stack = createStackNavigator();

export default function HomePageLeerlingen() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Overview' }}/>
      <Stack.Screen name="TekstenOefenen" component={TekstenOefenen} />
    </Stack.Navigator>
  );
}