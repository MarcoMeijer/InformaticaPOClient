import * as React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import RadioButton from './RadioButton';

export default class RadioChoices extends React.Component {
  state = {
    selected: undefined
  }

  render() {
    return (
      <View>
        {this.props.options.map((object, index) => {
          return (<View key={index} style={[{ flex: 1, flexDirection: 'row', margin: 3 }]}>
            <TouchableOpacity
              onPress={() => {
                this.setState({ selected: object });
              }}
            >
              <RadioButton selected={this.state.selected === object} style={[{ margin: 3 }]} />
            </TouchableOpacity>
            <Text style={[{ margin: 3 }]} >{object}</Text>
          </View>);
        })}
      </View>
    );
  }
}