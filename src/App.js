import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";
import { useState, useEffect } from "react";
import { Dimensions, View } from "react-native";
import ExamTextPage from "./ExamTextPage";
import HomePage from "./homepage";
import HomePageLeerlingen from "./homepageleerlingen";
import HomePageLeraren from "./homepageleraren";
import Barten from "./registreren";
import TekstenScherm from "./tekstenscherm";
import ProblemEditPage from "./ProblemEditPage";
import Header from "./Gui/Header";

const Stack = createStackNavigator();

export default function App() {
  const window = Dimensions.get("window");
  const screen = Dimensions.get("screen");
  const [dimensions, setDimensions] = useState({ window, screen });

  const onChange = ({ window, screen }) => {
    setDimensions({ window, screen });
  };

  useEffect(() => {
    Dimensions.addEventListener("change", onChange);
    return () => {
      Dimensions.removeEventListener("change", onChange);
    };
  });

  return (
    <View
      style={{
        height: dimensions.window.height,
        width: dimensions.window.width
      }}
    >
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false
          }}
        >
          <Stack.Screen name="Home" component={HomePage} />
          <Stack.Screen name="Examen tekst" component={ExamTextPage} />
          <Stack.Screen
            name="Leerlingen home pagina"
            component={HomePageLeerlingen}
          />
          <Stack.Screen
            name="Leraren home pagina"
            component={HomePageLeraren}
          />
          <Stack.Screen name="registreren" component={Barten} />
          <Stack.Screen name="Vraag maken" component={ProblemEditPage} />
          <Stack.Screen name="tekstenscherm" component={TekstenScherm} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}
