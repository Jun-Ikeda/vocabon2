import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

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
 * <AddButton />
 * ```
 */
class AddButton extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <TouchableOpacity
        onPress={() => { navigation.navigate('createdeck'); }}
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
  navigation: PropTypes.object.isRequired,
};

AddButton.defaultProps = {
};

export default AddButton;
