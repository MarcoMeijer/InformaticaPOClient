import { useState } from "react";
import { View } from "react-native";
import { AanpassenKnop } from "../../../Gui/Basic/Knoppen";
import Text from "../../../Gui/Basic/Text";
import useFetch from "../../../Hooks/useFetch";

export default function VraagSoortenLijst({ vraagid }) {
  const [open, zetOpen] = useState(false);
  const [mogelijkeVraagSoorten] = useFetch("vraagsoorten", {}, data => data.map(x => x.vraagsoort));
  const [vraagSoorten] = useFetch("vraagsoortenvraag", {vraagid: vraagid});

  return <View style={{zIndex: 2}}>
    {
      open &&
      <View
        style={{
          right: 0,
          zIndex: -1,
          position: "absolute",
          backgroundColor: "#fff",
          borderColor: '#bbb',
          borderRadius: 8,
          borderWidth: 1,
          padding: 15,
          marginTop: 40
        }}
      >
        {
          mogelijkeVraagSoorten && 
          mogelijkeVraagSoorten.map((vraagsoort) => 
            <Text key={vraagsoort}>{vraagsoort}</Text>
          )
        }
      </View>
    }
    <View style={{flexDirection: "row", alignItems: "center"}}>
      <Text style={{flex: 1}}>Vraag soorten waar deze vraag bij hoort:</Text>
      <AanpassenKnop
        style={{margin: 5}}
        onPress={() => zetOpen(!open)}
      />
    </View>
  </View>;
}
