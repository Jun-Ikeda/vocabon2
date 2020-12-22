import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

const style = StyleSheet.create({
  container: { flexDirection: 'row' },
  label: { flex: 1, textAlign: 'center' },
});

/**
 * Counter Component
 * @augments {Component<Props, State>}
 * Usage :
 * ```js
 * <PlayCounter
 *  message="Hi, use me in this way" />
 * ```
 */
class PlayCounter extends Component {
  render() {
    const { swipedLeft, swipedRight } = this.props;
    return (
      <View style={style.container}>
        <Text style={style.label}>{`Left: ${swipedLeft.length}`}</Text>
        <Text style={style.label}>{`Right: ${swipedRight.length}`}</Text>
      </View>
    );
  }
}

PlayCounter.propTypes = {
  swipedLeft: PropTypes.array,
  swipedRight: PropTypes.array,
};

PlayCounter.defaultProps = {
  swipedLeft: [],
  swipedRight: [],
};

export default PlayCounter;
