import * as React from "react";
import { useState, useEffect } from "react";
import { Text, View, TextInput } from "react-native";
import Button from "./Button";
import useArrayState from "../Hooks/arrayState";
import { styles } from "../Styles";
import NumberInput from "./NumberInput";
import RadioChoices from "./RadioChoices";

function MultipleChoiceQuestion({
  data,
  zetPunten,
  zetIngevuld,
  state,
  zetState
}) {
  const { vraag, opties, antwoord, score } = data;

  return (
    <View>
      <Text style={styles.text}>{vraag}</Text>
      <RadioChoices
        opties={opties}
        value={state}
        onChangeText={(geselecteerdeOptie) => {
          zetState(geselecteerdeOptie);
          if (zetIngevuld !== undefined) zetIngevuld(true);
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
function OpenVraag({ data, zetPunten, zetIngevuld, state, zetState }) {
  const [antwoordOpen, zetAntwoordOpen] = useState(false);
  const { vraag, antwoord, score } = data;

  if (state === undefined) {
    zetState({
      ingevuldAntwoord: "",
      ingevuldNummer: 0
    });
    return <View></View>;
  }

  const { ingevuldAntwoord, ingevuldNummer } = state;

  const zetIngevuldAntwoord = (nieuwAntwoord) => {
    zetState({ ...state, ingevuldAntwoord: nieuwAntwoord });
  };
  const zetIngevuldNummer = (nieuwNummer) => {
    zetState({ ...state, ingevuldNummer: nieuwNummer });
  };

  return (
    <View>
      <Text style={styles.text}>{vraag}</Text>
      <TextInput
        multiline
        numberOfLines={10}
        style={styles.textBox}
        value={ingevuldAntwoord}
        onChangeText={zetIngevuldAntwoord}
      />
      <Button
        title="Klik hier om je antwoord na te kijken"
        onPress={() => {
          if (zetIngevuld !== undefined) zetIngevuld(true);
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
function WaarNietWaarVraag({ data, zetPunten, zetIngevuld, state, zetState }) {
  const { juist, vraag, antwoord, score } = data;

  if (!Array.isArray(state)) {
    zetState([]);

    return <View></View>;
  }

  const goed = state.map((x, index) => x === antwoord[index]);

  useEffect(() => {
    if (zetPunten === undefined) return;

    let totaalFout = goed.reduce((a, b) => a + (b ? 0 : 1), 0);
    zetPunten(Math.max(score - totaalFout, 0));
  }, [goed]);

  const zetStateIndex = (index) => (newValue) => {
    let res = [...state];
    res[index] = newValue;
    zetState(res);
  };

  return (
    <View>
      <Text style={styles.text}>{vraag}</Text>
      {juist.map((stelling, index) => {
        let antwoord = "";
        if (state[index] === true) antwoord = "Waar";
        if (state[index] === false) antwoord = "Niet waar";
        return (
          <View key={index}>
            <Text>{stelling}</Text>
            <RadioChoices
              opties={["Waar", "Niet waar"]}
              value={antwoord}
              onChangeText={(geselecteerdeOptie) => {
                let waar = geselecteerdeOptie === "Waar";
                zetStateIndex(index)(waar);
                if (zetIngevuld !== undefined) zetIngevuld(true);
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
