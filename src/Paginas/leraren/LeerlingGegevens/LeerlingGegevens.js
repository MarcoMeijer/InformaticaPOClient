import { View } from "react-native";
import Button from "../../../Gui/Basic/Button";
import FouwDoos from "../../../Gui/Basic/FouwDoos";
import Text from "../../../Gui/Basic/Text";
import Jacket from "../../../Gui/Pagina-layout/Jacket";
import useFetch from "../../../Hooks/useFetch";
import LeerlingGegevens1 from "./LeerlingGegevens1";

export default function LeerlingGegevensPagina({ navigation }) {
  const [klassen] = useFetch("klassen", {}, (klassen) =>
    klassen.map((klas) => klas.klas)
  );

  return (
    <Jacket>
      <Text style={{ textAlign: "center" }}>
        <b>Selecteer een klas:</b> <br />
      </Text>
      <View
        style={{
          padding: 10,
          alignSelf: "stretch"
        }}
      >
        {klassen &&
          klassen.map((klas) => (
            <FouwDoos key={klas} titel={klas}>
              <LeerlingGegevens1 klas={klas} navigation={navigation} />
            </FouwDoos>
          ))}
      </View>
    </Jacket>
  );
}
