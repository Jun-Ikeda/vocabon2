import React, { Component } from 'react';
import {
  View, Text, Image, TouchableOpacity, Linking, StyleSheet,
} from 'react-native';
import HeaderWithBack from '../../../../components/header/HeaderWithBack';
import { DeckGeneral } from '../../../../../dev/TestData';

import Color from '../../../../config/Color';

const style = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFill,
  },
});

const titleFontSize = 30;
const normalFontSize = 15;
const narrowIndent = 15;
const wideIndent = 20;

class PlayResults extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {
    this.setState({ deck: DeckGeneral[0] });
  }

  renderButtons = () => {
    const buttons = [
      { title: 'Play again', onPress: () => alert('play again') },
      { title: 'Play Marked Cards', onPress: () => alert('play marked cards') },
      { title: 'Go back to Options', onPress: () => alert('go back to options') },
      { title: 'Finish this Deck', onPress: () => alert('finish this deck') },
    ];
    return buttons.map((button) => (
      <TouchableOpacity>
        <Text>{button.title}</Text>
      </TouchableOpacity>
    ));
  }

  renderCounter = () => {
    const { left, right } = this.props;
    return (
      <View>
        <Text>{left.length}</Text>
        <Text>{right.length}</Text>
      </View>
    );
  }

  // renderHeader = () => (
  //   <Image source={{
  //     uri: Unsplash.unshortenURI(deck.thumbnail.uri),
  //   }}
  //   />
  // )

  render() {
    return (
      <View style={style.container}>
        {this.renderButtons()}
        {this.renderCounter()}
      </View>
    );
  }
}

export default PlayResults;
