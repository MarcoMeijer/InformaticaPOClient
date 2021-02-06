import { useState } from 'react';

export default function useArrayState() {
  const [array, zetArray] = useState([]);

  const zetIndex = i => value => {
    let res = [...array];
    res[i] = value;
    zetArray(res);
  };

  return [array, zetArray, zetIndex];
}
