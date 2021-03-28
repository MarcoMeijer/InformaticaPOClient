import React, { useState } from "react";
import { ActivityIndicator, View } from "react-native";
import useFetch from "../../Hooks/useFetch";
import ExamenAanmakenMenu from "../../Paginas/leraren/Examens/ExamenAanmakenMenu";
import FouwDoos from "../Basic/FouwDoos";
import { ToevoegenKnop } from "../Basic/Knoppen";
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
  const [open, zetOpen] = useState(false);
  const [examens, updateExamens] = useFetch("examens");

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
              onEdit={onEditExamen}
              onDelete={
                onVerwijderExamen &&
                (() => {
                  return onVerwijderExamen(examennaam).then(() =>
                    updateExamens()
                  );
                })
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
        <View>
          {open && (
            <ExamenAanmakenMenu
              onCreate={(examenNaam) => {
                onExamenToevoegen(examenNaam).then(() => {
                  zetOpen(false);
                  updateExamens();
                });
              }}
            />
          )}
          <ToevoegenKnop
            style={{ margin: 5, alignSelf: "center" }}
            title="Nieuw examen"
            size={20}
            onPress={() => zetOpen(!open)}
          />
        </View>
      )}
    </View>
  );
}
