import { useState } from "react";

export default function useArrayState(initial) {
  if (initial === undefined) initial = [];
  const [array, zetArray] = useState(initial);

  const zetIndex = (i) => (value) => {
    zetArray((state) => {
      let res = [...state];
      res[i] = value;
      return res;
    });
  };

  return [array, zetArray, zetIndex];
}
