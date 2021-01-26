import * as React from 'react';
import { Text, View } from 'react-native';
import { Tab, TabsHeader } from './TabsHeader';

function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}

export default function TabTest() {
  return (
    <TabsHeader>
      <Tab name="Home" component={HomeScreen} />
      <Tab name="Settings" component={SettingsScreen} />
    </TabsHeader>
  );
}
