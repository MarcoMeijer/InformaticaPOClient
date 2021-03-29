import { View } from "react-native";
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
        {errors.messages.map((message) => (
          <ErrorBox
            message={message.error}
            key={message.id}
            type={message.type}
            onClose={() => {
              errors.closeError(message.id);
            }}
          />
        ))}
      </View>
    </View>
  );
}
