import React, { Component } from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';
import CardFlip from 'react-native-card-flip';
// import HTML from 'react-native-render-html';

import Color from '../../../../../../../../../config/Color';

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

class EachCard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { word, def, eg, cf } = this.props;
    return (
      <CardFlip
        style={style.cardflip}
        ref={cardRef => {
          this[`card${word}`] = cardRef;
        }}
      >
        <TouchableOpacity
          style={[style.card]}
          onPress={() => this.flip()}
        >
          <Text style={style.label}>{word}</Text>
          <Text style={style.label}>{eg}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[style.card]}
          onPress={() => this.flip()}
        >
          <Text style={style.label}>{def}</Text>
          <Text style={style.label}>{`cf: ${cf}`}</Text>
        </TouchableOpacity>
      </CardFlip>
    );
  }

  componentDidMount = () => {
    // const { isFront, word } = this.props;
    // if (!isFront) {
    //   this[`card${word}`].flip();
    // }
  };

  flip = () => {
    const { word/* , setStateFlip */ } = this.props;
    this[`card${word}`].flip();
    // setStateFlip();
  };
}

export default EachCard;
