import { useTheme } from "@react-navigation/native";
import { ScrollView } from "react-native";

export default function Doos({ children }) {
  const { colors } = useTheme();

  return (
    <ScrollView
      style={{
        width: 600,
        height: 800,
        flexGrow: 1,
        borderWidth: "10px",
        borderRadius: "10px",
        margin: "7px",
        backgroundColor: colors.blueboxKleur,
        borderColor: colors.blueboxKleur
      }}
      contentContainerStyle={{
        width: 580,
        justifyContent: "flex-start"
      }}
      showsVerticalScrollIndicator={false}
    >
      {children}
    </ScrollView>
  );
}
