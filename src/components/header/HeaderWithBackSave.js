import React, { Component } from 'react';
import { Text, StyleSheet } from 'react-native';
import HeaderWithBack from './HeaderWithBack';
import Icon from '../Icon';
import Color from '../../config/Color';

const style = StyleSheet.create({
  headerIcon: {
    color: Color.font2,
    fontSize: 25,
  },
  title: {},
});

export default class HeaderWithBackSave extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { iconStyle } = this.props;
    return (
      <HeaderWithBack
        renderRight={() => (
          <Icon.MaterialCommunityIcons
            name="content-save-edit-outline"
            style={style.headerIcon}
          />
        )}
        {...this.props}
      />
    );
  }

  // renderTitle = () => {
  //   const { renderCenter, titleStyle, title } = this.props;
  //   try {
  //     return renderCenter();
  //   } catch (error) {
  //     return <Text style={[style.title, titleStyle]}>{title}</Text>;
  //   }
  // };

  // goBack = () => {
  //   const { navigation, onPressLeft } = this.props;
  //   try {
  //     onPressLeft();
  //   } catch (error) {
  //     return null;
  //   }
  //   navigation.goBack();
  // };
}
