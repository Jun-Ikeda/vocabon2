import React, { Component } from 'react';
import {
  View, Text, TouchableOpacity, StyleSheet,
} from 'react-native';

import Icon from '../../../components/Icon';

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  icon: {
  },
});

export default class DeckMenuButtons extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render = () => {
    const iconsize = 30;
    const buttons = [
      {
        title: 'Play',
        icon: () => <Icon.Feather name="play" size={iconsize} style={style.icon} />,
        onPress: () => alert('play'),
        textStyle: {},
      },
      {
        title: 'Property',
        icon: () => <Icon.Ionicons name="md-list" size={iconsize} style={style.icon} />,
        onPress: () => alert('property'),
        textStyle: {},
      },
      {
        title: 'Edit',
        icon: () => <Icon.Feather name="edit" size={iconsize} style={style.icon} />,
        onPress: () => alert('edit'),
        textStyle: {},
      },
      // {
      //   title: isAdditionalButtonsVisible ? 'Close' : 'More',
      //   icon: () => (
      //     <Icon.Feather
      //       name={isAdditionalButtonsVisible ? 'chevron-up' : 'chevron-down'}
      //       style={style.icon}
      //       size={iconsize}
      //     />
      //   ),
      //   onPress: () => {
      //     this.setState((prev) => ({
      //       isAdditionalButtonsVisible: !prev.isAdditionalButtonsVisible,
      //     }));
      //     alert(isAdditionalButtonsVisible ? 'Close' : 'More'),
      //   },
      //   textStyle: {},
      // },
      {
        title: 'Bookmark',
        icon: () => <Icon.Feather name="bookmark" size={iconsize} style={style.icon} />,
        onPress: () => alert('bookmark'),
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
        icon: () => <Icon.FontAwesome name="trash" size={iconsize} style={style.deleteicon} />,
        onPress: () => alert('delete'),
        textStyle: { color: 'red' },
      },
    ];

    return (
      <View style={style.container}>
        {buttons.map((button) => (
          <TouchableOpacity onPress={button.onPress} style={{ width: 100, height: 60, borderWidth: 1}} key={button.title.toLowerCase()}>
            {button.icon()}
            <Text style={button.textStyle} fontsize={10}>
              {button.title}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    );
  }

  // render() {
  //   return (
  //     <View>
  //       {/* {buttons.map(
  //         <View>
  //           {button.onPress}
  //         </View>,
  //       )} */}
  //     </View>
  //   );
  // }
}
