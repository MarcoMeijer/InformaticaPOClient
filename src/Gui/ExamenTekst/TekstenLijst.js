import { useTheme } from "@react-navigation/native";
import React, { useState } from "react";
import { ActivityIndicator, View } from "react-native";
import useFetch from "../../Hooks/useFetch";
import ExamenAanmakenMenu from "../../Paginas/leraren/Examens/ExamenAanmakenMenu";
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
        : examens.map(({ examennaam }, index) => {
          return (
            <View style={{
              backgroundColor: colors.textboxAchtergrondKleur,
              margin: 1,
              borderRadius: 10,
              borderWidth: 1,
              borderColor: "#aaa"
            }}>
              <ExamenTekstSelecteerder
                key={examennaam}
                examennaam={examennaam}
                titel={examennaam}
                onPress={onPress}
                onTekstToevoegen={onTekstToevoegen}
                onEditExamen={onEditExamen}
                onTekstVerwijder={onTekstVerwijder}
                onVerwijderExamen={onVerwijderExamen && ((examennaam) => {
                  return onVerwijderExamen(examennaam)
                    .then(() => updateExamens())
                })}
              />
            </View>
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
