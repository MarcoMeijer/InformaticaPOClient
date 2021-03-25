import { useTheme } from "@react-navigation/native";
import * as React from "react";
import Text from "../../Gui/Basic/Text";
import Jacket from "../../Gui/Pagina-layout/Jacket";
import { Tab, TabsHeader } from "../../Gui/Pagina-layout/Tabs";
import EigenGegevens from "./EigenGegevens";
import LeerlingStatistiekPagina from "./leerlingStatistiekPagina";
import TekstKiezenPagina from "./TekstKiezenPagina";

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
      <Tab name="Teksten" component={TekstKiezenPagina} />
      <Tab name="Statestieken" component={LeerlingStatistiekPagina} />
      <Tab name="gegevens" component={EigenGegevens} />
    </TabsHeader>
  );
}
