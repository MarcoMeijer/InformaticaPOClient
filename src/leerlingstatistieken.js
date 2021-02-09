import * as React from "react";
import { useEffect, useState } from "react";
import { Text, View } from "react-native";
import fetchData from "./server/fetchData";

export default function Barten4() {
  const [gemaakt] = useState("");
  const [tekst, zettekst] = useState("");

  useEffect(() => {
    if (gemaakt.length === 0) {
      fetchData("gemaakt")
      .then(data => {zettekst(JSON.stringify(data))})
      .catch(() => {});
            }
  }, [gemaakt]);  
  
  return (
    <View>
      <Text>{tekst}</Text>
    </View>
  );
}
