import { useState } from "react";

export default function useErrorState() {
  const [errors, zetErrors] = useState([]);

  const addError = (newError) => {
    zetErrors([...errors, newError]);
  };

  return [errors, addError];
}
