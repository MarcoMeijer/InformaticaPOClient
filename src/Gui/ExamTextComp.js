import * as React from "react";
import { StyleSheet, Text, View } from "react-native";
import { ParseElementArray } from "../Parser/ExamTextParser";
import { arrayToLinkedList } from "../Parser/LinkedList";

function ExamTextElem(props) {
  if (props.val.tag === undefined) {
    return <Text>{props.val}</Text>;
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
  return <Text>{createExamElements(props.inside)}</Text>;
}

function ExamTextBold(props) {
  return (
    <Text style={{ fontWeight: "bold" }}>
      {createExamElements(props.inside)}
    </Text>
  );
}

function ExamTextItalics(props) {
  return (
    <Text style={{ fontStyle: "italic" }}>
      {createExamElements(props.inside)}
    </Text>
  );
}

export default function ExamTextComp(props) {
  let text = props.text;

  let parsedText = ParseElementArray()(arrayToLinkedList(text.text))[1];

  return (
    <View>
      <Text style={styles.titleText}>{text.title}</Text>
      {createExamElements(parsedText)}
    </View>
  );
}

const styles = StyleSheet.create({
  titleText: {
    fontSize: "24px",
    fontWeight: "bold",
  },
});
