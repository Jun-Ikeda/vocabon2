import React, { Component } from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import Icon from '../../../components/Icon';

const style = StyleSheet.create({
  container: { flexDirection: 'row', justifyContent: 'space-around' },
  button: { borderWidth: 2, flex: 1, alignItems: 'center' },
  icon: { fontSize: 30 },
});

/**
 * Buttons Component in Play
 * @augments {Component<Props, State>}
 * Usage :
 * ```js
 * <PlayButtons
 *  message="Hi, use me in this way" />
 * ```
 */
class PlayButtons extends Component {
  renderButtons = () => {
    const { swiper } = this.props;
    const buttons = [
      {
        collection: 'Entypo',
        name: 'cross',
        onPress: () => swiper.swipeLeft(),
        // onPress: () => alert('cross'),
      },
      {
        collection: 'MaterialIcons',
        name: 'flip',
        onPress: () => alert('flip'),
      },
      //   {
      //     collection: 'AntDesign',
      //     name: 'back',
      //     onPress: () => alert('back'),
      //   },
      {
        collection: 'Entypo',
        name: 'check',
        onPress: () => swiper.swipeRight(),
      },
    ];
    return buttons.map((button) => {
      const { collection, name, onPress } = button;
      const IconComponent = Icon[collection];
      return (
        <TouchableOpacity style={style.button} onPress={onPress} key={button.name.toLowerCase()}>
          <IconComponent name={name} style={style.icon} />
        </TouchableOpacity>
      );
    });
  }

  render() {
    return (
      <View style={style.container}>
        {this.renderButtons()}
      </View>
    );
  }
}

PlayButtons.propTypes = {
  swiper: PropTypes.object,
};

PlayButtons.defaultProps = {
  swiper: {},
};

export default PlayButtons;
