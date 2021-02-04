import * as React from 'react';
import { Text, View } from 'react-native';
import { Tab, TabsHeader } from './Gui/Tabs';
import fetchData from './server/fetchData';
import Barten3 from './tekstenscherm';

function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Geachte leerling, welkom op jouw online examenteksten oefenen portal. Zie rechts de bijbeltekst van vandaag, met dagopening van meneer Stamhuis.</Text>
    </View>
  );
}

function TekstenOefenen() {
  const [resultaat, zetResultaat] = React.useState('')
  fetchData("teksten")
    .then(data => {
      if (data.length === 0) {
        zetResultaat("fail");
      } else {
        zetResultaat(JSON.stringify(data) +
          "teksten geladen");

      }
    })
    .catch(error => {
      zetResultaat("timeout")
    });
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Status van teksten laden:</Text>
      <Text>{resultaat}</Text>
    </View>
  );
}

export default function HomePageLeerlingen({ navigation }) {
  return (
    <TabsHeader navigation={navigation}>
      <Tab name="Home" component={HomeScreen} />
      <Tab name="Teksten oefenen" component={TekstenOefenen} />
      <Tab name="Teksten oefenen (bart)" component={Barten3} />
    </TabsHeader>
  );
}