// import React, { Component } from 'react';
// import { View } from 'react-native';
// import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

// import Template from '../../../../Template';

// import Background from '../Background';

import Setting from './screens/Setting';
import SettingAccount from './screens/settingelement/SettingAccount';
// import SettingTestElement from './screens/settingelement/SettingTestElement';

const StackNavigator = createStackNavigator(
  {
    setting: { screen: Setting },
    account: { screen: SettingAccount },
    // testelement: { screen: SettingTestElement },
  },
  {
    headerMode: 'none',
    transparentCard: true,
  },
);

export default StackNavigator;
