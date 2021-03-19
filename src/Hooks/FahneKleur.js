import { useTheme } from "@react-navigation/native";
import { useEffect, useState } from "react";

export default function useFahneKleur() {
  const { colors } = useTheme();

  let kleur = colors.achtergrondKleur;
  const [fahnekleur, zetfahnekleur] = useState(kleur);

  useEffect(() => {
    zetfahnekleur(kleur);
  }, [kleur]);
  
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

  return [fahnekleur, veranderfahne, veranderterug];
}
