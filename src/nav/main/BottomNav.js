import React from 'react';
import { Platform } from 'react-native';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import PropTypes from 'prop-types';

import Template from '../../../dev/Template';

import SettingNav from './setting/SettingNav';

const renderIcon = ({ ios: { active, inactive }, android }) => {
  const renderIconReturn = ({ tintColor, focused }) => {
    const iconIOS = focused ? active : inactive;
    const icon = Platform.OS === 'ios' ? iconIOS : android;
    return (<Icon size={25} name={icon} style={{ color: tintColor }} />);
  };
  renderIconReturn.propTypes = {
    tintColor: PropTypes.string.isRequired,
    focused: PropTypes.bool.isRequired,
  };
  return renderIconReturn;
};

export default createMaterialBottomTabNavigator(
  {
    Home: {
      screen: Template,
      navigationOptions: {
        tabBarLabel: 'Home',
        tabBarColor: '#842655',
        // tabBarIcon: ({ tintColor, focused }) => (
        // <Icon size={25} name={Platform.OS === 'ios' ? (focused ? 'ios-home' : 'ios-home-outline') : 'md-home'} style={{ color: tintColor }} />
        // ),
        tabBarIcon: renderIcon({ ios: { active: 'ios-home', inactive: 'ios-home-outline' }, android: 'md-home' }),
      },
    },
    Profile: {
      screen: Template,
      navigationOptions: {
        tabBarLabel: 'Profile',
        tabBarColor: '#1e1e1d',
        // tabBarIcon: ({ tintColor, focused }) => (
        // <Icon size={25} name={Platform.OS === 'ios' ? (focused ? 'ios-contact' : 'ios-contact-outline') : 'md-contact'} style={{ color: tintColor }} />
        // ),
        tabBarIcon: renderIcon({ ios: { active: 'ios-contact', inactive: 'ios-contact-outline' }, android: 'md-contact' }),
      },
    },
    Settings: {
      screen: SettingNav,
      navigationOptions: {
        tabBarLabel: 'Settings',
        tabBarColor: '#ff3838',
        // tabBarIcon: ({ tintColor, focused }) => (
        // <Icon size={25} name={Platform.OS === 'ios' ? (focused ? 'ios-settings' : 'ios-settings-outline') : 'md-settings'} style={{ color: tintColor }} />
        // ),
        tabBarIcon: renderIcon({ ios: { active: 'ios-settings', inactive: 'ios-settings-outline' }, android: 'md-settings' }),
      },
    },
  },
  {
    shifting: true,
    activeTintColor: 'white',
    inactiveTintColor: '#ddd',
  },
);
