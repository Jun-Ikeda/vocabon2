import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Color from '../../../../config/Color';

import Header from '../../../../components/header/Header';
import Icon from '../../../../components/Icon';
import Background from '../../../../components/Background';

import { navigateNav } from '../../../Nav';

const shape = require('../../../../../assets/background/shape.jpg');

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerIcon: {
    fontSize: 25,
    color: Color.font3,
  },
  background: {
    flex: 1,
    resizeMode: 'cover',
    width: 'auto',
  },
  backgroundOverlay: {
    backgroundColor: 'black',
    opacity: 0.7,
  },
});

export default class NewStyle extends Component {
  render() {
    return (
      <View style={style.container}>
        <Background
          imageSource={shape}
          imageStyle={style.background}
          overlayStyle={style.backgroundOverlay}
        />
        <Header
          renderLeft={() => (
            <Icon.Ionicons name="md-close" style={style.headerIcon} />
          )}
          onPressLeft={this.cancel}
        />
        <Text>NewStyle</Text>
      </View>
    );
  }

  cancel = () => {
    navigateNav('bottom');
  };
}
