import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import BartTest1 from './BartTest1';
import HomePage from './homepage';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomePage} />
        <Stack.Screen name="BartTest1" component={BartTest1} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
