import React, { Component } from 'react';
import { View, Image, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

// import { StyleConst } from '../config/Const';

const StyleConst = {
  absoluteFullScreen: {
    right: 0,
    left: 0,
    top: 0,
    bottom: 0,
    position: 'absolute',
  },
};

const style = StyleSheet.create({
  container: {
    ...StyleConst.absoluteFullScreen,
  },
  overlay: {
    ...StyleConst.absoluteFullScreen,
  },
});

/**
 * Background Component
 * @augments {Component<Props, State>}
 * Usage :
 * ```js
 * <Background
 *  imageStyle={style.image}
 *  imageSource={{ uri: '' }}
 *  blurRadius={10}
 *  overlayStyle={style.overlay} />
 * ```
 */
class Background extends Component {
  render() {
    const {
      imageStyle, imageSource, blurRadius, overlayStyle,
    } = this.props;
    return (
      <View style={style.container}>
        <Image
          style={[style.image, imageStyle]}
          source={imageSource}
          blurRadius={blurRadius}
        />
        <View style={[style.overlay, overlayStyle]} />
      </View>
    );
  }
}

Background.propTypes = {
  imageStyle: PropTypes.object,
  imageSource: PropTypes.object.isRequired,
  blurRadius: PropTypes.number,
  overlayStyle: PropTypes.object,
};

Background.defaultProps = {
  imageStyle: {},
  blurRadius: 10,
  overlayStyle: {},
};

export default Background;
