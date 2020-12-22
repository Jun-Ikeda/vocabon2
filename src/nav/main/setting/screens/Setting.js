import React, { Component } from 'react';
import {
  View, Text, StyleSheet, FlatList, TouchableOpacity,
} from 'react-native';
// import { ListItem } from 'react-native-elements';
import { List } from 'react-native-paper';

import HeaderInMain from '../../../../components/header/HeaderInMain';
import Item from '../../../../components/item/Item';
import Color from '../../../../config/Color';

// import Account from './settingitems/Account';
import Icon from '../../../../components/Icon';

const style = StyleSheet.create({
  container: {
    flex: 1,
    // textAlign: 'center',
  },
  itemContainer: {
    // alignItems: 'flex-start',
    // justifyContent: 'center',
    marginTop: 10,
    borderWidth: 2,
    borderRadius: 10,
    backgroundColor: Color.white1
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
        title: 'Basic Setting',
        nav: 'basicsetting',
        icon: 'settings',
      },
      {
        title: 'Account',
        nav: 'account',
        icon: 'account',
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
      <View>
        {/* <FlatList data={items} renderItem={renderSetting} /> */}
        {/* <TouchableOpacity
          onPress={() => navigation.navigate(item.nav)}
          key={item.title.toLowerCase()}
        >
          <ListItem.Content style={style.itemContainer}>
            <ListItem.Title>
              <Text style={style.text1}>{item.title}</Text>
            </ListItem.Title>
          </ListItem.Content>
        </TouchableOpacity> */}
        <List.Item
          style={style.itemContainer}
          title={item.title}
          titleStyle={style.text1}
          onPress={() => navigation.navigate(item.nav)}
          left={props => <List.Icon icon={item.icon} /> }
        />
      </View>
    ));
  }

  render() {
    return (
      <View style={style.container}>
        <HeaderInMain title="Setting" titleStyle={style.text2} />
        {/* <ListItem style={{ height: 300, backgroundColor: 'pink'}}> */}
        {this.renderItems()}
        {/* </ListItem> */}
      </View>
    );
  }
}

// Setting.propTypes = {};

// Setting.defaultProps = {};

export default Setting;
