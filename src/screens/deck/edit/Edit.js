import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

import { DeckContent } from '../../../../dev/TestData';
import HeaderWithBack from '../../../components/header/HeaderWithBack';

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  containers: {
    flex: 1,
  },
  box: {
    flex: 1,
    backgroundColor: 'red',
    // height: 100,
    marginHorizontal: 20,
    marginVertical: 10,
    paddingHorizontal: 15,
    paddingVertical: 4,
    borderRadius: 10,
  },
  item: {
    // alignItems: 'center',
    // backgroundColor: 'blue',
    marginVertical: 1,
    fontSize: 12,
  },
  termanddef: {
    // backgroundColor: 'blue',
    marginVertical: 1,
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default class Edit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
    };
  }

  renderMainContents =() => {
    const { visible } = this.state;
    return DeckContent.map((content) => (
      // const def = content.definition.map((def) =>(
      //   def + ' '
      // ))
      <TouchableOpacity
        onPress={console.log('pushed')}
      >
        <View style={style.box}>
          <Text style={style.termanddef}>{content.term}</Text>
          <Text style={style.termanddef}>{content.definition}</Text>
          <Text style={style.item}>{content.synonym}</Text>
          <Text style={style.item}>{content.antonym}</Text>
          <Text style={style.item}>{content.prefix}</Text>
          <Text style={style.item}>{content.sufix}</Text>
          <Text style={style.item}>{content.exampleT}</Text>
          <Text style={style.item}>{content.exampleD}</Text>
          <Text style={style.item}>{content.cf}</Text>
        </View>
      </TouchableOpacity>
    ));
  }

  
  render() {
    const { navigation } = this.props;
    return (
      <View style={style.container}>
        <HeaderWithBack
          title="Edit"
          navigation={navigation}
        />
        <ScrollView style={style.containers}>
          {this.renderMainContents()}
        </ScrollView>
      </View>
    );
  }
}
