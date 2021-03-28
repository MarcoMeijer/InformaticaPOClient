import * as React from "react";
import { TouchableOpacity } from "react-native";
import Text from "../../Gui/Basic/Text";
import TekstenLijst from "../../Gui/ExamenTekst/TekstenLijst";
import Jacket from "../../Gui/Pagina-layout/Jacket";
import useFahneKleur from "../../Hooks/FahneKleur";
import useFetch from "../../Hooks/useFetch";

export default function TekstKiezenPagina({ navigation }) {
  const [fahnekleur, veranderfahne, veranderterug] = useFahneKleur();
  const [statistiekExamens] = useFetch("statistiekexamens");
  const [statistiekTeksten] = useFetch("statistiekteksten");

  return (
    <Jacket kleur={fahnekleur}>
      <Text>
        <TouchableOpacity onPress={veranderfahne}>
          <Text>
            <b>Hier kunt u alle teksten</b>
          </Text>
        </TouchableOpacity>{" "}
        <TouchableOpacity onPress={veranderterug}>
          <Text>
            <b>bekijken!</b> {"\n\n"}
          </Text>
        </TouchableOpacity>
      </Text>
      <TekstenLijst
        onPress={(tekstid) => {
          navigation.navigate("Examen tekst", {
            tekstid: tekstid
          });
        }}
        statistiekTeksten={statistiekTeksten}
        statistiekExamens={statistiekExamens}
      />
    </Jacket>
  );
}
