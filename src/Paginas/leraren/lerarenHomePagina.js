import * as React from "react";
import Text from "../../Gui/Basic/Text";
import Jacket from "../../Gui/Pagina-layout/Jacket";
import { Tab, TabsHeader } from "../../Gui/Pagina-layout/Tabs";
import ExamensAanpassenPagina from "./Examens/ExamensAanpassen";
import LeerlingGegevensPagina from "./LeerlingGegevens/LeerlingGegevens";
import EditVraagSoortenPagina from "./VraagSoorten/EditVraagSoorten";

function LerarenHome() {
  return (
    <Jacket>
      <Text>
        <b>Leraren home pagina</b>
      </Text>
    </Jacket>
  );
}

export default function LerarenHomePagina({ navigation }) {
  return (
    <TabsHeader navigation={navigation}>
      <Tab name="Home" component={LerarenHome} />
      <Tab name="Examens aanpassen" component={ExamensAanpassenPagina} />
      <Tab name="Edit vraag soorten" component={EditVraagSoortenPagina} />
      <Tab name="Leerling statistieken" component={LeerlingGegevensPagina} />
    </TabsHeader>
  );
}
