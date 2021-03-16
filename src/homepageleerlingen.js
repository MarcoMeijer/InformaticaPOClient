import * as React from "react";
import Text from "./Gui/Text";
import { Tab, TabsHeader } from "./Gui/Tabs";
import Jacket from "./Gui/Jacket";
import LeerlingenStatistieken from "./leerlingstatistieken";
import TekstenScherm from "./tekstenscherm";
import { useTheme } from "@react-navigation/native";

function HomeScreen() {
  const { colors } = useTheme();

  return (
    <Jacket kleur={colors.achtergrondKleur}>
      <Text style={{ margin: 30 }}>
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
