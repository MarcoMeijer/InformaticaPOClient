import { useEffect, useState } from "react";
import { TextInput } from "react-native";
import { styles } from "../Styles";

export default function NumberInput({ onChangeNumber, number }) {
  const [tekst, zetTekst] = useState(number.toString());

  useEffect(() => {
    onChangeNumber(parseInt(tekst, 10));
  }, [onChangeNumber, tekst]);

  return (
    <TextInput style={styles.textBox} onChangeText={zetTekst} value={tekst} />
  );
}
