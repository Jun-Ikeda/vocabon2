import React from 'react';
// import { View } from 'react-native';
// import { createAppContainer } from 'react-navigation';
import createAnimatedSwitchNavigator from 'react-navigation-animated-switch';
// import { Transition } from 'react-native-reanimated';

import BottomNav from './bottom/BottomNav';
import DrawerNav from './drawer/DrawerNav';

const AnimatedSwitchNavigator = createAnimatedSwitchNavigator(
  {
    bottom: { screen: BottomNav },
    drawer: { screen: DrawerNav },
  },
  // {
  //   transition: (
  //     <Transition.Together>
  //       <Transition.Out type="fade" durationMs={300} />
  //       <Transition.In type="fade" durationMs={300} />
  //     </Transition.Together>
  //   ),
  // },
);
export default AnimatedSwitchNavigator;

// const AppContainer = createAppContainer(AnimatedSwitchNavigator);

// export default class MainNav extends Component {
//   render() {
//     return (
//       <View style={{ flex: 1 }}>
//         <Drawer />
//         <AppContainer />
//       </View>
//     );
//   }
// }
