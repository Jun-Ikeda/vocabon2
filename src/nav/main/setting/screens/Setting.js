import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Header from '../../../../components/header/Header';
import Item from '../../../../components/item/Item';
import { header } from '../../../../config/Const';
// import PropTypes from 'prop-types';

const style = StyleSheet.create({
  container: {
    flex: 1,
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
        <Header large renderAll={() => header.mainHeader.renderAll('Setting')} />
        <Text> Setting </Text>
        {items.map((item) => (
          <Item title={item.title} containerStyle={{ borderWidth: 3, alignItems: 'center', justifyContent: 'center' }} />
        ))}
        {/* <Item title="Account" containerStyle={{ borderWidth: 1, alignItems: 'center', justifyContent: 'center' }} />
        <Item title="Nanika" containerStyle={{ borderWidth: 1, alignItems: 'center', justifyContent: 'center' }} />
        <Item title="Language" containerStyle={{ borderWidth: 1, alignItems: 'center', justifyContent: 'center' }} />
      <Item title="Country" containerStyle={{ borderWidth: 1, alignItems: 'center', justifyContent: 'center' }} /> */}
      </View>
    );
  }
}

Setting.propTypes = {};

Setting.defaultProps = {};

export default Setting;
