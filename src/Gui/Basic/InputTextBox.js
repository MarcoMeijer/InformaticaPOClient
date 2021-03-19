import { useTheme } from "@react-navigation/native";
import { TextInput } from "react-native";

export default function InputTextBox({
  multiline,
  onChangeText,
  value,
  style
}) {
  const { colors } = useTheme();

  return (
    <TextInput
      style={[
        {
          backgroundColor: colors.inputTextBoxBackgroundKleur,
          borderColor: colors.inputTextBoxBorderKleur,
          borderWidth: 1
        },
        style
      ]}
      onChangeText={onChangeText}
      value={value}
      multiline={multiline}
    />
  );
}
