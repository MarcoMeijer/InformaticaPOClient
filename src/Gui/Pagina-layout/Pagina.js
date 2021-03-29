import { useTheme } from "@react-navigation/native";
import { ScrollView, View } from "react-native";
import Header from "./Header";

export default function Pagina({ navigation, children, back }) {
  const { colors } = useTheme();

  return (
    <View style={{ flex: 1 }}>
      <Header navigation={navigation} back={back} />
      <ScrollView
        style={{ height: 10 }}
        contentContainerStyle={{
          flex: 1,
          alignItems: "center",
          backgroundColor: colors.achtergrondKleur
        }}
      >
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            alignItems: "center"
          }}
        >
          {children}
        </View>
      </ScrollView>
    </View>
  );
}
