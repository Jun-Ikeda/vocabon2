import React, { Component } from 'react';
import {
  View, StyleSheet, /* TouchableOpacity, Text, */
} from 'react-native';
import Header from '../src/components/header/Header';

import Icon from '../src/components/Icon';
import TempComponent from '../src/components/TempComponent';
import Item from '../src/components/item/Item';
import ItemWithIcon from '../src/components/item/ItemWithIcon';
import ItemWithDescription from '../src/components/item/ItemWithDescription';
import Background from '../src/components/Background';
import TextAdjust from '../src/components/TextAdjust';
import PopUpMenu from '../src/components/menu/PopUpMenu';
import UserIcon from '../src/components/UserIcon';
import DeckCarousel from '../src/components/DeckCarousel';

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: 'blue',
  },
});

class Demo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuVisible: false,
    };
  }

  renderHeader = () => (
    <Header
      style={style.header}
      large
      renderAll={() => <View style={{ flex: 1, backgroundColor: 'red' }} />}
      renderLeft={this.renderIcons}
    />
  )

  renderBackground = () => (
    <Background
      imageStyle={{ resizeMoede: 'cover', width: 'auto', flex: 1 }}
      imageSource={{ uri: 'https://images.unsplash.com/photo-1605491654512-cab6c6f016bf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60' }}
      blurRadius={0}
      overlayColor="#ffffff"
      overlayOpacity={0.6}
    />
  )

  renderItems= () => (
    <View>
      <Item title="Item" onPress={() => this.setState({ menuVisible: true })} />
      <ItemWithIcon title="Item With Icon" icon={{ name: 'md-settings', collection: 'Ionicons' }} />
      <ItemWithDescription title="Item With Description" description="a" />
    </View>
  )

  renderIcons = () => (
    <Icon.Ionicons name="ios-arrow-back" />
  )

  renderTempComponent = () => (
    <TempComponent />
  )

  renderMenu = () => {
    const { menuVisible } = this.state;
    return (
      <PopUpMenu
        isVisible={menuVisible}
        setVisible={(bool) => this.setState({ menuVisible: bool })}
      />
    );
  }

  renderUserIcon = () => (
    <UserIcon
      user={{ name: 'Vocabon', background: '#53A1B3' }}
      size={52}
    />
  )

  renderCarousel = () => (
    <DeckCarousel data={[{ title: 'this' }, { title: 'is' }, { title: 'test' }]} />
  )

  renderTextAdjust = () => (
    <TextAdjust message="aaaaa" />
  )

  render() {
    return (
      <View style={style.container}>
        {this.renderBackground()}
        {this.renderHeader()}
        {this.renderItems()}
        {this.renderTempComponent()}
        {this.renderTextAdjust()}
        {this.renderUserIcon()}
        {this.renderCarousel()}
        {this.renderMenu()}
      </View>
    );
  }
}

export default Demo;
