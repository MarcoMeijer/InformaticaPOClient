import { View, ScrollView } from "react-native";
import ErrorBoxList from "./ErrorBoxList";
import Header from "./Header";

export default function Pagina({ navigation, children, errors }) {
  if (errors === undefined) errors = [];

  return (
    <View style={{ flex: 1 }}>
      <Header navigation={navigation} />
      <ErrorBoxList errors={errors} />
      <ScrollView style={{ height: 1 }} contentContainerStyle={{ flexGrow: 1 }}>
        <View style={{ flex: 1 }}>{children}</View>
      </ScrollView>
    </View>
  );
}
