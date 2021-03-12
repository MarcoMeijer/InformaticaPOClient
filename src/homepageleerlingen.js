import * as React from "react";
import { Text, View } from "react-native";
import { Tab, TabsHeader } from "./Gui/Tabs";
import Jacket from "./Gui/Jacket";
import LeerlingenStatistieken from "./leerlingstatistieken";
import TekstenScherm from "./tekstenscherm";

function HomeScreen() {
  return (
    <Jacket>
      <Text
        style={{
          margin: 35
        }}
      >
        <b>
          Geachte leerling, welkom op jouw online examenteksten portal. Hier kun
          je teksten oefenen en je resultaten bekijken, veel succes!
        </b>
      </Text>
    </Jacket>
  );
}

export default function HomePageLeerlingen({ navigation }) {
  return (
    <TabsHeader navigation={navigation}>
      <Tab name="Home" component={HomeScreen} />
      <Tab name="Teksten oefenen" component={TekstenScherm} />
      <Tab name="Statestieken bekijken" component={LeerlingenStatistieken} />
    </TabsHeader>
  );
}
