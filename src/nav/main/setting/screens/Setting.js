import React, { Component } from 'react';
import {
  View, Text, StyleSheet, FlatList, TouchableOpacity,
} from 'react-native';

import HeaderInMain from '../../../../components/header/HeaderInMain';
import Item from '../../../../components/item/Item';
import Color from '../../../../config/Color';
// import Icon from '../../../../components/Icon';

const style = StyleSheet.create({
  container: {
    flex: 1,
    // textAlign: 'center',
  },
  itemContainer: {
    // alignItems: 'flex-start',
    justifyContent: 'center',
    height: 100,
    marginTop: 40,
    borderTopWidth: 2,
    borderBottomWidth: 2,
    backgroundColor: Color.white2,
    borderRadius: 10,
  },
  text1: {
    fontSize: 30,
  },
  text2: {
    fontSize: 60,
  },
  // blackline: {
  //   borderBottomWidth: 1,
  //   borderBottomColor: 'black',
  //   height: 10,
  // },
  // redbox: {
  //   borderWidth: 1,
  //   borderColor: 'red',
  //   padding: 15,
  //   marginBottom: 10,
  // },
});

class Setting extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  renderItems = () => {
    const items: Item[] = [
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
    const renderSetting = ({ item }: {item: Item}) => (
      <TouchableOpacity
        onpress={() => { console.log('button Pressed'); }}
        style={style.itemContainer}
      >
        <Text style={style.text1}>{item.title}</Text>
      </TouchableOpacity>
    );
    return (
      <View>
        <FlatList data={items} renderItem={renderSetting} />
      </View>
    );
  }

  render() {
    return (
      <View style={style.container}>
        <HeaderInMain title="Setting" titleStyle={style.text2} />
        {this.renderItems()}
      </View>
    );
  }
}

// Setting.propTypes = {};

// Setting.defaultProps = {};

export default Setting;
