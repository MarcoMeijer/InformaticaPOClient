import { useTheme } from "@react-navigation/native";
import React from "react";
import { ActivityIndicator, View } from "react-native";
import useFetch from "../../Hooks/useFetch";
import ExamenTekstSelecteerder from "./ExamenTekstSelecteerder";

export default function TekstenLijst({ onPress, onEditExamen, onTekstToevoegen, onVerwijderExamen, onTekstVerwijder }) {
  const [examens] = useFetch("examens");
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
                key={index}
                examennaam={examennaam}
                titel={examennaam}
                onPress={onPress}
                onTekstToevoegen={onTekstToevoegen}
                onEditExamen={onEditExamen}
                onTekstVerwijder={onTekstVerwijder}
                onVerwijderExamen={onVerwijderExamen}
              />
            </View>
          );
        })
      }
    </View>
  );
}
