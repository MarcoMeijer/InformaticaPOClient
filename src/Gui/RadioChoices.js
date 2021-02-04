import * as React from 'react';
import { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { styles } from '../Styles';
import RadioButton from './RadioButton';

export default function RadioChoices(props) {
  const [isSelected, setSelected] = useState(props.value);

  let color = props.backgroundColor;

  if(color === undefined)
    color = '#fff';

  return (
    <View>
      {props.opties.map((object, index) => {
        return (<View key={index} style={[{ flex: 1, flexDirection: 'row', margin: 3 }]}>
          <TouchableOpacity
            onPress={() => {
              setSelected(object);
            }}
          >
            <RadioButton selected={isSelected === object} style={[{ margin: 3 }]} backgroundColor={color} />
          </TouchableOpacity>
          <Text style={{...styles.text, margin: 5}}>{object}</Text>
        </View>);
      })}
    </View>
  );
}
