import React, { Component } from 'react';
import {
  View, Text, Image, Linking, TouchableOpacity, StyleSheet, Dimensions,
} from 'react-native';
import PropTypes from 'prop-types';

// 使ってないかもだけど消さないで
// eslint-disable-next-line no-unused-vars
import { DeckGeneral } from '../../../../dev/TestData';
import HeaderWithBack from '../../../components/header/HeaderWithBack';
import Unsplash from '../../../config/Unsplash';
import Background from '../../../components/Background';
import { func } from '../../../config/Const';

const imgHeight = 200;
const titleFontsize = 30;

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  thumbnail: {
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
      layout: {
        height: Dimensions.get('window').height,
        width: Dimensions.get('window').width,
      },
    };
  }

  componentDidMount() {
    const { navigation } = this.props;
    const deck = navigation.getParam('deck');
    this.setState({ deck });
  }

  renderHeader = () => {
    // const { deck: { title } } = this.state;
    const { navigation } = this.props;
    return (
      <View style={{
        position: 'absolute', right: 0, left: 0,
      }}
      >
        <HeaderWithBack navigation={navigation} />
      </View>
    );
  }

  renderContent = () => {
    const { deck: { title, language } } = this.state;
    return (
      <View>
        <Text style={{ fontSize: titleFontsize }}>{title}</Text>
        <Text>
          {`Term in ${language.term}`}
        </Text>
        <Text>
          {`Definition in ${language.definition}`}
        </Text>
      </View>
    );
  }

  renderAttribution = () => {
    const { deck: { thumbnail: { user } } } = this.state;
    return (
      <TouchableOpacity
        onPress={() => Linking.openURL(user.link)}
      >
        <Text>
          {`Photo by ${user.name} / Unsplash`}
        </Text>
      </TouchableOpacity>
    );
  }

  renderThumbnail = () => {
    const { deck: { thumbnail } } = this.state;
    return (
      <View>
        <Image
          style={{ width: '100%', height: imgHeight }}
          source={{ uri: Unsplash.unshortenURI(thumbnail.uri) }}
        />
        <View
          style={{
            position: 'absolute',
            right: 0,
            left: 0,
            height: imgHeight,
            backgroundColor: '#ffffff',
            opacity: 0.4,
          }}
        />
      </View>
    );
  }

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

/*

      {
        title: 'Play',
        icon: () => <Icon.Feather name="play" style={style.icon} />,
        onPress: () => {
          navigation.navigate('play', { id, deckinfo });
        },
        textStyle: {},
      },
      {
        title: 'Property',
        icon: () => <Icon.Ionicons name="md-list" style={style.icon} />,
        onPress: () => {
          navigation.navigate('property', { id, deckinfo });
        },
        textStyle: {},
      },
      {
        title: 'Edit',
        icon: () => <Icon.Feather name="edit" style={style.icon} />,
        onPress: () => {
          navigation.navigate('edit', { id, deckinfo });
        },
        textStyle: {},
      },
      {
        title: isAdditionalButtonsVisible ? 'Close' : 'More',
        icon: () => (
          <Icon.Feather
            name={isAdditionalButtonsVisible ? 'chevron-up' : 'chevron-down'}
            style={style.icon}
          />
        ),
        onPress: () => {
          this.setState(prev => ({
            isAdditionalButtonsVisible: !prev.isAdditionalButtonsVisible,
          }));
        },
        textStyle: {},
      },

      {
        title: 'Bookmark',
        icon: () => <Icon.Feather name="bookmark" style={style.icon} />,
        onPress: () => {
          navigation.navigate('bookmark', { id, deckinfo });
        },
        textStyle: {},
      },
      {
        title: 'Import',
        icon: () => <Icon.Feather name="download" style={style.icon} />,
        onPress: () => {
          navigation.navigate('import', { id, deckinfo });
        },
        textStyle: {},
      },
      {
        title: 'Export',
        icon: () => <Icon.Feather name="upload" style={style.icon} />,
        onPress: () => {
          navigation.navigate('export', { id, deckinfo });
        },
        textStyle: {},
      },
      {
        title: 'Duplicate',
        icon: () => <Icon.Feather name="copy" style={style.icon} />,
        onPress: () => {
          navigation.navigate('duplicate', { id, deckinfo });
        },
        textStyle: {},
      },

      {
        title: 'Share',
        icon: () => <Icon.Entypo name="share" style={style.icon} />,
        onPress: () => {
          navigation.navigate('share', { id, deckinfo });
        },
        textStyle: {},
      },
      {
        title: 'Test',
        icon: () => <Icon.AntDesign name="checkcircleo" style={style.icon} />,
        onPress: () => {
          navigation.navigate('test', { id, deckinfo });
        },
        textStyle: {},
      },
      {
        title: 'Analyze',
        icon: () => <Icon.Entypo name="line-graph" style={style.icon} />,
        onPress: () => {
          navigation.navigate('analyze', { id, deckinfo });
        },
        textStyle: {},
      },
      {
        title: 'Delete',
        icon: () => <Icon.FontAwesome name="trash" style={style.deleteicon} />,
        onPress: () => {
          navigation.navigate('delete', { id, deckinfo });
        },
        textStyle: { color: 'red' },
      },

*/
