import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";
import { useEffect, useState } from "react";
import { Dimensions, View } from "react-native";
import ExamTextPage from "./ExamTextPage";
import ErrorBoxList from "./Gui/ErrorBoxList";
import HomePage from "./homepage";
import HomePageLeerlingen from "./homepageleerlingen";
import HomePageLeraren from "./homepageleraren";
import useErrorState from "./Hooks/errorState";
import ProblemEditPage from "./ProblemEditPage";
import Barten from "./registreren";
import TekstenScherm from "./tekstenscherm";

const Stack = createStackNavigator();

export default function App() {
  const window = Dimensions.get("window");
  const screen = Dimensions.get("screen");
  const [dimensions, setDimensions] = useState({ window, screen });
  const [darkMode, zetDarkMode] = useState(false);
  const [errors, addError, addSucces] = useErrorState();

  const LightTheme = {
    colors: {
      achtergrondKleur: "#f2f2f2",
      headerKleur: "#ffffff",
      tekstKleur: "#000000",
      tekstKleurInverted: "#ffffff",
      headerLijnKleur: "#bbb",
      textboxAchtergrondKleur: "#ffffff",
      blueboxKleur: "powderblue",
      buttonKleur: "blue",
      logo: "logoPng",
      inputTextBoxBorderKleur: "#deepskyblue",
      inputTextBoxBackgroundKleur: "#eeeeee"
    },
    zetDarkMode: zetDarkMode,
    darkMode: darkMode,
    addError: addError,
    addSucces: addSucces
  };
  const DarkTheme = {
    colors: {
      achtergrondKleur: "#202124",
      headerKleur: "#101012",
      tekstKleur: "#999",
      tekstKleurInverted: "#999",
      headerLijnKleur: "#141417",
      textboxAchtergrondKleur: "#282a2e",
      blueboxKleur: "#101012",
      buttonKleur: "#000069",
      logo: "logoPng1",
      inputTextBoxBorderKleur: "#555555",
      inputTextBoxBackgroundKleur: "#282a2e"
    },
    zetDarkMode: zetDarkMode,
    darkMode: darkMode,
    addError: addError,
    addSucces: addSucces
  };

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
      {errors && <ErrorBoxList errors={errors} />}
      <NavigationContainer theme={darkMode ? DarkTheme : LightTheme}>
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
