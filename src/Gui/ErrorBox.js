import { Text, View } from "react-native";

export default function ErrorBox({ message }) {
  return (
    <View
      style={{
        backgroundColor: "#ffcccc",
        borderColor: "#c20834",
        borderWidth: "2px",
        borderRadius: "3px",
        margin: "5px"
      }}
    >
      <Text
        style={{
          margin: "5px",
          color: "#c20834",
          fontSize: 18
        }}
      >
        <b>{message}</b>
      </Text>
    </View>
  );
}
