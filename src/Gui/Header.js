import * as React from "react";
import { TouchableOpacity, View, Text } from "react-native";
import { useTheme } from "@react-navigation/native";
import Logo from "./Logo";
import DarkModeSwitch from "./DarkModeSwitch";
import Button from "./Button";

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
