import React, { Component } from 'react';
import {
  View, StyleSheet,
} from 'react-native';
import PropTypes from 'prop-types';

import Item from './Item';
import Icon from '../Icon';

const style = StyleSheet.create({
});

/**
 * Item Component with Icon
 * @augments {Component<Props, State>}
 * Usage :
 * ```js
 * <ItemWithIcon
 *  icon={{name: 'md-setting', collection; 'Ionicons'}} />
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
    if (collection === '' || name === '') {
      return null;
    }
    return (
      <View style={[style.leftElement, iconContainerStyle]}>
        <IconProps name={name} style={[style.icon, iconStyle]} />
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
      renderRight,
    } = this.props;
    return (
      <Item
        renderLeft={this.renderIcon}
        title={title}
        onPress={onPress}
        titleStyle={titleStyle}
        lineStyle={lineStyle}
        containerStyle={containerStyle}
        renderBelow={renderBelow}
        renderAbove={renderAbove}
        renderRight={renderRight}
      />
    );
  }
}

ItemWithIcon.propTypes = {
  icon: PropTypes.shape({ collection: PropTypes.string, name: PropTypes.string }),
  iconStyle: PropTypes.object,
  iconContainerStyle: PropTypes.object,
  title: PropTypes.string,
  onPress: PropTypes.func,
  titleStyle: PropTypes.object,
  lineStyle: PropTypes.object,
  containerStyle: PropTypes.object,
  renderBelow: PropTypes.node,
  renderAbove: PropTypes.node,
  renderRight: PropTypes.node,
};

ItemWithIcon.defaultProps = {
  icon: { collection: '', name: '' },
  iconStyle: {},
  iconContainerStyle: {},
  title: '',
  onPress: () => {},
  titleStyle: {},
  lineStyle: {},
  containerStyle: {},
  renderBelow: () => { throw new Error('the function is null'); },
  renderAbove: () => { throw new Error('the function is null'); },
  renderRight: () => null,
};

export default ItemWithIcon;
