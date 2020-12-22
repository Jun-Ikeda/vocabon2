import { createStackNavigator } from 'react-navigation-stack';

import Home from './screens/home/Home';
import CreateDeck from './screens/createdeck/CreateDeck';
import DeckMenu from '../../../screens/deck/deckmenu/DeckMenu';

import Play from '../../../screens/deck/play/play/Play';
import Results from '../../../screens/deck/play/results/Results';
import PlayOption from '../../../screens/deck/play/playoption/PlayOption';

import Property from '../../../screens/deck/property/Property';
import Edit from '../../../screens/deck/edit/Edit';
// import Template from '../../../../dev/Template';

const StackNavigator = createStackNavigator(
  {
    home: Home,
    createdeck: CreateDeck,
    deckmenu: DeckMenu,
    play: Play,
    results: Results,
    playoption: PlayOption,
    edit: Edit,
    property: Property,
  },
  {
    headerMode: 'none',
  },
);

StackNavigator.navigationOptions = ({ navigation }) => ({
  tabBarVisible: (navigation.state.index === 0),
});

export default StackNavigator;
