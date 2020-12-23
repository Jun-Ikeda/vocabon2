import { /* Dimensions,  */Platform } from 'react-native';
import Unsplash from '../src/config/Unsplash';
import UUID from '../src/config/UUID';

const Button = [
  {
    title: 'console',
    onPress: () => {
      console.log('test');
      alert('test');
    },
  },
  {
    title: 'UUID',
    onPress: () => {
      const uuid = UUID.generate();
      console.log(uuid);
      alert(uuid);
    },
  },
  {
    title: 'Unsplash',
    onPress: async () => {
      const imgData = await Unsplash.getRandomImage();
      console.log(imgData);
      alert(JSON.stringify(imgData));
    },
  },
  {
    title: 'Platform',
    onPress: () => {
      // const { isPad } = Platform;
      alert(`Platform: ${JSON.stringify(Platform)}`);
    },
  },
];

export default Button;
