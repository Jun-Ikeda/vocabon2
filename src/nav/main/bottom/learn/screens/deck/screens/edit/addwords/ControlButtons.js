import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Deck from '../../../../../../../../../config/Firebase/Deck';

const style = StyleSheet.create({
  buttonsContainer: {
    flexDirection: 'row',
  },
  button: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
  },
});

class ControlButtons extends Component {
  render() {
    const buttons = [
      { title: 'Previous', onPress: () => {} },
      { title: 'Save', onPress: this.bundleSave },
      { title: 'Next', onPress: this.bundleNext },
    ];
    return (
      <View style={style.buttonsContainer}>
        {buttons.map(button => (
          <TouchableOpacity onPress={button.onPress} style={style.button}>
            <Text>{button.title}</Text>
          </TouchableOpacity>
        ))}
      </View>
    );
  }

  bundleNext = () => {
    const {
      page: { word, def, cf, eg, syn, ant },
      bundle,
      setState,
    } = this.props;
    bundle.push({
      word,
      def,
      syn,
      ant,
      cf,
      eg,
      er: 0,
      mark: [],
    });
    console.log({ bundle });
    setState({
      word: '',
      def: '',
      cf: '',
      eg: '',
      syn: '',
      ant: '',
      bundle,
    });
  };

  bundleSave = () => {
    this.bundleNext();
    const { navigation, bundle } = this.props;
    const deckid = navigation.getParam('id');
    const deckinfo = navigation.getParam('deckinfo');
    // navigation.navigate('addwords', { deckid, uri });
    const uri = deckinfo.card;
    console.log({ uri });
    Deck.Card.save({ deckid, uri, data: bundle });
    navigation.goBack();
  };
}
export default ControlButtons;
