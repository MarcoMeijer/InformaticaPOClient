import { useTheme } from "@react-navigation/native";
import * as React from "react";
import FouwDoos from "../../Gui/Basic/FouwDoos";
import Text from "../../Gui/Basic/Text";
import ExamenTekstSelecteerder from "../../Gui/ExamenTekst/ExamenTekstSelecteerder";
import Jacket from "../../Gui/Pagina-layout/Jacket";
import { Tab, TabsHeader } from "../../Gui/Pagina-layout/Tabs";
import EigenGegevens from "./EigenGegevens";
import LeerlingStatistiekPagina from "./leerlingStatistiekPagina";
import TekstKiezenPagina from "./TekstKiezenPagina";

function HomeScreen({ navigation }) {
  return (
    <Jacket>
      <Text style={{ margin: 30 }}>
        <b>
          Geachte leerling, welkom op jouw online examenteksten portal. Hier kun
          je teksten oefenen en je resultaten bekijken, veel succes!
          <br />
          Als je nieuw bent op deze site wordt het aanbevolen om te beginnen met
          één van de oriëntatie toestsen.
        </b>
      </Text>
      <FouwDoos
        style={{ alignSelf: "stretch" }}
        titel="Aanbevolen teksten"
        open={true}
      >
        <ExamenTekstSelecteerder
          onPress={(tekstid) => {
            navigation.navigate("Examen tekst", {
              tekstid: tekstid
            });
          }}
        />
      </FouwDoos>
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
