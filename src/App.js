import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { useEffect, useState } from 'react';
import { ActivityIndicator, Button, Text, View } from 'react-native';
import ExamTextComp from './Gui/ExamTextComp';
import QuestionComp from './Gui/QuestionComp';
import getData from './server/fetchData';


function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Test screen"
        onPress={() => navigation.navigate('Test')}
      />
    </View>
  );
}
function TestScreen({ navigation }) {
  const [text, setText] = useState(undefined);

  useEffect(() => {
    if (text === undefined) {
      setTimeout(() => {
        getData("test").then(data => setText(data));
      }, 2000);
    }
  }, [text]);

  if(text === undefined) {
    return (<ActivityIndicator/>);
  } else {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <ExamTextComp text={text} />
        <QuestionComp question="Test vraag" options={["A", "B", "C", "D"]} />
        <Button title="Go back" onPress={() => navigation.goBack()} />
      </View>
    );
  }
}

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Test" component={TestScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
