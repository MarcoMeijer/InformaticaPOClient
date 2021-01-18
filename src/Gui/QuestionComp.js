import * as React from 'react';
import { Text, View } from 'react-native';
import { styles } from '../Styles';
import RadioChoices from './RadioChoices';

export default function QuestionComp(props) {
  return (
    <View>
      <Text style={styles.text}>{props.data.question}</Text>
      <RadioChoices {...props.data} />
    </View>
  )
}
