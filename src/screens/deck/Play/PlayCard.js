import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import CardFlip from 'react-native-card-flip';

import Color from '../../../config/Color';

const style = StyleSheet.create({
  cardflip: {
    flex: 1,
  },
  card: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Color.primary1,
  },
  label: {
    color: Color.font1,
    fontSize: 22,
  },
});

export default class PlayCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    this.card = {};
  }

  render() {
    return (
      <CardFlip
        style={style.cardflip}
        ref={(cardRef) => {
          this.card = cardRef;
        }}
      >
        <TouchableOpacity
          style={style.card}
          onPress={() => this.card.flip()}
        >
          <Text style={style.label}>AB</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={style.card}
          onPress={() => this.card.flip()}
        >
          <Text style={style.label}>CD</Text>
        </TouchableOpacity>
      </CardFlip>
    );
  }
}
