// import { createAppContainer } from 'react-navigation';
// import {
//   createStackNavigator,
//   TransitionPresets,
// } from 'react-navigation-stack';

import UserMenu from './screens/UserMenu';

// const StackNavigator = createStackNavigator(
//   {
//     usermenu: { screen: UserMenu },
//   },
//   {
//     headerMode: 'none',
//     transparentCard: true,
//     defaultNavigationOptions: {
//       ...TransitionPresets.RevealFromBottomAndroid,
//     },
//   },
// );

// const AppContainer = createAppContainer(StackNavigator);

// export default AppContainer;

export default {
  usermenu: { screen: UserMenu },
};
