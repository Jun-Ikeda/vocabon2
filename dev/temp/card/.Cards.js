import React, { Component } from 'react';
import {
  View, Text, StyleSheet, TouchableOpacity,
} from 'react-native';
import CardFlip from 'react-native-card-flip';
// import HTML from 'react-native-render-html';

import Color from '../../../src/config/Color';

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

const cards = [{
  word: 'Donald Trump',
  def: 'Rocket Man',
  eg: 'Do you vote for Donald Trump?',
  cf: 'Joe Biden',
},
];

class EachCard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount = () => {
    // const { isFront, word } = this.props;
    // if (!isFront) {
    //   this[`card${word}`].flip();
    // }
  };

  flip = () => {
    // const { word/* , setStateFlip */ } = this.props;
    this[`card${cards.word}`].flip();
    // setStateFlip();
  };

  render() {
    // const {
    //   word, def, eg, cf,
    // } = this.props;
    return (
      <View>
        <Text>hello!!</Text>
        <CardFlip
          style={style.cardflip}
          ref={(cardRef) => {
            this[`card${cards.word}`] = cardRef;
          }}
        >
          <TouchableOpacity
            style={[style.card]}
            onPress={() => this.flip()}
          >
            <Text style={style.label}>{cards.word}</Text>
            <Text style={style.label}>{cards.eg}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[style.card]}
            onPress={() => this.flip()}
          >
            <Text style={style.label}>{cards.def}</Text>
            <Text style={style.label}>{`cf: ${cards.cf}`}</Text>
          </TouchableOpacity>
        </CardFlip>
      </View>
    );
  }
}

export default EachCard;
