import { useTheme } from "@react-navigation/native";
import * as React from "react";
import { View } from "react-native";
import { styles } from "../../Styles";

export default function Jacket({ children, kleur, kleur2 }) {
  const { colors, windowHeight } = useTheme();
  
  if (kleur === undefined) kleur = colors.achtergrondKleur;
  if (kleur2 === undefined) kleur2 = colors.blueboxKleur;

  const factor = windowHeight <= 800 ? windowHeight / 800 : 1;

  return (
    <View style={[styles.setupNormal, { backgroundColor: kleur }]}>
      <View
        style={[
          styles.blueBackground,
          {
            width: 450*factor,
            height: 800*factor,
            backgroundColor: kleur2,
            borderColor: kleur2,
          }
        ]}
      >
        <View style={{
            flex: 1,
            width: 450,
            height: 800,
            alignItems: "center",
            justifyContent: "center",
            transform: [
              { scale: factor }
            ]
          }}
        >
          {children}
        </View>
      </View>
    </View>
  );
}
