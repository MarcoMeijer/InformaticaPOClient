import { useEffect, useState } from "react";
import { View } from "react-native";
import fetchData from "../server/fetchData";
import Text from "./Text";
import Button from "./Button";
import { useTheme } from "@react-navigation/native";

export default function ExamTextSelector({ examenid, titel, onPress }) {
  const { colors } = useTheme();
  const [open, zetOpen] = useState(false);
  const [teksten, zetTeksten] = useState([]);

  useEffect(() => {
    if (teksten.length === 0 && open) {
      fetchData("teksten", { examenid: examenid }).then((data) => {
        data = data.map((x) => {
          return { ...x, title: x.teksttitel };
        });
        zetTeksten(data);
      });
    }
  }, [teksten, examenid, open]);

  return (
    <View>
      <Button
        title={titel}
        style={{ margin: 5 }}
        onPress={() => zetOpen(!open)}
      />
      {open &&
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
