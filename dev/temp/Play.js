import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Cards from './card/Cards';

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  na: {
    flex: 1,
  },
  ma: {
    flex: 3,
    backgroundColor: 'red',
  },
});

class Play extends Component {
  render() {
    return (
      <View style={style.container}>
        <View style={style.na}>
          <Text>This is Template screen!</Text>
        </View>
        <View style={style.ma}>
          <Text>JIJU</Text>
          <Cards />
        </View>
      </View>
    );
  }
}

export default Play;
