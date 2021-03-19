import { useEffect, useState } from "react";
import { styles } from "../../Styles";
import TextBox from "./TextBox";

export default function NumberInput({ title, onChangeNumber, number, min, max }) {
  const [tekst, zetTekst] = useState(number.toString());

  useEffect(() => {
    let result = parseInt(tekst, 10);
    if (min !== undefined) result = Math.max(min, result);
    if (max !== undefined) result = Math.min(max, result);
    onChangeNumber(result);
  }, [tekst, min, max]);

  return (
    <TextBox title={title} style={styles.textBox} onChangeText={zetTekst} value={tekst} />
  );
}
