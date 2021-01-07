import * as React from 'react';
import { Text, View } from 'react-native';
import RadioChoices from './RadioChoices';

export default function Question(props) {
    return (
        <View>
            <Text>{props.question}</Text>
            <RadioChoices {...props}/>
        </View>
    )
}
