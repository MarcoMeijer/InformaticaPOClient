import * as React from "react";
import { Button, View } from "react-native";

export default function Barten5({ navigation }) {
  return (
    <View>
      <Button
        title="Ga naar leraren home paginga"
        onPress={() => navigation.navigate("Leraren home pagina")}
      />
      <Button
        title="Ga naar leerlingen home pagina"
        onPress={() => navigation.navigate("Leerlingen home pagina")}
      />
    </View>
  );
}
