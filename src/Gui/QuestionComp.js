import * as React from "react";
import { Text, View, TextInput } from "react-native";
import { styles } from "../Styles";
import RadioChoices from "./RadioChoices";

function MultipleChoiceQuestion({ data, zetCorrect }) {
  const { vraag, opties, antwoord } = data;

  return (
    <View>
      <Text style={styles.text}>{vraag}</Text>
      <RadioChoices
        opties={opties}
        onChangeText={(geselecteerdeOptie) => {
          if (zetCorrect !== undefined) {
            if (geselecteerdeOptie === antwoord) {
              zetCorrect(true);
            } else {
              zetCorrect(false);
            }
          }
        }}
      />
    </View>
  );
}
function OpenVraag({ data }) {
  const { vraag } = data;

  return (
    <View>
      <Text style={styles.text}>{vraag}</Text>
      <TextInput multiline numberOfLines={10} style={styles.textBox} />
    </View>
  );
}

export default function QuestionComp(props) {
  const { data } = props;

  if (data.opties !== undefined) return MultipleChoiceQuestion(props);
  return OpenVraag(props);
}
