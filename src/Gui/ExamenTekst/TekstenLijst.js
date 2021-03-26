import { useTheme } from "@react-navigation/native";
import React, { useState } from "react";
import { ActivityIndicator, View } from "react-native";
import useFetch from "../../Hooks/useFetch";
import ExamenAanmakenMenu from "../../Paginas/leraren/Examens/ExamenAanmakenMenu";
import FouwDoos from "../Basic/FouwDoos";
import { ToevoegenKnop } from "../Basic/Knoppen";
import ExamenTekstSelecteerder from "./ExamenTekstSelecteerder";

export default function TekstenLijst({ onPress, onExamenToevoegen, onEditExamen, onTekstToevoegen, onVerwijderExamen, onTekstVerwijder }) {
  const [open, zetOpen] = useState(false);
  const [examens, updateExamens] = useFetch("examens");
  const {colors} = useTheme();

  return (
    <View style={{ alignSelf: "stretch" }}>
      {
        examens === undefined
        ? <ActivityIndicator/>
        : examens.map(({ examennaam }) => {
          return (
            <FouwDoos
              titel={examennaam}
              key={examennaam}
              onEdit={onEditExamen}
              onDelete={onVerwijderExamen && (() => {
                return onVerwijderExamen(examennaam)
                .then(() => updateExamens())
              })}
            >
              <ExamenTekstSelecteerder
                examennaam={examennaam}
                onPress={onPress}
                onTekstToevoegen={onTekstToevoegen}
                onTekstVerwijder={onTekstVerwijder}
              />
            </FouwDoos>
          );
        })
      }
      {
        onExamenToevoegen &&
        <View>
          {
            open &&
            <ExamenAanmakenMenu
              onCreate={(examenNaam) => {
                onExamenToevoegen(examenNaam)
                  .then(() => {
                    zetOpen(false);
                    updateExamens();
                  })
              }}
            />
          }
          <ToevoegenKnop
            style={{margin: 5, alignSelf: "center"}}
            title="Nieuw examen"
            size={20}
            onPress={() => zetOpen(!open)}
          />
        </View>
      }
    </View>
  );
}
