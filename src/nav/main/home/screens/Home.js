import React, { Component } from 'react';
import { View, Text/* ,  StyleSheet */ } from 'react-native';

import { header } from '../../../../config/Const';

import Header from '../../../../components/header/Header';

// const style = StyleSheet.create({

// });

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View>
        <Header large renderAll={() => header.mainHeader.renderAll('Home')} />
        <Text> Home </Text>
      </View>
    );
  }
}

export default Home;
