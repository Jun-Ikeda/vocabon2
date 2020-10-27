import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

import Color from '../config/Color';
import { Functions } from '../config/Const';

const style = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

class UserIcon extends Component {
  render() {
    const { style: propsStyle, size } = this.props;
    return (
      <View
        style={[
          style.container,
          propsStyle,
          {
            height: size,
            width: size,
            borderRadius: size / 2,
          },
        ]}
      >
        {this.renderContent()}
      </View>
    );
  }

  renderContent = () => {
    try {
      const {
        user: { background },
      } = this.props;
      const isColor = Functions.isColor(background);
      return isColor ? this.renderInitial() : this.renderBackground();
    } catch (error) {
      return null;
    }
  };

  renderBackground = () => {
    try {
      const {
        size,
        user: { background },
      } = this.props;
      return (
        <View>
          <Image
            source={{
              uri: `https://firebasestorage.googleapis.com/v0/b/vocabon02.appspot.com/${background}`,
            }}
            style={{
              height: size,
              width: size,
              borderRadius: size / 2,
              backgroundColor: background,
              alignItems: 'center',
              justifyContent: 'center',
            }}
          />
        </View>
      );
    } catch (error) {
      return null;
    }
  };

  renderInitial = () => {
    try {
      const {
        user: { name, background },
        size,
      } = this.props;
      const Uppercase = name.charAt(0).toUpperCase();
      return (
        <View
          style={{
            height: size,
            width: size,
            borderRadius: size / 2,
            backgroundColor: background,
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Text style={{ color: Color.font1, fontSize: size * 0.5 }}>
            {Uppercase}
          </Text>
        </View>
      );
    } catch (error) {
      return null;
    }
  };
}

export default UserIcon;
