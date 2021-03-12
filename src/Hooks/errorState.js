import { useState } from "react";

export default function useErrorState() {
  const [messages, zetMessages] = useState([]);
  const [huidigID, zetHuidigeID] = useState(0);

  const closeError = (filterID) => {
    zetMessages(
      messages.filter(({ id }) => {
        return id !== filterID;
      })
    );
  };
  const addError = (newError) => {
    zetHuidigeID(huidigID + 1);
    zetMessages([...messages, { id: huidigID, error: newError }]);
  };

  return [{ messages: messages, closeError: closeError }, addError];
}
