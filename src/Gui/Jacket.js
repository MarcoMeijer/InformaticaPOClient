import * as React from "react";
import { View } from "react-native";
import { styles } from "../Styles";
import { useTheme } from "@react-navigation/native";

export default function Jacket({ children, kleur, kleur2 }) {
  const { colors } = useTheme();

  if (kleur === undefined) kleur = colors.achtergrondKleur;
  if (kleur2 === undefined) kleur2 = colors.blueboxKleur;
  return (
    <View style={[styles.setupNormal, { backgroundColor: kleur }]}>
      <View
        style={[
          styles.blueBackground,
          { backgroundColor: kleur2, borderColor: kleur2 }
        ]}
      >
        {children}
      </View>
    </View>
  );
}
