import { useEffect, useState } from "react";
import { TextInput } from "react-native";
import { styles } from "../Styles";

export default function NumberInput({ onChangeNumber, number, min, max }) {
  const [tekst, zetTekst] = useState(number.toString());

  useEffect(() => {
    let result = parseInt(tekst, 10);
    if (min !== undefined) result = Math.max(min, result);
    if (max !== undefined) result = Math.min(max, result);
    onChangeNumber(result);
  }, [tekst, min, max]);

  return (
    <TextInput style={styles.textBox} onChangeText={zetTekst} value={tekst} />
  );
}
