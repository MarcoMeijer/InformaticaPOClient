import { useEffect, useState } from "react";
import { TextInput } from "react-native";
import { styles } from "../Styles";
import { useTheme } from "@react-navigation/native";

export default function NumberInput({ onChangeNumber, number, min, max }) {
  const [tekst, zetTekst] = useState(number.toString());
  const { colors } = useTheme();

  useEffect(() => {
    let result = parseInt(tekst, 10);
    if (min !== undefined) result = Math.max(min, result);
    if (max !== undefined) result = Math.min(max, result);
    onChangeNumber(result);
  }, [tekst, min, max]);

  return (
    <TextInput
      style={[
        styles.textBox,
        {
          backgroundColor: colors.inputTextBoxBackgroundKleur,
          color: colors.tekstKleur
        }
      ]}
      onChangeText={zetTekst}
      value={tekst}
    />
  );
}
