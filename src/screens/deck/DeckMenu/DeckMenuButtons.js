import React, { Component } from 'react';
import {
  View, Text, TouchableOpacity, StyleSheet,
} from 'react-native';

import Icon from '../../../components/Icon';
import Color from '../../../config/Color';

const iconsize = 30;
const style = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  icon: {
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    borderRadius: iconsize / 3,
    // borderwidth: 1,
    // borderBottomColor: Color.gray1,
    // borderRightColor: Color.gray1,
    backgroundColor: Color.white1,
    paddingVertical: 5,
    margin: 3,
  },
});

export default class DeckMenuButtons extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      bookmarked: false,
    };
  }

  renderColumn = (buttons) => (
    <View style={style.container}>
      {buttons.map((button) => (
        <TouchableOpacity
          style={[style.button]}
          onPress={button.onPress}
        >
          {button.icon()}
          <Text style={[style.title, button.textStyle]}>{button.title}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );

  renderMainButtons = () => {
    const { visible } = this.state;
    const { navigation } = this.props;
    const buttons = [
      {
        title: 'Play',
        icon: () => <Icon.Feather name="play" size={iconsize} style={style.icon} />,
        onPress: () => navigation.navigate('play'),
        textStyle: {},
      },
      {
        title: 'Property',
        icon: () => <Icon.Ionicons name="md-list" size={iconsize} style={style.icon} />,
        onPress: () => navigation.navigate('property'),
        textStyle: {},
      },
      {
        title: 'Edit',
        icon: () => <Icon.Feather name="edit" size={iconsize} style={style.icon} />,
        onPress: () => navigation.navigate('edit'),
        textStyle: {},
      },
      {
        title: visible ? 'Close' : 'More',
        icon: () => (
          <Icon.Feather
            name={visible ? 'chevron-up' : 'chevron-down'}
            style={style.icon}
            size={iconsize}
          />
        ),
        onPress: () => {
          this.setState((prev) => ({
            visible: !prev.visible,
          }));
          // alert(visible)
          // alert(visible ? 'Close' : 'More');
        },
        textStyle: {},
      },
    ];
    return this.renderColumn(buttons);
  };

  renderMoreButtons = () => {
    const { visible } = this.state;
    const { bookmarked } = this.state;
    const buttons1 = [
      {
        title: 'Bookmark',
        icon: () => (
          <Icon.FontAwesome
            name={bookmarked ? 'bookmark' : 'bookmark-o'}
            style={style.icon}
            size={iconsize}
          />
        ),
        onPress: () => {
          this.setState((prev) => ({
            bookmarked: !prev.bookmarked,
          }));
          // alert(bookmarked)
          alert(bookmarked ? 'canceled' : 'registed');
        },
        textStyle: {},
      },
      {
        title: 'Import',
        icon: () => <Icon.Feather name="download" size={iconsize} style={style.icon} />,
        onPress: () => alert('import'),
        textStyle: {},
      },
      {
        title: 'Export',
        icon: () => <Icon.Feather name="upload" size={iconsize} style={style.icon} />,
        onPress: () => alert('export'),
        textStyle: {},
      },
      {
        title: 'Duplicate',
        icon: () => <Icon.Feather name="copy" size={iconsize} style={style.icon} />,
        onPress: () => alert('duplicate'),
        textStyle: {},
      },
    ];
    const buttons2 = [
      {
        title: 'Share',
        icon: () => <Icon.Entypo name="share" size={iconsize} style={style.icon} />,
        onPress: () => alert('share'),
        textStyle: {},
      },
      {
        title: 'Test',
        icon: () => <Icon.AntDesign name="checkcircleo" size={iconsize} style={style.icon} />,
        onPress: () => alert('test'),
        textStyle: {},
      },
      {
        title: 'Analyze',
        icon: () => <Icon.Entypo name="line-graph" size={iconsize} style={style.icon} />,
        onPress: () => alert('analyze'),
        textStyle: {},
      },
      {
        title: 'Delete',
        icon: () => <Icon.FontAwesome name="trash" size={iconsize} style={[style.icon, { color: Color.cud.pink }]} />,
        onPress: () => alert('delete'),
        textStyle: { color: Color.cud.pink },
      },
    ];
    if (visible) {
      return (
        <View>
          {this.renderColumn(buttons1)}
          {this.renderColumn(buttons2)}
        </View>
      );
    }
    return null;
  }

  render() {
    return (
      <View>
        {this.renderMainButtons()}
        {this.renderMoreButtons()}
      </View>
    );
  }
}
