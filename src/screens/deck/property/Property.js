import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import HeaderWithBack from '../../../components/header/HeaderWithBack';

import DeckName from '../../../components/navscreens/DeckName';
import LanguageSelection from '../../../components/navscreens/LanguageSelection';

// DeckNameとLanguageSelectionをCreateDeckを参考にして使う。

const style = StyleSheet.create({
  itemContainer: {
    // flex: 1,
  },
  itemTitleBox: {
    marginVertical: 20,
  },
  itemTitle: {
    fontSize: 20,
  },
});

class Property extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'もともとのタイトル名',
      language: {
        term: 'English',
        definition: 'Japanese',
      },
    };
  }

  render() {
    const { title, language } = this.state;

    return (
      <View>
        <HeaderWithBack title="Property" />

        <View style={style.itemContainer}>
          <View style={style.itemTitleBox}>
            <Text style={style.itemTitle}>Deck Name</Text>
          </View>
          <DeckName setState={(state) => this.setState(state)} title={title} />
        </View>

        <View style={style.itemContainer}>
          <View style={style.itemTitleBox}>
            <Text style={style.itemTitle}>Language</Text>
          </View>
          <LanguageSelection setState={(state) => this.setState(state)} language={language} />
        </View>

      </View>

    );
  }
}

export default Property;

/* 
const items = [
    { title: 'Deck Name', elements: 実際の<>タグとか書くところ },
    { title: 'Language', elements: 実際の<>タグとか書くところ },
]

return items.map((item) => {
    return (
        <View style={style.itemContainer}>
          <View style={style.itemTitleBox}>
            <Text style={style.itemTitle}>Language</Text>
          </View>
            {item.elements}
        </View>
    )
})

*/
