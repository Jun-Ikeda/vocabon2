import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

import Nav from './src/nav/Nav';

import Demo from './dev/Demo';
import ControlPanel from './dev/ControlPanel';

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});

class App extends Component {
  render() {
    return (
      <View style={style.container}>
        <View style={style.container}>
          {/* <Nav /> */}
          <Demo />
        </View>
        <ControlPanel />
      </View>
    );
  }
}

export default App;
