import React, { Component } from 'react';
import { View } from 'react-native';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Storage from '../../config/Storage';

import Background from '../../components/Background';


import Readme from './screens/Readme';
import Signup from './screens/Signup';
import EmailVerify from './screens/EmailVerify';
import ResetPassword from './screens/ResetPassword';

const KnowledgeSmall = require('../../../assets/background/KnowledgeSmall.jpg');

const LaunchNav = createSwitchNavigator({
  readme: { screen: Readme },
  auth: {
    screen: createStackNavigator(
      {
        signup: { screen: Signup },
        resetpassword: {
          screen: ResetPassword,
        },
      },
      {
        transparentCard: true,
        headerMode: 'none',
      },
    ),
  },
  emailverify: { screen: EmailVerify },
});

const AppContainer = createAppContainer(LaunchNav);

export default class LaunchNavContainer extends Component {
  // eslint-disable-next-line camelcase
  async UNSAFE_componentWillMount() {
    const { navigation } = this.props;
    const readme = await Storage.Function.load({ key: 'readme' });
    const auth = await Storage.Function.load({ key: 'auth' });
    if (readme && auth.loggedin && auth.emailverified) {
      console.log('shortcut to main');
      navigation.navigate('main');
    }
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Background
          imageStyle={{ flex: 1, resizeMode: 'cover', width: 'auto' }}
          imageSource={KnowledgeSmall}
          blurRadius={1.5}
          overlayStyle={{ opacity: 0.3, backgroundColor: 'black' }}
        />
        <AppContainer />
      </View>
    );
  }
}
