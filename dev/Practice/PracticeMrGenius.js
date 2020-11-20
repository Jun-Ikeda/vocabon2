import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

class IH extends Component {
  gotoIwasaki = () => {
    const { navigation } = this.props;
    navigation.navigate('iwasaki');
  };

  bossBaby = () => (
    <View>
      <Text>i worship BOSS!</Text>
    </View>
  )

  render() {
    return (
      <View>
        <Text>d( ^ω^ #)b</Text>
        <TouchableOpacity onPress={this.gotoIwasaki}>
          <Text>岩崎慎平に行こう</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.bossBaby} />
      </View>
    );
  }
}

IH.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default IH;
