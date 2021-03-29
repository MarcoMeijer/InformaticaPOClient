import { useTheme } from "@react-navigation/native";
import React from "react";
import { ActivityIndicator, View } from "react-native";
import useFetch from "../../Hooks/useFetch";
import FouwDoos from "../Basic/FouwDoos";
import ToevoegenMenu from "../Basic/ToevoegenMenu";
import ExamenTekstSelecteerder from "./ExamenTekstSelecteerder";

export default function TekstenLijst({
  onPress,
  onExamenToevoegen,
  onEditExamen,
  onTekstToevoegen,
  onVerwijderExamen,
  onTekstVerwijder,
  statistiekTeksten,
  statistiekExamens
}) {
  const [examens, updateExamens] = useFetch("examens");
  const { zetPrompt } = useTheme();

  return (
    <View style={{ alignSelf: "stretch" }}>
      {examens === undefined ? (
        <ActivityIndicator />
      ) : (
        examens.map(({ examennaam }) => {
          let percentage = undefined;

          if (statistiekExamens) {
            for (let data of statistiekExamens) {
              if (data.examennaam === examennaam) {
                percentage = data.totaalpunten / data.totaalmaxpunten;
              }
            }
          }

          return (
            <FouwDoos
              titel={examennaam}
              percentage={percentage}
              key={examennaam}
              lazy={true}
              onEdit={
                onEditExamen &&
                ((tekst) =>
                  onEditExamen(examennaam, tekst).then(() => updateExamens()))
              }
              onDelete={
                onVerwijderExamen &&
                (() =>
                  zetPrompt({
                    message:
                      "Weet je zeker dat je dit examen wilt verwijderen? Alle teksten die daar bij horen worden dan ook verwijdert",
                    onClose: () =>
                      onVerwijderExamen(examennaam).then(() => updateExamens())
                  }))
              }
            >
              <ExamenTekstSelecteerder
                examennaam={examennaam}
                onPress={onPress}
                onTekstToevoegen={onTekstToevoegen}
                onTekstVerwijder={onTekstVerwijder}
                statistiekTeksten={statistiekTeksten}
              />
            </FouwDoos>
          );
        })
      )}
      {onExamenToevoegen && (
        <ToevoegenMenu
          naam="examen"
          onCreate={(tekst) =>
            onExamenToevoegen(tekst).then(() => {
              updateExamens();
            })
          }
        />
      )}
    </View>
  );
}
