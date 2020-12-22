import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
// import PlayResults from '../../src/screens/deck/play/play/PlayResults';

import Header from '../../src/components/header/Header';
// import PlayResults from 

class IH extends Component {

  constructor(props) {
    this.state = {
      deckG: { thumbnail: { uri: 'https://spring-js.com/wp-content/uploads/2017/06/01-1.jpg'}}
    }
  }

  renderTestScreen = () => {
    const {right, left, deckG: { thumbnail: { uri }}} = this.state;
    const { navigation } = this.props;
    navigation.navigate('results', {right, left, uri });
  };
  render() {
    return (0);
  }
}

IH.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default IH;
