import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import Color from '../../../../config/Color';
// import { FireObject } from '../../../../config/Firebase';
import Deck from '../../../../config/Firebase/Deck';
import { getRandomImage } from '../../../../config/Unsplash';

import HeaderWithBack from '../../../../components/header/HeaderWithBack';
import Icon from '../../../../components/Icon';
import Background from '../../../../components/Background';
import ItemWithR from '../../../../components/item/ItemWithDescriptionRight';

import { navigateNav } from '../../../Nav';

const letterpress = require('../../../../../assets/background/letterpress.jpg');

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerIcon: {
    fontSize: 25,
    color: 'white',
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
  title: {
    color: Color.font3,
    textAlign: 'center',
    fontSize: 25,
    marginTop: 20,
    marginBottom: 40,
  },
  formContainer: {
    marginHorizontal: 30,
    // borderWidth: 2,
  },
  textinputContainer: {
    height: 70,
    marginVertical: 5,
    borderWidth: 1,
    borderColor: Color.font3,
  },
  textinput: {
    flex: 1,
    borderColor: 'transparent',
    borderBottomColor: Color.font4,
    borderWidth: 1,
    color: Color.font4,
    textAlign: 'center',
    fontSize: 25,
  },
  deleteContainer: {
    position: 'absolute',
    right: 20,
    top: 0,
    bottom: 0,
    justifyContent: 'center',
  },
  deleteIcon: {
    color: Color.font5,
    fontSize: 25,
  },
  // forthose: {
  //   color: Color.font5,
  //   fontSize: 15,
  //   paddingTop: 30,
  // },
  buttonContainer: {
    alignSelf: 'center',
    marginTop: 20,
  },
  buttonContainer2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 30,
    borderColor: Color.font3,
    borderBottomWidth: 1,
    borderTopWidth: 1,
    // borderStyle: 'inset',
    height: 50,
    alignItems: 'center',
  },
  chooselan: {
    color: Color.font3,
    fontSize: 20,
    // marginLeft: 'auto',
  },
  button: {
    backgroundColor: Color.background2,
    width: 150,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 150,
  },
  language: {
    color: Color.font3,
    fontSize: 20,
  },
  buttonTitle: {
    fontSize: 20,
  },
});

export default class NewDeck extends Component {
  constructor(props) {
    super(props);
    this.state = { title: '', learn: '', understand: '' };
  }

  render() {
    return (
      <View style={style.container}>
        {this.renderBackground()}
        {this.renderHeader()}
        <View style={style.formContainer}>
          <Text style={style.title}>Create New Deck</Text>
          {this.renderTitleTextInput()}
          {/* <Text style={style.forthose}>For those who ...</Text> */}
          {this.renderDeckLanguage()}
        </View>
        <View style={style.buttonContainer}>{this.renderCreateButton()}</View>
      </View>
    );
  }

  renderBackground = () => (
    <Background
      imageSource={letterpress}
      imageStyle={style.background}
      overlayStyle={style.backgroundOverlay}
    />
  );

  renderHeader = () => {
    const { navigation } = this.props;
    return (
      <HeaderWithBack
        navigation={navigation}
        style={style.headerIcon}
        onPressLeft={this.cancel}
      />
    );
  };

  renderTitleTextInput = () => {
    const { title } = this.state;
    return (
      <View style={style.textinputContainer}>
        <TextInput
          value={title}
          onChangeText={title => this.setState({ title })}
          style={style.textinput}
          placeholder="TITLE"
          maxLength={20}
          ref={inputRef => {
            this.inputRef = inputRef;
          }}
        />
        <TouchableOpacity
          style={style.deleteContainer}
          onPress={() => {
            this.setState({ title: '' });
            this.inputRef.focus();
          }}
        >
          <Icon.Ionicons name="md-close" style={style.deleteIcon} />
        </TouchableOpacity>
      </View>
    );
  };

  renderDeckLanguage = () => {
    const { navigation } = this.props;
    const { learn } = this.state;
    return (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('decklanguage', {
            setState: state => this.setState(state),
          })
        }
      >
        <View style={style.buttonContainer2}>
          <Text style={style.chooselan}>Language Type1</Text>
          <Text style={style.language}>
            {learn}
            <Icon.AntDesign style={style.chooselan} name="right" />
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  renderCreateButton = () => (
    <TouchableOpacity style={style.button} onPress={this.createDeck}>
      <Text style={style.buttonTitle}>Create</Text>
    </TouchableOpacity>
  );

  cancel = () => {
    navigateNav('bottom');
  };

  createDeck = async () => {
    const { title, learn, understand } = this.state;
    const deckid = await Deck.create({
      title,
      learn,
      understand,
    });
    const th = await getRandomImage({ word: '' });
    await Deck.save({ deckid, data: { th }, expires: null });
    navigateNav('bottom');
  };

  componentDidMount() {
    this.inputRef.focus();
  }
}
