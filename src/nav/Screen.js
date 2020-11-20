import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { func } from '../config/Const';

import Nav from './Nav';

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  tabularasa: {
    flex: 1,
  },
  landscapeContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

class Screen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isExamined: false,
      isPortrait: false,
    };
  }

  onLayout = (e) => {
    const { height, width } = func.onLayoutContainer(e);
    this.setState({ isPortrait: height > width, isExamined: true });
  }

  renderScreen = () => {
    const { isPortrait, isExamined } = this.state;
    if (isExamined) {
      if (isPortrait) {
        return <Nav />;
      }
      return (
        <View style={style.landscapeContainer}>
          <Text>Landscape mode is not supported yet</Text>
        </View>
      );
    }
    return <View style={style.tabularasa} />;
  }

  render() {
    return (
      <View
        style={style.container}
        onLayout={this.onLayout}
      >
        {this.renderScreen()}
      </View>
    );
  }
}

export default Screen;
