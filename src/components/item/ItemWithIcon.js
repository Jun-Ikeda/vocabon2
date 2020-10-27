import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

import Icon from '../Icon';
import Color from '../../config/Color';

import Item from './Item';

const style = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  leftElement: {
    width: 30,
    alignItems: 'center',
  },
  icon: {
    color: Color.font1,
    fontSize: 25,
  },
});

class ItemWithIcon extends Component {
  render() {
    return <Item renderLeft={this.renderIcon} {...this.props} />;
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
}

// ItemWithIcon.defaultProps = {
//   icon: PropTypes.shape({
//     collection: PropTypes.string,
//     name: PropTypes.string,
//   }),
//   iconStyle: PropTypes.object,
//   iconContainerStyle: PropTypes.object,
// };

// ItemWithIcon.defaultProps = {
//   icon: { collection: '', name: '' },
//   iconStyle: {},
//   iconContainerStyle: {},
// };

export default ItemWithIcon;

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
// ItemWithIconより
//     icon{
//       collection
//       name
//     }
//     iconContainerStyle
//     iconStyle

// const style = StyleSheet.create({
//   container: {
//     alignItems: 'center',
//     flexDirection: 'row',
//     // borderWidth: 1,
//     // borderColor: Color.font1,
//   },
//   title: { color: Color.font1 },
// });

// class ItemWithIcon extends Component {
//   render() {
//     const { title, onPress, containerStyle, textStyle, subText, subTextStyle } = this.props;
//     try {
//       return (
//         <TouchableOpacity
//           style={[style.container, containerStyle]}
//           onPress={onPress}
//         >
//           {this.renderIcon()}
//           <Text style={[style.title, textStyle]}>{title}</Text>
//           <Text style={[style.title, subTextStyle]}>{subText}</Text>
//         </TouchableOpacity>
//       );
//     } catch (error) {
//       return null;
//     }
//   }

//   renderIcon = () => {
//     const { icon } = this.props;
//     const { collection, name, style } = icon;
//     const IconProps = Icon[collection];
//     return <IconProps name={name} style={style} />;
//   };
// }

// export default ItemWithIcon;
// // 使ったところ：Deckedit,SettingItem
