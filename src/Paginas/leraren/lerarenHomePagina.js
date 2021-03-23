import * as React from "react";
import Enter from "../../Gui/Basic/Enter";
import Text from "../../Gui/Basic/Text";
import TekstenLijst from "../../Gui/ExamenTekst/TekstenLijst";
import Jacket from "../../Gui/Pagina-layout/Jacket";
import { Tab, TabsHeader } from "../../Gui/Pagina-layout/Tabs";
import TekstMakenPagina from "./TekstMakenPagina";
import LeerlingGegevensPagina from "./LeerlingGegevens";

function LerarenHome() {
  return (
    <Jacket>
      <Text>
        <b>Leraren home pagina</b>
      </Text>
    </Jacket>
  );
}

function VraagMakenScherm({ navigation }) {
  return (
    <Jacket>
      <Text>
        <b>Selecteer aan welke tekst je een vraag wilt toevoegen:</b>
      </Text>
      <Enter />
      <TekstenLijst
        onPress={(tekstid) => {
          navigation.navigate("Vraag maken", {
            tekstid: tekstid
          });
        }}
      />
    </Jacket>
  );
}

export default function LerarenHomePagina({ navigation }) {
  return (
    <TabsHeader navigation={navigation}>
      <Tab name="Home" component={LerarenHome} />
      <Tab name="Tekst maken" component={TekstMakenPagina} />
      <Tab name="Vraag maken" component={VraagMakenScherm} />
      <Tab name="Leerling statistieken" component={LeerlingGegevensPagina} />
    </TabsHeader>
  );
}
