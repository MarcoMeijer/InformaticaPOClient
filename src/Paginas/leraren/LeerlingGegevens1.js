import { View } from "react-native";
import Button from "../../Gui/Basic/Button";
import Enter from "../../Gui/Basic/Enter";
import Text from "../../Gui/Basic/Text";
import Jacket from "../../Gui/Pagina-layout/Jacket";
import useFetch from "../../Hooks/useFetch";

export default function LeerlingGegevens1({ navigation }) {
  const [klassen] = useFetch("klassen", {}, (klassen) =>
    klassen.map((klas) => klas.klas)
  );

  return (
    <Jacket>
      <Text>Kies een leerling</Text>
    </Jacket>
  );
}
