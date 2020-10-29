import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import Color from '../../../../../config/Color';

import Header from '../../../../../components/header/Header';
import Background from '../../../../../components/Background';
const letterpress = require('../../../../../../assets/background/letterpress.jpg');

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttonIcon: {
    fontSize: 20,
    paddingHorizontal: 20,
    color: 'white',
  },
  title: {
    color: Color.font3,
    textAlign: 'center',
    fontSize: 25,
    marginTop: 20,
    marginBottom: 40,
  },
  content: {
    color: Color.font3,
    fontSize: 15,
    // justifySelf: 'center',
    marginLeft: 5,
  },
  languageContainer: {
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: Color.font3,
    height: 50,
    justifyContent: 'center',
  },
  background: {
    flex: 1,
    resizeMode: 'cover',
    width: 'auto',
  },
  backgroundOverlay: {
    backgroundColor: 'black',
    opacity: 0.5,
  },
  itemsContainer: {
    backgroundColor: Color.background2,
    flex: 1,
    justifyContent: 'space-between',
    marginVertical: 50,
    marginHorizontal: 30,
    // borderWidth: 2,
    borderColor: 'white',
  },
});

class DeckLanguage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={style.container}>
        {this.renderBackground()}
        {this.renderHeader()}
        <View>
          <Text style={style.title}>Choose Language</Text>
          {this.renderItem()}
        </View>
      </View>
    );
  }

  renderBackground = () => (
    <Background
      imageSource={letterpress}
      imageStyle={style.background}
      overlayStyle={style.backgroundOverlay}
    />
  )

  renderHeader = () => {
    const { navigation } = this.props;
    return (
      <Header
        renderLeft={() => (
          <Icon.Ionicons name="ios-arrow-back" style={style.buttonIcon} />
        )}
        onPressLeft={() => {
          navigation.goBack();
        }}
      />
    );
  }

  renderItem = () => {
    const items = [
      {
        title: 'English',
      },
      {
        title: 'French',
      },
      {
        title: 'Spanish',
      },
      {
        title: 'Japanese',
      },
      {
        title: 'Chinese',
      },
      {
        title: 'German',
      },
      {
        title: 'Latin',
      },
      {
        title: 'Dutch',
      },
    ];
    return items.map(item => (
      <TouchableOpacity
        onPress={() => {
          const { navigation } = this.props;
          const setState = navigation.getParam('setState');
          setState({ learn: item.title });
          navigation.goBack();
        }}
      >
        <View style={style.languageContainer}>
          <Text style={style.content}>{item.title}</Text>
        </View>
      </TouchableOpacity>
    ));
  };

  //   selectLanguage = () => {
  //     const { navigation } = this.props;
  //     const setState = navigation.getParam('setState');
  //     setState({learn: })
  //   };
}

export default DeckLanguage;
