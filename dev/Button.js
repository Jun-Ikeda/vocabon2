import Unsplash from '../src/config/Unsplash';
import UUID from '../src/config/UUID';

const Button = [
  {
    title: 'console',
    onPress: () => {
      console.log('test');
    },
  },
  {
    title: 'UUID',
    onPress: () => {
      console.log(UUID.generate());
    },
  },
  {
    title: 'Unsplash',
    onPress: async () => {
      const imgData = await Unsplash.getRandomImage();
      console.log(imgData);
    },
  },
];

export default Button;
