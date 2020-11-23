// import React from 'react';
import {
  Platform, Dimensions,
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
  heightMid: 72,
  heightMin: 48,
};

const carousel = {

};

export const func = {
  isColor: (strColor) => {
    try {
      return strColor.indexOf('/') === -1;
    } catch (error) {
      return null;
    }
  },
  isPortrait: () => {
    const { height, width } = Dimensions.get('window');
    return height > width;
  },
  onLayoutContainer: (e) => {
    const { layout } = e.nativeEvent;
    const { height, width } = layout;
    return { height, width };
  },
};

export default { header, carousel, func };

export const titleMaxLength = 20;
