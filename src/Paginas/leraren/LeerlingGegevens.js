import Enter from "../../Gui/Basic/Enter";
import Text from "../../Gui/Basic/Text";
import Jacket from "../../Gui/Pagina-layout/Jacket";
import useFetch from "../../Hooks/useFetch";

export default function LeerlingGegevensPagina() {
  const [klassen] = useFetch("klassen", {}, (klassen) =>
    klassen.map((klas) => klas.klas)
  );

  return (
    <Jacket>
      <Text>
        <b>Selecteer een klas:</b>
        {klassen &&
          klassen.map((klas, index) => (
            <Text key={index}>
              <Enter />
              {klas}
            </Text>
          ))}
      </Text>
    </Jacket>
  );
}
