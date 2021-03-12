import * as React from "react";
import { Image } from "react-native";
import logoPng from "../afbeeldingen/bzb.PNG";

export default function Logo({ size }) {
  return (
    <Image style={{ width: 399 * size, height: 182 * size }} source={logoPng} />
  );
}
