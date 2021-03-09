import * as React from "react";
import { useEffect, useState } from "react";
import { Text, View } from "react-native";
import fetchData from "./server/fetchData";

export default function Barten4({ navigation }) {
  const [gemaakt, zetGemaakt] = useState(undefined);

  useEffect(() => {
    if (gemaakt === undefined) {
      fetchData("gemaakt").then((data) => {
        console.log(data);
        zetGemaakt(data);
      });
    }
  }, [gemaakt]);

  let punten = 0;
  let maximaalPunten = 0;
  if (gemaakt !== undefined) {
    for (let x of gemaakt) {
      punten += x.punten;
      maximaalPunten += x.maximaalPunten;
    }
  }

  return (
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
        <b>kijk hieronder hoe je de vragen hebt beantwoord:</b>
      </Text>
      <Text>
        <b>
          Je hebt {punten} van de {maximaalPunten} punten.
        </b>
      </Text>
    </View>
  );
}
