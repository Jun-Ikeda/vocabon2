import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { RadioButton } from 'react-native-paper';

class PlayOption extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: 0,
    };
  }

  render() {
    const { checked } = this.state;
    return (
      <View>
        <Text> PlayOption </Text>
        <RadioButton
          value="first"
          status={checked === 0 ? 'checked' : 'unchecked'}
          onPress={() => this.setState({ checked: 0 })}
        >
          <Text>test</Text>
        </RadioButton>
        <RadioButton
          value="second"
          status={checked === 1 ? 'checked' : 'unchecked'}
          onPress={() => this.setState({ checked: 1 })}
        />
      </View>
    );
  }
}

export default PlayOption;

/*
標準再生
範囲指定再生
間違えた回数によって...みたいな

this.state = {
    checked: 0
}

<RadioButton
    value="first"
    status={ checked === 0 ? 'checked' : 'unchecked' }
    onPress={() => this.setState({ checked: 0 })}
/>
<RadioButton
    value="second"
    status={ checked === 1 ? 'checked' : 'unchecked' }
    onPress={() => this.setState({ checked: 1 })}
/>

*/
