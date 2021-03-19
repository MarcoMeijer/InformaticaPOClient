import { useTheme } from "@react-navigation/native";
import { ScrollView, View } from "react-native";
import Header from "./Header";

export default function Pagina({ navigation, children, back }) {
  const { colors } = useTheme();
  
  return (
    <View style={{ flex: 1 }}>
      <Header navigation={navigation} back={back} />
      <ScrollView style={{ height: 1 }} contentContainerStyle={{ flexGrow: 1 }}>
        <View style={{ flex: 1, flexDirection: "row", backgroundColor: colors.achtergrondKleur}}>{children}</View>
      </ScrollView>
    </View>
  );
}
