import React from 'react';
import { createAppContainer } from 'react-navigation';
import createAnimatedSwitchNavigator from 'react-navigation-animated-switch';
// import { Transition } from 'react-native-reanimated';

import Color from '../../../config/Color';

import Template from '../../../../dev/Template';

import Icon from '../../../components/Icon';

import LearnNav from './learn/LearnNav';
import SettingNav from './setting/SettingNav';

export const BottomTabs = {
  routes: {
    learn: LearnNav,
    setting: SettingNav,
    template: Template,
  },
  names: ['learn', 'setting', 'browse'],
  icon: [
    () => (
      <Icon.MaterialCommunityIcons
        name="cards"
        size={28}
        style={{ color: Color.font3 }}
      />
    ),
    () => (
      <Icon.Ionicons
        name="md-settings"
        size={28}
        style={{ color: Color.font3 }}
      />
    ),
    () => (
      <Icon.MaterialCommunityIcons
        name="web"
        size={28}
        style={{ color: Color.font3 }}
      />
    ),
  ],
};
// //24337d
// //092c80
// //338748
// //014a04

const AnimatedSwitchNavigator = createAnimatedSwitchNavigator(
  { ...BottomTabs.routes },
  // {
  //   transition: (
  //     <Transition.Together>
  //       <Transition.Out type="fade" durationMs={300} />
  //       <Transition.In type="fade" durationMs={300} />
  //     </Transition.Together>
  //   ),
  // },
);

export const AppContainer = createAppContainer(AnimatedSwitchNavigator);
