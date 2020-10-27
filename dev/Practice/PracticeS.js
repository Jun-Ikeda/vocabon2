import React, { Component } from 'react';
import {
  View, Text, StyleSheet, TouchableOpacity,
} from 'react-native';
import PropTypes from 'prop-types';

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
});

class Suzuki extends Component {
  gotoOkuda = () => {
    const { navigation } = this.props;
    navigation.navigate('okuda');
  };

  render() {
    return (
      <View style={style.container}>
        <Text>I&apos;m Masataka Suzuki</Text>
        <Text>I&apos;ll do my best...</Text>
        <TouchableOpacity onPress={this.gotoOkuda}>
          <Text>Go to Okuda...</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

Suzuki.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default Suzuki;
