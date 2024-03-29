import { useTheme } from "@react-navigation/native";
import * as React from "react";
import { useEffect, useState } from "react";
import { TextInput, View } from "react-native";
import Button from "../Basic/Button";
import NumberInput from "../Basic/NumberInput";
import RadioChoices from "../Basic/RadioChoices";
import Text from "../Basic/Text";

function MeerKeuzeVraag({
  data,
  zetPunten,
  zetIngevuld,
  state,
  zetState,
  showAnswers
}) {
  const { vraag, opties, antwoord, score } = data;
  const { colors } = useTheme();

  useEffect(() => {
    if (zetIngevuld !== undefined) {
      if (state !== undefined) zetIngevuld(true);
      else zetIngevuld(false);
    }
    if (zetPunten !== undefined) {
      if (state === antwoord) {
        zetPunten(score);
      } else {
        zetPunten(0);
      }
    }
  }, [state]);

  return (
    <View>
      <Text style={{ fontSize: "16px", color: colors.tekstKleur }}>
        {vraag}
      </Text>
      <RadioChoices
        backgroundColor={colors.radioButtonKleur}
        opties={opties}
        value={state}
        onChangeText={zetState}
      />
      {showAnswers &&
        (state === antwoord ? (
          <Text>
            <b>Juist</b>
          </Text>
        ) : (
          <Text>
            <b>Het juiste antwoord was {antwoord}</b>
          </Text>
        ))}
    </View>
  );
}
function OpenVraag({ data, zetPunten, zetIngevuld, state, zetState }) {
  const [antwoordOpen, zetAntwoordOpen] = useState(false);
  const { vraag, antwoord, score } = data;
  const { colors } = useTheme();

  useEffect(() => {
    if (state !== undefined) {
      if (zetIngevuld !== undefined) {
        if (state.nagekeken) zetIngevuld(true);
        else zetIngevuld(false);
      }
      if (zetPunten !== undefined) {
        zetPunten(state.ingevuldNummer);
      }
    }
  }, [state]);

  if (state === undefined) {
    zetState({
      ingevuldAntwoord: "",
      ingevuldNummer: 0,
      nagekeken: false
    });
    return <View></View>;
  }

  const { ingevuldAntwoord, ingevuldNummer } = state;

  const zetNagekeken = (nieuwNagekeken) => {
    zetState({ ...state, nagekeken: nieuwNagekeken });
  };
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
          zetNagekeken(true);
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
            title="Behaalde punten"
            number={ingevuldNummer}
            onChangeNumber={zetIngevuldNummer}
            min={0}
            max={score}
          />
        </View>
      )}
    </View>
  );
}
function WaarNietWaarVraag({
  data,
  zetPunten,
  zetIngevuld,
  state,
  zetState,
  showAnswers
}) {
  const { juist, vraag, antwoord, score } = data;
  const { colors } = useTheme();

  let antwoorden = Array.isArray(state) ? state : [];

  const goed = antwoord.map((x, index) => x === antwoorden[index]);

  useEffect(() => {
    if (zetIngevuld !== undefined) {
      let ingevuld = true;
      goed.map((_, index) => {
        if (antwoorden[index] === undefined) ingevuld = false;
        return 0;
      });
      zetIngevuld(ingevuld);
    }
  }, [antwoorden]);

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

  if (!Array.isArray(state)) zetState([]);

  return (
    <View>
      <Text style={{ fontSize: "16px", color: colors.tekstKleur }}>
        {vraag}
      </Text>
      {juist.map((stelling, index) => {
        let cAntwoord = "";
        if (antwoorden[index] === true) cAntwoord = "Waar";
        if (antwoorden[index] === false) cAntwoord = "Niet waar";
        return (
          <View key={index}>
            <Text style={{ color: colors.tekstKleur }}>{stelling}</Text>
            <RadioChoices
              backgroundColor={colors.radioButtonKleur}
              opties={["Waar", "Niet waar"]}
              value={cAntwoord}
              onChangeText={(geselecteerdeOptie) => {
                let waar = geselecteerdeOptie === "Waar";
                zetStateIndex(index)(waar);
              }}
            />
            {showAnswers && (
              <Text>
                <b>{antwoord[index] === antwoorden[index] ? "Goed" : "Fout"}</b>
              </Text>
            )}
          </View>
        );
      })}
    </View>
  );
}

export function KrijgVraagSoort(vraag) {
  if (vraag.opties !== undefined) return "Meer keuze vraag";
  if (vraag.juist !== undefined) return "Waar of niet waar vraag";
  return "Open vraag";
}

export default function Vraag(props) {
  let newProps = { ...props };
  if (newProps.data.score === undefined) newProps.data.score = 1;
  let { data } = newProps;

  if (data.opties !== undefined) return <MeerKeuzeVraag {...newProps} />;
  if (data.juist !== undefined) return <WaarNietWaarVraag {...newProps} />;
  return <OpenVraag {...newProps} />;
}
