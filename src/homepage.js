import * as React from 'react';
import { Button, Text, View } from 'react-native';

export default function HomePage({ navigation }) {
  return (
    <View>

      <Text>
        <Text>Welkom op deze mooie site</Text>
      </Text>

      <Button
        title="Go to Log in screen"
        onPress={() => navigation.navigate('BartTest1')}
      />
      <Button
        title="Go to edit exam screen"
        onPress={() => navigation.navigate('Edit exam')}
      />

    </View>
  );
}
