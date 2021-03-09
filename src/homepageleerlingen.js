import * as React from "react";
import { Text, View } from "react-native";
import { Tab, TabsHeader } from "./Gui/Tabs";
import Barten4 from "./leerlingstatistieken";
import Barten3 from "./tekstenscherm";

function HomeScreen() {
  return (
    <View
      style={{
        width: 450,
        height: 800,
        alignSelf: "center",
        backgroundColor: "powderblue",
        alignItems: "center",
        justifyContent: "center"
      }}
    >
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
