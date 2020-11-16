import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

import Item from './Item';
import Color from '../../config/Color';

const style = StyleSheet.create({
  description: {
    color: Color.white4,
  },
  descriptionContainer: {
    alignItems: 'flex-end',
  },
});

/**
 * Item Component with Description
 * @augments {Component<Props, State>}
 * Usage :
 * ```js
 * <ItemWithDescription
 *  renderAbove={() => <View style={style.lineAbove}
 *  renderLeft={() => <View style={style.elementLeft}
 *  title="Title"
 *  description="Here type the description like this."
 *  renderRight={() => <View style={style.elementRight}
 *  renderBelow={() => <View style={style.lineAbove} />} />
 * ```
 */
class ItemWithDescription extends Component {
  renderRight = () => {
    const { description } = this.props;
    return (
      <View style={style.descriptionContainer}>
        <Text style={style.description}>{description}</Text>
      </View>
    );
  };

  render() {
    const {
      title,
      onPress,
      titleStyle,
      lineStyle,
      containerStyle,
      renderBelow,
      renderAbove,
      renderLeft,
    } = this.props;
    return (
      <Item
        title={title}
        onPress={onPress}
        titleStyle={titleStyle}
        lineStyle={lineStyle}
        containerStyle={containerStyle}
        renderBelow={renderBelow}
        renderAbove={renderAbove}
        renderLeft={renderLeft}
        renderRight={this.renderRight}
      />
    );
  }
}

ItemWithDescription.propTypes = {
  description: PropTypes.string,
  title: PropTypes.string,
  onPress: PropTypes.func,
  titleStyle: /* ViewPropTypes.style */PropTypes.object,
  lineStyle: /* ViewPropTypes.style */PropTypes.object,
  containerStyle: /* ViewPropTypes.style */PropTypes.object,
  renderBelow: PropTypes.node,
  renderAbove: PropTypes.node,
  renderLeft: PropTypes.node,
};

ItemWithDescription.defaultProps = {
  description: '',
  title: '',
  onPress: () => {},
  titleStyle: {},
  lineStyle: {},
  containerStyle: {},
  renderBelow: () => { throw new Error('the function is null'); },
  renderAbove: () => { throw new Error('the function is null'); },
  renderLeft: () => null,
};

export default ItemWithDescription;
