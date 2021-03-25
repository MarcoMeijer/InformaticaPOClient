import { useTheme } from "@react-navigation/native";
import * as React from "react";
import { useState } from "react";
import { View } from "react-native";
import fetchData from "../../../Database/fetchData";
import Button from "../../../Gui/Basic/Button";
import Doos from "../../../Gui/Basic/Doos";
import ExamenSelecteerder from "../../../Gui/ExamenTekst/ExamenSelecteerder";
import ExamenTekst from "../../../Gui/ExamenTekst/ExamenTekst";
import ExamenTekstEditor from "./ExamenTekstEditor";
import TekstEditorTips from "./TekstEditorTips";

export default function TekstMakenPagina() {
  const [examText, zetExamText] = useState({
    title: "",
    text: "",
    afbeeldingX: 0,
    afbeeldingY: 0,
    afbeeldingW: 0,
    afbeeldingH: 0
  });
  const [geselecteerdExamen, zetGeselecteerdExamen] = useState("");
  const { colors, addSucces } = useTheme();

  const voegTekstToe = () => {
    fetchData("inserttekst", {
      examennaam: geselecteerdExamen,
      teksttitel: examText.title,
      tekstinhoud: JSON.stringify(examText),
      tekstniveau: 1
    })
      .then(() => {
        addSucces("De tekst is succesvol toegevoegd!");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <View
      style={{
        flex: 1,
        flexDirection: "row",
        backgroundColor: colors.achtergrondKleur
      }}
    >
      <Doos>
        <ExamenSelecteerder onChangeText={zetGeselecteerdExamen} />
        <ExamenTekstEditor
          examenTekst={examText}
          zetExamenTekst={zetExamText}
        />
        <Button
          style={{ margin: 3 }}
          title="Voeg tekst toe."
          onPress={voegTekstToe}
        />
      </Doos>
      <Doos>
        <ExamenTekst text={examText} />
      </Doos>
      <View style={{ alignItems: "center" }}>
        <TekstEditorTips />
      </View>
    </View>
  );
}
