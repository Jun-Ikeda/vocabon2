import React, { Component } from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';
import CardFlip from 'react-native-card-flip';
import PropTypes from 'prop-types';
// import HTML from 'react-native-render-html';

import Color from '../../../config/Color';

const style = StyleSheet.create({
  cardflip: {
    flex: 1,
  },
  card: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Color.white1,
  },
  label: {
    color: Color.font1,
    fontSize: 22,
  },
});

class PlayCard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  flip = () => {
    const { term } = this.props;
    this[`card${term}`].flip();
  };

  render() {
    const {
      term,
    } = this.props;
    return (
      <CardFlip
        style={style.cardflip}
        duration={300}
        ref={(cardRef) => {
          this[`card${term}`] = cardRef;
        }}
      >
        <TouchableOpacity
          style={[style.card]}
          onPress={() => this.flip()}
        >
          <Text style={style.label}>AB</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[style.card]}
          onPress={() => this.flip()}
        >
          <Text style={style.label}>CD</Text>
        </TouchableOpacity>
      </CardFlip>
    );
  }
}

PlayCard.propTypes = {
  term: PropTypes.string,
};

PlayCard.defaultProps = {
  term: '',
};

export default PlayCard;
