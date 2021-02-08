import * as React from "react";
import { Button, Text, View } from "react-native";

export default function HomePage({ navigation }) {
  return (
    <View>
      <Text>
        <Text>Welkom op deze mooie site</Text>
      </Text>

      <Button
        title="Ga naar leraren home paginga"
        onPress={() => navigation.navigate("Leraren home pagina")}
      />
      <Button
        title="inloggen"
        onPress={() => navigation.navigate("inloggen")}
      />
    </View>
  );
}
