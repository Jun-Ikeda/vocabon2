import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import HeaderInMain from '../../../../components/header/HeaderInMain';
import Item from '../../../../components/item/Item';

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  itembox: {
    borderWidth: 6,
    fontSize: 12,
    // textAlign: '',
  },
});

class Setting extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const items = [
      {
        title: 'Account',
      },
      {
        title: 'Nanika',
      },
      {
        title: 'Language',
      },
      {
        title: 'Country',
      },
    ];
    return (
      <View style={style.container}>
        <HeaderInMain title="Setting" />
        {items.map((item) => (
          <Item title={item.title} style={style.itembox} />
        ))}
      </View>
    );
  }
}

// Setting.propTypes = {};

// Setting.defaultProps = {};

export default Setting;
