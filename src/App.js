import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import BartTest1 from './BartTest1';
import ExamEditPage from './ExamEditPage';
import ExamTextPage from './ExamTextPage';
import HomePage from './homepage';
import HomePageLeerlingen from './homepageleerlingen';
import Barten from './registreren';
import TabTest from './TabTest';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomePage} />
        <Stack.Screen name="BartTest1" component={BartTest1} />
        <Stack.Screen name="Edit exam" component={ExamEditPage} />
        <Stack.Screen name="Examen tekst" component={ExamTextPage} />
        <Stack.Screen name="homepageleerlingen" component={HomePageLeerlingen}/>
        <Stack.Screen name="registreren" component={Barten}/>
        <Stack.Screen name="tabtest" component={TabTest}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
