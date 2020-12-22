import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { RadioButton, Button } from 'react-native-paper';
import PropTypes from 'prop-types';

import HeaderWithBack from '../../../../components/header/HeaderWithBack';

class PlayOption extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'default',
    };
  }

  render() {
    const { value } = this.state;
    const { navigation } = this.props;
    return (
      <View>
        <HeaderWithBack navigation={navigation} title="Options" />
        <RadioButton.Group
          onValueChange={(newValue) => this.setState({ value: newValue })}
          value={value}
        >
          <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: 'green' }}>
            <Text style={{ fontSyze: 20, position: 'absolute', alignSelf: 'center' }}>Default</Text>
            <RadioButton value="default" style={{ right: 0, left: 0 }} />
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: 'green' }}>
            <Text style={{ fontSyze: 20, position: 'absolute', alignSelf: 'center' }}>Custom</Text>
            <RadioButton value="custom" style={{ right: 0, left: 0 }} />
          </View>
        </RadioButton.Group>
        <RadioButton value="custom" />
        <Button mode="contained" onPress={() => alert(value)}>
          Start
        </Button>
      </View>
    );
  }
}

PlayOption.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default PlayOption;

/*
fontSize: 20,

*/

/* class PlayOption extends Component {
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
        />
        <RadioButton
          value="second"
          status={checked === 1 ? 'checked' : 'unchecked'}
          onPress={() => this.setState({ checked: 1 })}
        />
      </View>
    );
  }
} */

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
