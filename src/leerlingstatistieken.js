import * as React from "react";
import { useEffect, useState } from "react";
import { View } from "react-native";
import fetchData from "./server/fetchData";

export default function Barten4() {
  const [gemaakt, zetGemaakt] = useState(undefined);

  useEffect(() => {
    if (gemaakt === undefined) {
      fetchData("gemaakt", {persoonid: 2})
        .then((data) => {
          console.log(data);
        })
    }
  }, [gemaakt]);

  return (
    <View>
      
    </View>
  );
}
