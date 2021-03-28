import { useTheme } from "@react-navigation/native";
import { useEffect, useRef, useState } from "react";
import { Animated, TextInput, View } from "react-native";

export default function TextBox({
  style,
  title,
  onChangeText,
  value,
  secureTextEntry
}) {
  const { colors } = useTheme();
  const [isFocused, setFocused] = useState(false);
  const animation = useRef(new Animated.Value(0)).current;

  const textAbove = isFocused || value.length !== 0;

  useEffect(() => {
    Animated.timing(animation, {
      toValue: textAbove ? 1 : 0,
      duration: 130
    }).start();
  }, [animation, textAbove]);

  const labelStyle = {
    zIndex: -1,
    position: "absolute",
    margin: 4,
    left: 0,
    top: animation.interpolate({
      inputRange: [0, 1],
      outputRange: [0, -22]
    }),
    fontSize: animation.interpolate({
      inputRange: [0, 1],
      outputRange: [24, 14]
    }),
    color: animation.interpolate({
      inputRange: [0, 1],
      outputRange: ["#999", colors.tekstKleur]
    })
  };

  return (
    <View
      style={[
        {
          marginTop: 20,
          backgroundColor: colors.inputTextBoxBackgroundKleur,
          borderRadius: 5,
          borderColor: colors.inputTextBoxBorderNew1,
          borderWidth: 1,
          borderBottomWidth: 2,
          borderBottomColor: colors.inputTextBoxBorderNew2,
          marginHorizontal: 3
        },
        style
      ]}
    >
      <TextInput
        style={{
          color: colors.tekstKleur,
          fontSize: 24,
          margin: 4,
          outlineWidth: 0
        }}
        onChangeText={onChangeText}
        value={value}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        secureTextEntry={secureTextEntry}
      />
      <Animated.Text style={labelStyle}>{title}</Animated.Text>
    </View>
  );
}
