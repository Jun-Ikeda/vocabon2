import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

class PracticeIH extends Component {
  gotoIwasaki = () => {
    const { navigation } = this.props;
    navigation.navigate('iwasaki');
  }

  render() {
    return (
      <View>
        <Text>d( ^ω^ #)b</Text>
        <TouchableOpacity onPress={this.gotoIwasaki}>
          <Text>岩崎慎平に行こう</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

PracticeIH.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default PracticeIH;
