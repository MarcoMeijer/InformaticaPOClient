import React from "react";
import { ActivityIndicator, View } from "react-native";
import useFetch from "../../Hooks/useFetch";
import ExamenTekstSelecteerder from "./ExamenTekstSelecteerder";

export default function TekstenLijst({ onPress }) {
  const [examens] = useFetch("examens");

  return (
    <View style={{ alignSelf: "stretch" }}>
      {
        examens === undefined
        ? <ActivityIndicator/>
        : examens.map(({ examennaam }, index) => {
          return (
            <ExamenTekstSelecteerder
              key={index}
              examennaam={examennaam}
              titel={examennaam}
              onPress={onPress}
            />
          );
        })
      }
    </View>
  );
}
