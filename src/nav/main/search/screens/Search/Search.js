import React, { Component } from 'react';
import {
  View, StyleSheet, /* TouchableOpacity, */
} from 'react-native';

import HeaderInMain from '../../../../../components/header/HeaderInMain';

import SearchBar from './SearchBar';

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
});

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
    };
  }

  render() {
    const { searchText } = this.state;
    return (
      <View style={style.container}>
        <HeaderInMain title="Search" />
        <SearchBar setState={(state) => this.setState(state)} searchText={searchText} />
      </View>
    );
  }
}

export default Search;
