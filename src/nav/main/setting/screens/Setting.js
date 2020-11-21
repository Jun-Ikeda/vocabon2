import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import HeaderInMain from '../../../../components/header/HeaderInMain';
import Item from '../../../../components/item/Item';
// import Icon from '../../../../components/Icon';

const style = StyleSheet.create({
  container: {
    flex: 1,
    // textAlign: 'center',
  },
  itemContainer: {
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  text1: {
    fontSize: 20,
  },
  text2: {
    fontSize: 30,
  },
  redbox: {
    borderWidth: 1,
    borderColor: 'red',
    padding: 15,
    marginBottom: 10,
  },
});

class Setting extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  renderItems = () => {
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
      <View style={style.itemContainer}>
        {items.map((item) => (
          <Item title={item.title} titleStyle={style.text1} containerStyle={style.redbox}/>
        ))}
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
