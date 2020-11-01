import React from 'react';
import { Platform } from 'react-native';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

import Template from '../../../dev/Template';

export default createMaterialBottomTabNavigator(
  {
    Home: {
      screen: Template,
      navigationOptions: {
        tabBarLabel: 'Home',
        tabBarColor: '#842655',
        tabBarIcon: ({ tintColor, focused }) => (
          <Icon size={25} name={Platform.OS === 'ios' ? (focused ? 'ios-home' : 'ios-home-outline') : 'md-home'} style={{ color: tintColor }} />
        ),
      },
    },
    Profile: {
      screen: Template,
      navigationOptions: {
        tabBarLabel: 'Profile',
        tabBarColor: '#1e1e1d',
        tabBarIcon: ({ tintColor, focused }) => (
          <Icon size={25} name={Platform.OS === 'ios' ? (focused ? 'ios-contact' : 'ios-contact-outline') : 'md-contact'} style={{ color: tintColor }} />
        ),
      },
    },
    Settings: {
      screen: Template,
      navigationOptions: {
        tabBarLabel: 'Settings',
        tabBarColor: '#ff3838',
        tabBarIcon: ({ tintColor, focused }) => (
          <Icon size={25} name={Platform.OS === 'ios' ? (focused ? 'ios-settings' : 'ios-settings-outline') : 'md-settings'} style={{ color: tintColor }} />
        ),
      },
    },
  },
  {
    shifting: true,
    activeTintColor: 'white',
    inactiveTintColor: '#ddd',
  },
);
