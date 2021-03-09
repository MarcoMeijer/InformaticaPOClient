import * as React from "react";
import { Text, View } from "react-native";
import ExamEditPage from "./ExamEditPage";
import TekstenLijst from "./Gui/TekstenLijst";
import { Tab, TabsHeader } from "./Gui/Tabs";

function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Leraren home pagina</Text>
    </View>
  );
}

function VraagMakenScherm({ navigation }) {
  return (
    <View>
      <Text>Selecteer aan welke tekst je een vraag wilt toevoegen: </Text>
      <TekstenLijst
        onPress={(tekstid) => {
          navigation.navigate("Vraag maken", {
            tekstid: tekstid
          });
        }}
      />
    </View>
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
