import { createStackNavigator } from 'react-navigation-stack';

import Home from './screens/Home/Home';
import CreateDeck from './screens/CreateDeck/CreateDeck';
import DeckMenu from '../../../screens/deck/DeckMenu';
// import Template from '../../../../dev/Template';

const StackNavigator = createStackNavigator(
  {
    home: Home,
    createdeck: CreateDeck,
    deckmenu: DeckMenu,
  },
  {
    headerMode: 'none',
  },
);

StackNavigator.navigationOptions = ({ navigation }) => ({
  tabBarVisible: (navigation.state.index === 0),
});

export default StackNavigator;
