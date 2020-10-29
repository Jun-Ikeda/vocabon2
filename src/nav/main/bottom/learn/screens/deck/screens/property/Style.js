import React, { Component } from 'react';
import { StyleSheet,View, Text } from 'react-native';

import HeaderWithBackSave from '../../../../../../../../components/header/HeaderWithBackSave';
import Color from '../../../../../../../../config/Color';

const mainColor = Color.primary6;

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: mainColor,
  },
})
export default class Style extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={style.container}>
        {this.renderHeader()}
        <Text> This is Style screen!! </Text>
      </View>
    );
  }

  renderHeader = () => {
    const { navigation } = this.props;
    return (
      <HeaderWithBackSave
        title="Style"
        navigation={navigation}
        // onPressRight={this.save}
      />
    );
  };
}

