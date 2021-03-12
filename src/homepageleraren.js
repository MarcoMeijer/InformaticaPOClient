import * as React from "react";
import { Text, View } from "react-native";
import ExamEditPage from "./ExamEditPage";
import TekstenLijst from "./Gui/TekstenLijst";
import { Tab, TabsHeader } from "./Gui/Tabs";
import Jacket from "./Gui/Jacket";
import Enter from "./Gui/Enter";

function HomeScreen() {
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

export default function HomePageLeraren({ navigation }) {
  return (
    <TabsHeader navigation={navigation}>
      <Tab name="Home" component={HomeScreen} />
      <Tab name="Tekst maken" component={ExamEditPage} />
      <Tab name="Vraag maken" component={VraagMakenScherm} />
    </TabsHeader>
  );
}
