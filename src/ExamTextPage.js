import * as React from "react";
import { useEffect, useState } from "react";
import { ActivityIndicator, View } from "react-native";
import Button from "./Gui/Button";
import ExamTextComp from "./Gui/ExamTextComp";
import Pagina from "./Gui/Pagina";
import QuestionComp from "./Gui/QuestionComp";
import useArrayState from "./Hooks/arrayState";
import fetchData from "./server/fetchData";
import { useTheme } from "@react-navigation/native";
import { styles } from "./Styles";
import Enter from "./Gui/Enter";

export default function ExamEditPage({ route, navigation }) {
  const { colors, addError, addSucces } = useTheme();
  const { tekstid } = route.params;
  const [vraagvolgorde, zetVraagvolgorde] = useState(0);
  const [text, zetText] = useState(undefined);
  const [vragen, zetVragen] = useState(undefined);
  const [punten, zetPunten, zetIndexPunten] = useArrayState();
  const [ingevuld, zetIngevuld, zetIndexIngevuld] = useArrayState();
  const [state, zetState, zetStateIndex] = useArrayState();

  useEffect(() => {
    if (text === undefined) {
      fetchData("tekst", { tekstid: tekstid }).then((data) => {
        zetText(JSON.parse(data.tekstinhoud));
      });
    }
  }, [text, tekstid]);

  useEffect(() => {
    if (vragen === undefined) {
      fetchData("vragen", { tekstid: tekstid }).then((data) => {
        zetVragen(
          data.map((object) => {
            let res = JSON.parse(object.vraaginhoud);
            res.vraagid = object.vraagid;
            return res;
          })
        );
        zetPunten(data.map(() => 0));
        zetIngevuld(data.map(() => false));
      });
      fetchData("voortgang", { tekstid: tekstid }).then((data) => {
        zetState(data);
      });
    }
  }, [vragen, tekstid]);

  const submit = () => {
    let allesIngevuld = ingevuld.reduce((a, b) => a && b, true);
    if (allesIngevuld === false) {
      addError("Je hebt nog niet alles ingevuld.");
      return;
    }

    for (let index in vragen) {
      const vraag = vragen[index];
      fetchData("maak", {
        vraagid: vraag.vraagid,
        punten: punten[index] ? 1 : 0,
        maximaalPunten: vraag.score ? vraag.score : 1
      });
    }
    navigation.navigate("Leerlingen home pagina");
    addSucces("Uw antwoorden zijn ingediend.");
  };
  const slaOp = () => {
    fetchData("slaop", {
      tekstid: tekstid,
      inhoud: JSON.stringify(state)
    }).then(() => {
      navigation.goBack();
      addSucces("Uw voortgang is succesvol opgeslagen.");
    });
  };
  const volgende = () => {
    zetVraagvolgorde(vraagvolgorde + 1);
  };
  const vorige = () => {
    zetVraagvolgorde(vraagvolgorde - 1);
  };

  return (
    <Pagina
      style={{ backgroundColor: colors.achtergrondKleur }}
      navigation={navigation}
      back={true}
    >
      <View style={{ alignItems: "center" }}>
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            backgroundColor: colors.achtergrondKleur
          }}
        >
          <View
            style={[
              styles.bluebackBox,
              {
                borderColor: colors.blueboxKleur,
                backgroundColor: colors.blueboxKleur
              }
            ]}
          >
            {text === undefined ? (
              <ActivityIndicator />
            ) : (
              <ExamTextComp text={text}></ExamTextComp>
            )}
          </View>
          <View
            style={[
              styles.bluebackBox,
              {
                borderColor: colors.blueboxKleur,
                backgroundColor: colors.blueboxKleur
              }
            ]}
          >
            {vragen === undefined ? (
              <ActivityIndicator />
            ) : (
              <View>
                <View style={{ flexDirection: "row" }}>
                  {vraagvolgorde !== 0 && (
                    <Button
                      style={{ margin: 3, flex: 1 }}
                      title="Vorige vraag"
                      onPress={vorige}
                    />
                  )}
                  {vraagvolgorde !== vragen.length - 1 && (
                    <Button
                      style={{ margin: 3, flex: 1 }}
                      title="Volgende vraag"
                      onPress={volgende}
                    />
                  )}
                </View>
                <Enter />
                {vragen.map((vraag, index) => {
                  return (
                    <View
                      style={{
                        margin: 3,
                        display: index === vraagvolgorde ? null : "none"
                      }}
                    >
                      <QuestionComp
                        data={vraag}
                        zetPunten={zetIndexPunten(index)}
                        zetIngevuld={zetIndexIngevuld(index)}
                        state={state[index]}
                        zetState={zetStateIndex(index)}
                      />
                    </View>
                  );
                })}
                <Enter />
                <View
                  style={{
                    flex: 1,
                    flexDirection: "row"
                  }}
                >
                  <Button
                    style={{ margin: 3, flex: 1 }}
                    title="Opslaan / Vorige pagina"
                    onPress={slaOp}
                  />
                  <Button
                    style={{ margin: 3, flex: 1 }}
                    title="Antwoorden indienen"
                    onPress={submit}
                  />
                </View>
              </View>
            )}
          </View>
        </View>
      </View>
    </Pagina>
  );
}
