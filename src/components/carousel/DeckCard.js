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
 * <TempComponent
 *  message="Hi, use me in this way" />
 * ```
 */
class TempComponent extends Component {
  render() {
    const { cardStyle, item } = this.props;
    return (
      <TouchableOpacity
        style={[
          style.carouselContainer,
          cardStyle,
        ]}
        onPress={() => {
          console.log('you pressed the deck card!');
        }}
      >
        <Text>{item.title}</Text>
        <Text>aaaa</Text>
      </TouchableOpacity>
    );
  }
}

TempComponent.propTypes = {
  cardStyle: PropTypes.object,
  item: PropTypes.object.isRequired,
};

TempComponent.defaultProps = {
  cardStyle: {},
};

export default TempComponent;
