import * as React from "react";
import { useEffect, useState } from "react";
import { Button, Text, TouchableOpacity, View } from "react-native";
import useFahneKleur from "./Hooks/FahneKleur";
import fetchData from "./server/fetchData";

export default function Barten3({ navigation }) {
  const [fahnekleur, veranderfahne, veranderterug] = useFahneKleur();
  const [teksten, zetTeksten] = useState([]);

  useEffect(() => {
    if (teksten.length === 0) {
      fetchData("teksten").then((data) => {
        zetTeksten(
          data.map((tekst) => {
            let nieuweTekst = JSON.parse(tekst.tekstinhoud);
            nieuweTekst.tekstid = tekst.tekstid;
            return nieuweTekst;
          })
        );
      });
    }
  }, [teksten]);

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: fahnekleur
      }}
    >
      <View
        style={{
          width: 450,
          height: 800,
          alignSelf: "center",
          backgroundColor: "powderblue",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <Text>
          <TouchableOpacity onPress={veranderfahne}>
            <Text>
              <b>Hier kunt u alle teksten</b>
            </Text>
          </TouchableOpacity>{" "}
          <TouchableOpacity onPress={veranderterug}>
            <Text>
              <b>bekijken!</b> {"\n\n"}
            </Text>
          </TouchableOpacity>
        </Text>
        {teksten.map((tekst, index) => {
          return (
            <View
              style={{
                margin: 2
              }}
            >
              <Button
                title={tekst.title}
                onPress={() => {
                  navigation.navigate("Examen tekst", {
                    tekstid: tekst.tekstid
                  });
                }}
              />
            </View>
          );
        })}
      </View>
    </View>
  );
}
