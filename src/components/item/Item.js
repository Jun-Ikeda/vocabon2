import React, { Component } from 'react';
import {
  View, Text, TouchableOpacity, StyleSheet,
} from 'react-native';

import Color from '../../config/Color';

const style = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
  },
  title: { color: Color.font1 },
  titleContainer: {
    flex: 1,
  },
  line: {
    // flex: 1,
    alignItems: 'center',
    flexDirection: 'row', // 縦に並べるやつ
  },
});

class Item extends Component {
  render() {
    const {
      title, onPress, titleStyle, containerStyle, containerLine, containerLineB,
    } = this.props;
    try {
      return (
        <TouchableOpacity
          style={[style.container, containerStyle]}
          onPress={onPress}
        >
          <View style={[style.line, containerLine]}>
            {this.renderLeft()}
            <View style={style.titleContainer}>
              <Text style={[style.title, titleStyle]}>{title}</Text>
            </View>
            {this.renderRight()}
          </View>
          <View style={[style.line, containerLineB]}>
            {this.renderBelow()}
          </View>
        </TouchableOpacity>
      );
    } catch (error) {
      return null;
    }
  }

  renderLeft = () => {
    const { renderLeft } = this.props;
    try {
      return renderLeft();
    } catch (error) {
      return null;
    }
  };

  renderRight = () => {
    const { renderRight } = this.props;
    try {
      return renderRight();
    } catch (error) {
      return null;
    }
  };

  renderBelow = () => {
    const { renderBelow } = this.props;
    try {
      return renderBelow();
    } catch (error) {
      return null;
    }
  };
}

export default Item;

// このcomponentを使う時に必要なprops一覧
// Itemより
//     title
//     titleStyle
//     onPress
//     containerStyle
//     renderLeft
//     renderRight
//     renderBelow
//     containerLine
