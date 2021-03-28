import { useTheme } from "@react-navigation/native";
import { useState } from "react";
import { View, TextInput } from "react-native";
import fetchData from "../../../Database/fetchData";
import FouwDoos from "../../../Gui/Basic/FouwDoos";
import {
  AnnuleerKnop,
  CheckKnop,
  EditKnop,
  VerwijderKnop
} from "../../../Gui/Basic/Knoppen";
import Text from "../../../Gui/Basic/Text";
import ToevoegenMenu from "../../../Gui/Basic/ToevoegenMenu";
import Jacket from "../../../Gui/Pagina-layout/Jacket";
import useFetch from "../../../Hooks/useFetch";

function VraagSoort({ vraagSoort, updateVraagSoorten, onEdit }) {
  const [vraagsoortNaam, zetVraagsoortNaam] = useState(vraagSoort);
  const [editen, zetEditen] = useState(false);
  const { addSucces } = useTheme();

  return editen ? (
    <View style={{ flexDirection: "row", flex: 1, alignItems: "center" }}>
      <TextInput
        style={{ margin: 5, flex: 1 }}
        value={vraagsoortNaam}
        onChangeText={zetVraagsoortNaam}
      />
      <AnnuleerKnop
        style={{ margin: 2 }}
        onPress={() => {
          zetEditen(false);
          zetVraagsoortNaam(vraagSoort);
        }}
      />
      <CheckKnop
        style={{ margin: 10 }}
        onPress={() => {
          zetEditen(false);
          onEdit(vraagsoortNaam);
        }}
      />
    </View>
  ) : (
    <View
      style={{
        flexDirection: "row",
        borderBottomWidth: 1,
        borderColor: "#ddd"
      }}
    >
      <Text style={{ flex: 1 }}>{vraagsoortNaam}</Text>
      <EditKnop
        style={{ margin: 5 }}
        onPress={() => {
          zetEditen(true);
        }}
      />
      <VerwijderKnop
        style={{ margin: 5 }}
        onPress={() => {
          fetchData("deletevraagsoort", {
            vraagsoort: vraagsoortNaam
          }).then(() => {
            addSucces("Vraagsoort is succesvol verwijderd!");
            updateVraagSoorten();
          });
        }}
      />
    </View>
  );
}

export default function VraagSoortenAanpassenPagina() {
  const [vraagSoorten, updateVraagSoorten] = useFetch(
    "vraagsoorten",
    {},
    (vragen) => vragen.map((vraag) => vraag.vraagsoort)
  );
  const { addSucces } = useTheme();

  return (
    <Jacket>
      <FouwDoos
        titel="Vraagsoorten"
        altijdOpen={true}
        style={{ alignSelf: "stretch" }}
      >
        {vraagSoorten &&
          vraagSoorten.map((vraagSoort) => (
            <VraagSoort
              vraagSoort={vraagSoort}
              updateVraagSoorten={updateVraagSoorten}
              onEdit={(nieuweNaam) => {
                fetchData("updatevraagsoorten", {
                  nieuwevraagsoort: nieuweNaam,
                  oudevraagsoort: vraagSoort
                }).then(() => {
                  addSucces("Vraag soort succesvol aangepast.");
                  updateVraagSoorten();
                });
              }}
            />
          ))}
      </FouwDoos>
      <ToevoegenMenu
        naam={"vraagsoort"}
        onCreate={(tekst) => {
          fetchData("insertvraagsoort", { vraagsoort: tekst }).then(() => {
            addSucces("Vraag soort succesvol aangemaakt.");
            updateVraagSoorten();
          });
        }}
      />
    </Jacket>
  );
}
