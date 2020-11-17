import { createStackNavigator } from 'react-navigation-stack';

import Setting from './screens/Setting';
// import Template from '../../../../dev/Template';

const StackNavigator = createStackNavigator(
  {
    setting: Setting,
  },
  {
    headerMode: 'none',
  },
);

export default StackNavigator;
