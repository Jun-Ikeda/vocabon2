const Color = {
  green1: '#07b86c',
  green2: '#1e8f5e',
  green3: '#5bde80',
  green4: '#b9d08b',
  green5: '#82ba6c',
  green6: '#3ca897',
  white1: '#ffffff',
  white2: '#e9e9e9',
  white3: '#d4d4d4',
  white4: '#bfbfbf',
};

export const PastelColors = [
  '#F59BC1',
  '#FFCED6',
  '#FFF9F9',
  '#D9FED6',
  '#B2F1B3',
  '#53A1B3',
  '#68B5C7',
  '#E5315B',
];

export const getRandomPastel = () => {
  const r = Math.floor(Math.random() * PastelColors.length);
  return PastelColors[r];
};

export default Color;
