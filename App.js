import React, { Component } from 'react';
import { StyleSheet, /* Text,  */View } from 'react-native';

import Demo from './dev/Demo';
import ControlPanel from './dev/ControlPanel';

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'yellow',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

class App extends Component {
  render() {
    return (
      <View style={style.container}>
        <View style={style.container}>
          <Demo />
        </View>
        <ControlPanel />
      </View>
    );
  }
}

export default App;
