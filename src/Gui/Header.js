import { TouchableOpacity, View } from "react-native";
import Logo from "./Logo";

export default function Header({ navigation, children }) {
  return (
    <View
      style={{
        flexDirection: "row",
        backgroundColor: "white"
      }}
    >
      <View
        style={{
          marginLeft: 20,
          margin: 6
        }}
      >
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
        >
          <Logo size={0.25} />
        </TouchableOpacity>
      </View>

      {children}
    </View>
  );
}
