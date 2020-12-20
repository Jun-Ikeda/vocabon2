import React, { Component } from 'react';
import {
  View, Text, Image, Linking, TouchableOpacity, StyleSheet,
} from 'react-native';
import PropTypes from 'prop-types';

// 使ってないかもだけど消さないで
// eslint-disable-next-line no-unused-vars
import { DeckGeneral } from '../../../../dev/TestData';

import HeaderWithBack from '../../../components/header/HeaderWithBack';
import Background from '../../../components/Background';

import Unsplash from '../../../config/Unsplash';
import { func } from '../../../config/Const';
import Color from '../../../config/Color';

import DeckMenuButtons from './DeckMenuButtons';
import DeckMenuUtilities from './DeckMenuUtilities';

const imgHeight = 200;
const normalFontSize = 15;
const wideIndent = 20;

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  // thumbnail: {
  // },
  overlay: {
    backgroundColor: Color.white1,
    opacity: 0.3,
    position: 'absolute',
    right: 0,
    left: 0,
    top: 0,
    bottom: 0,
  },
});

/**
 * DeckMenu
 * @augments {Component<Props, State>}
 * THIS INCLUDE DECK OBJECT
 * Usage :
 * ```js
 * ...
 *   deckmenu: DeckMenu,
 * ...
 * navigation.navigate('deckmenu', {
 *    title: 'TOEFL Vocabulary',
 *    id: ''
 * })
 * ```
 */
class DeckMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deck: {
        title: '',
        id: '',
        language: {
          term: '',
          definition: '',
        },
        thumbnail: {
          uri: '',
          user: {
            link: '',
            name: '',
          },
        },
      },
    };
  }

  componentDidMount() {
    // const { navigation } = this.props;
    // const deck = navigation.getParam('deck');
    this.setState({ deck: DeckGeneral[0] });
  }

  renderHeader = () => {
    // const { deck: { title } } = this.state;
    const { navigation } = this.props;
    return (
      <View style={{
        position: 'absolute',
        left: 0,
        right: 0,
      }}
      >
        <HeaderWithBack navigation={navigation} />
      </View>
    );
  }

  renderAttribution = () => {
    const { deck: { thumbnail: { user } } } = this.state;
    return (
      <TouchableOpacity
        onPress={() => Linking.openURL(user.link)}
        style={{
          fontSize: normalFontSize,
          paddingLeft: wideIndent,
        }}
      >
        <Text style={{
          color: Color.gray2,
        }}
        >
          {`\nPhoto by ${user.name} in Unsplash`}
        </Text>
      </TouchableOpacity>
    );
  }

  renderThumbnail = () => {
    const { deck: { thumbnail: { uri } } } = this.state;
    return (
      <View>
        <Image
          style={{ width: '100%', height: imgHeight }}
          source={{ uri: Unsplash.unshortenURI(uri) }}
        />
        <View style={style.overlay} />
      </View>
    );
  }

  renderContent = () => {
    const { deck: { title, language } } = this.state;
    return (
      <DeckMenuUtilities title={title} language={language} />
    );
  }

  renderButtons = () => (
    <DeckMenuButtons />
  );

  render() {
    return (
      <View
        style={style.container}
        onLayout={(e) => this.setState({ layout: func.onLayoutContainer(e) })}
      >
        {this.renderThumbnail()}
        {this.renderHeader()}
        {this.renderContent()}
        {this.renderAttribution()}
        {this.renderButtons()}
      </View>
    );
  }
}

DeckMenu.propTypes = {
  navigation: PropTypes.object.isRequired,
};

DeckMenu.defaultProps = {

};

export default DeckMenu;
