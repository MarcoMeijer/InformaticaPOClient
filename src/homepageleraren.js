import * as React from 'react';
import { Text, View } from 'react-native';
import ExamEditPage from './ExamEditPage';
import { Tab, TabsHeader } from './Gui/Tabs';

function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Leraren home pagina</Text>
    </View>
  );
}

export default function HomePageLeraren() {
  return (
    <TabsHeader>
      <Tab name="Home" component={HomeScreen} />
      <Tab name="Tekst maken" component={ExamEditPage} />
    </TabsHeader>
  );
}
