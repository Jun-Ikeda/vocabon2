import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import HeaderWithBack from '../../../../../../../../components/header/HeaderWithBack';

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});

export default class DeckAnalyze extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const { navigation } = this.props;
    return (
      <View style={style.container}>
        <HeaderWithBack
          navigation={navigation}
          title="Analyze"
        />
        <Text> DeckAnalyze </Text>
      </View>
    );
  }
}
