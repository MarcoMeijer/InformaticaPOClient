import * as React from "react";
import { useState, useEffect } from "react";
import { Text, View, TextInput, Button } from "react-native";
import useArrayState from "../Hooks/arrayState";
import { styles } from "../Styles";
import NumberInput from "./NumberInput";
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
              zetPunten(score);
            } else {
              zetPunten(0);
            }
          }
        }}
      />
    </View>
  );
}
function OpenVraag({ data, zetPunten }) {
  const [ingevuldNummer, zetIngevuldNummer] = useState(0);
  const [antwoordOpen, zetAntwoordOpen] = useState(false);
  const { vraag, antwoord, score } = data;

  return (
    <View>
      <Text style={styles.text}>{vraag}</Text>
      <TextInput multiline numberOfLines={10} style={styles.textBox} />
      <Button
        title="Klik hier om je antwoord na te kijken"
        onPress={() => {
          zetAntwoordOpen(!antwoordOpen);
        }}
      />
      {antwoordOpen && (
        <View>
          <Text>{antwoord}</Text>
          <Text>Vul hier je behaalde punten in (maximaal {score}):</Text>
          <NumberInput
            number={ingevuldNummer}
            onChangeNumber={(punten) => {
              if (zetPunten !== undefined) zetPunten(punten);
              zetIngevuldNummer(punten);
            }}
            min={0}
            max={score}
          />
        </View>
      )}
    </View>
  );
}
function WaarNietWaarVraag({ data, zetPunten }) {
  const { juist, vraag, antwoord, score } = data;

  const [goed, , zetGoedIndex] = useArrayState(antwoord.map(() => false));

  useEffect(() => {
    if (zetPunten === undefined) return;

    let totaalFout = goed.reduce((a, b) => a + (b ? 0 : 1), 0);
    zetPunten(Math.max(score - totaalFout, 0));
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
  let newProps = { ...props };
  if (newProps.data.score === undefined) newProps.data.score = 1;
  let { data } = newProps;

  if (data.opties !== undefined)
    return <MultipleChoiceQuestion {...newProps} />;
  if (data.juist !== undefined) return <WaarNietWaarVraag {...newProps} />;
  return <OpenVraag {...newProps} />;
}
