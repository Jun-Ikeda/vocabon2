import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Animated,
} from 'react-native';

import Color from '../../../config/Color';
import { StyleConst } from '../../../config/Const';

import Header from '../../../components/header/Header';
import Icon from '../../../components/Icon';

import { bottomRef } from '../bottom/BottomNav';
import { navigateNav } from '../../Nav';

const style = StyleSheet.create({
  container: {
    ...StyleConst.absoluteFullScreen,
  },
  headerIcon: {
    fontSize: 25,
    color: Color.font2,
    alignSelf: 'center',
    // paddingLeft: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonTitle: {
    fontSize: 15,
    paddingVertical: 20,
  },
  buttonIcon: {
    fontSize: 20,
    paddingHorizontal: 20,
  },
});

const buttons = [
  {
    title: 'New Deck',
    renderIcon: () => (
      <Icon.Entypo name="new-message" style={style.buttonIcon} />
    ),
    onPress: () => {
      navigateNav('newdeckstack');
    },
  },
  {
    title: 'New Style',
    renderIcon: () => (
      <Icon.FontAwesome5 name="shapes" style={style.buttonIcon} />
    ),
    onPress: () => {
      navigateNav('newstyle');
    },
  },
];

export default class Template extends Component {
  render() {
    const { animated } = this.props;
    return (
      <Animated.View style={[style.container, { opacity: animated }]}>
        <Header
          large
          renderLeft={() => (
            <Icon.Ionicons name="md-close" style={style.headerIcon} />
          )}
          onPressLeft={this.closeDrawer}
        />
        {this.renderButtons()}
      </Animated.View>
    );
  }

  renderButtons = () =>
    buttons.map(button => (
      <TouchableOpacity onPress={button.onPress}>
        <View style={style.buttonContainer}>
          {button.renderIcon()}
          <Text style={style.buttonTitle}>{button.title}</Text>
        </View>
      </TouchableOpacity>
    ));

  closeDrawer = () => {
    bottomRef.closeDrawer();
  };
}
