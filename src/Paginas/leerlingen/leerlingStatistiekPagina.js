import * as React from "react";
import { ActivityIndicator, View } from "react-native";
import { VictoryPie } from "victory";
import Text from "../../Gui/Basic/Text";
import Jacket from "../../Gui/Pagina-layout/Jacket";
import useFetch from "../../Hooks/useFetch";

export default function LeerlingStatistiekPagina() {
  const [gemaakt] = useFetch("gemaakt");

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
