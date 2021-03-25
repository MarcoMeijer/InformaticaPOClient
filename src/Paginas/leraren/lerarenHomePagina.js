import * as React from "react";
import Enter from "../../Gui/Basic/Enter";
import Text from "../../Gui/Basic/Text";
import TekstenLijst from "../../Gui/ExamenTekst/TekstenLijst";
import Jacket from "../../Gui/Pagina-layout/Jacket";
import { Tab, TabsHeader } from "../../Gui/Pagina-layout/Tabs";
import LeerlingGegevensPagina from "./LeerlingGegevens/LeerlingGegevens";
import TekstMakenPagina from "./TekstMaken/TekstMakenPagina";
import EditVraagSoortenPagina from "./Vragen/EditVraagSoorten";

function LerarenHome() {
  return (
    <Jacket>
      <Text>
        <b>Leraren home pagina</b>
      </Text>
    </Jacket>
  );
}

function TekstAanpassenScherm({ navigation }) {
  return (
    <Jacket>
      <Text>
        <b>Selecteer welke tekst je wilt aanpassen:</b>
      </Text>
      <Enter />
      <TekstenLijst
        onPress={(tekstid) => {
          navigation.navigate("Tekst aanpassen pagina", {
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
      <Tab name="Tekst aanpassen" component={TekstAanpassenScherm} />
      <Tab name="Edit vraag soorten" component={EditVraagSoortenPagina} />
      <Tab name="Leerling statistieken" component={LeerlingGegevensPagina} />
    </TabsHeader>
  );
}
