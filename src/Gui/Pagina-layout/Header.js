import { useTheme } from "@react-navigation/native";

import * as React from "react";
import { View, TouchableOpacity, Image } from "react-native";
import Button from "../Basic/Button";
import DarkModeSwitch from "./DarkModeSwitch";
import Logo from "./Logo";
import pullDownPng from "../../afbeeldingen/pulldownknop.png";

export default function Header({ navigation, children }) {
  const { colors, addSucces, windowWidth } = useTheme();

  const afbeeldingGrote = 0.13;

  if (windowWidth >= 625) {
    return (
      <View
        style={{
          flexDirection: "row",
          backgroundColor: colors.headerKleur,
          borderBottomWidth: 1,
          borderBottomColor: colors.headerLijnKleur,
          alignItems: "center"
        }}
      >
        <View style={{ flexDirection: "row", flex: 1 }}>
          <View
            style={{
              marginLeft: 20,
              margin: 6
            }}
          >
            <Logo size={0.25} />
          </View>

          {children}
        </View>

        <DarkModeSwitch style={{ margin: 10 }} />
        <Button
          style={{ margin: 10 }}
          title="Uitloggen"
          onPress={() => {
            navigation.navigate("Home");
            addSucces("U bent succesvol uitgelogd.");
          }}
        ></Button>
      </View>
    );
  } else {
    return (
      <View
        style={{
          flexDirection: "row",
          backgroundColor: colors.headerKleur,
          borderBottomWidth: 1,
          borderBottomColor: colors.headerLijnKleur,
          alignItems: "center"
        }}
      >
        <View style={{ flexDirection: "row", flex: 1 }}>
          <View
            style={{
              marginLeft: 20,
              margin: 6
            }}
          >
            <Logo size={0.25} />
          </View>
        </View>
        <TouchableOpacity onPress={() => {}}>
          <Image
            style={{
              marginRight
              width: afbeeldingGrote * 478,
              height: afbeeldingGrote * 341
            }}
            source={pullDownPng}
          />
        </TouchableOpacity>
      </View>
    );
  }
}
