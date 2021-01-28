import * as React from 'react';
import { Text, View } from 'react-native';
import { Tab, TabsHeader } from './Gui/Tabs';

function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Geachte leerling, welkom op jouw online examenteksten oefenen portal. Zie rechts de bijbeltekst van vandaag, met dagopening van meneer Stamhuis.</Text>
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

export default function HomePageLeerlingen() {
  return (
    <TabsHeader>
      <Tab name="Home" component={HomeScreen} />
      <Tab name="TekstenOefenen" component={TekstenOefenen} />
    </TabsHeader>
  );
}