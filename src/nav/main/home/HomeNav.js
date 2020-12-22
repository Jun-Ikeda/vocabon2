import { createStackNavigator } from 'react-navigation-stack';

import Home from './screens/home/Home';
import CreateDeck from './screens/createdeck/CreateDeck';
import DeckMenu from '../../../screens/deck/deckmenu/DeckMenu';
import Play from '../../../screens/deck/play/play/Play';
import PlayOption from '../../../screens/deck/play/playoption/PlayOption';
import Property from '../../../screens/deck/property/Property';
// import Template from '../../../../dev/Template';

const StackNavigator = createStackNavigator(
  {
    home: Home,
    createdeck: CreateDeck,
    deckmenu: DeckMenu,
    play: Play,
    playoption: PlayOption,
    property: Property
  },
  {
    headerMode: 'none',
  },
);

StackNavigator.navigationOptions = ({ navigation }) => ({
  tabBarVisible: (navigation.state.index === 0),
});

export default StackNavigator;
