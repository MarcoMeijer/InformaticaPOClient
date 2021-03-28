import { ActivityIndicator, View } from "react-native";
import { VictoryPie, VictoryTooltip } from "victory";
import FouwDoos from "../../../Gui/Basic/FouwDoos";
import Text from "../../../Gui/Basic/Text";
import useFetch from "../../../Hooks/useFetch";
import PercentageGoed from "../../../Gui/ExamenTekst/PercentageGoed";

export default function VraagsoortenStatistiek({ persoonid }) {
  // als persoonid = undefined, dan neemt hij de statistieken van de persoon die ingelogt is
  const [statistiekVraagsoorten] = useFetch("statistiekvraagsoort", {
    persoonid: persoonid
  });

  const vpData =
    statistiekVraagsoorten &&
    statistiekVraagsoorten.map((data) => {
      return {
        label: `${data.vraagsoort}: ${data.vragengemaakt}     `,
        y: data.vragengemaakt
      };
    });

  return statistiekVraagsoorten === undefined ? (
    <ActivityIndicator />
  ) : (
    <View>
      <FouwDoos titel="Vraagsoorten" open={true}>
        <Text>
          <b>Hoeveelheid gemaakte vragen:</b>
        </Text>
        <View style={{ width: 250, alignSelf: "center" }}>
          <VictoryPie
            style={{ flex: 0 }}
            labelComponent={<VictoryTooltip />}
            width={300}
            height={300}
            responsive={false}
            scale={{ x: 0.5, y: 0.5 }}
            padding={10}
            colorScale="qualitative"
            data={vpData}
          />
        </View>
        <Text>
          <b>Percentage goed per vraagsoort:</b>
        </Text>
        {statistiekVraagsoorten.map(
          ({ vraagsoort, totaalpunten, totaalmaxpunten }) => (
            <View
              style={{
                flexDirection: "row",
                alignItems: "center"
              }}
            >
              <Text style={{ flex: 1 }}>{vraagsoort}</Text>
              <PercentageGoed factor={totaalpunten / totaalmaxpunten} />
            </View>
          )
        )}
      </FouwDoos>
    </View>
  );
}
