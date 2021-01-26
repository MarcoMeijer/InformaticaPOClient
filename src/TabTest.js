import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

function HomeScreen() {
  return (
    <Text>Geachte leerling, welkom op jouw online examenteksten oefenen portal. Klik hieronder om direct aan de slag te gaan. Zie rechts de bijbeltekst van vandaag, met dagopening van meneer Stamhuis.</Text>
  );
}

function TekstenOefenen() {
  return (
    <Text>Teksten blablabla nog meer teksten</Text>
  );
}

const Tabs = createBottomTabNavigator();

export default function TabTest() {
  return (
    <Tabs.Navigator>
      <Tabs.Screen name="Home" component={HomeScreen}/>
      <Tabs.Screen name="TekstenOefenen" component={TekstenOefenen} />
    </Tabs.Navigator>
  );
}