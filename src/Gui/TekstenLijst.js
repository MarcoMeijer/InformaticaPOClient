import React, { useEffect, useState } from "react";
import { Button, View } from "react-native";
import fetchData from "../server/fetchData";

export default function TekstenLijst({ onPress }) {
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
    <View>
      {teksten.map((tekst, index) => {
        return (
          <View
            key={index}
            style={{
              margin: 2
            }}
          >
            <Button
              title={tekst.title}
              onPress={() => onPress(tekst.tekstid)}
            />
          </View>
        );
      })}
    </View>
  );
}
