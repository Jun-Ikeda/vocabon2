import { createAppContainer } from 'react-navigation';
import {
  createStackNavigator,
  TransitionPresets,
} from 'react-navigation-stack';

// import Learn from './screens/home/screens/Home';
// import DeckMenu from './screens/deck/menu/Menu';
// import UserMenu from './screens/user/screens/UserMenu';
// import DeckProperty from './screens/deck/property/Property';
// import DeckPropertyTitle from './screens/deck/property/Title';
// import DeckEdit from './screens/deck/edit/Edit';
// import DeckPlay from './screens/deck/play/Play';
// import Search from './screens/search/screens/Search';
// import DeckDuplicate from './screens/deck/duplicate/Duplicate';
// import DeckBookmark from './screens/deck/bookmark/Bookmark';
// import DeckImport from './screens/deck/import/Import';
// import DeckPropertyTags from './screens/deck/property/Tags';
// import DeckExport from './screens/deck/export/Export';
// import DeckShare from './screens/deck/share/Share';
// import DeckTest from './screens/deck/test/Test';
// import DeckAnalyze from './screens/deck/analyze/Analyze';
// import DeckDelete from './screens/deck/delete/Delete';

import HomeNav from './screens/home/HomeNav';
import SearchNav from './screens/search/SearchNav';
import DeckNav from './screens/deck/DeckNav';
import UserNav from './screens/user/UserNav';


const StackNavigator = createStackNavigator(
  {
    /* learn: { screen: Learn },
    deckmenu: { screen: DeckMenu },
    usermenu: { screen: UserMenu },
    deckproperty: { screen: DeckProperty },
    deckpropertytitle: { screen: DeckPropertyTitle },
    decktags: { screen: DeckPropertyTags },
    deckedit: { screen: DeckEdit },
    // addwords: { screen: AddWords },
    deckplay: { screen: DeckPlay },
    search: { screen: Search },
    deckduplicate: { screen: DeckDuplicate },
    deckbookmark: { screen: DeckBookmark },
    deckimport: { screen: DeckImport },
    deckexport: { screen: DeckExport },
    deckshare: { screen: DeckShare },
    decktest: { screen: DeckTest },
    deckanalyze: { screen: DeckAnalyze },
    deckdelete: { screen: DeckDelete }, */

    /*     homenav: { screen: HomeNav },
    searchnav: { screen: SearchNav },
    decknav: { screen: DeckNav },
    usernav: { screen: UserNav }, */

    ...HomeNav,
    ...SearchNav,
    ...DeckNav,
    ...UserNav,

  },
  {
    headerMode: 'none',
    transparentCard: true,
    defaultNavigationOptions: {
      ...TransitionPresets.RevealFromBottomAndroid,
    },
  },
);

const AppContainer = createAppContainer(StackNavigator);

export default AppContainer;
