import * as React from "react";
import { Text, View } from "react-native";
import { Tab, TabsHeader } from "./Gui/Tabs";
import Barten4 from "./leerlingstatistieken";
import Barten3 from "./tekstenscherm";

function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>
        Geachte leerling, welkom op jouw online examenteksten oefenen portal.
        Zie rechts de bijbeltekst van vandaag, met dagopening van meneer
        Stamhuis.
      </Text>
    </View>
  );
}

export default function HomePageLeerlingen({ navigation }) {
  return (
    <TabsHeader navigation={navigation}>
      <Tab name="Home" component={HomeScreen} />
      <Tab name="Teksten oefenen" component={Barten3} />
      <Tab name="Statestieken bekijken" component={Barten4} />
    </TabsHeader>
  );
}
