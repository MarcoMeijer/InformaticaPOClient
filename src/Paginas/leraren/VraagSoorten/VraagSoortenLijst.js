import { useState } from "react";
import { TouchableOpacity, View } from "react-native";
import fetchData from "../../../Database/fetchData";
import FouwDoos from "../../../Gui/Basic/FouwDoos";
import { CheckIcoon, LeegIcoon } from "../../../Gui/Basic/Icoontjes";
import { SluitKnop } from "../../../Gui/Basic/Knoppen";
import Text from "../../../Gui/Basic/Text";
import useFetch from "../../../Hooks/useFetch";

export default function VraagSoortenLijst({ vraagid }) {
  const [open, zetOpen] = useState(false);
  const [mogelijkeVraagSoorten] = useFetch("vraagsoorten", {}, data => data.map(x => x.vraagsoort));
  const [vraagSoorten, updateVraagSoorten] = useFetch("vraagsoortenvraag", {vraagid: vraagid}, data => data.map(x => x.vraagsoort));

  const switchVraag = (vraagsoort) => {
    if(vraagSoorten.includes(vraagsoort)) {
      fetchData("ontkoppelvraagsoort", {vraagid: vraagid, vraagsoort: vraagsoort})
        .then(updateVraagSoorten);
    } else {
      fetchData("koppelvraagsoort", {vraagid: vraagid, vraagsoort: vraagsoort})
        .then(updateVraagSoorten);
    }
  };

  return <View style={{zIndex: 2}}>
    {
      open &&
      <FouwDoos
        altijdOpen={true}
        titel="Selecteer de toepassende vraagsoorten."
        style={{
          right: 0,
          zIndex: 2,
          position: "absolute",
          marginTop: 40
        }}
      >
        {
          mogelijkeVraagSoorten && 
          mogelijkeVraagSoorten.map((vraagsoort) => {
            const bestaat = vraagSoorten.includes(vraagsoort);

            return <TouchableOpacity
              style={{
                flexDirection: "row",
                borderBottomWidth: 1,
                borderBottomColor: "#ddd",
                height: 30,
                alignItems: "center"
              }}
              onPress={() => switchVraag(vraagsoort)}
            >
              {bestaat ? <CheckIcoon/> : <LeegIcoon/>}
              <Text key={vraagsoort}>  {vraagsoort}</Text>
            </TouchableOpacity>
          })
        }
      </FouwDoos>
    }
    <FouwDoos
      titel="Vraag soorten waar deze vraag bij hoort"
      style={{margin: 5}}
      onConfiguration={() => zetOpen(!open)}
    >
      <View
        style={{flexDirection: "row", flexWrap: "wrap"}}
      >
        {
          vraagSoorten &&
          vraagSoorten.map((vraagsoort) =>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                backgroundColor: "#57f",
                padding: 5,
                borderRadius: 4,
                margin: 3
              }}
            >
              <Text style={{color: "#fff"}} key={vraagsoort}><b>{vraagsoort}</b></Text>
              <SluitKnop
                style={{marginLeft: 3, marginTop: 1, color: '#fff'}}
                onPress={() => switchVraag(vraagsoort)}
              />
            </View>
          )
        }
      </View>
    </FouwDoos>
  </View>;
}
