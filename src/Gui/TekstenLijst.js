import React, { useEffect, useState } from "react";
import { View } from "react-native";
import fetchData from "../server/fetchData";
import ExamTextSelector from "./ExamTextSelector";

export default function TekstenLijst({ onPress }) {
  const [examens, zetExamens] = useState([]);

  useEffect(() => {
    if (examens.length === 0) {
      fetchData("examens").then((data) => {
        zetExamens(data);
      });
    }
  }, [examens]);

  return (
    <View style={{ alignSelf: "stretch" }}>
      {examens.map(({ examenid, examennaam }, index) => {
        return (
          <ExamTextSelector
            key={index}
            examenid={examenid}
            titel={examennaam}
            onPress={onPress}
          />
        );
      })}
    </View>
  );
}
