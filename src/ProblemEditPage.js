import * as React from "react";
import { useState, useEffect } from "react";
import { CheckBox, Text, TextInput, View } from "react-native";
import Button from "./Gui/Button";
import DropDownMenu from "./Gui/DropDownMenu";
import QuestionComp from "./Gui/QuestionComp";
import useArrayState from "./Hooks/arrayState";
import fetchData from "./server/fetchData";
import { styles } from "./Styles";
import NumberInput from "./Gui/NumberInput";
import Pagina from "./Gui/Pagina";
import { useTheme } from "@react-navigation/native";

function EditOpen({ zetVraagMethode }) {
  const [nakijkAntwoord, zetNakijkAntwoord] = useState("");
  const { colors } = useTheme();

  useEffect(() => {
    zetVraagMethode({
      antwoord: nakijkAntwoord
    });
  }, [zetVraagMethode, nakijkAntwoord]);

  return (
    <View>
      <Text
        style={{
          color: colors.tekstKleur,
          fontSize: "16px"
        }}
      >
        Nakijk opmerkingen:
      </Text>
      <TextInput
        multiline
        numberOfLines={10}
        style={[
          styles.textBox,
          {
            flex: 1,
            backgroundColor: colors.inputTextBoxBackgroundKleur,
            borderColor: colors.inputTextBoxBackgroundKleur
          }
        ]}
        onChangeText={zetNakijkAntwoord}
        value={nakijkAntwoord}
      />
    </View>
  );
}

function EditMeerKeuze({ zetVraagMethode }) {
  const [antwoorden, zetAntwoorden, zetAntwoord] = useArrayState();
  const [juisteAntwoord, zetJuisteAntwoord] = useState("");
  const { colors } = useTheme();

  useEffect(() => {
    zetVraagMethode({
      opties: antwoorden,
      antwoord: juisteAntwoord
    });
  }, [zetVraagMethode, antwoorden, juisteAntwoord]);

  return (
    <View>
      <Text
        style={{
          color: colors.tekstKleur,
          fontSize: "16px"
        }}
      >
        Mogelijke antwoorden:
      </Text>
      {antwoorden.map((value, index) => {
        return (
          <TextInput
            key={index}
            style={[
              styles.textBox,
              {
                backgroundColor: colors.inputTextBoxBackgroundKleur,
                borderColor: colors.inputTextBoxBackgroundKleur
              }
            ]}
            onChangeText={zetAntwoord(index)}
            value={value}
          />
        );
      })}
      <Button
        title="Voeg antwoord optie toe."
        onPress={() => zetAntwoorden([...antwoorden, ""])}
      />
      <Text
        style={{
          color: colors.tekstKleur,
          fontSize: "16px"
        }}
      >
        Juiste antwoord:
      </Text>
      <TextInput
        style={[
          styles.textBox,
          {
            backgroundColor: colors.inputTextBoxBackgroundKleur,
            borderColor: colors.inputTextBoxBackgroundKleur
          }
        ]}
        onChangeText={zetJuisteAntwoord}
        value={juisteAntwoord}
      />
    </View>
  );
}

function EditWaarNietWaarVraag({ zetVraagMethode }) {
  const [stellingen, zetStellingen, zetStelling] = useArrayState();
  const { colors } = useTheme();

  useEffect(() => {
    zetVraagMethode({
      juist: stellingen.map(({ tekst }) => tekst),
      antwoord: stellingen.map(({ waar }) => waar)
    });
  }, [stellingen, zetVraagMethode]);

  return (
    <View>
      <Text
        style={{
          color: colors.tekstKleur,
          fontSize: "16px"
        }}
      >
        Stellingen:
      </Text>
      {stellingen.map((value, index) => {
        return (
          <View style={{ flexDirection: "row" }} key={index}>
            <TextInput
              style={[
                styles.textBox,
                {
                  backgroundColor: colors.inputTextBoxBackgroundKleur,
                  flex: 1,
                  borderColor: colors.inputTextBoxBackgroundKleur
                }
              ]}
              onChangeText={(tekst) => {
                zetStelling(index)({ ...stellingen[index], tekst: tekst });
              }}
              value={value.tekst}
            />
            <Text
              style={{
                color: colors.tekstKleur,
                fontSize: "16px"
              }}
            >{` Waar?  `}</Text>
            <CheckBox
              style={{
                backgroundColor: colors.textboxAchtergrondKleur,
                borderColor: colors.inputTextBoxBackgroundKleur
              }}
              value={value.waar}
              onValueChange={(waar) => {
                zetStelling(index)({ ...stellingen[index], waar: waar });
              }}
            />
          </View>
        );
      })}
      <Button
        title="Voeg stelling toe."
        onPress={() =>
          zetStellingen([...stellingen, { tekst: "", waar: false }])
        }
      />
      <Text
        style={{
          color: colors.tekstKleur,
          fontSize: "16px"
        }}
      >
        Voor elk fout antwoord wordt een punt weggehaald.
      </Text>
    </View>
  );
}

export default function ProblemEditPage({ navigation, route }) {
  const { colors } = useTheme();
  const [vraag, zetVraag] = useState("");
  const [score, zetScore] = useState(1);
  const [probleemType, zetProbleemType] = useState("");
  const [vraagMethode, zetVraagMethode] = useState({});
  const [state, zetState] = useState(undefined);

  const { tekstid } = route;

  let vraagInhoud = {
    vraag: vraag,
    score: score,
    ...vraagMethode
  };

  return (
    <Pagina navigation={navigation} back={true}>
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          backgroundColor: colors.achtergrondKleur
        }}
      >
        <View
          style={[
            styles.box,
            {
              borderColor: colors.blueboxKleur,
              backgroundColor: colors.blueboxKleur
            }
          ]}
        >
          <Text
            style={{
              color: colors.tekstKleur,
              fontSize: "16px"
            }}
          >
            Vraag:
          </Text>
          <TextInput
            style={[
              styles.textBox,
              {
                backgroundColor: colors.inputTextBoxBackgroundKleur,
                borderColor: colors.inputTextBoxBackgroundKleur
              }
            ]}
            onChangeText={(text) => zetVraag(text)}
            value={vraag}
          />
          <Text
            style={{
              color: colors.tekstKleur,
              fontSize: "16px"
            }}
          >
            Aantal te behalen punten:
          </Text>
          <NumberInput onChangeNumber={zetScore} number={score} />
          <Text
            style={{
              color: colors.tekstKleur,
              fontSize: "16px",
              borderColor: colors.inputTextBoxBackgroundKleur
            }}
          >
            Vraag type:
          </Text>
          <View style={{ zIndex: 1 }}>
            <DropDownMenu
              opties={[
                "meer keuze vraag",
                "open vraag",
                "Waar of niet waar vraag"
              ]}
              onChangeText={(newType) => {
                zetState(undefined);
                zetProbleemType(newType);
              }}
            />
          </View>
          <View style={{ zIndex: -1 }}>
            {probleemType === "meer keuze vraag" && (
              <EditMeerKeuze zetVraagMethode={zetVraagMethode} />
            )}
            {probleemType === "open vraag" && (
              <EditOpen zetVraagMethode={zetVraagMethode} />
            )}
            {probleemType === "Waar of niet waar vraag" && (
              <EditWaarNietWaarVraag zetVraagMethode={zetVraagMethode} />
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
        <View
          style={[
            styles.box,
            {
              borderColor: colors.blueboxKleur,
              backgroundColor: colors.blueboxKleur
            }
          ]}
        >
          <QuestionComp
            key={probleemType}
            data={vraagInhoud}
            state={state}
            zetState={zetState}
          />
        </View>
      </View>
    </Pagina>
  );
}
