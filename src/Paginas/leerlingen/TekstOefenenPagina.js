import { useTheme } from "@react-navigation/native";
import * as React from "react";
import { useEffect, useState } from "react";
import { ActivityIndicator, View } from "react-native";
import fetchData from "../../Database/fetchData";
import Button from "../../Gui/Basic/Button";
import Doos from "../../Gui/Basic/Doos";
import Enter from "../../Gui/Basic/Enter";
import ExamenTekst from "../../Gui/ExamenTekst/ExamenTekst";
import Vraag from "../../Gui/ExamenTekst/Vraag";
import Pagina from "../../Gui/Pagina-layout/Pagina";
import useArrayState from "../../Hooks/arrayState";

export default function TekstOefenenPagina({ route, navigation }) {
  const { addError, addSucces } = useTheme();
  const { tekstid } = route.params;
  const [text, zetText] = useState(undefined);
  const [vragen, zetVragen] = useState(undefined);
  const [punten, zetPunten, zetIndexPunten] = useArrayState();
  const [ingevuld, zetIngevuld, zetIndexIngevuld] = useArrayState();
  const [state, zetState, zetStateIndex] = useArrayState();
  const [showAnswers, setShowAnswers] = useState(false);

  useEffect(() => {
    if (text === undefined) {
      fetchData("tekst", { tekstid: tekstid }).then((data) => {
        zetText(JSON.parse(data.tekstinhoud));
      });
    }
  }, [text, tekstid]);

  useEffect(() => {
    if (vragen === undefined) {
      fetchData("vragen", { tekstid: tekstid })
        .then((data) => {
          zetPunten(data.map(() => 0));
          zetIngevuld(data.map(() => false));
          zetVragen(
            data.map((object) => {
              let res = JSON.parse(object.vraaginhoud);
              res.vraagid = object.vraagid;
              return res;
            })
          );
        })
        .then(() =>
          fetchData("voortgang", { tekstid: tekstid }).then((data) => {
            zetState(data);
          })
        );
    }
  }, [vragen, tekstid]);

  const submit = () => {
    let allesIngevuld = ingevuld.reduce((a, b) => a && b, true);
    if (allesIngevuld === false) {
      addError("Je hebt nog niet alles ingevuld.");
      return;
    }

    fetchData("slaop", {
      tekstid: tekstid,
      inhoud: JSON.stringify(state)
    })
      .then(async () => {
        for (let index in vragen) {
          const vraag = vragen[index];
          await fetchData("maak", {
            vraagid: vraag.vraagid,
            punten: punten[index] ? 1 : 0,
            maximaalPunten: vraag.score ? vraag.score : 1
          });
        }
      })
      .then(() => {
        setShowAnswers(true);
        addSucces("Uw antwoorden zijn ingediend.");
      });
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

  return (
    <Pagina navigation={navigation}>
      <View
        style={{
          flexDirection: "row"
        }}
      >
        <Doos>
          {text === undefined ? (
            <ActivityIndicator />
          ) : (
            <ExamenTekst text={text}></ExamenTekst>
          )}
        </Doos>
        <Doos>
          {vragen === undefined ? (
            <ActivityIndicator />
          ) : (
            <View>
              <Enter />
              {vragen.map((vraag, index) => {
                return (
                  <View
                    key={index}
                    style={{
                      margin: 3,
                      marginBottom: 30
                    }}
                  >
                    <Vraag
                      data={vraag}
                      zetPunten={zetIndexPunten(index)}
                      zetIngevuld={zetIndexIngevuld(index)}
                      state={state[index]}
                      zetState={zetStateIndex(index)}
                      showAnswers={showAnswers}
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
                {showAnswers || (
                  <Button
                    style={{ margin: 3, flex: 1 }}
                    title="Antwoorden indienen"
                    onPress={submit}
                  />
                )}
              </View>
            </View>
          )}
        </Doos>
      </View>
    </Pagina>
  );
}
