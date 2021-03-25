import { useTheme } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { View } from "react-native";
import fetchData from "../../Database/fetchData";
import Button from "../Basic/Button";
import Text from "../Basic/Text";

export default function ExamenTekstSelecteerder({ examennaam, titel, onPress }) {
  const { colors } = useTheme();
  const [open, zetOpen] = useState(false);
  const [teksten, zetTeksten] = useState(undefined);

  useEffect(() => {
    if (teksten === undefined && open) {
      fetchData("teksten", { examennaam: examennaam }).then((data) => {
        data = data.map((x) => {
          return { ...x, title: x.teksttitel };
        });
        zetTeksten(data);
      });
    }
  }, [teksten, examennaam, open]);

  return (
    <View>
      <Button
        title={titel}
        style={{ margin: 5 }}
        onPress={() => zetOpen(!open)}
      />
      {open && teksten !== undefined &&
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
    </View>
  );
}
