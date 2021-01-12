import * as React from 'react';
import { View, Button, Text } from 'react-native';

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
  
    </View> 
  );
}
