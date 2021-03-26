import { useTheme } from "@react-navigation/native";
import React, { useState } from "react";
import { ActivityIndicator, View } from "react-native";
import useFetch from "../../Hooks/useFetch";
import ExamenAanmakenMenu from "../../Paginas/leraren/Examens/ExamenAanmakenMenu";
import Button from "../Basic/Button";
import ExamenTekstSelecteerder from "./ExamenTekstSelecteerder";

export default function TekstenLijst({ onPress, onExamenToevoegen, onEditExamen, onTekstToevoegen, onVerwijderExamen, onTekstVerwijder }) {
  const [open, zetOpen] = useState(false);
  const [examens, updateExamens] = useFetch("examens");
  const {colors} = useTheme();

  return (
    <View style={{ alignSelf: "stretch" }}>
      {
        onExamenToevoegen &&
        <View>
          <Button
            style={{margin: 5, alignSelf: "center"}}
            title="Nieuw examen"
            onPress={() => zetOpen(!open)}
          />
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
        </View>
      }
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
                onVerwijderExamen={(examennaam) => {
                  return onVerwijderExamen(examennaam)
                    .then(() => updateExamens())
                }}
              />
            </View>
          );
        })
      }
    </View>
  );
}
