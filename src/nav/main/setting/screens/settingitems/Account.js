import React, { Component } from 'react';
import {
  View, Text, StyleSheet,TouchableOpacity,
} from 'react-native';

import HeaderWithBack from '../../../../../components/header/HeaderWithBack';

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
});

class Account extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }


  render() {
    const { navigation } = this.props;
    return (
      <View style={style.container}>
        <HeaderWithBack title="Account" navigation={navigation}/>
        <View>
          <Text>This is Account screen!</Text>
        </View>
      </View>
    );
  }
}

export default Account;