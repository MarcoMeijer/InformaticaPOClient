import { useTheme } from "@react-navigation/native";
import * as React from "react";
import { View } from "react-native";
import { styles } from "../../Styles";
import { useState } from "react";

export default function Jacket({ children, kleur, kleur2 }) {
  const { colors, windowHeight } = useTheme();
  const [factor] = useState(0.98);

  if (kleur === undefined) kleur = colors.achtergrondKleur;
  if (kleur2 === undefined) kleur2 = colors.blueboxKleur;
  if (windowHeight <= 820) {
    return (
      <View style={[styles.setupNormal, { backgroundColor: kleur }]}>
        <View
          style={{
            backgroundColor: kleur2,
            borderColor: kleur2,
            alignItems: "center",
            justifyContent: "center",
            borderWidth: "10px",
            borderRadius: "10px",
            width: windowHeight * factor * 0.5625,
            height: windowHeight * factor
          }}
        >
          {children}
        </View>
      </View>
    );
  } else {
    return (
      <View style={[styles.setupNormal, { backgroundColor: kleur }]}>
        <View
          style={[
            styles.blueBackground,
            {
              backgroundColor: kleur2,
              borderColor: kleur2
            }
          ]}
        >
          {children}
        </View>
      </View>
    );
  }
}
