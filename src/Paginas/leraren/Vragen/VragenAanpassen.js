import { useEffect, useState } from "react";
import { ActivityIndicator, View } from "react-native";
import fetchData from "../../../Database/fetchData";
import { EditKnop, ToevoegenKnop, VerwijderKnop } from "../../../Gui/Basic/Knoppen";
import Text from "../../../Gui/Basic/Text";

export default function VragenAanpassen({ navigation, tekstid }) {
  const [moetUpdaten, zetMoetUpdaten] = useState(true);
  const [vragen, zetVragen] = useState(undefined);

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      zetMoetUpdaten(true);
    });

    return unsubscribe;
  }, [navigation]);

  useEffect(() => {
    if (moetUpdaten || vragen === undefined) {
      zetMoetUpdaten(false);
      fetchData("vragen", { tekstid: tekstid }).then((data) => {
        data = data.map((vraag) => {
          return {vraagid: vraag.vraagid, ...JSON.parse(vraag.vraaginhoud)};
        });
        zetVragen(data);
      });
    }
  }, [vragen, moetUpdaten, tekstid]);

  const voegVraagToe = () => {
    fetchData("insertvraag", {vraaginhoud: `{"vraag":"","antwoord":""}`, tekstid: tekstid})
      .then(() => {
        zetMoetUpdaten(true);
      });
  }

  const verwijderVraag = (vraagid) => {
    fetchData("deletevraag", {vraagid: vraagid})
      .then(() => {
        zetMoetUpdaten(true);
      })
  }

  return vragen === undefined ?
    <ActivityIndicator />
    : 
    <View>
      <Text style={{margin: 5}}><b>Vragen:</b></Text>
      {vragen.map((vraag, index) =>
        <View 
          key={index}
          style={{flexDirection: "row", alignItems: "flex-start"}}
        >
          <Text style={{margin: 5}}><b>Vraag {index+1}:  </b></Text>
          <Text style={{margin: 5, flex: 1}}>{vraag.vraag}</Text>
          <EditKnop
            style={{margin: 5}}
            onPress={() => {
              navigation.navigate("Vraag aanpassen", {vraagid: vraag.vraagid, oudeVraag: vraag})
            }}
          />
          <VerwijderKnop
            style={{margin: 5}}
            onPress={() => verwijderVraag(vraag.vraagid)}
          />
        </View>
      )}
      <ToevoegenKnop
        style={{ margin: 5, alignSelf: "center", transform: [{ scale: 1.4 }] }}
        onPress={voegVraagToe}
      />
    </View>;
}
