import * as React from 'react';
import { Button, Text, View } from 'react-native';

export default class App extends React.Component {
  state = {
    data: []
  }

  fetchData() {
    fetch('http://localhost:4000')
      .then(response => response.json())
      .then(data => this.setState({ data: data }))
      .catch(error => console.log(error));
  }

  render() {
    return (
      <View>
        <Button
          onPress={() => {
            this.fetchData();
          }}
          title="Button"
          color="#841584"
        />
        {this.state.data.map((object, index) => {
          return (<Text key={index}>{`a is ${object.a}\nb is ${object.b}\nc is ${object.c}\nd is ${object.d}\n`}</Text>);
        })}
      </View>
    );
  }
}
