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
  constructor(props) {
    super(props);
    this.state = {
      currentLine: 0,
      currentHeight: 0,
    };
  }

  render() {
    const { message, lines, height } = this.props;
    return (
      <View>
        <Text
          style={{ color: 'black' }}
          onTextLayout={(e) => {
            const currentLine = e.nativeEvent.lines.length;
            const currentHeight = e.nativeEvent.lines.forEach(line => )
            this.setState({ currentLine, currentHeight });
            console.log({ line: e.nativeEvent.lines });
          }}
        >
          {message}
          aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaSS
        </Text>
      </View>
    );
  }
}

TextAdjust.propTypes = {
  message: PropTypes.string,
  lines: PropTypes.number,
  height: PropTypes.number,
};

TextAdjust.defaultProps = {
  message: 'This is TextAdjust Component',
  lines: 0,
  height: 20,
};

export default TextAdjust;
