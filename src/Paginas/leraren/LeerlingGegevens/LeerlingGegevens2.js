import Button from "../../../Gui/Basic/Button";
import Enter from "../../../Gui/Basic/Enter";
import Text from "../../../Gui/Basic/Text";
import Jacket from "../../../Gui/Pagina-layout/Jacket";
import Pagina from "../../../Gui/Pagina-layout/Pagina";
import LeerlingStatistiek from "../../leerlingen/LeerlingStatistiek";

export default function LeerlingGegevens2({ route, navigation }) {
  const { leerling } = route.params;

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
        </Text>
        <LeerlingStatistiek persoonid={leerling.persoonid} />

        <Button
          title="Terug"
          onPress={() => {
            navigation.goBack();
          }}
        />
      </Jacket>
    </Pagina>
  );
}
