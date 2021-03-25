import { useTheme } from "@react-navigation/native";
import * as React from "react";
import { useState } from "react";
import { View } from "react-native";
import Button from "../../Gui/Basic/Button";
import Text from "../../Gui/Basic/Text";
import Jacket from "../../Gui/Pagina-layout/Jacket";
import useFetch from "../../Hooks/useFetch";
import LeerlingStatistiek from "./LeerlingStatistiek";

export default function LeerlingStatistiekPagina({ navigation }) {
  const [examens] = useFetch("examens");
  const { colors } = useTheme();
  const [open, zetOpen] = useState(false);
  const [teksten, zetTeksten] = useState(undefined);

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
                onPress={() => {}}
              >
                {tekst.title}
              </Text>
            </View>
          );
        })}
      <LeerlingStatistiek />
    </Jacket>
  );
}
