import { useTheme } from "@react-navigation/native";
import fetchData from "../../../Database/fetchData";
import Enter from "../../../Gui/Basic/Enter";
import Text from "../../../Gui/Basic/Text";
import TekstenLijst from "../../../Gui/ExamenTekst/TekstenLijst";
import Jacket from "../../../Gui/Pagina-layout/Jacket";

export default function ExamensAanpassenPagina({ navigation }) {
  const { addSucces, zetPrompt } = useTheme();

  return (
    <Jacket>
      <Text>
        <b>Hier kan je alle examens aanpassen:</b>
      </Text>
      <Enter />
      <TekstenLijst
        onPress={(tekstid) => {
          navigation.navigate("Tekst aanpassen pagina", {
            tekstid: tekstid
          });
        }}
        onEditExamen={(oudeNaam, nieuweNaam) =>
          fetchData("updateexamen", {
            oudeexamen: oudeNaam,
            nieuweexamen: nieuweNaam
          }).then(() => {
            addSucces("Examen is succesvol aangepast.");
          })
        }
        onExamenToevoegen={(examennaam) =>
          fetchData("insertexamen", { examennaam: examennaam }).then(() => {
            addSucces("Examen is succesvol toegevoegd.");
          })
        }
        onVerwijderExamen={(examennaam) =>
          fetchData("deleteexamen", { examennaam: examennaam }).then(() => {
            addSucces("Examen is succesvol verwijderd.");
          })
        }
        onTekstToevoegen={(examennaam) => {
          return fetchData("inserttekst", {
            examennaam: examennaam,
            tekstinhoud: `{"text":"","title":""}`,
            teksttitel: "Voer hier de titel in.",
            tekstniveau: 1
          }).then(() => {
            addSucces("Tekst is succesvol toegevoegd.");
          });
        }}
        onTekstVerwijder={(tekstid) => {
          return fetchData("deletetekst", { tekstid: tekstid }).then(() => {
            addSucces("Tekst is succesvol verwijderd.");
          });
        }}
      />
    </Jacket>
  );
}
