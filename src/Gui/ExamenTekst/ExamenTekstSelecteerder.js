import { useTheme } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { View } from "react-native";
import fetchData from "../../Database/fetchData";
import { ToevoegenKnop, VerwijderKnop } from "../Basic/Knoppen";
import Text from "../Basic/Text";

export default function ExamenTekstSelecteerder({ examennaam, onPress, onTekstToevoegen, onTekstVerwijder }) {
  const { colors } = useTheme();
  const [moetUpdaten, zetMoetUpdaten] = useState(true);
  const [teksten, zetTeksten] = useState(undefined);

  useEffect(() => {
    if (moetUpdaten || teksten === undefined) {
      zetMoetUpdaten(false);
      fetchData("teksten", { examennaam: examennaam }).then((data) => {
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
          return (
            <View
              key={index}
              style={{
                flexDirection: "row",
                borderRadius: 3,
                borderBottomWidth: 1,
                borderColor: '#ddd',
                marginLeft: 30,
                marginRight: 5,
                marginBottom: 5,
              }}
            >
              <Text
                style={{
                  flex: 1,
                  color: colors.tekstKleur
                }}
                onPress={() => onPress(tekst.tekstid)}
              >
                {tekst.title}
              </Text>
              {
                onTekstVerwijder &&
                <VerwijderKnop
                  style={{margin: 5}}
                  onPress={() => {
                    onTekstVerwijder(tekst.tekstid)
                      .then(() => {
                        zetMoetUpdaten(true);
                      });
                  }}
                />
              }
            </View>
          );
        })}
      {
        onTekstToevoegen &&
        <ToevoegenKnop
          style={{ margin: 4, alignSelf: "center"}}
          onPress={() => {
            onTekstToevoegen(examennaam)
              .then(() => {
                zetMoetUpdaten(true);
              });
          }}
        />
      }
    </View>
  );
}
