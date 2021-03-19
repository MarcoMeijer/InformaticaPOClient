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
        : examens.map(({ examenid, examennaam }, index) => {
          return (
            <ExamenTekstSelecteerder
              key={index}
              examenid={examenid}
              titel={examennaam}
              onPress={onPress}
            />
          );
        })
      }
    </View>
  );
}
