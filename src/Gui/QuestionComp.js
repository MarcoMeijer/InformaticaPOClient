import * as React from "react";
import { useState, useEffect } from "react";
import { Text, View, TextInput } from "react-native";
import Button from "./Button";
import NumberInput from "./NumberInput";
import RadioChoices from "./RadioChoices";
import { useTheme } from "@react-navigation/native";

function MultipleChoiceQuestion({
  data,
  zetPunten,
  zetIngevuld,
  state,
  zetState
}) {
  const { vraag, opties, antwoord, score } = data;
  const { colors } = useTheme();

  return (
    <View>
      <Text style={{ fontSize: "16px", color: colors.tekstKleur }}>
        {vraag}
      </Text>
      <RadioChoices
        backgroundColor={colors.radioButtonKleur}
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
  const { colors } = useTheme();

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
      <Text style={{ fontSize: "16px", color: colors.tekstKleur }}>
        {vraag}
      </Text>
      <TextInput
        style={{
          backgroundColor: colors.inputTextBoxBackgroundKleur,
          borderColor: colors.inputTextBoxBorderKleur,
          borderWidth: 1,
          color: colors.tekstKleur
        }}
        multiline
        numberOfLines={10}
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
          <Text style={{ color: colors.tekstKleur }}>{antwoord}</Text>
          <Text style={{ color: colors.tekstKleur }}>
            Vul hier je behaalde punten in (maximaal {score}):
          </Text>
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
  const { colors } = useTheme();

  if (!Array.isArray(state)) {
    zetState([]);

    return <View></View>;
  }

  const goed = state.map((x, index) => x === antwoord[index]);

  useEffect(() => {
    if (zetPunten === undefined) return;

    let totaalFout = goed.reduce((a, b) => a + (b ? 0 : 1), 0);
    zetPunten(Math.max(score - totaalFout, 0));
  }, goed);

  const zetStateIndex = (index) => (newValue) => {
    let res = [...state];
    res[index] = newValue;
    zetState(res);
  };

  return (
    <View>
      <Text style={{ fontSize: "16px", color: colors.tekstKleur }}>
        {vraag}
      </Text>
      {juist.map((stelling, index) => {
        let antwoord = "";
        if (state[index] === true) antwoord = "Waar";
        if (state[index] === false) antwoord = "Niet waar";
        return (
          <View key={index}>
            <Text style={{ color: colors.tekstKleur }}>{stelling}</Text>
            <RadioChoices
              backgroundColor={colors.radioButtonKleur}
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
