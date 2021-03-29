import { useEffect, useState } from "react";
import TextBox from "./TextBox";

export default function NumberInput({
  title,
  style,
  onChangeNumber,
  number,
  min,
  max,
  float
}) {
  const [tekst, zetTekst] = useState(
    number !== null && number !== undefined ? number.toString() : 0
  );

  useEffect(() => {
    let result = float
      ? parseFloat(tekst.replace(",", "."))
      : parseInt(tekst, 10);
    if (min !== undefined) result = Math.max(min, result);
    if (max !== undefined) result = Math.min(max, result);
    onChangeNumber(result);
  }, [tekst, min, max]);

  return (
    <TextBox
      style={style}
      title={title}
      onChangeText={zetTekst}
      value={tekst}
    />
  );
}
