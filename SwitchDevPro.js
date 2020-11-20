import React, { Component } from 'react';
import {
  View, Text, StyleSheet, TouchableOpacity, ScrollView,
} from 'react-native';

// import Nav from './src/nav/Nav';
import Screen from './src/nav/Screen';
import Demo from './dev/Demo';
import ControlPanel from './dev/ControlPanel';
import Template from './dev/Template';
import Setting from './src/nav/main/setting/screens/Setting';

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttonsContainer: {
    borderWidth: 1,
  },
  button: {
    borderWidth: 0.5,
    borderRadius: 16,
    paddingHorizontal: 10,
    marginHorizontal: 5,
    marginVertical: 2,
  },
});

const buttons = [
  { title: 'Production', element: <Screen /> },
  { title: 'Demo', element: <Demo /> },
  { title: 'Ichikawa', element: <Template /> },
  { title: 'Okuda', element: <Setting /> },
  { title: 'Ikeda', element: <Template /> },
  { title: 'Suzuki', element: <Template /> },
  { title: 'Kochiya', element: <Template /> },
  { title: 'Iwasaki', element: <Template /> },
];

class SwitchDevPro extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: 0,
    };
  }

  renderScreens = () => {
    const { visible } = this.state;
    return (
      <View style={style.container}>
        {buttons.map((button, index) => {
          const isVisible = (index === visible);
          return (
            <View
              style={[
                { opacity: isVisible ? 1 : 0 },
                StyleSheet.absoluteFill]}
              pointerEvents={isVisible ? 'auto' : 'none'}
            >
              {button.element}
            </View>
          );
        })}
      </View>
    );
  }

  renderButtons = () => (
    <View style={style.buttonsContainer}>
      <ScrollView showsVerticalScrollIndicator={false} horizontal>
        {buttons.map((button, index) => (
          <TouchableOpacity
            onPress={() => this.setState({ visible: index })}
            style={style.button}
          >
            <Text>{button.title}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  )

  renderControlPanel = () => (
    <ControlPanel />
  )

  render() {
    return (
      <View style={style.container}>
        {this.renderScreens()}
        {this.renderButtons()}
        {this.renderControlPanel()}
      </View>
    );
  }
}

export default SwitchDevPro;
