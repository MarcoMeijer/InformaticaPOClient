import * as React from 'react';
import { Button, Text, View } from 'react-native';
import getData from './server/fetchData.js';

export default class App extends React.Component {
  state = {
    data: []
  }

  fetchData() {
    getData('')
      .then(data => this.setState({data: data}))
      .catch(error => console.log(error));
  }

  render() {
    return (
      <View>
        <Button
          onPress={() => {
            this.fetchData();
          }}
          title="Fetch data"
          color="#841584"
        />
        {this.state.data.map((object, index) => {
          return (<Text key={index}>{`a is ${object.a}\nb is ${object.b}\nc is ${object.c}\nd is ${object.d}\n`}</Text>);
        })}
      </View>
    );
  }
}
