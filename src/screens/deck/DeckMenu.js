import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import PropTypes from 'prop-types';

// 使ってないかもだけど消さないで
// eslint-disable-next-line no-unused-vars
import { Deck } from '../../../dev/TestData';
import HeaderWithBack from '../../components/header/HeaderWithBack';
import Unsplash from '../../config/Unsplash';

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
        thumnail: {
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
    const { navigation } = this.props;
    const deck = navigation.getParam('deck');
    this.setState({ deck });
  }

  renderHeader = () => {
    const { deck: { title } } = this.state;
    const { navigation } = this.props;
    return <HeaderWithBack navigation={navigation} title={title} />;
  }

  renderContent = () => {
    const { deck: { language } } = this.state;
    return (
      <View>
        <Text>
          {`Term in ${language.term}`}
        </Text>
        <Text>
          {`Definition in ${language.definition}`}
        </Text>
      </View>
    );
  }

  renderThumnail = () => {
    const { deck: { thumnail } } = this.state;
    return (
      <Image
        source={{ uri: Unsplash.unshortenURI(thumnail.uri) }}
        style={{ width: 200, height: 200 }}
      />
    );
  }

  render() {
    return (
      <View>
        {this.renderHeader()}
        {this.renderContent()}
        {this.renderThumnail()}
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
