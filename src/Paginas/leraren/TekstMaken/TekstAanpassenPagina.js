import { useTheme } from "@react-navigation/native";
import * as React from "react";
import { useState, useEffect } from "react";
import { ActivityIndicator, View } from "react-native";
import fetchData from "../../../Database/fetchData";
import Button from "../../../Gui/Basic/Button";
import Doos from "../../../Gui/Basic/Doos";
import ExamenTekst from "../../../Gui/ExamenTekst/ExamenTekst";
import Pagina from "../../../Gui/Pagina-layout/Pagina";
import ExamenTekstEditor from "./ExamenTekstEditor";
import TekstEditorTips from "./TekstEditorTips";

export default function TekstAanpassenPagina({ navigation, route }) {
  const [examText, zetExamText] = useState(undefined);
  const { addSucces } = useTheme();
  const { tekstid } = route.params;

  const voegTekstToe = () => {
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
    <Pagina>
      <Doos>
        {examText === undefined ? (
          <ActivityIndicator />
        ) : (
          [
            <ExamenTekstEditor
              examenTekst={examText}
              zetExamenTekst={zetExamText}
            />,
            <Button
              style={{ margin: 3 }}
              title="Sla tekst op en ga terug."
              onPress={voegTekstToe}
            />
          ]
        )}
      </Doos>
      <Doos>
        {examText === undefined ? (
          <ActivityIndicator />
        ) : (
          <ExamenTekst text={examText} />
        )}
      </Doos>
      <View style={{ alignItems: "center" }}>
        <TekstEditorTips />
      </View>
    </Pagina>
  );
}