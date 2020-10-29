import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';

import Icon from '../../../../../../../components/Icon';
import Color from '../../../../../../../config/Color';

const style = StyleSheet.create({
  container: {
    position: 'absolute',
    height: 50,
    width: 50,
    borderRadius: 25,
    backgroundColor: Color.primary1,
    alignItems: 'center',
    justifyContent: 'center',
    right: 30,
    bottom: 30,
  },
  icon: {
    color: Color.font1,
    fontSize: 32,
  },
});

export default class FloatingButton extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { onPress } = this.props;
    return (
      <TouchableOpacity onPress={onPress} style={style.container}>
        <Icon.Ionicons name="md-search" style={style.icon} />
      </TouchableOpacity>
    );
  }
}
