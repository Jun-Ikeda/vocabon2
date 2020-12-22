/* eslint-disable max-classes-per-file */
import React, { Component } from 'react';
import {
  View, Text, StyleSheet, TouchableOpacity,
} from 'react-native';

import Header from '../../src/components/header/Header';

class TestComponent extends Component {
  render() {
    const { name } = this.props;
    return (
      <Text>
        I am
        {name}
      </Text>
    );
  }
}

const style = StyleSheet.create({
  container: {
    backgroundColor: 'red',
    flex: 1,
  },
  smallcon1: {
    backgroundColor: 'green',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  smallcon2: {
    backgroundColor: 'yellow',
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'blue',
  },
});

class PracticeIW extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: 'yoroshikuonegaishimasu',
    };
  }

    testFunction = () => {
      const { navigation } = this.props;
      navigation.navigate('ikeda');
    //   console.log('test');
    //   console.log('aaa');
    //   this.setState({ message: 'yay' });
    }

    renderSmallCon1 = () => {
      const { message } = this.state;
      return (
        <View style={style.smallcon1}>
          <Text style={style.text}>
            {message}
          </Text>
        </View>
      );
    }

    renderSmallCon2 = () => (
      <View style={style.smallcon2}>
        <Text style={style.text}>
          yoroshikuonegaisimasu
        </Text>
      </View>
    )

    renderButton = () => (
      <TouchableOpacity onPress={this.testFunction}>
        <Text>Go to other screen(class)</Text>
      </TouchableOpacity>
    )

    render() {
      return (
        <View style={style.container}>
          <Header renderTitle={() => <Text>AOnyuusiderakusitai</Text>} />
          <TestComponent name="Iwasaki" />
          <TestComponent name="Iwashi" />
          <TestComponent name="Shimpei" />
          <TestComponent name="Kokoro" />
          <TestComponent name="Iwamura" />
          {this.renderButton()}
        </View>
      );
    }
}

/*
I am Iwasaki
I am Iwashi
I am Shimpei
I am Kokoro
I am Iwamura
*/

export default PracticeIW;
