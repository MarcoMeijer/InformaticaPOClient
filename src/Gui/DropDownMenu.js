import * as React from 'react';
import { useState } from 'react';
import { Button, Text, TouchableOpacity, View } from 'react-native';

export default function DropDownMenu(props) {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(props.value);

  let OpenButton = () => {
    return (<TouchableOpacity
      onPress={() => setOpen(!open)}
    >
      <Text>{selected === undefined ? 'Selecteer optie' : selected}</Text>
    </TouchableOpacity>);
  }

  return (
    <View style={{zIndex: 2}}>
      <OpenButton/>
      {
        open &&
        <View style={{position: 'absolute', flex: 0}}>
          <OpenButton/>
          {props.opties.map((object, index) => {
            return (<Button key={index} title={object} onPress={() => {
                setSelected(object);
            }}/>)
          })}
        </View>
      }
    </View>
  );
}
