import { useTheme } from "@react-navigation/native";
import * as React from "react";
import { useState } from "react";
import { View } from "react-native";
import Button from "./Button";

export default function DropDownMenu({ title, opties, value, onChangeText }) {
  const { colors } = useTheme();
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(value);

  let OpenButton = () => {
    return (
      <Button
        style={{ flex: 1 }}
        title={selected === undefined ? title : selected}
        onPress={() => setOpen(!open)}
      />
    );
  };

  return (
    <View style={{ zIndex: 2, flex: 1, flexDirection: "row" }}>
      <OpenButton />
      {open && (
        <View style={{ position: "absolute", flex: 1, width: "100%" }}>
          <OpenButton />
          {opties.map((object, index) => {
            return (
              <Button
                style={{ flex: 1 }}
                key={index}
                title={object}
                color={colors.dropdownButtonKleur}
                bordercolor={colors.buttonKleur}
                onPress={() => {
                  onChangeText(object);
                  setSelected(object);
                  setOpen(!open);
                }}
              />
            );
          })}
        </View>
      )}
    </View>
  );
}
