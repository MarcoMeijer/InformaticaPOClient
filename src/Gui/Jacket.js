import * as React from "react";
import { View } from "react-native";
import { styles } from "../Styles";

export default function Jacket({ children, kleur }) {
  if (kleur === undefined) kleur = "#f2f2f2";
  return (
    <View style={[styles.setupNormal, { backgroundColor: kleur }]}>
      <View style={[styles.blueBackground]}>{children}</View>
    </View>
  );
}
