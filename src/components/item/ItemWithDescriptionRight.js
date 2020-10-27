import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Item from './Item';
import Color from '../../config/Color';

const style = StyleSheet.create({
  description: {
    color: Color.font5,
  },
  descriptionContainer: {
    alignItems: 'flex-end',
  },
});

class ItemWithDescriptionRight extends Component {
  render() {
    return <Item {...this.props} renderRight={this.renderRight} />;
  }

  renderRight = () => {
    const { description } = this.props;
    return (
      <View style={style.descriptionContainer}>
        <Text style={style.description}>{description}</Text>
      </View>
    );
  };
}

export default ItemWithDescriptionRight;
