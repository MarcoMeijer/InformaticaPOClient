import { useTheme } from "@react-navigation/native";
import * as React from "react";
import { ScrollView, View } from "react-native";
import { styles } from "../../Styles";

export default function Jacket({ children, width, height, kleur, kleur2 }) {
  const { colors } = useTheme();

  if (width === undefined) width = 450;
  if (height === undefined) height = 780;
  if (kleur === undefined) kleur = colors.achtergrondKleur;
  if (kleur2 === undefined) kleur2 = colors.blueboxKleur;

  return (
    <View style={[styles.setupNormal, { backgroundColor: kleur }]}>
      <View style={{ width: width, height: height, alignSelf: "center" }}>
        <ScrollView
          style={[
            styles.blueBackground,
            {
              flex: 1,
              width: width,
              height: height,
              backgroundColor: kleur2,
              borderColor: kleur2
            }
          ]}
          contentContainerStyle={{
            flexGrow: 1,
            alignItems: "center",
            justifyContent: "center"
          }}
          showsVerticalScrollIndicator={false}
        >
          {children}
        </ScrollView>
      </View>
    </View>
  );
}
