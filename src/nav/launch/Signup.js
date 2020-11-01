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

class Signup extends Component {
    goToMain = () => {
      const { navigation } = this.props;
      navigation.navigate('main');
    }

    render() {
      return (
        <View style={style.container}>
          <Text>This is Signup screen!</Text>
          <TouchableOpacity onPress={this.goToMain}>
            <Text>Go To Main</Text>
          </TouchableOpacity>
        </View>
      );
    }
}

Signup.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default Signup;
