import React from 'react';
import { Platform } from 'react-native';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import PropTypes from 'prop-types';

import Icon from '../../components/Icon';

// import Template from '../../../dev/Template';
import HomeNav from './home/HomeNav';
import SearchNav from './search/SearchNav';
import SettingNav from './setting/SettingNav';
import Color from '../../config/Color';

const renderIcon = ({ icon }) => {
  const renderIconReturn = ({ tintColor }) => (
    <Icon.Ionicons size={25} name={icon} style={{ color: tintColor }} />
  );
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
        tabBarColor: Color.green2,
        tabBarIcon: renderIcon({ icon: 'md-home' }),
      },
    },
    Profile: {
      screen: SearchNav,
      navigationOptions: {
        tabBarLabel: 'Search',
        tabBarColor: Color.red1,
        tabBarIcon: renderIcon({ icon: 'md-search' }),
      },
    },
    Settings: {
      screen: SettingNav,
      navigationOptions: {
        tabBarLabel: 'Settings',
        tabBarColor: Color.blue1,
        tabBarIcon: renderIcon({ icon: 'md-settings' }),
      },
    },
  },
  {
    shifting: true,
    activeTintColor: Color.white1,
    inactiveTintColor: Color.white4,
  },
);
