mport { View } from "react-native";
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
      <Text style={{ textAlign: "center" }}>
        <b>Selecteer een klas:</b> <br />
        <View
          style={{
            padding: 10
          }}
        >
          {klassen &&
            klassen.map((klas, index) => (
              <Button
                style={{ margin: 5 }}
                key={index}
                title={klas}
                onPress={() => {
                  navigation.navigate("Leerling gegevens", { klas: klas });
                }}
              />
            ))}

          <Button
            style={{ margin: 20 }}
            title="Terug"
            onPress={() => {
              navigation.goBack();
            }}
          />
        </View>
      </Text>
    </Jacket>
  );
}
