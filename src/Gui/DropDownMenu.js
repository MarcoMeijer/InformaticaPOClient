import * as React from 'react';
import { useState } from 'react';
import { Button, View } from 'react-native';

export default function DropDownMenu(props) {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(undefined);

  let OpenButton = () => {
    return (<Button
      title={selected === undefined ? 'Selecteer optie' : selected}
      onPress={() => setOpen(!open)}
    />);
  }

  return (
    <View style={{zIndex: 2, flex: 1, flexDirection: 'row'}}>
      <OpenButton />
      {
        open &&
        <View style={{ position: 'absolute', flex: 1 }}>
          <OpenButton />
          {props.opties.map((object, index) => {
            return (<Button
              key={index}
              title={object}
              color="#98d9f5"
              onPress={() => {
                setSelected(object);
                setOpen(!open);
              }}
            />)
          })}
        </View>
      }
    </View>
  );
}
