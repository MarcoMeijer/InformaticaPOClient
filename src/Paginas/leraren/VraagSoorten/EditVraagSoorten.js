import { useTheme } from "@react-navigation/native";
import { useState } from "react";
import { View } from "react-native";
import fetchData from "../../../Database/fetchData";
import FouwDoos from "../../../Gui/Basic/FouwDoos";
import { EditKnop, ToevoegenKnop, VerwijderKnop } from "../../../Gui/Basic/Knoppen";
import Text from "../../../Gui/Basic/Text";
import Jacket from "../../../Gui/Pagina-layout/Jacket";
import useFetch from "../../../Hooks/useFetch";
import VraagsoortAanmakenMenu from "./VraagsoortAanmakenMenu";

export default function EditVraagSoortenPagina() {
  const [vraagSoorten, updateVraagSoorten] = useFetch("vraagsoorten", {}, (vragen) =>
    vragen.map((vraag) => vraag.vraagsoort)
  );
  const [open, zetOpen] = useState(false);
  const { addSucces } = useTheme();

  return <Jacket>
    <FouwDoos
      titel="Vraag soorten"
      altijdOpen={true}
      style={{alignSelf: "stretch"}}
    >
      {
        vraagSoorten &&
        vraagSoorten.map((vraagSoort) => 
          <View style={{flexDirection: "row", borderBottomWidth: 1, borderColor: "#ddd"}}>
            <Text style={{flex: 1}} key={vraagSoort}>{vraagSoort}</Text>
            <EditKnop
              style={{margin: 5}}
            />
            <VerwijderKnop
              key={vraagSoort}
              style={{margin: 5}}
              onPress={() => {
                fetchData("deletevraagsoort", {vraagsoort: vraagSoort}).then(() => {
                  addSucces("Vraagsoort is succesvol verwijderd!");
                  updateVraagSoorten();
                });
              }}
            />
          </View>
        )
      }
      {
        open &&
        <VraagsoortAanmakenMenu
          onCreate={() => {
            zetOpen(!open);
            updateVraagSoorten();
          }}
        />
      }
      <ToevoegenKnop
        style={{margin: 5, alignSelf: "center"}}
        size={20}
        onPress={() => zetOpen(!open)}
      />
    </FouwDoos>
  </Jacket>;
}