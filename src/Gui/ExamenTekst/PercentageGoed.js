import { useEffect, useRef, useState } from "react";
import { Animated, View } from "react-native";
import Text from "../Basic/Text";
import { useTheme } from "@react-navigation/native";

export default function PercentageGoed({ style, factor }) {
  const [percentage, zetPercentage] = useState(0);
  const animation = useRef(new Animated.Value(0)).current;
  const { colors } = useTheme();

  useEffect(() => {
    Animated.timing(animation, {
      toValue: percentage,
      duration: 0
    }).start();
  }, [animation, percentage]);

  useEffect(() => {
    let targetPercentage = Math.round(factor === undefined ? 0 : factor * 100);

    if (percentage !== targetPercentage) {
      let timer = setTimeout(() => {
        zetPercentage(
          percentage < targetPercentage ? percentage + 1 : percentage - 1
        );
      }, 5);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [percentage, factor]);

  const viewStyle = {
    width: 50,
    padding: 4,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 3,
    margin: 1,
    backgroundColor: animation.interpolate({
      inputRange: [0, 40, 60, 100],
      outputRange: [
        colors.ouputRangeColor1,
        colors.ouputRangeColor2,
        colors.ouputRangeColor3,
        colors.ouputRangeColor4
      ]
    })
  };

  return factor === undefined ? (
    <View style={[viewStyle, { backgroundColor: undefined }]}></View>
  ) : (
    <Animated.View style={[viewStyle, style]}>
      <Text style={{ color: "#000000" }}>{percentage}%</Text>
    </Animated.View>
  );
}
