import React, { Component } from 'react';
import {
  Text, StyleSheet, TouchableOpacity,
} from 'react-native';
import PropTypes from 'prop-types';

import Color from '../../config/Color';

const style = StyleSheet.create({
  carouselContainer: {
    backgroundColor: Color.white1,
  },
});

/**
 * Template Component
 * @augments {Component<Props, State>}
 * Usage :
 * ```js
 * <DeckCard
 *  message="Hi, use me in this way" />
 * ```
 */
class DeckCard extends Component {
  render() {
    const { cardStyle, item, onPress } = this.props;
    return (
      <TouchableOpacity
        style={[
          style.carouselContainer,
          cardStyle,
        ]}
        onPress={onPress}
      >
        <Text>{item.title}</Text>
        <Text>aaaa</Text>
      </TouchableOpacity>
    );
  }
}

DeckCard.propTypes = {
  cardStyle: PropTypes.object,
  item: PropTypes.object.isRequired,
  onPress: PropTypes.func,
};

DeckCard.defaultProps = {
  cardStyle: {},
  onPress: () => {},
};

export default DeckCard;
