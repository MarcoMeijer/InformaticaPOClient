import * as React from 'react';
import { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import RadioButton from './RadioButton';

export default function RadioChoices(props) {
  const [isSelected, setSelected] = useState(true);

  return (
    <View>
      {props.options.map((object, index) => {
        return (<View key={index} style={[{ flex: 1, flexDirection: 'row', margin: 3 }]}>
          <TouchableOpacity
            onPress={() => {
              setSelected(object);
            }}
          >
            <RadioButton selected={isSelected === object} style={[{ margin: 3 }]} />
          </TouchableOpacity>
          <Text style={[{ margin: 3 }]} >{object}</Text>
        </View>);
      })}
    </View>
  );
}
