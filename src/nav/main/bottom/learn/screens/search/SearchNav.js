// import { createAppContainer } from 'react-navigation';
// import {
//   createStackNavigator,
//   TransitionPresets,
// } from 'react-navigation-stack';

import Search from './screens/Search';

// const StackNavigator = createStackNavigator(
//   {
//     search: { screen: Search },
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
  search: { screen: Search },
};
