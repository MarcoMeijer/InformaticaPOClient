import { useTheme } from "@react-navigation/native";
import * as React from "react-native";

export default function Text(props) {
  const { colors } = useTheme();

  if (props === undefined) props = {};

  return (
    <React.Text
      {...props}
      style={[{ color: colors.tekstKleur }, props.style]}
    />
  );
}
