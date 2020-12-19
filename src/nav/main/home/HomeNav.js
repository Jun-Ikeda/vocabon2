import { createStackNavigator } from 'react-navigation-stack';

import Home from './screens/home/Home';
import CreateDeck from './screens/createdeck/CreateDeck';
import DeckMenu from '../../../screens/deck/deckmenu/DeckMenu';
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
