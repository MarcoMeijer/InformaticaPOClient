import * as React from "react";
import { ActivityIndicator, View, TouchableOpacity } from "react-native";
import { VictoryPie } from "victory";
import Text from "../../Gui/Basic/Text";
import Jacket from "../../Gui/Pagina-layout/Jacket";
import useFetch from "../../Hooks/useFetch";
import TekstenLijst from "../../Gui/ExamenTekst/TekstenLijst";
import Button from "../../Gui/Basic/Button";
import { useTheme } from "@react-navigation/native";
import { useEffect, useState } from "react";

export default function LeerlingStatistiekPagina({ navigation }) {
  const [gemaakt] = useFetch("gemaakt");
  const [examens] = useFetch("examens");
  const { colors } = useTheme();
  const [open, zetOpen] = useState(false);
  const [teksten, zetTeksten] = useState(undefined);

  let punten = 0;
  let maximaalPunten = 0;
  if (gemaakt !== undefined) {
    for (let x of gemaakt) {
      punten += x.punten;
      maximaalPunten += x.maximaalPunten;
    }
  }

  return (
    <Jacket>
      <Button
        title="temp"
        style={{ margin: 5 }}
        onPress={() => zetOpen(!open)}
      />
      {open &&
        teksten !== undefined &&
        teksten.map((tekst, index) => {
          return (
            <View
              key={index}
              style={{
                backgroundColor: colors.textboxAchtergrondKleur,
                borderRadius: 3,
                borderWidth: 1,
                borderColor: colors.textboxAchtergrondKleur,
                marginLeft: 5,
                marginRight: 5,
                marginBottom: 2
              }}
            >
              <Text
                style={{
                  color: colors.tekstKleur
                }}
                onPress={() => onPress(tekst.tekstid)}
              >
                {tekst.title}
              </Text>
            </View>
          );
        })}
      {gemaakt === undefined ? (
        <ActivityIndicator />
      ) : (
        <View>
          <Text>
            <b>kijk hieronder hoe je de vragen hebt beantwoord:</b>
          </Text>
          <Text>
            <b>
              Je hebt {punten} van de {maximaalPunten} punten.
            </b>
          </Text>
          <VictoryPie
            colorScale={["gold", "tomato"]}
            data={[
              { x: "Goed", y: punten },
              { x: "Fout", y: maximaalPunten - punten }
            ]}
          />
        </View>
      )}
    </Jacket>
  );
}
