import { Platform } from 'react-native';

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
};

export const func = {
  isColor: (strColor) => {
    try {
      return strColor.indexOf('/') === -1;
    } catch (error) {
      return null;
    }
  },
};

export default { header, func };
