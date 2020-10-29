import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Color from '../../../../../../../../config/Color';
import { Functions } from '../../../../../../../../config/Const';

import Header from '../../../../../../../../components/header/Header';
import Icon from '../../../../../../../../components/Icon';
import Deck from '../../../../../../../../config/Firebase/Deck';
import PropertyItem from './Item';

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f7',
  },
  headerIcon: {
    color: Color.font2,
    fontSize: 25,
  },
  title: {
    // fontWeight: '700',
  },
  itemName: {
    flexDirection: 'row',
  },
  titleStyle: {
    color: Color.font2,
  },
  descBStyle: {
    color: Color.font6,
    fontSize: 15,
    paddingLeft: 30,
  },
  BelowStyle: {
    flex: 1,
  },
  itemsContainer: {
    flex: 1,
    marginVertical: 50,
    marginHorizontal: 30,
  },
  itemContainer: {
    flex: 1,
    justifyContent: 'center',
    marginVertical: 10,
    paddingLeft: 35,
    backgroundColor: Color.background2,
    borderRadius: 10,
  },
  iconStyle: {
    color: Color.font2,
    fontSize: 25,
  },
  // buttonIcon: {
  //   fontSize: 20,
  //   paddingHorizontal: 50,
  //   color: Color.background4,
  // },
  containerLine: {
    paddingVertical: 10, // 固定値だから変える
    flexDirection: 'row', // 縦に並べるやつ
  },
  containerLineB: {
    paddingVertical: 10, // 固定値だから変え
  },
});

class Property extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      deckinfo: {},
      isupdated: false,
    };
  }

  UNSAFE_componentWillMount() {
    const { navigation } = this.props;
    const id = navigation.getParam('id');
    const deckinfo = navigation.getParam('deckinfo');
    this.setState({ id, deckinfo });
    console.log({ id, deckinfo });
  }

  render() {
    return (
      <View style={style.container}>
        <Header
          renderLeft={() => (
            <Icon.Ionicons name="ios-arrow-back" style={style.headerIcon} />
          )}
          renderTitle={() => <Text style={style.title}>Property</Text>}
          onPressLeft={this.goBack}
        />
        {this.renderButtons()}
      </View>
    );
  }

  renderButtons = () => {
    const { navigation } = this.props;
    const { deckinfo } = this.state;
    const buttons = [
      {
        title: 'Title',
        onPress: () => {
          navigation.navigate('title', {
            deckinfo,
            updateDeckInfo: this.updateDeckInfo.bind(this),
          });
        },
        icon: {
          collection: 'MaterialCommunityIcons',
          name: 'format-title',
        },
        descriptionBelow: deckinfo.ti,
      },
      {
        title: 'Style',
        onPress: () => {
          navigation.navigate('style');
        },
        icon: {
          collection: 'Foundation',
          name: 'page-edit',
        },
        descriptionBelow: 'Style',
      },
      {
        title: 'Tags',
        onPress: () =>
          navigation.navigate('tags', {
            deckinfo,
            updateDeckInfo: this.updateDeckInfo.bind(this),
          }),
        icon: {
          collection: 'Ionicons',
          name: 'md-pricetags',
        },
        descriptionBelow: Functions.returnTagsInString({ tag: deckinfo.tag }),
      },
    ];
    return (
      <View style={style.itemsContainer}>
        {buttons.map(button => (
          <PropertyItem
            title={button.title}
            titleStyle={style.titleStyle}
            onPress={button.onPress}
            containerStyle={style.itemContainer}
            icon={button.icon}
            iconStyle={style.iconStyle}
            descriptionBelow={button.descriptionBelow}
            descBStyle={style.descBStyle}
            BelowStyle={style.BelowStyle}
            containerLine={style.containerLine}
            containerLineB={style.containerLineB}
          />
        ))}
      </View>
    );
  };

  returnSampleWord = () => {
    const {
      deckinfo: { smp },
    } = this.state;
    return smp.map(word => (
      <View>
        <Text>{word.i1}</Text>
        <Text>{word.i2}</Text>
      </View>
    ));
  };

  updateDeckInfo = newDeckInfo => {
    const key = Object.keys(newDeckInfo)[0];
    const value = Object.values(newDeckInfo)[0];
    this.setState(prev => {
      const { deckinfo } = prev;
      console.log({ prev: prev.deckinfo[key], value });
      const isupdated = Functions.objectEqual(prev.deckinfo[key], value);
      deckinfo[key] = value;
      return { isupdated, deckinfo };
    });
  };

  goBack = async () => {
    const { isupdated, id, deckinfo } = this.state;
    const { navigation } = this.props;
    if (isupdated) {
      await Deck.save({ deckid: id, data: deckinfo, merge: false });
    }
    navigation.goBack();
  };
}

export default Property;
