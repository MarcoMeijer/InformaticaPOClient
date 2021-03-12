import { Modal, View } from "react-native";
import ErrorBox from "./ErrorBox";

export default function ErrorBoxList({ errors }) {
  return (
    <View style={{ position: "absolute", right: 0, bottom: 0, zIndex: 1 }}>
      <View
        style={{
          flex: 1,
          justifyContent: "flex-end",
          alignSelf: "flex-end"
        }}
      >
        {errors.map((message, index) => (
          <ErrorBox message={message} key={index} />
        ))}
      </View>
    </View>
  );
}
