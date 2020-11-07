import React, { Component } from 'react';
import {
  View, Text, StyleSheet, ViewPropTypes,
} from 'react-native';
import PropTypes from 'prop-types';
import Icon from '../Icon';

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
});

/**
 * Item Component with Icon
 * @augments {Component<Props, State>}
 * Usage :
 * ```js
 * <ItemWithIcon
 *  message="Hi, use me in this way" />
 * ```
 */
class ItemWithIcon extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  renderIcon = () => {
    const { icon, iconStyle, iconContainerStyle } = this.props;
    const { collection, name } = icon;
    const IconProps = Icon[collection]; // Iconはファイル名。ここでは特にそのファイルを使ってるのではなくIconを使う時に必要だから
    return (
      <View style={[style.leftElement, iconContainerStyle]}>
        <IconProps name={name} style={[style.icon, iconStyle]} />
      </View>
    );
  };

  render() {
    const { message } = this.props;
    return (
      <View style={style.container}>
        <Text>{message}</Text>
      </View>
    );
  }
}

ItemWithIcon.propTypes = {
  message: PropTypes.string,
  iconStyle: ViewPropTypes.style,
  iconContainerStyle: ViewPropTypes.style,
};

ItemWithIcon.defaultProps = {
  message: 'This is Template Component',
  iconStyle: {},
  iconContainerStyle: {},
};

export default ItemWithIcon;
