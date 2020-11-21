import { createStackNavigator } from 'react-navigation-stack';

import Home from './screens/home/Home';
import CreateDeck from './screens/CreateDeck';
// import Template from '../../../../dev/Template';

const StackNavigator = createStackNavigator(
  {
    home: Home,
    createdeck: CreateDeck,
  },
  {
    headerMode: 'none',
  },
);

export default StackNavigator;
