import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class DeckMenuButtons extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  renderButtons = () => {
    const buttons = [
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
          this.setState((prev) => ({
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
    ];
  }

  render() {
    return (
      <View>
        <Text> DeckMenuButtons </Text>
      </View>
    );
  }
}
