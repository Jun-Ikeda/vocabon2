import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import HeaderWithBack from '../../../../../../../../components/header/HeaderWithBack';
import Color from '../../../../../../../../config/Color';

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.background1,
  },
});

export default class Play extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: true,
    };
  }

  render() {
    const { navigation } = this.props;
    return (
      <View style={style.container}>
        <HeaderWithBack navigation={navigation} title="Play" />
        <TouchableOpacity onPress={this.gotoNormalPlay}>
          <Text>Play</Text>
        </TouchableOpacity>
        <Text>
          {'front is '}
          {this.renderModeIndication()}
        </Text>
        {this.renderMode()}
      </View>
    );
  }

  renderMode = () => {
    const { mode } = this.state;
    // const items = [{ title: 'word' }, { title: 'meaning' }];
    return (
      <TouchableOpacity
        onPress={() => {
          this.setState(prev => ({
            mode: !prev.mode,
          }));
        }}
      >
        <Text>change the mode</Text>
      </TouchableOpacity>
    );
  };

  renderModeIndication = () => {
    const { mode } = this.state;
    if (mode) {
      return <Text>word</Text>;
    }
    return <Text>meaning</Text>;
  };

  gotoNormalPlay = () => {
    const { navigation } = this.props;
    const deckinfo = navigation.getParam('deckinfo');
    navigation.navigate('normalplay', { deckinfo });
  };
}
