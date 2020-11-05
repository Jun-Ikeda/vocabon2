import React, { Component } from 'react';
import {
  View, Text, StyleSheet, TouchableOpacity,
} from 'react-native';

import Nav from './src/nav/Nav';
import Demo from './dev/Demo';
import ControlPanel from './dev/ControlPanel';

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttonsContainer: {
    flexDirection: 'row',
    borderWidth: 1,
    justifyContent: 'space-around',
  },
  button: {
    borderWidth: 0.5,
    borderRadius: 16,
    paddingHorizontal: 10,
    marginHorizontal: 5,
    marginVertical: 2,
  },
  devproContainer: {
    // ...StyleSheet.absoluteFill,
    position: 'absolute',
    right: 0,
    left: 0,
    top: 0,
    bottom: 0,
  },
});

class SwitchDevPro extends Component {
  constructor(props) {
    super(props);
    this.state = {
      proVisible: true,
      devVisible: false,
    };
  }

    renderButtons = () => (
      <View style={style.buttonsContainer}>
        <TouchableOpacity
          onPress={() => this.setState({ proVisible: true, devVisible: false })}
          style={style.button}
        >
          <Text>Production Mode</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => this.setState({ proVisible: false, devVisible: true })}
          style={style.button}
        >
          <Text>Develop Mode</Text>
        </TouchableOpacity>
      </View>
    )

    renderDevPro = () => {
      const { proVisible, devVisible } = this.state;
      return (
        <View style={style.container}>
          <View
            style={[
              { opacity: proVisible ? 1 : 0 },
              StyleSheet.absoluteFill]}
            pointerEvents={proVisible ? 'auto' : 'none'}
          >
            <Nav />
          </View>
          <View
            style={[
              { opacity: devVisible ? 1 : 0 },
              StyleSheet.absoluteFill]}
            pointerEvents={devVisible ? 'auto' : 'none'}
          >
            <Demo />
          </View>
        </View>
      );
    //   if (proVisible) {
    //     return <Nav />;
    //   } if (devVisible) {
    //     return <Demo />;
    //   }
    //   return <View style={style.container} />;
    }

    renderControlPanel = () => (
      <ControlPanel />
    )

    render() {
      return (
        <View style={style.container}>
          {this.renderDevPro()}
          {this.renderButtons()}
          {this.renderControlPanel()}
        </View>
      );
    }
}

export default SwitchDevPro;
