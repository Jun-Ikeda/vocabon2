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

StackNavigator.navigationOptions = ({ navigation }) => ({
  tabBarVisible: (navigation.state.index === 0),
});

export default StackNavigator;
