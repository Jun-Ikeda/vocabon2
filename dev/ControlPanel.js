import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

import Button from './Button';

// import State from './src/config/State';
// import Storage, { StateStorage } from './src/config/Storage';
// import initState from './src/config/initState';
// import { Functions } from './src/config/Const';
// import Firebase, { FireObject } from './src/config/Firebase';

// import Timer from './src/components/Timer';

const style = StyleSheet.create({
  button: {
    borderWidth: 0.5,
    borderRadius: 16,
    paddingHorizontal: 10,
    marginHorizontal: 5,
    marginVertical: 2,
  },
});

const renderButtons = () => Button.map((button, index) => {
  const onPress = () => {
    console.log(`${index + 1}: ${button.title} is called`);
    button.onPress();
    console.log(`${index + 1}: ${button.title} ended`);
  };
  return (
    <TouchableOpacity
      style={[
        style.button,
        {
          backgroundColor:
              button.title.indexOf('temp') !== -1 ? 'red' : 'white',
        },
      ]}
      onPress={onPress}
    >
      <Text
        style={{
          color: button.title.indexOf('temp') !== -1 ? 'white' : 'black',
        }}
      >
        {button.title}
      </Text>
    </TouchableOpacity>
  );
});

class ControlPanel extends Component {
  render() {
    return (
      <View>
        <ScrollView showsVerticalScrollIndicator={false} horizontal>
          {renderButtons()}
        </ScrollView>
      </View>
    );
  }
}

export default ControlPanel;
