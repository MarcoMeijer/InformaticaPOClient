import { AppRegistry } from "react-native";
import App from "./App";

// register the app
AppRegistry.registerComponent("app", () => App);
AppRegistry.runApplication("app", {
  initialProps: {},
  rootTag: document.getElementById("root"),
});
