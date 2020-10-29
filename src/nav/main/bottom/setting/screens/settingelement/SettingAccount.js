import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Color from '../../../../../../config/Color';
import Storage from '../../../../../../config/Storage';

import Header from '../../../../../../components/header/Header';
import Icon from '../../../../../../components/Icon';
import User from '../../../../../../config/Firebase/User';

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttonIcon: {
    fontSize: 20,
    paddingHorizontal: 20,
    color: Color.background1,
  },
});

class SettingAccount extends Component {
  constructor(props) {
    super(props);
    this.state = {
      auth: {},
    };
  }

  render() {
    const { navigation } = this.props;
    return (
      <View style={style.container}>
        <Header
          renderLeft={() => (
            <Icon.Ionicons name="ios-arrow-back" style={style.buttonIcon} />
          )}
          onPressLeft={() => {
            navigation.goBack();
          }}
        />
        <Text style={{ color: 'white' }}>This is SettingAccount screen!</Text>
      </View>
    );
  }

  async componentDidMount() {
    const auth = await Storage.Function.load({ key: 'auth' });
    this.setState({ auth });
    // User.save({ uid: auth.uid, data: {} });
  }
}

export default SettingAccount;
