import React, { Component } from 'react';
import {
  View, Text, StyleSheet, TouchableOpacity,
} from 'react-native';

import Icon from '../../../../../components/Icon';
import Color from '../../../../../config/Color';

const style = StyleSheet.create({
  addbutton: {
    position: 'absolute',
    right: 25,
    bottom: 25,
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Color.green2,
  },
  icon: {
    fontSize: 24,
    color: Color.white1,
  },
});

/**
 * AddButton Component
 * @augments {Component<Props, State>}
 * Usage :
 * ```js
 * <AddButton
 *  message="Hi, use me in this way" />
 * ```
 */
class AddButton extends Component {
  render() {
    return (
      <TouchableOpacity
        onPress={() => {
          console.log('Pushed!');
        }}
        style={style.addbutton}
      >
        <Icon.AntDesign
          style={style.icon}
          name="plus"
        />
      </TouchableOpacity>
    );
  }
}

AddButton.propTypes = {
};

AddButton.defaultProps = {
};

export default AddButton;
