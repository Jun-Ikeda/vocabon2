// import { createAppContainer } from 'react-navigation';
// import {
//   createStackNavigator,
//   TransitionPresets,
// } from 'react-navigation-stack';

import MenuNav from './screens/menu/MenuNav';
import PlayNav from './screens/play/PlayNav';
import PropertyNav from './screens/property/PropertyNav';
import EditNav from './screens/edit/EditNav';
import BookmarkNav from './screens/bookmark/BookmarkNav';
import ImportNav from './screens/import/ImportNav';
import ExportNav from './screens/export/ExportNav';
import DuplicateNav from './screens/duplicate/DuplicateNav';
import ShareNav from './screens/share/ShareNav';
import TestNav from './screens/test/TestNav';
import AnalyzeNav from './screens/analyze/AnalyzeNav';
import DeleteNav from './screens/delete/DeleteNav';

// const StackNavigator = createStackNavigator(
//   {
//     menu: { screen: Menu },
//     play: { screen: Play },
//     property: { screen: Property },
//     edit: { screen: Edit },
//     bookmark: { screen: Bookmark },
//     import: { screen: Import },
//     export: { screen: Export },
//     duplicate: { screen: Duplicate },
//     share: { screen: Share },
//     test: { screen: Test },
//     analyze: { screen: Analyze },
//     delete: { screen: Delete },
//   },
//   {
//     headerMode: 'none',
//     transparentCard: true,
//     defaultNavigationOptions: {
//       ...TransitionPresets.RevealFromBottomAndroid,
//     },
//   },
// );

// const AppContainer = createAppContainer(StackNavigator);

// export default AppContainer;

export default {
  ...MenuNav,
  ...PlayNav,
  ...PropertyNav,
  ...EditNav,
  ...BookmarkNav,
  ...ImportNav,
  ...ExportNav,
  ...DuplicateNav,
  ...ShareNav,
  ...TestNav,
  ...AnalyzeNav,
  ...DeleteNav,
};
