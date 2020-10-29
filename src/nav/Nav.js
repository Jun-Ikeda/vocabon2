import React, { Component } from 'react';
// import { View, Image } from 'react-native';
import {
  createSwitchNavigator,
  createAppContainer,
  NavigationActions,
} from 'react-navigation';

// import Storage from '../config/Storage';
// import Storage, { StateStorage } from "../config/Storage";
// import Storage, { StateStorage } from "../config/Storage";
// import initState from "../config/initState";
// import { Functions } from "../config/Const";

// import Timer from '../components/Timer';

import LaunchNav from './launch/LaunchNav';
import MainNav from './main/MainNav';
import Init from './init/Init';

// import Template from '../../dev/Template';

const Nav = createSwitchNavigator({
  init: { screen: Init },
  launch: { screen: LaunchNav },
  main: { screen: MainNav },
});

// const init = async () => {
//   // console.log('Project Initialized');
//   console.log(Functions.getTime());
//   //get if is initialized
//   let isInitialized = false;
//   await Storage.load({ key: "isInitialized" })
//     .then((data) => {
//       isInitialized = data;
//     })
//     .catch((error) => console.log(error));
//   //initialize State and Storage
//   if (!isInitialized) {
//     for (let key in initState) {
//       if (!(key == "temp")) {
//         await StateStorage.init({ key });
//       }
//     }
//     StateStorage.save({ key: "isInitialized", data: true, merge: false });
//   }
//   //load the Storage and set State
//   for (let key in initState) {
//     if (!(key == "temp")) {
//       await StateStorage.loadStorage({ key });
//     }
//   }
// };

const AppContainer = createAppContainer(Nav);

let navigator;

export const navigateNav = (routeName, params) => {
  navigator.dispatch(
    NavigationActions.navigate({
      routeName,
      params,
    }),
  );
};

export default class NavContainer extends Component {
  render() {
    return (
      <AppContainer
        ref={(navigatorRef) => {
          navigator = navigatorRef;
        }}
      />
    );
  }
}
