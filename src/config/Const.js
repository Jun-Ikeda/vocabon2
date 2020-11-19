import React from 'react';
import {
  View, Text, Platform, StyleSheet,
} from 'react-native';

export const header = {
  paddingTopByOS: () => {
    switch (Platform.OS) {
      case 'android':
        return 24;
      case 'ios':
        return 18;
      default:
        return 0;
    }
  },
  heightMax: 96,
  heightMin: 48,
  mainHeader: {
    renderAll: (title) => {
      const style = StyleSheet.create({
        headerContainer: {
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        },
        headerTitle: {
          fontSize: 20,
        },
      });
      return (
        <View style={style.headerContainer}>
          <Text style={style.headerTitle}>{title}</Text>
        </View>
      );
    },
  },
};

export const func = {
  isColor: (strColor) => {
    try {
      return strColor.indexOf('/') === -1;
    } catch (error) {
      return null;
    }
  },
  onLayoutContainer: (e) => {
    const { layout } = e.nativeEvent;
    const { height, width } = layout;
    return { height, width };
  },
};

export default { header, carousel, func };
