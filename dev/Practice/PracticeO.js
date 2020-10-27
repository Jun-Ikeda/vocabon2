import React, { Component } from 'react';
import {
  StyleSheet, Text, View, TouchableOpacity,
} from 'react-native';
import PropTypes from 'prop-types';

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
});

class Okuda extends Component {
  gotoIkeda = () => {
    const { navigation } = this.props;
    navigation.navigate('ikeda');
  };

  render() {
    return (
      <View style={style.container}>
        <Text>I&apos;m Yuto Okuda</Text>
        <Text>I highly dislike awkward programming terms</Text>
        <TouchableOpacity onPress={this.gotoIkeda}>
          <Text>Go to Ikeda</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

Okuda.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default Okuda;
