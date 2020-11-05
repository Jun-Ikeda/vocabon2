import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

// import Nav from './src/nav/Nav';

import SwitchDevPro from './SwitchDevPro';

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
        <SwitchDevPro />
      </View>
    );
  }
}

export default App;
