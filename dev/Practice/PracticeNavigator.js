import {
  createSwitchNavigator,
  createAppContainer,
} from 'react-navigation';

import PracticeI from './PracticeI';
import PracticeK from './PracticeK';
import PracticeS from './PracticeS';
import PracticeO from './PracticeO';
import PracticeMrGenius from './PracticeMrGenius';
import PracticeIW from './PracticeIW';

const Navigator = createSwitchNavigator({
  ichikawa: PracticeMrGenius,
  iwasaki: PracticeIW,
  ikeda: PracticeI,
  kochiya: PracticeK,
  suzuki: PracticeS,
  okuda: PracticeO,
});

const appContainer = createAppContainer(Navigator);

export default appContainer;
