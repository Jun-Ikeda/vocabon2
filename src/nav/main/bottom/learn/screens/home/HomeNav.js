// import { createAppContainer } from 'react-navigation';
// import {
//   createStackNavigator,
//   TransitionPresets,
// } from 'react-navigation-stack';

import Home from './screens/Home';

// const StackNavigator = createStackNavigator(
//   {
//     home: { screen: Home },
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
  home: { screen: Home },
};
