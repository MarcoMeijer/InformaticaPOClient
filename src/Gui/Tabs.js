import * as React from 'react';
import { useState } from 'react';
import { Button, View } from 'react-native';
import { styles } from '../Styles';


export function Tab({ name, component, tabNavigator }) {
  return (
    <Button
      title={name}
      onPress={() => {
        tabNavigator(component);
      }}
    />
  );
}
export function TabsHeader({ children }) {
  const [selectedComponent, setSelectedComponent] = useState(children[0].props.component);

  const childrenWithProps = React.Children.map(children, child => {
    return React.cloneElement(child, { tabNavigator: setSelectedComponent });
  });

  return (
    <View>
      <View style={styles.rowContainer}>
        {childrenWithProps}
      </View>
      {selectedComponent}
    </View>
  );
}