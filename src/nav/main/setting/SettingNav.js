import { createStackNavigator } from 'react-navigation-stack';

import Setting from './screens/Setting';
import Account from './screens/settingitems/Account';
import BasicSetting from './screens/settingitems/BasicSetting';

// import Template from '../../../../dev/Template';

const StackNavigator = createStackNavigator(
  {
    setting: Setting,
    account: Account,
    basicsetting: BasicSetting,
  },
  {
    headerMode: 'none',
  },
);

StackNavigator.navigationOptions = ({ navigation }) => ({
  tabBarVisible: (navigation.state.index === 0),
});

export default StackNavigator;
