import { ActivityIndicator, View } from "react-native";
import Enter from "../../../Gui/Basic/Enter";
import Text from "../../../Gui/Basic/Text";
import useFetch from "../../../Hooks/useFetch";
import VraagsoortenStatistiek from "./VraagsoortenStatistiek";

export default function LeerlingStatistiek({ persoonid }) {
  // als persoonid = undefined, dan neemt hij de statistieken van de persoon die ingelogt is
  const [gemaakt] = useFetch("gemaakt", { persoonid: persoonid });

  let punten = 0;
  let maximaalPunten = 0;
  if (gemaakt !== undefined) {
    for (let x of gemaakt) {
      punten += x.punten;
      maximaalPunten += x.maximaalPunten;
    }
  }
  return gemaakt === undefined ? (
    <ActivityIndicator />
  ) : (
    <View>
      <Text>
        <b>Kijk hieronder hoe je de vragen hebt beantwoord:</b>
      </Text>
      <Enter />
      <VraagsoortenStatistiek persoonid={persoonid} />
    </View>
  );
}
