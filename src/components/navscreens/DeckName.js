import React, { Component } from 'react';
import {
  View, StyleSheet, TextInput, Text, TouchableOpacity,
} from 'react-native';
import PropTypes from 'prop-types';

import Color from '../../config/Color';
import { titleMaxLength } from '../../config/Const';

import Icon from '../Icon';

// const maintextColor = Color.gray1;

const style = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    // backgroundColor: 'green',
    justifyContent: 'space-between',
  },
  textinput: {
    flex: 1,
    fontSize: 18,
    alignSelf: 'stretch',
    height: 30,
    // borderWidth: 1,
    // backgroundColor: 'red',
    // backgroundColor: Color.white1,
  },
  count: {
    // position: 'absolute',
    // right: 50,
    // paddingTop: 6,
    color: Color.gray3,
    // borderWidth: 1,
  },
  countcontainer: {
    justifyContent: 'center',
    paddingHorizontal: 5,
  },
  icon: {
    color: Color.black,
    fontSize: 25,
  },
  iconContainer: {
    // backgroundColor: 'blue',
    justifyContent: 'center',
    paddingHorizontal: 5,
    // borderWidth: 1,
    // position: 'absolute',
    // right: 30,
    // top: 0,
    // bottom: 0,
  },
});

/**
 * DeckName Component
 * @augments {Component<Props, State>}
 * Usage :
 * ```js
 * <DeckName
 *  setState={(state) => this.setState(state)}
 *  title={this.state.title}
 *  />
 * ```
 */
class DeckName extends Component {
  constructor(props) {
    super(props);
    this.inputRef = {};
    this.maxLength = 10;
    this.state = {
      count: 0,
      // inputColor: '',
      // textColor: maintextColor,
    };
  }

  componentDidMount() {
    try {
      this.inputRef.focus();
    } catch (error) {
      console.log(error);
    }
  }

  renderIcon = () => {
    const { setState } = this.props;
    return (
      <TouchableOpacity
        style={style.iconContainer}
        onPress={() => {
          setState({ title: '' });
          this.setState({ count: '0' });
          this.inputRef.focus();
        }}
      >
        <Icon.Ionicons name="md-close" style={style.icon} />
      </TouchableOpacity>
    );
  }

  renderCount = () => {
    const { count } = this.state;
    return (
      <View style={style.countcontainer}>
        <Text style={style.count}>
          (
          {count}
          /
          {titleMaxLength}
          )
        </Text>
      </View>
    );
  }

  renderTextInput = () => {
    const { setState, title } = this.props;
    return (
      <TextInput
        style={[
          style.textinput,
          {
          // backgroundColor: inputColor,
          // color: textColor,
          },
        ]}
        value={title}
        // onFocus={() =>
        //   this.setState({ inputColor: Color.white1, textColor: Color.black })}
        // onBlur={() =>
        //   this.setState({ inputColor: '', textColor: maintextColor })}
        onChangeText={(updateTitle) => {
          setState({ title: updateTitle });
          this.setState({ count: updateTitle.length });
        }}
        maxLength={titleMaxLength}
        ref={(inputRef) => {
          this.inputRef = inputRef;
        }}
      />
    );
  }

  render() {
    return (
      <View style={style.container}>
        {this.renderTextInput()}
        {this.renderCount()}
        {this.renderIcon()}
      </View>
    );
  }
}

DeckName.propTypes = {
  setState: PropTypes.func.isRequired,
  title: PropTypes.string,
};

DeckName.defaultProps = {
  title: '',
};

export default DeckName;
