import { useTheme } from "@react-navigation/native";
import * as React from "react";
import { useState } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import Header from "./Header";

export function Tab({ name, tabNavigator, current }) {
  const { colors } = useTheme();

  if (current === name) {
    return (
      <Text
        style={{
          color: colors.tekstKleur,
          marginLeft: 20,
          alignSelf: "center"
        }}
      >
        <b>{name}</b>
      </Text>
    );
  } else {
    return (
      <TouchableOpacity
        onPress={() => {
          tabNavigator(name);
        }}
        style={{ alignSelf: "center" }}
      >
        <Text style={{ color: colors.tekstKleur, marginLeft: 20 }}>{name}</Text>
      </TouchableOpacity>
    );
  }
}
export function TabsHeader({ navigation, children }) {
  const [selectedComponent, setSelectedComponent] = useState(
    children[0].props.name
  );

  const childrenWithProps = React.Children.map(children, (child) => {
    return React.cloneElement(child, {
      tabNavigator: setSelectedComponent,
      current: selectedComponent
    });
  });

  return (
    <View style={{ flex: 1 }}>
      <Header navigation={navigation}>{childrenWithProps}</Header>
      {children.map((child) => {
        const { name } = child.props;

        if (name === selectedComponent) {
          return (
            <ScrollView
              key={name}
              style={{ height: 1 }}
              contentContainerStyle={{ flexGrow: 1 }}
            >
              <View style={{ flex: 1 }} key={name}>
                <View style={{ flexDirection: "collumn", flex: 1 }}>
                  <child.props.component navigation={navigation} />
                </View>
              </View>
            </ScrollView>
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
