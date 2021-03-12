import * as React from "react";
import { View } from "react-native";
import QuestionComp from "./QuestionComp";

export default function QuetionListComp(props) {
  return (
    <View>
      {props.questions.map((object, index) => {
        return <QuestionComp key={index} data={object} />;
      })}
    </View>
  );
}
