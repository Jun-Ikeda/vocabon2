import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { func } from '../config/Const';

import Nav from './Nav';

const style = StyleSheet.create({
  tabularasa: {
    flex: 1,
  },
});

export default class Screen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isExamined: false,
      isPortrait: false,
    };
  }

  renderScreen = () => {
    const { isPortrait } = this.state;
    if (isPortrait) {
      return <Nav />;
    }
    return <View style={style.tabularasa} />
  }

  componentDidMount() {
    const isPortrait = func.isPortrait();
    this.setState({ isPortrait, isExamined: true });
  }

  render() {
    const { isExamined } = this.state;
    if (isExamined) {
      this.renderScreen();
    }
    return <View style={style.tabularasa} />;
  }
}
