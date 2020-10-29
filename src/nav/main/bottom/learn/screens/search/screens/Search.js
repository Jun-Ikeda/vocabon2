import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
// import Header from '../../../../../../components/header/Header';
import HeaderWithBack from '../../../../../../../components/header/HeaderWithBack';
import Color from '../../../../../../../config/Color';
// import { TextInput } from 'react-native-gesture-handler';

const style = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'white',
  },
  header: {
    color: Color.font1,
  },
});

export default class Search extends Component {
  constructor(props) {
    super(props);
    this.inputRef = {};
    this.state = {
      text: '',
    };
  }

  render() {
    return (
      <View style={style.container}>
        {this.renderHeader()}
        <Text> Search </Text>
      </View>
    );
  }

  componentDidMount() {
    this.inputRef.focus();
  }

  renderHeader = () => {
    const { navigation } = this.props;
    // const { text } = this.props;
    return (
      <HeaderWithBack
        renderCenter={this.renderTextInput}
        navigation={navigation}
        title="Search"
        titleStyle={style.header}
        iconStyle={style.header}
        renderRight={() => { }}
      />
    );
  };

  renderTextInput = () => {
    const { text } = this.state;
    return (
      <TextInput
        value={text}
        onChangeText={text => this.setState({ text })}
        placeholder="Search"
        placeholderTextColor={Color.font4}
        style={{
          color: 'white',
          flex: 1,
          alignSelf: 'stretch',
        }}
        ref={inputRef => {
          this.inputRef = inputRef;
        }}
      />
    );
  }
}
