import { useTheme } from "@react-navigation/native";
import * as React from "react";
import fetchData from "../../Database/fetchData";
import Enter from "../../Gui/Basic/Enter";
import Text from "../../Gui/Basic/Text";
import TekstenLijst from "../../Gui/ExamenTekst/TekstenLijst";
import Jacket from "../../Gui/Pagina-layout/Jacket";
import { Tab, TabsHeader } from "../../Gui/Pagina-layout/Tabs";
import LeerlingGegevensPagina from "./LeerlingGegevens/LeerlingGegevens";
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

function ExamensAanpassenScherm({ navigation }) {
  const {addSucces} = useTheme();

  return (
    <Jacket>
      <Text>
        <b>Hier kan je alle examens aanpassen:</b>
      </Text>
      <Enter />
      <TekstenLijst
        onPress={(tekstid) => {
          navigation.navigate("Tekst aanpassen pagina", {
            tekstid: tekstid
          });
        }}
        onEditExamen={() => {}}
        onVerwijderExamen={() => {}}
        onTekstToevoegen={(examennaam) => {
          return fetchData("inserttekst", {examennaam: examennaam, tekstinhoud: `{"text":"","title":""}`, teksttitel: "Voer hier de titel in.", tekstniveau: 1})
            .then(() => {
              addSucces("Tekst is succesvol toegevoegt.");
            });
        }}
        onTekstVerwijder={(tekstid) => {
          return fetchData("deletetekst", {tekstid: tekstid})
            .then(() => {
              addSucces("Tekst is succesvol verwijdert.")
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
      <Tab name="Examens aanpassen" component={ExamensAanpassenScherm} />
      <Tab name="Edit vraag soorten" component={EditVraagSoortenPagina} />
      <Tab name="Leerling statistieken" component={LeerlingGegevensPagina} />
    </TabsHeader>
  );
}
