import * as React from 'react';
import { View, Text } from 'react-native';
import homepagellrtabs from './homepagellrtabs';

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Teksten gaan oefenen"
        onPress={() => nabigation.navigate('Details')}
    />
    </View>
  );
}

const Stack = createStackNavigator();

function TekstenOefenen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Teksten Oefenen</Text>
    </View>
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Overview' }}/>
        <Stack.Screen name="TekstenOefenen" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}