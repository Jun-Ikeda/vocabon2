import React, { Component } from 'react';
import {
  View, StyleSheet, Text, Image,
} from 'react-native';
import PropTypes from 'prop-types';

import { func } from '../config/Const';
import Color from '../config/Color';

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
});

/**
 * UserIcon Component
 * @augments {Component<Props, State>}
 * Usage :
 * ```js
 * <UserIcon
 *  size={32}
 *  containerStyle={}
 *  user={{ background: '#1f4dae' }}
 * />
 * ```
 */
class UserIcon extends Component {
  renderColorBackground = () => {
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
  }

  renderImageBackground =() => {
    const {
      size, user: { background },
    } = this.props;
    return (
      <View>
        <Image
          source={{
            uri: background,
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
  }

  renderContent = () => {
    const { user: { background } } = this.props;
    if (func.isColor(background)) {
      return this.renderColorBackground();
    }
    return this.renderImageBackground();
  }

  render() {
    const { size, containerStyle } = this.props;
    return (
      <View style={[
        style.container,
        containerStyle,
        { height: size, width: size, borderRadius: size / 2 }]}
      >
        {this.renderContent()}
      </View>
    );
  }
}

UserIcon.propTypes = {
  containerStyle: PropTypes.object,
  size: PropTypes.number,
  user: PropTypes.shape({ name: PropTypes.string, background: PropTypes.string }),
};

UserIcon.defaultProps = {
  containerStyle: {},
  size: 28,
  user: { name: '', background: '#ffffff' },
};

export default UserIcon;

/* const style = StyleSheet.create({
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

 */
