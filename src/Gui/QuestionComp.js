import * as React from "react";
import { useEffect } from "react";
import { Text, View, TextInput } from "react-native";
import useArrayState from "../Hooks/arrayState";
import { styles } from "../Styles";
import RadioChoices from "./RadioChoices";

function MultipleChoiceQuestion({ data, zetPunten }) {
  const { vraag, opties, antwoord, score } = data;

  return (
    <View>
      <Text style={styles.text}>{vraag}</Text>
      <RadioChoices
        opties={opties}
        onChangeText={(geselecteerdeOptie) => {
          if (zetPunten !== undefined) {
            if (geselecteerdeOptie === antwoord) {
              zetPunten(score ? score : 1);
            } else {
              zetPunten(0);
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
function WaarNietWaarVraag({ data, zetPunten }) {
  const { juist, vraag, antwoord } = data;

  const maxPunten = data.score === undefined ? 1 : data.score;

  const [goed, , zetGoedIndex] = useArrayState(antwoord.map(() => false));

  useEffect(() => {
    if (zetPunten === undefined) return;

    let totaalFout = goed.reduce((a, b) => a + (b ? 0 : 1), 0);
    zetPunten(Math.max(maxPunten - totaalFout, 0));
  }, [goed]);

  return (
    <View>
      <Text style={styles.text}>{vraag}</Text>
      {juist.map((stelling, index) => {
        return (
          <View key={index}>
            <Text>{stelling}</Text>
            <RadioChoices
              opties={["Waar", "Niet waar"]}
              onChangeText={(geselecteerdeOptie) => {
                let waar = geselecteerdeOptie === "Waar";
                zetGoedIndex(index)(waar === antwoord[index]);
              }}
            />
          </View>
        );
      })}
    </View>
  );
}

export default function QuestionComp(props) {
  const { data } = props;

  if (data.opties !== undefined) return MultipleChoiceQuestion(props);
  if (data.juist !== undefined) return WaarNietWaarVraag(props);
  return OpenVraag(props);
}
