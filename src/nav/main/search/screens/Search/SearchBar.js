/* eslint-disable react-native/no-unused-styles */
import React, { Component } from 'react';
import {
  View, StyleSheet, TextInput, TouchableOpacity,
} from 'react-native';
import PropTypes from 'prop-types';
import Icon from '../../../../../components/Icon';

const style = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    borderBottomWidth: 1,
  },
  buttonsConainer: {
    flexDirection: 'row',
  },
  icon: {
    fontSize: 24,
  },
  iconContainer: {
    justifyContent: 'center',
    marginHorizontal: 5,
    // borderWidth: 1,
  },
  textinput: {
    fontSize: 18,
    alignSelf: 'stretch',
    height: 30,
    // backgroundColor: Color.white1,
  },
  textinputContainer: {
    flex: 1,
  },
});

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  renderTextInput = () => {
    const { setState, searchText } = this.props;
    return (
      <View style={style.textinputContainer}>
        <TextInput
          style={style.textinput}
          value={searchText}
          onChangeText={(updatedText) => setState({ searchText: updatedText })}
          maxLength={100}
        />
      </View>
    );
  }

renderButtons = () => {
  const { setState } = this.props;
  const buttons = [{
    icon: { family: 'AntDesign', name: 'filter' },
    onPress: () => {},
  },
  {
    icon: { family: 'Feather', name: 'x' },
    onPress: () => setState({ searchText: '' }),
  },
  ];
  return (
    <View style={style.buttonsConainer}>
      {buttons.map((button) => {
        const IconFamily = Icon[button.icon.family];
        return (
          <TouchableOpacity
            style={style.iconContainer}
            onPress={button.onPress}
          >
            <IconFamily name={button.icon.name} style={style.icon} />
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

render() {
  return (
    <View style={style.container}>
      {this.renderTextInput()}
      {this.renderButtons()}
    </View>
  );
}
}

SearchBar.propTypes = {
  setState: PropTypes.func,
  searchText: PropTypes.string,
};

SearchBar.defaultProps = {
  setState: () => {},
  searchText: '',
};

export default SearchBar;
