import { createStackNavigator } from 'react-navigation-stack';

import Template from '../../../../dev/Template';

const StackNavigator = createStackNavigator(
  {
    setting: Template,
  },
  {
    headerMode: 'none',
  },
);

export default StackNavigator;
