import { useTheme } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { View } from "react-native";
import fetchData from "../../Database/fetchData";
import { EditKnop, FouwKnop, ToevoegenKnop, VerwijderKnop } from "../Basic/Knoppen";
import Text from "../Basic/Text";

export default function ExamenTekstSelecteerder({ examennaam, titel, onPress, onTekstToevoegen, onTekstVerwijder, onEditExamen, onVerwijderExamen }) {
  const { colors } = useTheme();
  const [open, zetOpen] = useState(false);
  const [moetUpdaten, zetMoetUpdaten] = useState(true);
  const [teksten, zetTeksten] = useState(undefined);

  useEffect(() => {
    if ((moetUpdaten || teksten === undefined) && open) {
      zetMoetUpdaten(false);
      fetchData("teksten", { examennaam: examennaam }).then((data) => {
        data = data.map((x) => {
          return { ...x, title: x.teksttitel };
        });
        zetTeksten(data);
      });
    }
  }, [teksten, examennaam, open, moetUpdaten]);

  return (
    <View>
      <View style={[{
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#e8f6f6",
        borderRadius: 10
      }, open && {
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
        marginBottom: 8,
      }]}>
        <FouwKnop
          style={{ margin: 10 }}
          zetOpen={zetOpen}
        />
        <Text style={{flex: 1}}>{titel}</Text>
        {
          onEditExamen &&
          <EditKnop
            style={{ margin: 5 }}
            onPress={onEditExamen}
          />
        }
        {
          onVerwijderExamen &&
          <VerwijderKnop
            style={{ margin: 5 }}
            onPress={onVerwijderExamen}
          />
        }
      </View>
      {open && teksten !== undefined &&
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
        open && onTekstToevoegen &&
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
