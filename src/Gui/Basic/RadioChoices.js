import * as React from "react";
import { useState } from "react";
import { TouchableOpacity, View } from "react-native";
import { styles } from "../../Styles";
import RadioButton from "./RadioButton";
import Text from "./Text";

export default function RadioChoices({
  backgroundColor,
  opties,
  onChangeText,
  value
}) {
  const [selected, setSelected] = useState(value);

  let color = backgroundColor;

  if (color === undefined) color = "#fff";

  React.useEffect(() => {
    setSelected(value);
  }, [value]);

  return (
    <View>
      {opties.map((object, index) => {
        return (
          <View
            key={index}
            style={{ flex: 1, flexDirection: "row", margin: 3 }}
          >
            <TouchableOpacity
              onPress={() => {
                setSelected(object);
                onChangeText(object);
              }}
            >
              <RadioButton
                selected={selected === object}
                style={{ margin: 3 }}
                backgroundColor={color}
              />
            </TouchableOpacity>
            <Text style={{ ...styles.text, margin: 5 }}>{object}</Text>
          </View>
        );
      })}
    </View>
  );
}
