import * as React from "react";
import { useState } from "react";
import { Button, View } from "react-native";
import { styles } from "../Styles";

export function Tab({ name, tabNavigator }) {
  return (
    <Button
      title={name}
      onPress={() => {
        tabNavigator(name);
      }}
    />
  );
}
export function TabsHeader({ navigation, children }) {
  const [selectedComponent, setSelectedComponent] = useState(
    children[0].props.name
  );

  const childrenWithProps = React.Children.map(children, (child) => {
    return React.cloneElement(child, { tabNavigator: setSelectedComponent });
  });

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.rowContainer}>{childrenWithProps}</View>
      {children.map((child) => {
        const { name } = child.props;

        if (name === selectedComponent) {
          return (
            <View style={{ flex: 1 }} key={name}>
              <child.props.component navigation={navigation} />;
            </View>
          );
        } else {
          return (
            <View style={{ display: "none" }} key={name}>
              <child.props.component navigation={navigation} />
            </View>
          );
        }
      })}
    </View>
  );
}
