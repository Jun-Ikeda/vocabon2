import React, { Component } from 'react';
import {
  View, Text, StyleSheet, ScrollView, TouchableOpacity,
} from 'react-native';
import { List } from 'react-native-paper';

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
  //   backgroundColor: 'red',
    // height: 100,
    marginHorizontal: 20,
    marginVertical: 10,
    paddingHorizontal: 15,
    paddingVertical: 4,
  //   borderRadius: 10,
  },
  termanddef: {
    // backgroundColor: 'blue',
    marginVertical: 1,
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
  item: {
    // alignItems: 'center',
    // backgroundColor: 'blue',
    marginVertical: 1,
    fontSize: 12,
    color: 'black',
  },
  list: {
    backgroundColor: 'red',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  listItem: {
    backgroundColor: 'red',
    borderBottomRightRadius:10,
    borderBottomLeftRadius:10,
    height:100,
  },
});

export default class Edit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deckC: [],
      expandedIndexes: [],
    };
  }

  componentDidMount() {
    this.setState({ deckC: DeckContent[0] });
  }

  renderMainContents =() => {
    const { deckC, expandedIndexes } = this.state;
    return deckC.map((content, index) => {
      const toggleExpand = () => {
        let newExpandedIndexes = [];
        if (expandedIndexes.includes(index)) {
          newExpandedIndexes = expandedIndexes.filter((_index) => _index !== index);
        } else {
          expandedIndexes.push(index);
          newExpandedIndexes = expandedIndexes;
        }
        this.setState({ expandedIndexes: newExpandedIndexes });
      };
      return (
      <View style={style.box}>
        <List.Accordion
          expand={expandedIndexes.includes(index)}
          onPress={toggleExpand}
          title={content.term}
          description={content.definition}
          // left={(props) => <List.Icon {...props} icon="folder" />}
          titleStyle={style.termanddef}
          descriptionStyle={style.termanddef}
          style={[
            style.list,
            {
              borderBottomLeftRadius: expandedIndexes.includes(index) ? 0 : 10,
              borderBottomRightRadius: expandedIndexes.includes(index) ? 0 : 10,
            }]}
        >
          <List.Item 
            style={style.listItem} 
            title={
              ` ${content.synonym},
                \n${content.antonym},
                \n${content.prefix},
                \n${content.sufix}
                \n${content.exampleT}
                \n${content.exampleD}
                \n${content.cf}
              `
            }
            >
            {/* <Text style={style.item}>{content.synonym}</Text>
            <Text style={style.item}>{content.antonym}</Text>
            <Text style={style.item}>{content.prefix}</Text>
            <Text style={style.item}>{content.sufix}</Text>
            <Text style={style.item}>{content.exampleT}</Text>
            <Text style={style.item}>{content.exampleD}</Text>
            <Text style={style.item}>{content.cf}</Text> */}
          </List.Item>
        </List.Accordion>
      </View>
      )
    });
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
