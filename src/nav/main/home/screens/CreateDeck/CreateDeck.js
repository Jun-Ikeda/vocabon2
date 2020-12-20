import React, { Component } from 'react';
import {
  View, Text, StyleSheet, TouchableOpacity,
} from 'react-native';
import PropTypes from 'prop-types';

import Color from '../../../../../config/Color';
import Icon from '../../../../../components/Icon';
import HeaderWithBack from '../../../../../components/header/HeaderWithBack';
import LanguageSelection from '../../../../../components/navscreens/LanguageSelection';
import DeckName from '../../../../../components/navscreens/DeckName';

// 使ってないけど消さないで
// eslint-disable-next-line no-unused-vars
import { DeckGeneral } from '../../../../../../dev/TestData';
import UUID from '../../../../../config/UUID';
import Unsplash from '../../../../../config/Unsplash';

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  containers: {
    flex: 1,
    marginHorizontal: 30,
  },
  itemContainer: {
    // flex: 1,
  },
  itemTitleBox: {
    marginVertical: 20,
  },
  itemTitle: {
    fontSize: 20,
  },
  button: {
    width: 180,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    backgroundColor: Color.green2,
  },
  icon: {
    fontSize: 24,
    color: Color.white1,
  },
  alertMessage: {
    fontSize: 14,
    alignSelf: 'center',
    color: Color.cud.pink,
    paddingBottom: 20,
  },
  alert: {
    flex: 1,
    paddingTop: 40,
  },
});

/**
 * CreateDeck Screenｙ
 * @augments {Component<Props, State>}
 * Usage :
 * ```js
 * <CreateDeck />
 * ```
 */

class CreateDeck extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      language: {
        term: '',
        definition: '',
      },
      id: UUID.generate(),
      thumbnail: {},
    };
  }

  async componentDidMount() {
    const thumbnail = await Unsplash.getRandomImage();
    this.setState({ thumbnail });
  }

  goToHome = () => {
    const {
      title, language, id, thumbnail,
    } = this.state;
    const { navigation } = this.props;
    console.log({
      title, language, id, thumbnail,
    });
    navigation.goBack();
  }

  renderOK = () => {
    const { language: { term, definition }, title } = this.state;
    const isFilled = (term !== '') && (definition !== '') && (title !== '');
    if (isFilled) {
      return (
        <View style={style.alert}>
          <TouchableOpacity
            onPress={this.goToHome}
            style={style.button}
          >
            <Icon.AntDesign
              style={style.icon}
              name="check"
            />
          </TouchableOpacity>
        </View>
      );
    }
    return (
      <View style={style.alert}>
        <Text style={style.alertMessage}>Fill in all the blanks</Text>
      </View>
    );
  }

  renderItems = () => {
    const { title, language } = this.state;
    const items = [
      {
        title: 'Deck Name',
        element: <DeckName setState={(state) => this.setState(state)} title={title} />,
      },
      {
        title: 'Language',
        element: <LanguageSelection
          setState={(state) => this.setState(state)}
          language={language}
        />,
      },
    ];
    return items.map((item) => (
      <View style={style.itemContainer} key={item.title.toLowerCase()}>
        <View style={style.itemTitleBox}>
          <Text style={style.itemTitle}>{item.title}</Text>
        </View>
        {item.element}
      </View>
    ));
  }

  render() {
    const { navigation } = this.props;
    return (
      <View style={style.container}>
        <HeaderWithBack
          title="Create Deck"
          navigation={navigation}
        />
        <View style={style.containers}>
          <Text>Decide the name and select languages</Text>
          {this.renderItems()}
          {this.renderOK()}
        </View>
      </View>
    );
  }
}

CreateDeck.propTypes = {
  navigation: PropTypes.object.isRequired,
};

CreateDeck.defaultProps = {
};

export default CreateDeck;
