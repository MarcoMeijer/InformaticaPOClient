import { useTheme } from "@react-navigation/native";
import * as React from "react";
import { Image } from "react-native";
import logoPng from "../../afbeeldingen/bzb.PNG";
import logoPng1 from "../../afbeeldingen/bzbdarkmode.png";

export default function Logo({ size }) {
  const { colors } = useTheme();

  return (
    <Image
      style={{ width: 399 * size, height: 182 * size }}
      source={colors.logo === "logoPng" ? logoPng : logoPng1}
    />
  );
}
