import React, { Component } from 'react';
import { View, Image } from 'react-native';

import Storage from '../../config/Storage';

const icon = require('../../../assets/icon.png');

export default class Init extends Component {
  async UNSAFE_componentWillMount() {
    const { navigation } = this.props;
    await Storage.Function.load({ key: 'isInitialized' });
    navigation.navigate('launch');
  }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Image
          source={icon}
          style={{ height: 128, width: 128, opacity: 0.2 }}
        />
      </View>
    );
  }
}
