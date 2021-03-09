import { useState } from "react";

export default function useArrayState(initial) {
  if (initial === undefined) initial = [];
  const [array, zetArray] = useState(initial);

  const zetIndex = (i) => (value) => {
    let res = [...array];
    res[i] = value;
    zetArray(res);
  };

  return [array, zetArray, zetIndex];
}
