import * as React from "react";
import { useEffect } from "react";
import { TouchableOpacity } from "react-native";
import Text from "../../Gui/Basic/Text";
import TekstenLijst from "../../Gui/ExamenTekst/TekstenLijst";
import Jacket from "../../Gui/Pagina-layout/Jacket";
import useFahneKleur from "../../Hooks/FahneKleur";
import useFetch from "../../Hooks/useFetch";

export default function TekstKiezenPagina({ navigation }) {
  const [fahnekleur, veranderfahne, veranderterug] = useFahneKleur();
  const [statistiekExamens, updateExamens] = useFetch("statistiekexamens");
  const [statistiekTeksten, updateTeksten] = useFetch("statistiekteksten");

  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      updateExamens();
      updateTeksten();
    });

    return unsubscribe;
  }, [navigation]);

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
