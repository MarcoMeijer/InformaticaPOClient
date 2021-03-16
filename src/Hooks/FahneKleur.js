import { useEffect, useState } from "react";
import { useTheme } from "@react-navigation/native";

export default function useFahneKleur(props) {
  const { colors } = useTheme();

  if (props === undefined) props = {};
  let { kleur } = props;
  if (kleur === undefined) kleur = colors.achtergrondKleur;
  const [fahnekleur, zetfahnekleur] = useState(kleur);

  let veranderfahne = () => {
    if (fahnekleur === kleur) {
      zetfahnekleur("#171717");
    } else if (fahnekleur === "#ffeb33") {
      zetfahnekleur("#171717");
    } else if (fahnekleur === "#171717") {
      zetfahnekleur("#d40404");
    } else {
      zetfahnekleur("#ffeb33");
    }
  };

  let veranderterug = () => {
    zetfahnekleur(kleur);
  };

  useEffect(() => {
    zetfahnekleur(kleur);
  }, [kleur]);

  return [fahnekleur, veranderfahne, veranderterug];
}
