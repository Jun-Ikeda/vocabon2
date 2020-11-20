import React, { Component } from 'react';
import {
  View, Text, StyleSheet, /* TouchableOpacity, */
} from 'react-native';

import HeaderInMain from '../../../../components/header/HeaderInMain';

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
});

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    // const { navigation } = this.props;
    // const {} = this.state;
    return (
      <View style={style.container}>
        <HeaderInMain title="Search" />
        <Text>This is Search screen!</Text>
      </View>
    );
  }
}

export default Search;
