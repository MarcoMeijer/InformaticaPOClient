import { useState } from 'react';

export default function useFahneKleur() {
  const [fahnekleur, zetfahnekleur] = useState("#ffffff");

  let veranderfahne = () => {
    if (fahnekleur === "#ffffff") {
      zetfahnekleur("#171717")
    } else if (fahnekleur === "#ffeb33") {
      zetfahnekleur("#171717")
    } else if (fahnekleur === "#171717") {
      zetfahnekleur("#d40404")
    } else {
      zetfahnekleur("#ffeb33")
    }
  }

  let veranderterug = () => {
    zetfahnekleur("#ffffff")
  }

  return [fahnekleur, veranderfahne, veranderterug];
}
