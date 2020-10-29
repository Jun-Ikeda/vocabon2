import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const style = StyleSheet.create({
  final: {
    backgroundColor: '#4FD0E9',
    flexDirection: 'row',
    fontWeight: '800',
    justifyContent: 'center',
  },
});

export default class FinishedScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { rightSwipedIndex, leftSwipedIndex, navigation } = this.props;
    return (
      <View>
        <Text style={style.final}>Congraturations!</Text>
        <Text style={style.final}>
          Achievement:
          {rightSwipedIndex.length}
          /
          {rightSwipedIndex.length + leftSwipedIndex.length}
          words
        </Text>
        <Text style={style.final}>
          Rate:
          {Math.floor(
            (100 * rightSwipedIndex.length) /
              (rightSwipedIndex.length + leftSwipedIndex.length),
          )}
          %
        </Text>
        {this.renderPerfectMessage()}
        <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text>Go Back</Text>
        </TouchableOpacity>
      </View>
    );
  }

  renderPerfectMessage() {
    const { leftSwipedIndex } = this.props;
    if (leftSwipedIndex.length === 0) {
      return <Text style={style.final}>perfect!</Text>;
    }
    return null;
  }
}
