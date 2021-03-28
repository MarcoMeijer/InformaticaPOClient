import { ActivityIndicator, View } from "react-native";
import Text from "../../../Gui/Basic/Text";
import useFetch from "../../../Hooks/useFetch";

export default function LeerlingGegevens1({ navigation, klas }) {
  const [leerlingen] = useFetch("klas", { klas: klas });

  return (
    <View>
      {leerlingen === undefined ? (
        <ActivityIndicator />
      ) : (
        leerlingen.map((leerling, index) => {
          return (
            <Text
              style={{
                margin: 5,
                borderBottomWidth: 1,
                borderBottomColor: "#ddd"
              }}
              key={index}
              onPress={() => {
                navigation.navigate("Leerling gegevens2", {
                  leerling: leerling
                });
              }}
            >
              {leerling.voornaam} {leerling.achternaam}
            </Text>
          );
        })
      )}
    </View>
  );
}
