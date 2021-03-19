import { useTheme } from "@react-navigation/native";
import * as React from "react";
import { View } from "react-native";
import Button from "../Basic/Button";
import DarkModeSwitch from "./DarkModeSwitch";
import Logo from "./Logo";

export default function Header({ navigation, children, back }) {
  const { colors } = useTheme();
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
      {back && (
        <Button
          style={{ margin: 1 }}
          title="Vorige pagina"
          onPress={() => {
            navigation.goBack();
          }}
        />
      )}
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
        }}
      ></Button>
    </View>
  );
}
