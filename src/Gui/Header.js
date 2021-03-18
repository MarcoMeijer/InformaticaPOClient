import * as React from "react";
import { View } from "react-native";
import { useTheme } from "@react-navigation/native";
import Logo from "./Logo";
import DarkModeSwitch from "./DarkModeSwitch";
import Button from "./Button";

export default function Header({ navigation, children }) {
  const { colors, addSucces } = useTheme();
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
}
