import { useState } from "react";

export default function useFahneKleur() {
  const [fahnekleur, zetfahnekleur] = useState("#f2f2f2");

  let veranderfahne = () => {
    if (fahnekleur === "#f2f2f2") {
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
    zetfahnekleur("#f2f2f2");
  };

  return [fahnekleur, veranderfahne, veranderterug];
}
