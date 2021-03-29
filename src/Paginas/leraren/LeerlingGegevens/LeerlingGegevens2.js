import { useTheme } from "@react-navigation/native";
import { View } from "react-native";
import fetchData from "../../../Database/fetchData";
import Button from "../../../Gui/Basic/Button";
import Enter from "../../../Gui/Basic/Enter";
import Text from "../../../Gui/Basic/Text";
import TekstenLijst from "../../../Gui/ExamenTekst/TekstenLijst";
import Jacket from "../../../Gui/Pagina-layout/Jacket";
import Pagina from "../../../Gui/Pagina-layout/Pagina";
import useFetch from "../../../Hooks/useFetch";
import LeerlingStatistiek from "../../leerlingen/statistiek/LeerlingStatistiek";

export default function LeerlingGegevens2({ route, navigation }) {
  const { leerling } = route.params;
  const {
    persoonid,
    llnr,
    bevoegdheid,
    klas,
    voornaam,
    tussenvoegsel,
    achternaam
  } = leerling;
  const [statistiekTeksten] = useFetch("statistiekteksten", {
    persoonid: persoonid
  });
  const [statistiekExamens] = useFetch("statistiekexamens", {
    persoonid: persoonid
  });
  const { zetPrompt, addSucces } = useTheme();

  return (
    <Pagina navigation={navigation}>
      <Jacket>
        <Text>
          <b>
            Gegevens van {voornaam}
            {tussenvoegsel} {achternaam}
          </b>
          <Enter />
          Klas: {klas} <Enter />
          Leerlingnummer: {llnr} <Enter />
          PersoonID: {persoonid} <Enter />
          Bevoegdheid: {bevoegdheid} <Enter /> <Enter />
        </Text>
        <LeerlingStatistiek persoonid={persoonid} />
        <Text>
          <b>
            Kijk hieronder hoeveel procent {voornaam}
            {tussenvoegsel}
            {achternaam} goed had per tekst:
          </b>
        </Text>
        <TekstenLijst
          onPress={() => {}}
          statistiekTeksten={statistiekTeksten}
          statistiekExamens={statistiekExamens}
        />
        <View style={{ flexDirection: "row" }}>
          <Button
            style={{ marginRight: "5px" }}
            title="Terug"
            onPress={() => {
              navigation.goBack();
            }}
          />
          <Button
            title="Maak docent"
            onPress={() => {
              zetPrompt({
                message: "Weet je zeker dat je deze leerling docent wil maken?",
                onClose: () => {
                  fetchData("maakdocent", {
                    persoonid: leerling.persoonid
                  }).then(() => {
                    addSucces("De leerling is succesvol docent gemaakt!");
                  });
                }
              });
            }}
          />
        </View>
      </Jacket>
    </Pagina>
  );
}
