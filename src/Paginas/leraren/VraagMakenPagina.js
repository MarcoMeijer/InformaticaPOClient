import { useTheme } from "@react-navigation/native";
import * as React from "react";
import { useState } from "react";
import { Text, View } from "react-native";
import fetchData from "../../Database/fetchData";
import Button from "../../Gui/Basic/Button";
import Enter from "../../Gui/Basic/Enter";
import Doos from "../../Gui/Basic/Doos";
import DropDownMenu from "../../Gui/Basic/DropDownMenu";
import NumberInput from "../../Gui/Basic/NumberInput";
import TextBox from "../../Gui/Basic/TextBox";
import Vraag from "../../Gui/ExamenTekst/Vraag";
import Pagina from "../../Gui/Pagina-layout/Pagina";
import { styles } from "../../Styles";
import MaakMeerKeuzeVraag from "./Vragen/MaakMeerKeuzeVraag";
import MaakOpenVraag from "./Vragen/MaakOpenVraag";
import MaakWaarNietWaarVraag from "./Vragen/MaakWaarNietWaarVraag";

export default function VraagMakenPagina({ navigation, route }) {
  const [vraag, zetVraag] = useState("");
  const [score, zetScore] = useState(1);
  const [probleemType, zetProbleemType] = useState("");
  const [vraagMethode, zetVraagMethode] = useState({});
  const [state, zetState] = useState(undefined);
  const { colors } = useTheme();

  const { tekstid } = route;

  let vraagInhoud = {
    vraag: vraag,
    score: score,
    ...vraagMethode
  };

  return (
    <Pagina navigation={navigation} back={true}>
      <Doos>
        <TextBox
          title="Vraag"
          style={styles.textBox}
          onChangeText={(text) => zetVraag(text)}
          value={vraag}
        />
        <NumberInput
          title="Aantal te behalen punten"
          onChangeNumber={zetScore}
          number={score}
        />
        <Text style={styles.text}>Vraag type:</Text>
        <View style={{ zIndex: 1 }}>
          <DropDownMenu
            title="Selecteer vraag type"
            opties={[
              "meer keuze vraag",
              "open vraag",
              "Waar of niet waar vraag"
            ]}
            onChangeText={(newType) => {
              zetState(undefined);
              zetProbleemType(newType);
            }}
          />
        </View>
        <View style={{ zIndex: -1 }}>
          {probleemType === "meer keuze vraag" && (
            <MaakMeerKeuzeVraag zetVraagMethode={zetVraagMethode} />
          )}
          {probleemType === "open vraag" && (
            <MaakOpenVraag zetVraagMethode={zetVraagMethode} />
          )}
          {probleemType === "Waar of niet waar vraag" && (
            <MaakWaarNietWaarVraag zetVraagMethode={zetVraagMethode} />
          )}
        </View>
        <Button
          title="Voeg vraag toe"
          onPress={() => {
            fetchData("insertvraag", {
              vraagInhoud: JSON.stringify(vraagInhoud),
              vraagSoort: 1,
              vraagVolgorde: 1,
              tekstid: tekstid
            });
          }}
        />
        <Enter />
        <Button
          style={{ margin: 1 }}
          title="Vorige pagina"
          onPress={() => {
            navigation.goBack();
          }}
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
