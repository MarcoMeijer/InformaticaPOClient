import * as React from "react";
import { StyleSheet, Text, View } from "react-native";
import { ParseElementArray } from "../Parser/ExamTextParser";
import { arrayToLinkedList } from "../Parser/LinkedList";
import { useTheme } from "@react-navigation/native";

function ExamTextElem(props) {
  const { colors } = useTheme();

  if (props.val.tag === undefined) {
    return <Text tyle={{ color: colors.tekstKleur }}>{props.val}</Text>;
  } else if (props.val.tag === "p") {
    return <ExamTextPar inside={props.val.inside} />;
  } else if (props.val.tag === "b") {
    return <ExamTextBold inside={props.val.inside} />;
  } else if (props.val.tag === "i") {
    return <ExamTextItalics inside={props.val.inside} />;
  } else {
    return null;
  }
}

function createExamElements(array) {
  return array.map((object, index) => (
    <ExamTextElem key={index} val={object} />
  ));
}

function ExamTextPar(props) {
  const { colors } = useTheme();
  return (
    <Text style={{ color: colors.tekstKleur }}>
      {createExamElements(props.inside)}
    </Text>
  );
}

function ExamTextBold(props) {
  const { colors } = useTheme();
  return (
    <Text style={[{ color: colors.tekstKleur }, { fontWeight: "bold" }]}>
      {createExamElements(props.inside)}
    </Text>
  );
}

function ExamTextItalics(props) {
  const { colors } = useTheme();
  return (
    <Text style={[{ color: colors.tekstKleur }, { fontStyle: "italic" }]}>
      {createExamElements(props.inside)}
    </Text>
  );
}

export default function ExamTextComp(props) {
  const { colors } = useTheme();
  let text = props.text;

  let parsedText = ParseElementArray()(arrayToLinkedList(text.text))[1];

  return (
    <View>
      <Text style={[{ color: colors.tekstKleur }, styles.titleText]}>
        {text.title}
      </Text>
      {createExamElements(parsedText)}
    </View>
  );
}

const styles = StyleSheet.create({
  titleText: {
    fontSize: "24px",
    fontWeight: "bold"
  }
});
