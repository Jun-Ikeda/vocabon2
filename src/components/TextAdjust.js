import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
});

/**
 * TextAdjust Component
 * @augments {Component<Props, State>}
 * Usage :
 * ```js
 * <TextAdjust
 *  message="Hi, use me in this way" />
 * ```
 */
class TextAdjust extends Component {
  render() {
    const { message } = this.props;
    return (
      <View style={{ backgroundColor: 'green' }}>
        <Text onTextLayout={(e) => {
          console.log('ajajidjiaoo');
          console.log(e);
        }}
        >
          {message}
        </Text>
      </View>
    );
  }
}

TextAdjust.propTypes = {
  message: PropTypes.string,
};

TextAdjust.defaultProps = {
  message: 'This is TextAdjust Component',
};

export default TextAdjust;
