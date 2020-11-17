import { createStackNavigator } from 'react-navigation-stack';

import Home from './screens/Home';
// import Template from '../../../../dev/Template';

const StackNavigator = createStackNavigator(
  {
    setting: Home,
  },
  {
    headerMode: 'none',
  },
);

export default StackNavigator;
