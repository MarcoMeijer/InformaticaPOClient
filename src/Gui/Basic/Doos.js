import { useTheme } from "@react-navigation/native";
import { View } from "react-native";


export default function Doos({ children }) {
  const { colors } = useTheme();

  return <View
    style={{
      justifyContent: "flex-start",
      borderWidth: "10px",
      borderRadius: "10px",
      margin: "7px",
      flex: 1,
      backgroundColor: colors.blueboxKleur,
      borderColor: colors.blueboxKleur
    }}
  >
    {children}
  </View>;
}
