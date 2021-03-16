import { useEffect, useRef, useState } from "react";
import { Animated, TextInput, View } from "react-native";
import { useTheme } from "@react-navigation/native";

export default function TextBox({
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
      style={{
        marginTop: 20,
        backgroundColor: colors.achtergrondKleur,
        borderRadius: 5,
        borderBottomWidth: 1,
        borderBottomColor: "#555"
      }}
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
