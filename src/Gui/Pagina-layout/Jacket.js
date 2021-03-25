import { useTheme } from "@react-navigation/native";
import * as React from "react";
import { View } from "react-native";
import { styles } from "../../Styles";

export default function Jacket({ children, kleur, kleur2 }) {
  const { colors, windowHeight } = useTheme();
  const factor = 0.98;

  if (kleur === undefined) kleur = colors.achtergrondKleur;
  if (kleur2 === undefined) kleur2 = colors.blueboxKleur;
  return (
    <View style={[styles.setupNormal, { backgroundColor: kleur }]}>
      <View
        style={[
          styles.blueBackground,
          {
            backgroundColor: kleur2,
            borderColor: kleur2,
            transform: [
              { scale: windowHeight <= 820 ? (windowHeight * factor) / 820 : 1 }
            ]
          }
        ]}
      >
        {children}
      </View>
    </View>
  );
}
