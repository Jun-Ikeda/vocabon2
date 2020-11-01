import {
  createSwitchNavigator,
  createAppContainer,
} from 'react-navigation';

import Init from './init/Init';
import Launch from './launch/Signup';
import Main from './main/BottomNav';

// import Template from '../../dev/Template';

const Nav = createSwitchNavigator({
  init: Init,
  launch: Launch,
  main: Main,
});

const AppContainer = createAppContainer(Nav);

export default AppContainer;
