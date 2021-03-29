import Text from "../Gui/Basic/Text";
import Button from "../Gui/Basic/Button";
import { View } from "react-native";

export default function FullScreenError({ inhoud, doedit, sluitZelf }) {
  return (
    <View
      style={{
        zIndex: 2,
        flex: 1,
        left: 0,
        top: 0,
        bottom: 0,
        right: 0,
        position: "absolute",
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      <View
        style={{
          left: 0,
          top: 0,
          bottom: 0,
          right: 0,
          backgroundColor: "red",
          position: "absolute",
          opacity: 0.5
        }}
      />
      <View
        style={{
          backgroundColor: "#fff",
          borderRadius: 10,
          padding: 10,
          alignItems: "center"
        }}
      >
        <Text>{inhoud}</Text>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            width: 300
          }}
        >
          <Button
            style={{ margin: 3, flex: 5 }}
            title="Terug"
            onPress={sluitZelf}
          />
          <Button
            style={{ margin: 3, flex: 5 }}
            color="red"
            title="Toch doorgaan"
            onPress={() => {
              doedit();
              sluitZelf();
            }}
          />
        </View>
      </View>
    </View>
  );
}
