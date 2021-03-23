import { useEffect, useRef } from "react";
import { Animated, Text, TouchableOpacity } from "react-native";

export default function ErrorBox({ message, onClose, type, theme }) {
  const { colors } = theme;

  let borderColor = colors.errorBorderKleur;
  let backgroundColor = colors.errorBackgroundKleur;
  if (type === "success") {
    borderColor = colors.succesBorderKleur;
    backgroundColor = colors.succesBackgroundKleur;
  }

  const fadeAnim = useRef(new Animated.Value(10)).current;
  const onFinish = useRef(onClose);
  onFinish.current = onClose;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 5000
    }).start(({ finished }) => {
      if (finished) onFinish.current();
    });
  }, [fadeAnim]);

  return (
    <Animated.View
      style={{
        backgroundColor: backgroundColor,
        borderColor: borderColor,
        opacity: fadeAnim,
        borderWidth: "2px",
        borderRadius: "3px",
        margin: "5px"
      }}
    >
      <TouchableOpacity
        style={{
          position: "absolute",
          right: "3px",
          top: "-12px",
          backgroundColor: backgroundColor,
          borderColor: borderColor,
          borderWidth: "2px",
          borderRadius: "9px",
          width: "22px",
          height: "22px",
          alignItems: "center",
          justifyContent: "center"
        }}
        onPress={onClose}
      >
        <Text
          style={{
            color: borderColor,
            fontSize: 15
          }}
        >
          <b>X</b>
        </Text>
      </TouchableOpacity>
      <Text
        style={{
          margin: "5px",
          color: borderColor,
          fontSize: 18,
          maxWidth: 300
        }}
      >
        <b>{message}</b>
      </Text>
    </Animated.View>
  );
}
