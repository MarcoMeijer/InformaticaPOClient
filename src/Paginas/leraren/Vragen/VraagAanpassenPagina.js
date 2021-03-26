import { useTheme } from "@react-navigation/native";
import { useState } from "react";
import { View } from "react-native";
import fetchData from "../../../Database/fetchData";
import Button from "../../../Gui/Basic/Button";
import Doos from "../../../Gui/Basic/Doos";
import FouwDoos, { FouwOpties } from "../../../Gui/Basic/FouwDoos";
import NumberInput from "../../../Gui/Basic/NumberInput";
import TextBox from "../../../Gui/Basic/TextBox";
import Vraag, { KrijgVraagSoort } from "../../../Gui/ExamenTekst/Vraag";
import Pagina from "../../../Gui/Pagina-layout/Pagina";
import VraagSoortenLijst from "../VraagSoorten/VraagSoortenLijst";
import MaakMeerKeuzeVraag from "./MaakMeerKeuzeVraag";
import MaakOpenVraag from "./MaakOpenVraag";
import MaakWaarNietWaarVraag from "./MaakWaarNietWaarVraag";


export default function VraagAanpassenPagina({ navigation, route }) {
  const { vraagid, oudeVraag } = route.params;
  const { addSucces } = useTheme();

  const [open, zetOpen] = useState(false);
  const [vraag, zetVraag] = useState(oudeVraag.vraag);
  const [score, zetScore] = useState(oudeVraag.score === undefined ? 1 : oudeVraag.score);
  const [probleemType, zetProbleemType] = useState(KrijgVraagSoort(oudeVraag));
  const [vraagMethode, zetVraagMethode] = useState({});
  const [state, zetState] = useState(undefined);

  let vraagInhoud = {
    vraag: vraag,
    score: score,
    ...vraagMethode
  };

  const gaTerug = () => {
    fetchData("updatevraag", {vraaginhoud: JSON.stringify(vraagInhoud), vraagid: vraagid})
      .then(() => {
        addSucces("Vraag is succesvol geupdate!");
        navigation.goBack();
      })
  };

  return (
    <Pagina navigation={navigation} back={true}>
      <Doos>
        <FouwDoos
          titel="Algemeen"
          style={{margin: 5}}
        >
          <TextBox
            title="Vraag"
            onChangeText={(text) => zetVraag(text)}
            value={vraag}
          />
          <NumberInput
            title="Aantal te behalen punten"
            onChangeNumber={zetScore}
            number={score}
          />
        </FouwDoos>
        <View style={{zIndex: 4}}>
          {
            open &&
            <FouwOpties
              titel="Selecteer vraag type"
              opties={[
                "Meer keuze vraag",
                "Open vraag",
                "Waar of niet waar vraag"
              ]}
              onChangeText={(newType) => {
                zetState(undefined);
                zetProbleemType(newType);
                zetOpen(false);
              }}
            />
          }
          <FouwDoos
            titel={probleemType}
            style={{zIndex: 3, margin: 5}}
            onConfiguration={() => zetOpen(!open)}
          >
            <View style={{ zIndex: 0 }}>
              {probleemType === "Meer keuze vraag" && (
                <MaakMeerKeuzeVraag
                  oudeVraag={oudeVraag}
                  zetVraagMethode={zetVraagMethode}
                />
              )}
              {probleemType === "Open vraag" && (
                <MaakOpenVraag
                  oudeVraag={oudeVraag}
                  zetVraagMethode={zetVraagMethode}
                />
              )}
              {probleemType === "Waar of niet waar vraag" && (
                <MaakWaarNietWaarVraag
                  oudeVraag={oudeVraag}
                  zetVraagMethode={zetVraagMethode}
                />
              )}
            </View>
          </FouwDoos>
        </View>
        <VraagSoortenLijst
          vraagid={vraagid}
        />
        <Button
          style={{ margin: 1 }}
          title="Ga terug en sla vraag op"
          onPress={gaTerug}
        />
      </Doos>
      <Doos>
        <Vraag
          key={probleemType}
          data={vraagInhoud}
          state={state}
          zetState={zetState}
        />
      </Doos>
    </Pagina>
  );
}
