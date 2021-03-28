import { useEffect, useRef, useState } from "react";
import { Animated, View } from "react-native";
import Text from "../Basic/Text";

export default function PercentageGoed({ style, factor }) {
  const [percentage, zetPercentage] = useState(0);
  const animation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(animation, {
      toValue: percentage,
      duration: 0
    }).start();
  }, [animation, percentage]);

  useEffect(() => {
    const targetPercentage = Math.round(factor * 100);

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
      outputRange: ["#ff6136", "#ffc814", "#fff424", "#b3ff40"]
    })
  };

  return factor === undefined ? (
    <View style={[viewStyle, { backgroundColor: undefined }]}></View>
  ) : (
    <Animated.View style={[viewStyle, style]}>
      <Text>{percentage}%</Text>
    </Animated.View>
  );
}
