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

const PracticeNavigator = createSwitchNavigator({
  iwasaki: PracticeIW,
  ikeda: PracticeI,
  kochiya: PracticeK,
  suzuki: PracticeS,
  okuda: PracticeO,
  ichikawa: PracticeMrGenius,
});

const appContainer = createAppContainer(PracticeNavigator);

export default appContainer;
