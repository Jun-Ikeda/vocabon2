import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Color from '../../../../../../config/Color';

import Header from '../../../../../../components/header/Header';
import Icon from '../../../../../../components/Icon';

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttonIcon: {
    fontSize: 20,
    paddingHorizontal: 20,
    color: Color.background1,
  },
});

class SettingTestElement extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <View style={style.container}>
        <Header
          renderLeft={() => (
            <Icon.Ionicons name="ios-arrow-back" style={style.buttonIcon} />
          )}
          onPressLeft={() => {
            navigation.goBack();
          }}
        />
        <Text style={{ color: 'white' }}>
          This is SettingTestElement screen!
        </Text>
      </View>
    );
  }
}

export default SettingTestElement;
