import React, { Component } from 'react';
import { Text, StyleSheet } from 'react-native';

import Color from '../../../config/Color';

import Header from '../../../components/header/Header';
import Icon from '../../../components/Icon';

import { bottomRef } from './BottomNav';

const style = StyleSheet.create({
  headerTitle: {
    color: Color.font1,
    fontSize: 30,
    fontWeight: 'bold',
  },
  headerTitleContainer: {
  },
  headerIcon: {
    fontSize: 25,
    color: Color.font3,
  },
  userIcon: {
  },
});

class TopHeadeer extends Component {

  render() {
    const { title, onPressRight, renderRight } = this.props;
    return (
      <Header
        large
        titleStyle={style.headerTitleContainer}
        renderTitle={() => <Text style={style.headerTitle}>{title}</Text>}
        renderLeft={() => (
          <Icon.Ionicons name="md-menu" style={style.headerIcon} />
        )}
        onPressLeft={this.onPressMenu}
        renderRight={renderRight}
        onPressRight={onPressRight}
      />
    );
  }

  onPressMenu = () => {
    bottomRef.openDrawer();
  };
}

export default TopHeadeer;
