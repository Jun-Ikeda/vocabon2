import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
});

class Template extends Component {
  render() {
    return (
      <View style={style.container}>
        <Text>This is Template screen!</Text>
      </View>
    );
  }
}

export default Template;
