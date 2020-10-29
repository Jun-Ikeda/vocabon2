import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { StyleConst } from '../../../../../../../../../config/Const';

const style = StyleSheet.create({
  container: {
    ...StyleConst.absoluteFullScreen,
  },
});

export default class MenuOverlay extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (<View style={style.container}>
        <Text></Text>
    </View>);
  }
}
