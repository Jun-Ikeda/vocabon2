import React, { Component } from 'react';
import { View, Text, StyleSheet /* TouchableOpacity */ } from 'react-native';
// import Menu, { MenuItem, MenuDivider } from 'react-native-material-menu';

import Color from '../../../../../../../../config/Color';
import Deck from '../../../../../../../../config/Firebase/Deck';

import Header from '../../../../../../../../components/header/HeaderWithBack';
import Icon from '../../../../../../../../components/Icon';

import Swiper from './card/Swiper';
import HeaderWithBack from '../../../../../../../../components/header/HeaderWithBack';
import PopUpMenuWithItems from '../../../../../../../../components/menu/PopUpMenuWithItems';

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.background1,
  },
  headerIcon: {
    color: Color.font2,
    fontSize: 25,
  },
});

class DeckPlay extends Component {
  constructor(props) {
    super(props);
    this.CardsRef = {};
    this.menuRef = {};
    this.state = {
      cards: [],
      loaded: false,
      menuVisible: false,
    };
  }

  render() {
    const { navigation } = this.props;
    return (
      <View style={style.container}>
        <HeaderWithBack
          navigation={navigation}
          title="Play"
          renderRight={() => <Icon.Entypo name="dots-three-vertical" />}
          onPressRight={() => this.setState({ menuVisible: true })}
        />
        {this.renderContent()}
        {this.renderMenuOverlay()}
      </View>
    );
  }

  async componentDidMount() {
    try {
      const { navigation } = this.props;
      const deckinfo = navigation.getParam('deckinfo');
      const cards = await Deck.Card.load({ uri: deckinfo.card });
      this.setState({ cards, loaded: true });
    } catch (error) {
      console.log(error);
    }
  }

  renderContent = () => {
    const { loaded } = this.state;
    const { navigation } = this.props;
    if (loaded) {
      const { cards } = this.state;
      return (
        <Swiper
          cards={cards}
          ref={cardsRef => {
            this.CardsRef = cardsRef;
          }}
          navigation={navigation}
        />
      );
    }
    return null;
  };

  renderRightIcon = () => (
    <Icon.Entypo name="dots-three-vertical" />
    // <Menu
    //   ref={menuRef => {
    //     this.menuRef = menuRef;
    //   }}
    //   button={<Text onPress={() => this.menuRef.show()}>Show menu</Text>}
    // >
    //   <MenuItem onPress={this.hideMenu}>Menu item 1</MenuItem>
    //   <MenuItem onPress={this.hideMenu}>Menu item 2</MenuItem>
    //   <MenuItem onPress={this.hideMenu} disabled>
    //     Menu item 3
    //   </MenuItem>
    //   <MenuDivider />
    //   <MenuItem onPress={() => this.menuRef.hide()}>Menu item 4</MenuItem>
    // </Menu>
  );

  renderMenuOverlay = () => {
    const { menuVisible } = this.state;
    return (
      <PopUpMenuWithItems
        isVisible={menuVisible}
        setVisible={bool => this.setState({ menuVisible: bool })}
        overlayStyle={{ backgroundColor: 'rgba(230,230,230,0)' }}
        menuContainerStyle={{ position: 'absolute', right: 0 }}
        items={[
          {
            title: 'test1',
            onPress: () => {
              console.log('test1');
            },
          },
          {
            title: 'test2aaaaaaaaaaaaaa',
            onPress: () => {
              console.log('test2');
            },
          },
          {
            title: 'test3',
            onPress: () => {
              console.log('test3');
            },
          },
        ]}
      />
    );
  };
}

export default DeckPlay;
