import { useTheme } from "@react-navigation/native";
import { useState } from "react";
import { ActivityIndicator, View } from "react-native";
import fetchData from "../../../Database/fetchData";
import Button from "../../../Gui/Basic/Button";
import Text from "../../../Gui/Basic/Text";
import VerwijderKnop from "../../../Gui/Basic/VerwijderKnop";
import Jacket from "../../../Gui/Pagina-layout/Jacket";
import useFetch from "../../../Hooks/useFetch";
import VraagsoortAanmakenMenu from "./VraagsoortAanmakenMenu";

export default function EditVraagSoortenPagina() {
  const [vraagSoorten] = useFetch("vraagsoorten", {}, (vragen) =>
    vragen.map((vraag) => vraag.vraagsoort)
  );
  const [open, zetOpen] = useState(false);
  const { addSucces } = useTheme();

  return <Jacket>
    <Button
      title="Nieuwe vraag soort"
      onPress={() => zetOpen(!open)}
    />
    {
      open &&
      <VraagsoortAanmakenMenu
        onCreate={() => zetOpen(!open)}
      />
    }
    <View
      style={{margin: 10, flexDirection: "row", justifyContent: "flex-start", alignSelf: "stretch"}}
    >
      {
        vraagSoorten === undefined ?
        <ActivityIndicator/>
        : [
          <View
            style={{flex: 1, justifyContent: "space-around"}}
          >
            {
              vraagSoorten.map((vraagSoort) => 
                <Text key={vraagSoort}>{vraagSoort}</Text>
              )
            }
          </View>,
          <View
            style={{justifyContent: "space-around"}}
          >
            {
              vraagSoorten.map((vraagSoort) => 
                <VerwijderKnop
                  key={vraagSoort}
                  onPress={() => {
                    fetchData("deletevraagsoort", {vraagsoort: vraagSoort}).then(() => {
                      addSucces("Vraagsoort is succesvol verwijderd!");
                    });
                  }}
                />
              )
            }
          </View>
        ]
      }
    </View>
  </Jacket>;
}
