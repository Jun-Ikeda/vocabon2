import React, { Component } from 'react';
import {
  View, Text, StyleSheet, FlatList, TouchableOpacity,
} from 'react-native';
import { ListItem, Divider } from 'react-native-elements';

import HeaderInMain from '../../../../components/header/HeaderInMain';
import Item from '../../../../components/item/Item';
import Color from '../../../../config/Color';

// import Account from './settingitems/Account';
// import Icon from '../../../../components/Icon';

const style = StyleSheet.create({
  container: {
    flex: 1,
    // textAlign: 'center',
  },
  list: {
    borderWidth: 0,
    flexDirection: 'column',
  },
  itemContainer: {
    // alignItems: 'flex-start',
    justifyContent: 'center',
    height: 100,
    marginTop: 40,
    borderWidth: 2,
    backgroundColor: Color.white2,
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
    const { navigation } = this.props;
    const items = [
      {
        title: 'Account',
        nav: 'account',
      },
      {
        title: 'Basic Setting',
        nav: 'basicsetting',
      },
    ];
    // const renderSetting = ({ item }: {item: Item}) => (
    //   <TouchableOpacity
    //     onpress={() => {navigation.navigate('account');}}
    //     style={style.itemContainer}
    //   >
    //     <Text style={style.text1}>{item.title}</Text>
    //   </TouchableOpacity>
    // );
    return items.map((item) => (
      <View style={style.list}>
        {/* <FlatList data={items} renderItem={renderSetting} /> */}
        <TouchableOpacity onPress={() => navigation.navigate(item.nav)} key={item.title.toLowerCase}>
          <ListItem.Content style={style.itemContainer}>
            <ListItem.Title>
              <Text style={style.text1}>{item.title}</Text>
            </ListItem.Title>
          </ListItem.Content>
        </TouchableOpacity>
      </View>
    ));
  }

  render() {
    return (
      <View style={style.container}>
        <HeaderInMain title="Setting" titleStyle={style.text2} />
        <ListItem style={{ flexDirection: 'column' }}>
          {this.renderItems()}
        </ListItem>
      </View>
    );
  }
}

// Setting.propTypes = {};

// Setting.defaultProps = {};

export default Setting;
