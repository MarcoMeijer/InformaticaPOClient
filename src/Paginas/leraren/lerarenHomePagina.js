import * as React from "react";
import { Tab, TabsHeader } from "../../Gui/Pagina-layout/Tabs";
import ExamensAanpassenPagina from "./Examens/ExamensAanpassen";
import LeerlingGegevensPagina from "./LeerlingGegevens/LeerlingGegevens";
import VraagSoortenAanpassenPagina from "./VraagSoorten/EditVraagSoorten";

export default function LerarenHomePagina({ navigation }) {
  return (
    <TabsHeader navigation={navigation}>
      <Tab name="Examens aanpassen" component={ExamensAanpassenPagina} />
      <Tab
        name="Vraagsoorten aanpassen"
        component={VraagSoortenAanpassenPagina}
      />
      <Tab name="Leerlingen" component={LeerlingGegevensPagina} />
    </TabsHeader>
  );
}
