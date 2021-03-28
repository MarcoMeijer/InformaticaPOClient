import { ActivityIndicator } from "react-native";
import Enter from "../../Gui/Basic/Enter";
import Text from "../../Gui/Basic/Text";
import Jacket from "../../Gui/Pagina-layout/Jacket";
import useFetch from "../../Hooks/useFetch";

export default function EigenGegevens({ navigation }) {
  const [leerling] = useFetch(
    "eigengegevens",
    {},
    (leerlingen) => leerlingen[0]
  );

  return (
    <Jacket>
      {leerling === undefined ? (
        <ActivityIndicator />
      ) : (
        <Text>
          <b>{`Gegevens van ${leerling.voornaam} ${leerling.tussenvoegsel} ${leerling.achternaam}`}</b>
          <Enter />
          {`Klas: ${leerling.klas}`} <Enter />
          {`Leerlingnummer: ${leerling.llnr}`} <Enter />
          {`Bevoegdheid: ${leerling.bevoegdheid}`} <Enter />
        </Text>
      )}
    </Jacket>
  );
}
