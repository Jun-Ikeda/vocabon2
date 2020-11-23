import { createStackNavigator } from 'react-navigation-stack';

import Search from './screens/Search/Search';
// import Template from '../../../../dev/Template';

const StackNavigator = createStackNavigator(
  {
    search: Search,

  },
  {
    headerMode: 'none',
  },
);

StackNavigator.navigationOptions = ({ navigation }) => ({
  tabBarVisible: (navigation.state.index === 0),
});

export default StackNavigator;
