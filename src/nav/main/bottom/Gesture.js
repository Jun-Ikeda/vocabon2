import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import GestureRecognizer from 'react-native-swipe-gestures';

import { StyleConst } from '../../../config/Const';

import { bottomRef } from './BottomNav';

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  gesture: {
    ...StyleConst.absoluteFullScreen,
    backgroundColor: 'transparent',
  },
});

export default class Gesture extends Component {
  render() {
    const { children, style: propsStyle } = this.props;
    return (
      <View style={[style.container, propsStyle]}>
        <GestureRecognizer
          onSwipedLeft={this.OnSwipedLeft}
          onSwipedRight={this.OnSwipedRight}
          config={{
            velocityThreshold: 0.3,
            directionalOffsetThreshold: 80,
          }}
          style={style.gesture}
        />
        {children}
      </View>
    );
  }

  OnSwipedLeft = () => {
    try {
      bottomRef.OnSwipedLeft();
    } catch (error) {
      // console.log(error);
    }
  };

  OnSwipedRight = () => {
    try {
      bottomRef.OnSwipedRight();
    } catch (error) {
      // console.log(error);
    }
  };
}
