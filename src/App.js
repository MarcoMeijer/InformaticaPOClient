import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { Dimensions, View } from 'react-native';
import ExamTextPage from './ExamTextPage';
import HomePage from './homepage';
import HomePageLeerlingen from './homepageleerlingen';
import HomePageLeraren from './homepageleraren';
import Barten2 from './inloggen';
import Barten from './registreren';
import Barten3 from './tekstenscherm';

const Stack = createStackNavigator();

export default function App() {
  return (
    <View
      style={{
        height: Dimensions.get('window').height,
        width: Dimensions.get('window').width,
      }}
    >
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomePage} />
          <Stack.Screen name="Examen tekst" component={ExamTextPage} />
          <Stack.Screen name="Leerlingen home pagina" component={HomePageLeerlingen} />
          <Stack.Screen name="Leraren home pagina" component={HomePageLeraren} />
          <Stack.Screen name="registreren" component={Barten} />
          <Stack.Screen name="inloggen" component={Barten2} />
          <Stack.Screen name="tekstenscherm" component={Barten3} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}
