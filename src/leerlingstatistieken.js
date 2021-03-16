import * as React from "react";
import { useEffect, useState } from "react";
import { ActivityIndicator, View } from "react-native";
import Text from "./Gui/Text";
import fetchData from "./server/fetchData";
import Jacket from "./Gui/Jacket";
import { VictoryPie } from "victory";

export default function LeerlingenStatistieken({ navigation }) {
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
    <Jacket>
      {gemaakt === undefined ? (
        <ActivityIndicator />
      ) : (
        <View>
          <Text>
            <b>kijk hieronder hoe je de vragen hebt beantwoord:</b>
          </Text>
          <Text>
            <b>
              Je hebt {punten} van de {maximaalPunten} punten.
            </b>
          </Text>
          <VictoryPie
            colorScale={["gold", "tomato"]}
            data={[
              { x: "Goed", y: punten },
              { x: "Fout", y: maximaalPunten - punten }
            ]}
          />
        </View>
      )}
    </Jacket>
  );
}
