import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import Deck from '../../../../../../../config/Firebase/Deck';

import UserIcon from '../../../../../../../components/UserIcon';
import Color from '../../../../../../../config/Color';
import Header from '../../../../../../../components/header/Header';
import Icon from '../../../../../../../components/Icon';
import User from '../../../../../../../config/Firebase/User';
import DeckCarousel from '../../../../../../../components/DeckCarousel';

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  userCard: {
    backgroundColor: Color.background1,
  },
  headerIcon: { color: Color.font2, fontSize: 25 },
});

class UserMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
      uid: '',
      decks: [],
      v: 0,
      layout: { height: 100, width: 100 },
    };
  }

  async UNSAFE_componentWillMount() {
    const { navigation } = this.props;
    const {} = this.state;
    const user = navigation.getParam('user');
    const uid = navigation.getParam('uid');
    this.setState({ user, uid });
    const v = await User.loadV({ uid });
    this.setState({ v });
    const {
      local: { decks, styles },
    } = user;
    const deckArray = await Deck.loadAll({ ids: decks });
    this.setState({ decks: deckArray });
    // const array = [];
    // for (const child in decks) {
    //   if (child) {
    //     const data = await Decks.load({ deckid: child });
    //   }
    // }
  }

  render() {
    const { navigation } = this.props;
    const {
      user,
      decks,
      layout: { width },
    } = this.state;
    const {} = this.state;
    return (
      <View
        style={style.container}
        onLayout={({ nativeEvent }) => {
          const { height, width } = nativeEvent.layout;
          this.setState({ height, width });
        }}
      >
        {this.renderUserCard()}
        <DeckCarousel data={decks} style={{ width }} navigation={navigation} />
      </View>
    );
  }

  renderHeader = () => {
    const { navigation } = this.props;
    return (
      <Header
        renderLeft={() => (
          <Icon.Ionicons name="ios-arrow-back" style={style.headerIcon} />
        )}
        onPressLeft={() => navigation.goBack()}
        onLongPressLeft={() => navigation.popToTop()}
      />
    );
  };

  renderUserCard = () => {
    const { user, decks, v } = this.state;
    const sum = decks
      .map(deck => {
        const deckinfo = Object.values(deck)[0];
        return deckinfo.num;
      })
      .reduce((a, b) => a + b, 0);
    return (
      <View style={style.userCard}>
        {this.renderHeader()}
        <TouchableOpacity
          pointerEvents="box-none"
          onPress={() => this.setState({})}
        >
          <UserIcon size={48} user={user} />
        </TouchableOpacity>
        <Text>{user.name}</Text>
        <Text>{`${decks.length} decks ${sum} words ${v} views`}</Text>
      </View>
    );
  };
}

export default UserMenu;
