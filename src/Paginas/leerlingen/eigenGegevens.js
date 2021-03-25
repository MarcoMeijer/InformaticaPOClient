import Enter from "../../Gui/Basic/Enter";
import Text from "../../Gui/Basic/Text";
import Jacket from "../../Gui/Pagina-layout/Jacket";
import Pagina from "../../Gui/Pagina-layout/Pagina";
import useFetch from "../../Hooks/useFetch";

export default function EigenGegevens({ navigation }) {
  const [leerling] = useFetch(
    "eigengegevens",
    {},
    (leerlingen) => leerlingen[0]
  );

  return (
    <Pagina navigation={navigation}>
      <Jacket>
        <Text>
          <b>{`Gegevens van ${leerling.voornaam} ${leerling.tussenvoegsel} ${leerling.achternaam}`}</b>
          <Enter />
          {`Klas: ${leerling.klas}`} <Enter />
          {`Leerlingnummer: ${leerling.llnr}`} <Enter />
          {`PersoonID: ${leerling.persoonid}`} <Enter />
          {`Wachtwoord: ${leerling.wachtwoord}`} <Enter />
          {`Bevoegdheid: ${leerling.bevoegdheid}`} <Enter />
          {`Bevoegdheid: ${leerling.bevoegdheid}`} <Enter />
        </Text>
      </Jacket>
    </Pagina>
  );
}
