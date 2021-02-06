import * as React from 'react';
import { useState } from 'react';
import { Button, View } from 'react-native';
import { styles } from '../Styles';


export function Tab({ name, component, tabNavigator }) {
  return (
    <Button
      title={name}
      onPress={() => {
        tabNavigator({ f: component });
      }}
    />
  );
}
export function TabsHeader({ navigation, children }) {
  const [selectedComponent, setSelectedComponent] = useState({ f: children[0].props.component });

  const childrenWithProps = React.Children.map(children, child => {
    return React.cloneElement(child, { tabNavigator: setSelectedComponent });
  });

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.rowContainer}>
        {childrenWithProps}
      </View>
      {<selectedComponent.f style={{ flex: 1 }} navigation={navigation} />}
    </View>
  );
}