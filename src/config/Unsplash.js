import UnsplashOriginal, { toJson } from 'unsplash-js';

const Unsplash = new UnsplashOriginal({
  accessKey: 'l9DHYV9_Osv1iDTytXBIOIfT3KpRnNhTiQ9jK4SgrvU',
});

export default Unsplash;
export { toJson };

export const getRandomImage = async ({ word = '' }) => {
  let searchWord = word;
  let result = '';
  const words = [
    'nature',
    'view',
    'landscape',
    'mountain',
    'ocean',
    'scenery',
    'tree',
    'art',
    'architecture',
    'universe',
    'city',
    'night',
    'color',
    'light',
    'sky',
  ];
  if (!searchWord) {
    const random1 = Math.floor(Math.random() * words.length);
    searchWord = words[random1];
  }

  const random2 = Math.floor(Math.random() * 15000);

  await Unsplash.search
    .photos(searchWord, random2, 1)
    .then(toJson)
    .then(json => {
      const uri = json.results[0].urls.regular;
      const shortened = uri.replace('https://images.unsplash.com/', '');
      const user = {
        name: json.results[0].user.name,
        link: json.results[0].user.links.html,
      };
      result = { uri: shortened, user };
    });
  return result;
};
