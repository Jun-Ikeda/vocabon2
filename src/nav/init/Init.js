import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
});

class Init extends Component {
  componentDidMount() {
    const { navigation } = this.props;
    navigation.navigate('launch');
  }

  render() {
    return (
      <View style={style.container}>
        <Text>This is Init screen!</Text>
      </View>
    );
  }
}

Init.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default Init;
