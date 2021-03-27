import { useTheme } from "@react-navigation/native";
import * as React from "react";
import { View } from "react-native";
import { styles } from "../../Styles";

export default function Jacket({ children, width, height, kleur, kleur2 }) {
  const { colors, windowHeight } = useTheme();
  
  if(width === undefined) width = 450;
  if(height === undefined) height = 800;
  if (kleur === undefined) kleur = colors.achtergrondKleur;
  if (kleur2 === undefined) kleur2 = colors.blueboxKleur;

  const factor = windowHeight <= height ? windowHeight / height : 1;

  return (
    <View style={[styles.setupNormal, { backgroundColor: kleur }]}>
      <View
        style={[
          styles.blueBackground,
          {
            width: width*factor,
            height: height*factor,
            backgroundColor: kleur2,
            borderColor: kleur2,
          }
        ]}
      >
        <View style={{
            flex: 1,
            width: width,
            height: height,
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
