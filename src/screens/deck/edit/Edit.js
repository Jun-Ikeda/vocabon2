import React, { Component } from 'react';
import {
  View, Text, StyleSheet, ScrollView, TouchableOpacity,
} from 'react-native';
import { List } from 'react-native-paper';

import { DeckContent } from '../../../../dev/TestData';
import HeaderWithBack from '../../../components/header/HeaderWithBack';
import { deck } from '../../../config/Const';
import PopUpMenu from '../../../components/menu/PopUpMenu';
import Color from '../../../config/Color';
import Icon from '../../../components/Icon';

const backgroundColor = Color.cud.pGreen1;
const iconSize = 20;

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  containers: {
    flex: 1,
  },
  box: {
    flex: 1,
    marginHorizontal: 20,
    marginVertical: 10,
    borderWidth: 0,
  },
  termanddef: {
    marginVertical: 1,
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
  list: {
    backgroundColor,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  listItem: {
    backgroundColor,
    paddingVertical: 0,
  },
  listItemLast: {
    backgroundColor,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
    paddingTop: 0,
    paddingBottom: 10,
  },
  overlayStyle: {
    // opacity: 0.8,
    backgroundColor: Color.gray1,
    opacity: 0.5,
    color: Color.white3,
    flex: 1,
  },
  menu: {
    position: 'absolute',
    right: 100,
    left: 100,
    top: 100,
    bottom: 100,
    backgroundColor: Color.black,
    alignItems: 'center',
    justifyContent: 'center',
  },
  defaultMenuText: {
    color: Color.white3,
    fontSize: 20,
  },
  editButton: {
    position: 'absolute',
    right: 70,
    top: 30,
  },
});

export default class Edit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deckC: [],
      expandedIndexes: [],
      editVisible: true,
    };
  }

  componentDidMount() {
    this.setState({ deckC: DeckContent[0] });
  }

  renderPopUp = () => {
    const { editVisible } = this.state;
    return (
      <PopUpMenu
        isVisible={editVisible}
        setVisible={(bool) => this.setState({ editVisible: bool })}
        renderMenu={this.renderMenu}
        overlayStyle={style.overlayStyle}
      />
    );
  }

  renderMenu = () => (
    <View style={style.menu}>
      <Text style={style.defaultMenuText}>Pop Up Menu</Text>
    </View>
  )

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
            description={deck.formatArrayContent(content.definition)}
            titleStyle={style.termanddef}
            descriptionStyle={style.termanddef}
            style={[
              style.list,
              {
                borderBottomLeftRadius: expandedIndexes.includes(index) ? 0 : 10,
                borderBottomRightRadius: expandedIndexes.includes(index) ? 0 : 10,
              }]}
          >
            <List.Item style={style.listItem} title={`Synonym: ${deck.formatArrayContent(content.synonym)}`} />
            <List.Item style={style.listItem} title={`Antonym: ${deck.formatArrayContent(content.antonym)}`} />
            <List.Item style={style.listItem} title={`Prefix: ${deck.formatArrayContent(content.prefix)}`} />
            <List.Item style={style.listItem} title={`Sufix: ${deck.formatArrayContent(content.sufix)}`} />
            <List.Item style={style.listItem} title={`ExampleT: ${deck.formatArrayContent(content.exampleT)}`} />
            <List.Item style={style.listItem} title={`ExampleD: ${deck.formatArrayContent(content.exampleD)}`} />
            <List.Item style={style.listItemLast} title={`Cf: ${deck.formatArrayContent(content.cf)}`} />
          </List.Accordion>
          <TouchableOpacity
            onPress={() => this.setState({ editVisible: true })}
            style={style.editButton}
          >
            <Icon.Feather
              name="edit"
              size={iconSize}
            />
          </TouchableOpacity>
        </View>
      );
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
        {this.renderPopUp()}
      </View>
    );
  }
}

/*
<View
  onLayout={e=>{
    const height = e.nativeEvent.layout.height;
    const width = e.nativeEvent.layout.width
  }}
>

</View>
*/
