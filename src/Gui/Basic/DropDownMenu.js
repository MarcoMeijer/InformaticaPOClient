import * as React from "react";
import { useState } from "react";
import { View } from "react-native";
import Button from "./Button";

export default function DropDownMenu({ title, opties, onChangeText }) {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(undefined);

  let OpenButton = () => {
    return (
      <Button
        title={selected === undefined ? title : selected}
        onPress={() => setOpen(!open)}
      />
    );
  };

  return (
    <View style={{ zIndex: 2, flex: 1, flexDirection: "row" }}>
      <OpenButton />
      {open && (
        <View style={{ position: "absolute", flex: 1 }}>
          <OpenButton />
          {opties.map((object, index) => {
            return (
              <Button
                key={index}
                title={object}
                color="#01013c"
                bordercolor="#01013c"
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
