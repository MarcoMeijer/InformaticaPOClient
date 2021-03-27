import { useTheme } from "@react-navigation/native";
import * as React from "react";
import { useState } from "react";
import { Image, TouchableOpacity, View } from "react-native";
import pullDownPng from "../../afbeeldingen/pulldownknop.png";
import { UitlogKnop } from "../Basic/Knoppen";
import DarkModeSwitch from "./DarkModeSwitch";
import Logo from "./Logo";

export default function Header({ navigation, children }) {
  const { colors, addSucces, windowWidth } = useTheme();
  const [open, setOpen] = useState(false);
  const afbeeldingGrote = 0.13;

  let OpenHeader = () => {
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
          <UitlogKnop
            style={{margin: 5}}
            size={35}
            onPress={() => {
              navigation.navigate("Home");
              addSucces("U bent succesvol uitgelogd.");
            }}
          />
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

          <TouchableOpacity onPress={() => setOpen(!open)}>
            <Image
              style={{
                marginRight: 15,
                width: afbeeldingGrote * 478,
                height: afbeeldingGrote * 341
              }}
              source={pullDownPng}
            />
          </TouchableOpacity>
        </View>
      );
    }
  };

  if (windowWidth < 625) {
    return (
      <View style={{ zIndex: 2 }}>
        <OpenHeader />
        {open && (
          <View style={{ position: "absolute", flex: 1, width: "100%" }}>
            <OpenHeader />
            <View
              style={{
                backgroundColor: colors.headerKleur,
                borderBottomColor: colors.headerLijnKleur,
                borderBottomWidth: 1
              }}
            >
              {children}
              <View
                style={{
                  flexDirection: "row",
                  alignSelf: "center",
                  marginBottom: 4,
                  marginTop: 4
                }}
              >
                <DarkModeSwitch style={{ margin: 10 }} />
                <UitlogKnop
                  style={{margin: 5}}
                  size={35}
                  onPress={() => {
                    navigation.navigate("Home");
                    addSucces("U bent succesvol uitgelogd.");
                  }}
                />
              </View>
            </View>
          </View>
        )}
      </View>
    );
  } else {
    return <OpenHeader />;
  }
}
