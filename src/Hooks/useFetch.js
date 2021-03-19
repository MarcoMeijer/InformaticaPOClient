import { useTheme } from "@react-navigation/native";
import { useEffect, useState } from "react";
import fetchData from "../Database/fetchData";

export default function useFetch(url, argumenten, veranderData) {
  const { addError } = useTheme();
  const [data, zetData] = useState(undefined);

  useEffect(() => {
    if(data === undefined) {
      fetchData(url, argumenten)
        .then(data => {
          if(veranderData !== undefined)
            data = veranderData(data);
          zetData(data);
        })
        .catch(() => {
          addError("De server is niet online op dit moment. Probeer het op een ander moment opnieuw.");
        })
    }
  }, [data]);

  return [data];
}
