import { View } from "react-native";
import Button from "../../Gui/Basic/Button";
import Text from "../../Gui/Basic/Text";
import Jacket from "../../Gui/Pagina-layout/Jacket";
import useFetch from "../../Hooks/useFetch";

export default function LeerlingGegevensPagina({ navigation }) {
  const [klassen] = useFetch("klassen", {}, (klassen) =>
    klassen.map((klas) => klas.klas)
  );

  return (
    <Jacket>
      <Text>
        <b>Selecteer een klas:</b> <br />
        <View
          style={{
            justifycontent: "center",
            flexDirection: "collumn",
            height: 400,
            padding: 30
          }}
        >
          {klassen &&
            klassen.map((klas, index) => (
              <Button
                key={index}
                title={klas}
                onClick={() => {
                }}
              />
            ))}
        </View>
      </Text>
    </Jacket>
  );
}
