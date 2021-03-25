import { ActivityIndicator, View } from "react-native";
import Button from "../../Gui/Basic/Button";
import Text from "../../Gui/Basic/Text";
import Jacket from "../../Gui/Pagina-layout/Jacket";
import Pagina from "../../Gui/Pagina-layout/Pagina";
import useFetch from "../../Hooks/useFetch";

export default function LeerlingGegevens1({ route, navigation }) {
  const { klas } = route.params;
  const [leerlingen] = useFetch("klas", { klas: klas });

  return (
    <Pagina navigation={navigation}>
      <Jacket>
        <View
          style={{
            padding: 10
          }}
        >
          <Text style={{ textAlign: "center" }}>
            <b>Selecteer een leerling:</b>
          </Text>
          {leerlingen === undefined ? (
            <ActivityIndicator />
          ) : (
            leerlingen.map((leerling, index) => {
              return (
                <Button
                  style={{ margin: 5 }}
                  key={index}
                  title={`${leerling.voornaam} ${leerling.achternaam}`}
                  onPress={() => {
                    navigation.navigate("Leerling gegevens2", {
                      leerling: leerling
                    });
                  }}
                />
              );
            })
          )}
          <Button
            style={{ margin: 20 }}
            title="Terug"
            onPress={() => {
              navigation.goBack();
            }}
          />
        </View>
      </Jacket>
    </Pagina>
  );
}
