import { useTheme } from "@react-navigation/native";
import * as React from "react";
import { useEffect, useState } from "react";
import { ActivityIndicator, View } from "react-native";
import fetchData from "../../../Database/fetchData";
import Button from "../../../Gui/Basic/Button";
import Doos from "../../../Gui/Basic/Doos";
import ExamenTekst from "../../../Gui/ExamenTekst/ExamenTekst";
import Pagina from "../../../Gui/Pagina-layout/Pagina";
import VragenAanpassen from "../Vragen/VragenAanpassen";
import ExamenTekstEditor from "./ExamenTekstEditor";

export default function TekstAanpassenPagina({ navigation, route }) {
  const [examText, zetExamText] = useState(undefined);
  const { addSucces } = useTheme();
  const { tekstid } = route.params;

  const pasTekstAan = () => {
    fetchData("updatetekst", {
      tekstid: tekstid,
      teksttitel: examText.title,
      tekstinhoud: JSON.stringify(examText),
      tekstniveau: 1
    })
      .then(() => {
        addSucces("De tekst is succesvol aangepast!");
        navigation.goBack();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    if (examText === undefined) {
      fetchData("tekst", { tekstid: tekstid }).then((data) => {
        zetExamText(JSON.parse(data.tekstinhoud));
      });
    }
  }, [examText, tekstid]);

  return (
    <Pagina navigation={navigation}>
      <Doos>
        {examText === undefined ? (
          <ActivityIndicator />
        ) : (
          <View style={{ flex: 1 }}>
            <ExamenTekstEditor
              examenTekst={examText}
              zetExamenTekst={zetExamText}
            />
            <VragenAanpassen tekstid={tekstid} navigation={navigation} />
            <Button
              style={{ margin: 3 }}
              title="Sla tekst op en ga terug."
              onPress={pasTekstAan}
            />
          </View>
        )}
      </Doos>
      <Doos>
        {examText === undefined ? (
          <ActivityIndicator />
        ) : (
          <ExamenTekst text={examText} />
        )}
      </Doos>
    </Pagina>
  );
}
