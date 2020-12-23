import React, { Component } from 'react';
import {
  Platform, StyleSheet, View, Text, TextInput,
} from 'react-native';
import { RadioButton, Button } from 'react-native-paper';
import PropTypes from 'prop-types';
import { CheckBox } from 'react-native-elements';

import HeaderWithBack from '../../../../components/header/HeaderWithBack';

const maxMarked = 37;
const maxDef = 4;
const maxEx = 3;

class PlayOption extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'default',
      checked: false,
      myNumber: '',
    };
  }

  // handleInputChange = (text) => {
  //   const { text } = this.state;
  //   if (/^\d+$/.test(text)) {
  //     this.setState({
  //       text: text
  //     });
  //   }
  // }

  renderHeader = () => {
    const { navigation } = this.props;
    return (
      <HeaderWithBack navigation={navigation} title="Options" />
    );
  }

  renderRadioButtons = () => {
    const { value } = this.state;
    const { checked } = this.state;
    return (
      <RadioButton.Group
        onValueChange={(newValue) => this.setState({ value: newValue })}
        value={value}
        checked1={checked}
      >
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <RadioButton value="default" style={{ right: 0, left: 0 }} />
          <Text style={{ fontSyze: 20, alignSelf: 'center' }}>Default</Text>
        </View>
        <View>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <RadioButton value="custom" style={{ right: 0, left: 0 }} />
            <Text style={{ fontSyze: 20, alignSelf: 'center' }}>Custom</Text>
          </View>
          {this.renderCustomSettings()}
        </View>
      </RadioButton.Group>
    );
  }

  renderCustomSettings = () => {
    const { myNumber, value } = this.state;
    const onChangeText = (text) => {
      let newText = '';
      const numbers = '0123456789';
      for (let i = 0; i < text.length; i++) {
        if (numbers.indexOf(text[i]) > -1) {
          newText += text[i];
        } else {
          // your call back function
          alert('please enter numbers only');
        }
      }
      this.setState({ myNumber: newText });
    };
    if (value === 'custom') {
      return (
        <View>
          <TextInput
            keyboardType="numeric"
            onChangeText={onChangeText}
            value={myNumber}
            maxLength={10}
          />
          {/* <CheckBox
          // checkedIcon="dot-circsle-o"
          // uncheckedIcon="circle-o"
            title="checkbox 1"
          // checkedColor="red"
            checked={checked}
            onPress={() => this.setState({ checked: !checked })}
          />
          <View>
            <CheckBox />
            <Text style={{ marginTop: 5 }}> this is checkbox</Text>
          </View>
          <View style={{ backgroundColor: 'red', width: 100, height: 100 }} /> */}
        </View>
      );
    }
    return null;
  }

  render() {
    const { value } = this.state;
    return (
      <View>
        {this.renderHeader()}
        {this.renderRadioButtons()}
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
間違えた回数で絞り込み 0~37
意味が何個あるか 1~4
例文の数 0~3
synonymの数
antonymの数
cfの数
sufixがあるか
prefixがあるか
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

this.state = {
  text: ''
}

const { text } = this.state;

<TextInput
  value={text}
  onChangeText={newText => this.setState({ text: newText })}
/>
*/
