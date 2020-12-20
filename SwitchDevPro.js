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
import CreateDeck from './src/nav/main/home/screens/createdeck/CreateDeck';
import Practice from './dev/Practice/PracticeNavigator';
import Play from './src/screens/deck/play/Play';
import Property from './src/screens/deck/property/Property';
// import Account from './src/nav/main/setting/screens/settingitems/Account';

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
  { title: 'Product', element: <Screen /> },
  { title: 'Demo', element: <Demo /> },
  { title: 'Ichikawa', element: <Practice /> },
  { title: 'Ikeda', element: <Play /> },
  { title: 'Okuda', element: <Setting /> },
  { title: 'Suzuki', element: <CreateDeck /> },
  { title: 'Kochiya', element: <Template /> },
  { title: 'Iwasaki', element: <Property /> },
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
          if (index === visible) {
            return (
              <View style={StyleSheet.absoluteFill} key={button.title.toLowerCase()}>
                {button.element}
              </View>
            );
          }
          return null;
        })}
      </View>
    );
  }

  renderButtons = () => {
    const { visible } = this.state;
    return (
      <View style={style.buttonsContainer}>
        <ScrollView showsVerticalScrollIndicator={false} horizontal>
          {buttons.map((button, index) => {
            const isVisible = index === visible;
            return (
              <TouchableOpacity
                onPress={() => this.setState({ visible: index })}
                style={[style.button, { backgroundColor: isVisible ? 'black' : 'white' }]}
                key={button.title.toLowerCase()}
              >
                <Text style={{ color: isVisible ? 'white' : 'black' }}>{button.title}</Text>
              </TouchableOpacity>

            );
          })}
        </ScrollView>
      </View>
    );
  }

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
