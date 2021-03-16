import { useEffect, useState } from "react";
import { View, TouchableOpacity } from "react-native";
import fetchData from "../server/fetchData";
import Text from "./Text";
import Button from "./Button";

export default function ExamTextSelector({ examenid, titel, onPress }) {
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
              style={{
                backgroundColor: "#fff",
                borderRadius: 3,
                borderWidth: 1,
                borderColor: "#bbb"
              }}
            >
              <Text onPress={() => onPress(tekst.tekstid)}>{tekst.title}</Text>
            </View>
          );
        })}
    </View>
  );
}
