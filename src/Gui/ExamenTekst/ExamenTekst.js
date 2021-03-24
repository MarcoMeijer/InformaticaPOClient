import * as React from "react";
import { Image, StyleSheet, View } from "react-native";
import { ParseElementArray } from "../../Marcos-gekke-shit/Parser/ExamTextParser";
import { arrayToLinkedList } from "../../Marcos-gekke-shit/Parser/LinkedList";
import Text from "../Basic/Text";

function ExamTextElem({ val }) {
  const { tag, inside } = val;
  if (tag === undefined) {
    return <Text>{val}</Text>;
  } else if (tag === "p") {
    return <ExamTextPar inside={inside} />;
  } else if (tag === "b") {
    return <ExamTextBold inside={inside} />;
  } else if (tag === "i") {
    return <ExamTextItalics inside={inside} />;
  } else {
    return null;
  }
}

function createExamElements(array) {
  return array.map((object, index) => (
    <ExamTextElem key={index} val={object} />
  ));
}

function ExamTextPar({ inside }) {
  return <Text>{createExamElements(inside)}</Text>;
}

function ExamTextBold({ inside }) {
  return (
    <Text style={{ fontWeight: "bold" }}>{createExamElements(inside)}</Text>
  );
}

function ExamTextItalics({ inside }) {
  return (
    <Text style={{ fontStyle: "italic" }}>{createExamElements(inside)}</Text>
  );
}

export default function ExamenTekst({ text }) {
  const { title, afbeelding, afbeeldingX, afbeeldingY, afbeeldingW, afbeeldingH } = text;
  let parsedText = ParseElementArray()(arrayToLinkedList(text.text))[1];

  return (
    <View>
      <Text style={styles.titleText}>{title}</Text>
      {afbeelding && (
        <Image
          style={{ position: 'absolute', left: afbeeldingX, top: afbeeldingY, width: afbeeldingW, height: afbeeldingH }}
          source={afbeelding}
        />
      )}
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
