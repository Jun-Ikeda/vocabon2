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
  renderButton = (button) => {
    const { collection, name, onPress } = button;
    const IconComponent = Icon[collection];
    return (
      <TouchableOpacity style={style.button} onPress={onPress} key={button.name.toLowerCase()}>
        <IconComponent name={name} style={style.icon} />
      </TouchableOpacity>
    );
  }

  renderThreeButtons = () => {
    const { flip, swipeLeft, swipeRight } = this.props;
    const buttons = [
      {
        collection: 'Entypo',
        name: 'cross',
        onPress: () => swipeLeft(),
      },
      {
        collection: 'MaterialIcons',
        name: 'flip',
        onPress: () => flip(),
      },
      {
        collection: 'Entypo',
        name: 'check',
        onPress: () => swipeRight(),
      },
    ];
    return buttons.map(this.renderButton);
  }

  renderBackButton = () => {
    const { swipeBack } = this.props;
    const button = {
      collection: 'AntDesign',
      name: 'back',
      onPress: () => swipeBack(),
    };
    return this.renderButton(button);
  }

  render() {
    return (
      <View>
        <View style={style.container}>
          {this.renderThreeButtons()}
        </View>
        <View style={style.container}>
          {this.renderBackButton()}
        </View>
      </View>
    );
  }
}

PlayButtons.propTypes = {
  flip: PropTypes.func,
  swipeLeft: PropTypes.func,
  swipeRight: PropTypes.func,
  swipeBack: PropTypes.func,
};

PlayButtons.defaultProps = {
  flip: () => {},
  swipeLeft: () => {},
  swipeRight: () => {},
  swipeBack: () => {},
};

export default PlayButtons;
