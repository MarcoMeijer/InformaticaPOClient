import * as React from "react";
import { useState, useEffect } from "react";
import { Button, Text, TextInput, View } from "react-native";
import DropDownMenu from "./Gui/DropDownMenu";
import QuestionComp from "./Gui/QuestionComp";
import useArrayState from "./Hooks/arrayState";
import fetchData from "./server/fetchData";
import { styles } from "./Styles";
import NumberInput from "./Gui/NumberInput";

function EditOpen({ zetVraagMethode }) {
  const [nakijkAntwoord, zetNakijkAntwoord] = useState("");

  useEffect(() => {
    zetVraagMethode({
      antwoord: nakijkAntwoord
    });
  }, [zetVraagMethode, nakijkAntwoord]);

  return (
    <View>
      <Text style={styles.text}>Nakijk opmerkingen:</Text>
      <TextInput
        multiline
        numberOfLines={10}
        style={[styles.textBox, { flex: 1 }]}
        onChangeText={zetNakijkAntwoord}
        value={nakijkAntwoord}
      />
    </View>
  );
}

function EditMeerKeuze({ zetVraagMethode }) {
  const [antwoorden, zetAntwoorden, zetAntwoord] = useArrayState();
  const [juisteAntwoord, zetJuisteAntwoord] = useState("");

  useEffect(() => {
    zetVraagMethode({
      opties: antwoorden,
      antwoord: juisteAntwoord
    });
  }, [zetVraagMethode, antwoorden, juisteAntwoord]);

  return (
    <View>
      <Text style={styles.text}>Mogelijke antwoorden:</Text>
      {antwoorden.map((value, index) => {
        return (
          <TextInput
            key={index}
            style={styles.textBox}
            onChangeText={zetAntwoord(index)}
            value={value}
          />
        );
      })}
      <Button
        title="Voeg antwoord optie toe."
        onPress={() => zetAntwoorden([...antwoorden, ""])}
      />
      <Text style={styles.text}>Juiste antwoord:</Text>
      <TextInput
        style={styles.textBox}
        onChangeText={zetJuisteAntwoord}
        value={juisteAntwoord}
      />
    </View>
  );
}

export default function ProblemEditPage({ route }) {
  const [vraag, zetVraag] = useState("");
  const [score, zetScore] = useState(1);
  const [probleemType, zetProbleemType] = useState("");
  const [vraagMethode, zetVraagMethode] = useState({});

  const { tekstid } = route;

  let vraagInhoud = {
    vraag: vraag,
    score: score,
    ...vraagMethode
  };

  return (
    <View style={{ flex: 1, flexDirection: "row" }}>
      <View style={styles.box}>
        <Text style={styles.text}>Vraag:</Text>
        <TextInput
          style={styles.textBox}
          onChangeText={(text) => zetVraag(text)}
          value={vraag}
        />
        <Text style={styles.text}>Aantal te behalen punten:</Text>
        <NumberInput onChangeNumber={zetScore} number={score} />
        <Text style={styles.text}>Vraag type:</Text>
        <View style={{ zIndex: 1 }}>
          <DropDownMenu
            opties={["meer keuze vraag", "open vraag"]}
            onChangeText={zetProbleemType}
          />
        </View>
        <View style={{ zIndex: -1 }}>
          {probleemType === "meer keuze vraag" && (
            <EditMeerKeuze zetVraagMethode={zetVraagMethode} />
          )}
          {probleemType === "open vraag" && (
            <EditOpen zetVraagMethode={zetVraagMethode} />
          )}
        </View>
        <Button
          title="Voeg vraag toe"
          onPress={() => {
            fetchData("insertvraag", {
              vraagInhoud: JSON.stringify(vraagInhoud),
              vraagSoort: 1,
              vraagVolgorde: 1,
              tekstid: tekstid
            });
          }}
        />
      </View>
      <View style={styles.box}>
        <QuestionComp data={vraagInhoud} />
      </View>
    </View>
  );
}
