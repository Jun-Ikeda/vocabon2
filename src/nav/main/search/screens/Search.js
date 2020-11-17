import React, { Component } from 'react';
import {
  View, Text, StyleSheet, /* TouchableOpacity, */
} from 'react-native';
import Header from '../../../../components/header/Header';
import { header } from '../../../../config/Const';

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
        <Header large renderAll={() => header.mainHeader.renderAll('Search')} />
        <Text>This is Search screen!</Text>
      </View>
    );
  }
}

export default Search;
