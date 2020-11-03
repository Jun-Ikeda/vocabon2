import React, { Component } from 'react';
import {
  View, Text, TouchableOpacity, StyleSheet, ViewPropTypes,
} from 'react-native';
import PropTypes from 'prop-types';

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
  renderLineBelow = () => {
    const { renderBelow } = this.props;
    try {
      return (
        <View style={[style.line]}>
          {renderBelow()}
        </View>
      );
    } catch (error) {
      return null;
    }
  }

  renderLine = () => {
    const {
      renderLeft, renderRight, titleStyle, title,
    } = this.props;
    return (
      <View style={[style.line]}>
        {renderLeft()}
        <View style={style.titleContainer}>
          <Text style={[style.title, titleStyle]}>{title}</Text>
        </View>
        {renderRight()}
      </View>
    );
  }

  render() {
    const {
      onPress, containerStyle,
    } = this.props;
    return (
      <TouchableOpacity
        style={[style.container, containerStyle]}
        onPress={onPress}
      >
        {this.renderLine()}
        {this.renderLineBelow()}
      </TouchableOpacity>
    );
  }
}

Item.propTypes = {
  title: PropTypes.string,
  onPress: PropTypes.func,
  titleStyle: ViewPropTypes.style,
  containerStyle: ViewPropTypes.style,
  renderBelow: PropTypes.node,
  renderRight: PropTypes.node,
  renderLeft: PropTypes.node,
};

Item.defaultProps = {
  title: '',
  onPress: () => {},
  titleStyle: {},
  containerStyle: {},
  renderBelow: () => { throw new Error('the function is null'); },
  renderRight: () => null,
  renderLeft: () => null,
};

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
/*
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
} */
