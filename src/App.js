import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { Dimensions, View } from 'react-native';
import BartTest1 from './BartTest1';
import ExamTextPage from './ExamTextPage';
import HomePage from './homepage';
import HomePageLeerlingen from './homepageleerlingen';
import HomePageLeraren from './homepageleraren';
import Barten from './registreren';

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
          <Stack.Screen name="BartTest1" component={BartTest1} />
          <Stack.Screen name="Examen tekst" component={ExamTextPage} />
          <Stack.Screen name="homepageleerlingen" component={HomePageLeerlingen} />
          <Stack.Screen name="homepage leraren" component={HomePageLeraren} />
          <Stack.Screen name="registreren" component={Barten} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}
