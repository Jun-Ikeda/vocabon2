const Color = {
  primary1: '#07b86c', // 緑
  primary2: '#1e8f5e', // 暗い緑
  primary3: '#5bde80', // 明るい緑
  primary4: '#b9d08b', // 若葉色
  primary5: '#82ba6c', // 薄淡い緑
  primary6: '#3ca897',
  background1: 'rgb(249,249,249)',
  background2: 'rgba(255,255,255,1)', // 白
  background3: 'rgb(230,230,230)',
  background4: 'rgb(30,30,30)',
  background5: '#86f0e2', // 薄い緑
  accent1: 'rgb(255,10,10)', // 赤
  accent2: '',
  accent3: '',
  font1: 'rgb(255,255,255)', // 白
  font2: 'rgb(30,30,30)', // 黒
  font3: 'rgb(230,230,230)',
  font4: 'rgb(220,220,220)',
  font5: 'rgb(180,180,180)',
  font6: 'rgb(128, 128, 128)', // 灰色
  hyperlink1: '#257df7',
  transparent1: 'rgba(0,0,0,0)',
  transparent2: 'rgba(0,0,0,0.3)',
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
