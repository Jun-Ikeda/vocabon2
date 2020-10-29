import { createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import NewDeck from './screens/NewDeck';
import NewStyle from './screens/NewStyle';
import DeckLanguage from './screens/Deckelements/DeckLanguage';

const NewDeckStack = createStackNavigator(
  {
    newdeck: { screen: NewDeck },
    decklanguage: { screen: DeckLanguage },
  },
  {
    headerMode: 'none',
  },
);

export default createSwitchNavigator({
  newdeckstack: { screen: NewDeckStack },
  newstyle: { screen: NewStyle },
});
