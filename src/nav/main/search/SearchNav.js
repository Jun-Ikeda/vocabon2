import { createStackNavigator } from 'react-navigation-stack';

import Search from './screens/Search';
// import Template from '../../../../dev/Template';

const StackNavigator = createStackNavigator(
  {
    setting: Search,
  },
  {
    headerMode: 'none',
  },
);

export default StackNavigator;
