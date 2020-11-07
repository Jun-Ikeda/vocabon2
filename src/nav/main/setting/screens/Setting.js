import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
// import PropTypes from 'prop-types';

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
});

class Setting extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={style.container}>
        <Text> Setting </Text>
      </View>
    );
  }
}

Setting.propTypes = {};

Setting.defaultProps = {};

export default Setting;
