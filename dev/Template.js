import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

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
        <Text>hello!</Text>
      </View>
    );
  }
}

export default Template;
