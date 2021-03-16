import { Switch, View } from "react-native";
import { useTheme } from "@react-navigation/native";

export default function DarkModeSwitch(props) {
  const { darkMode, zetDarkMode } = useTheme();

  return (
    <View {...props}>
      <Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        activeThumbColor={"#fff"}
        thumbColor={darkMode ? "#bbb" : "#bbb"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={() => {
          zetDarkMode(!darkMode);
        }}
        value={!darkMode}
      />
    </View>
  );
}
