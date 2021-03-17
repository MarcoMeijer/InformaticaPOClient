import { View, ScrollView } from "react-native";
import Header from "./Header";

export default function Pagina({ navigation, children, back }) {
  return (
    <View style={{ flex: 1 }}>
      <Header navigation={navigation} back={back} />
      <ScrollView style={{ height: 1 }} contentContainerStyle={{ flexGrow: 1 }}>
        <View style={{ flex: 1 }}>{children}</View>
      </ScrollView>
    </View>
  );
}
