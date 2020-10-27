import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Functions } from '../../config/Const';
import Item from '../item/Item';
import PopUpMenu from './PopUpMenu';

const style = StyleSheet.create({
  menuContainer: {
    backgroundColor: 'white',
  },
});

export default class PopUpMenuWithItems extends Component {
  constructor(props) {
    super(props);
    this.state = {
      layout: { height: 0, width: 0 },
    };
  }

  render() {
    return (
      <PopUpMenu
        {...this.props}
        onLayout={e =>
          this.setState({ layout: Functions.onLayoutContainer(e) })
        }
        renderMenu={() => this.renderItems()}
      />
    );
  }

  renderItems = () => {
    const {
      layout: { width },
    } = this.state;
    const { menuContainerStyle, items } = this.props;
    return (
      <View
        style={[style.menuContainer, { width: width / 3 }, menuContainerStyle]}
      >
        {items.map(item => (
          <Item
            {...item}
            titleStyle={{ color: 'black', /* backgroundColor: 'blue', */ margin: 15 }}
            containerStyle={{ flex: 0 /* , backgroundColor: 'red' */ }}
          />
        ))}
      </View>
    );
  };
}

PopUpMenuWithItems.defaultProps = {
  items: [],
}
