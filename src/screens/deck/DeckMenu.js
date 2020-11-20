import React, { Component } from 'react';
import { View, Text } from 'react-native';

class DeckMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const { title } = this.props;
    return (
      <View>
        <Text> {title} </Text>
      </View>
    );
  }
}

export default DeckMenu;
