import * as React from "react";
import { Image } from "react-native";
import logoPng from "../afbeeldingen/bzb.PNG";
import logoPng1 from "../afbeeldingen/bzbdarkmode.png";
import { useTheme } from "@react-navigation/native";

export default function Logo({ size }) {
  const { colors } = useTheme();

  if (colors.logo === "logoPng") {
    return (
      <Image
        style={{ width: 399 * size, height: 182 * size }}
        source={logoPng}
      />
    );
  } else {
    return (
      <Image
        style={{ width: 399 * size, height: 182 * size }}
        source={logoPng1}
      />
    );
  }
}
