import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

import Color from '../../../../../../../../config/Color';

import HeaderWithBack from '../../../../../../../../components/header/HeaderWithBack';
import ItemWithIcon from '../../../../../../../../components/item/ItemWithIcon';
// import Item from '../../../../../../../../components/item/Item';

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.background1,
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  itemContainer: {
    marginHorizontal: 40,
    marginVertical: 20,
    borderWidth: 2,
    // flex: 1,
  },
});

export default class DeckEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { navigation } = this.props;
    return (
      <View style={style.container}>
        <HeaderWithBack navigation={navigation} title="Edit" />
        <View style={style.contentContainer}>{this.renderItemContainer()}</View>
      </View>
    );
  }

  renderItemContainer = () => {
    const { navigation } = this.props;
    const items = [{ title: 'Add Words', screen: 'addwords' }];
    return (
      <View style={style.itemContainer}>
        {items.map(item => (
          <ItemWithIcon
            title={item.title}
            containerStyle={{
              borderWidth: 1,
              // borderColor: 'white',
            }}
            titleStyle={{ color: 'black' }}
            onPress={() => navigation.navigate(item.screen)}
          />
        ))}
      </View>
    );
  };
}
