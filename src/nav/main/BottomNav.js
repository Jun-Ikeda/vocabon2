import React from 'react';
import { Platform } from 'react-native';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import PropTypes from 'prop-types';

// import Template from '../../../dev/Template';

import HomeNav from './home/HomeNav';
import SearchNav from './search/SearchNav';
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
      screen: HomeNav,
      navigationOptions: {
        tabBarLabel: 'Home',
        tabBarColor: '#842655',
        tabBarIcon: renderIcon({ ios: { active: 'ios-home', inactive: 'ios-home-outline' }, android: 'md-home' }),
      },
    },
    Profile: {
      screen: SearchNav,
      navigationOptions: {
        tabBarLabel: 'Profile',
        tabBarColor: '#1e1e1d',
        tabBarIcon: renderIcon({ ios: { active: 'ios-contact', inactive: 'ios-contact-outline' }, android: 'md-contact' }),
      },
    },
    Settings: {
      screen: SettingNav,
      navigationOptions: {
        tabBarLabel: 'Settings',
        tabBarColor: '#ff3838',
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
