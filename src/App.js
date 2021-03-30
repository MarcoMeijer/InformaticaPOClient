import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";
import { useEffect, useState } from "react";
import { Dimensions, View } from "react-native";
import usePromptState from "./Hooks/promptState";
import ErrorBoxList from "./Gui/Errors/ErrorBoxList";
import useErrorState from "./Hooks/errorState";
import InlogPagina from "./Paginas/inlogPagina";
import EigenGegevens from "./Paginas/leerlingen/EigenGegevens";
import HomePageLeerlingen from "./Paginas/leerlingen/leerlingenHomePagina";
import ExamTextPage from "./Paginas/leerlingen/TekstOefenenPagina";
import LeerlingGegevens1 from "./Paginas/leraren/LeerlingGegevens/LeerlingGegevens1";
import LeerlingGegevens2 from "./Paginas/leraren/LeerlingGegevens/LeerlingGegevens2";
import LerarenHomePagina from "./Paginas/leraren/lerarenHomePagina";
import TekstAanpassenPagina from "./Paginas/leraren/Teksten/TekstAanpassenPagina";
import VraagAanpassenPagina from "./Paginas/leraren/Vragen/VraagAanpassenPagina";
import RegistreerPagina from "./Paginas/registreerPagina";
import FullScreenError from "./Hooks/fullScreenError";

const Stack = createStackNavigator();

export default function App() {
  const window = Dimensions.get("window");
  const screen = Dimensions.get("screen");
  const [dimensions, setDimensions] = useState({ window, screen });
  const [darkMode, zetDarkMode] = useState(false);
  const [errors, addError, addSucces] = useErrorState();
  const [prompt, zetPrompt] = usePromptState();

  const minWidth = 800;
  const minHeight = 800;

  let ratio = Math.min(
    dimensions.window.width / minWidth,
    dimensions.window.height / minHeight
  );
  if (ratio > 1) ratio = 1;

  const newWidth = dimensions.window.width / ratio;
  const newHeight = dimensions.window.height / ratio;

  const globals = {
    zetDarkMode: zetDarkMode,
    darkMode: darkMode,
    addError: addError,
    addSucces: addSucces,
    windowHeight: newHeight,
    windowWidth: newWidth,
    zetPrompt: zetPrompt
  };

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
      inputTextBoxBackgroundKleur: "#eeeeee",
      radioButtonKleur: "#ffffff",
      errorBorderKleur: "#c20834",
      errorBackgroundKleur: "#ffcccc",
      succesBorderKleur: "#23cf30",
      succesBackgroundKleur: "#e4ffcc",
      dropdownButtonKleur: "#bfbfbf",
      inputTextBoxBorderNew1: "#dddddd",
      inputTextBoxBorderNew2: "#aaa",
      fouwDoosHeaderBackgroundKleur: "#e8f6f6",
      tekstKleurFouwDoos: "#000000",
      fouwDoosAchtergrondKLeur: "#ffffff",
      fouwDoosLijnKLeur: "#ddd",
      ouputRangeColor1: "#ff6136",
      ouputRangeColor2: "#ffc814",
      ouputRangeColor3: "#fff424",
      ouputRangeColor4: "#b3ff40",
      colorScale: "qualitative"
    },
    ...globals
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
      inputTextBoxBorderKleur: "#8a8a8a",
      inputTextBoxBackgroundKleur: "#282a2e",
      radioButtonKleur: "#999",
      errorBorderKleur: "#750620",
      errorBackgroundKleur: "#594848",
      succesBorderKleur: "#0b4710",
      succesBackgroundKleur: "#464f3d",
      dropdownButtonKleur: "#01013c",
      inputTextBoxBorderNew1: "#8a8a8a",
      inputTextBoxBorderNew2: "#8a8a8a",
      fouwDoosHeaderBackgroundKleur: "#787878",
      tekstKleurFouwDoos: "#000000",
      fouwDoosAchtergrondKLeur: "#101012",
      fouwDoosLijnKLeur: "#525252",
      ouputRangeColor1: "#8a331c",
      ouputRangeColor2: "#a17e0e",
      ouputRangeColor3: "#757012",
      ouputRangeColor4: "#49661e",
      colorScale: "grayscale"
    },
    ...globals
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
    <NavigationContainer theme={darkMode ? DarkTheme : LightTheme}>
      <View
        style={{
          height: dimensions.window.height,
          width: dimensions.window.width,
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        {errors && <ErrorBoxList errors={errors} />}
        {prompt.message !== "" && (
          <FullScreenError
            inhoud={prompt.message}
            sluitZelf={() => {
              zetPrompt({ ...prompt, message: "" });
            }}
            doedit={prompt.onClose}
          />
        )}
        <View
          style={{
            height: newHeight,
            width: newWidth,
            transform: [{ scale: ratio }]
          }}
        >
          <Stack.Navigator
            screenOptions={{
              headerShown: false
            }}
          >
            <Stack.Screen name="Home" component={InlogPagina} />
            <Stack.Screen name="Examen tekst" component={ExamTextPage} />
            <Stack.Screen
              name="Leerlingen home pagina"
              component={HomePageLeerlingen}
            />
            <Stack.Screen
              name="Leraren home pagina"
              component={LerarenHomePagina}
            />
            <Stack.Screen
              name="Tekst aanpassen pagina"
              component={TekstAanpassenPagina}
            />
            <Stack.Screen
              name="Leerling gegevens"
              component={LeerlingGegevens1}
            />
            <Stack.Screen
              name="Leerling gegevens2"
              component={LeerlingGegevens2}
            />
            <Stack.Screen
              name="Vraag aanpassen"
              component={VraagAanpassenPagina}
            />
            <Stack.Screen name="Eigen gegevens" component={EigenGegevens} />
            <Stack.Screen name="Registreren" component={RegistreerPagina} />
          </Stack.Navigator>
        </View>
      </View>
    </NavigationContainer>
  );
}
