import { useTheme } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { Touchable, TouchableOpacity, View } from "react-native";
import fetchData from "../../Database/fetchData";
import { ToevoegenKnop, VerwijderKnop } from "../Basic/Knoppen";
import Text from "../Basic/Text";
import PercentageGoed from "./PercentageGoed";

export default function ExamenTekstSelecteerder({
  examennaam,
  onPress,
  onTekstToevoegen,
  onTekstVerwijder,
  statistiekTeksten
}) {
  const { colors } = useTheme();
  const [moetUpdaten, zetMoetUpdaten] = useState(true);
  const [teksten, zetTeksten] = useState(undefined);

  useEffect(() => {
    if (moetUpdaten || teksten === undefined) {
      zetMoetUpdaten(false);
      let fetch = undefined;
      if (examennaam === undefined) {
        fetch = fetchData("aanbevolenteksten");
      } else {
        fetch = fetchData("teksten", { examennaam: examennaam });
      }
      fetch.then((data) => {
        data = data.map((x) => {
          return { ...x, title: x.teksttitel };
        });
        zetTeksten(data);
      });
    }
  }, [teksten, examennaam, moetUpdaten]);

  return (
    <View>
      {teksten !== undefined &&
        teksten.map((tekst, index) => {
          let percentageGoed = undefined;

          if (statistiekTeksten !== undefined) {
            for (let data of statistiekTeksten) {
              if (data.tekstid === tekst.tekstid) {
                percentageGoed = data.totaalpunten / data.totaalmaxpunten;
              }
            }
          }

          return (
            <View
              key={index}
              style={{
                flexDirection: "row",
                marginRight: 5,
                marginBottom: 5
              }}
            >
              <PercentageGoed factor={percentageGoed} />
              <View
                style={{
                  flex: 1,
                  flexDirection: "row",
                  borderBottomWidth: 1,
                  borderColor: "#ddd"
                }}
              >
                <TouchableOpacity
                  style={{ flex: 1, marginLeft: 4 }}
                  onPress={() => onPress(tekst.tekstid)}
                >
                  <Text style={{ color: colors.tekstKleur }}>
                    {tekst.title}
                  </Text>
                </TouchableOpacity>
                {onTekstVerwijder && (
                  <VerwijderKnop
                    style={{ margin: 5 }}
                    onPress={() => {
                      onTekstVerwijder(tekst.tekstid).then(() => {
                        zetMoetUpdaten(true);
                      });
                    }}
                  />
                )}
              </View>
            </View>
          );
        })}
      {onTekstToevoegen && (
        <ToevoegenKnop
          style={{ margin: 4, alignSelf: "center" }}
          onPress={() => {
            onTekstToevoegen(examennaam).then(() => {
              zetMoetUpdaten(true);
            });
          }}
        />
      )}
    </View>
  );
}
