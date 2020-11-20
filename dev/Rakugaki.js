import React, { Component } from 'react';
import { View, Text } from 'react-native';

const arrowfunction = (a, b) => {
  const sum = a + b;
  return sum;
};

export default class Rakugaki extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View>
        <Text> Rakugaki </Text>
      </View>
    );
  }
}
