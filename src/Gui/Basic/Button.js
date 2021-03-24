import { useTheme } from "@react-navigation/native";
import { Text, TouchableOpacity, View } from "react-native";

export default function Button({ style, title, onPress, color }) {
  const { colors } = useTheme();

  return (
    <View style={style}>
      <TouchableOpacity
        style={{
          backgroundColor: color ? color : colors.buttonKleur,
          borderColor: color ? color : colors.buttonKleur,
          borderWidth: 10,
          borderRadius: 4,
          alignItems: "center"
        }}
        onPress={onPress}
      >
        <Text style={{ color: colors.tekstKleurInverted, fontSize: 15 }}>
          <b>{title}</b>
        </Text>
      </TouchableOpacity>
    </View>
  );
}
