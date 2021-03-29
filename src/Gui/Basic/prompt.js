//import { useEffect, useRef } from "react";
import { View, Text, TouchableOpacity } from "react-native";

export default function PromptBox({ message, onClose, theme }) {
  const { colors } = theme;

  let borderColor = colors.achtergrondkleur;
  let backgroundColor = "White";

  //const fadeAnim = useRef(new Animated.Value(10)).current;
  //const onFinish = useRef(onClose);
  //onFinish.current = onClose;

  return (
    <View
      style={{
        backgroundColor: backgroundColor,
        borderColor: borderColor,
        borderWidth: "2px",
        borderRadius: "3px",
        margin: "5px",
        position: "absolute",
        zIndex: 1
      }}
    >
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignSelf: "center"
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
      </View>
    </View>
  );
}
