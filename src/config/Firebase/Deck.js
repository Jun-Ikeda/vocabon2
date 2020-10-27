import UUID from '../UUID';
import { storage, Function } from './Firebase';
import User from './User';
import { Functions } from '../Const';
import Storage from '../Storage';

const create = async ({ title, learn, understand }) => {
  const auth = await Storage.Function.load({ key: 'auth' });
  const deckid = UUID.generate();
  let card = '';
  const cardData = [];
  await Card.save({ deckid, merge: false, data: cardData });
  card = await storage.ref(`Deck/${deckid}.json`).getDownloadURL();
  const deckData = {
    num: 0,
    smp: [],
    style: 0,
    th: { uri: '', user: { name: '', link: '' } },
    tag: {},
    ti: title,
    lang1: learn,
    lang2: understand,
    user: auth.uid,
    card,
  };

  await save({ deckid, data: deckData, expires: null, merge: false });
  await Function.v.init({ collection: 'Deck', id: deckid });
  await Function.rate.init({ collection: 'Deck', id: deckid });

  await User.save({
    uid: auth.uid,
    data: {
      local: { decks: Functions.mapPush({ newData: { [deckid]: true } }) },
    },
    expires: null,
  });

  return deckid;
};

const update = ({ deckid, updated, expires }) =>
  Function.update({ collection: 'User', id: deckid, expires, updated });

const save = async ({ deckid, data, merge = true, expires = false }) => {
  const params = { collection: 'Deck', id: deckid, data, merge };
  const param = expires === false ? { ...params } : { ...params, expires };
  await Function.save(param);
};

const load = async ({ deckid, expires = false }) => {
  const result = await Function.load({
    collection: 'Deck',
    id: deckid,
    expires,
  });
  return result;
};

const loadAll = async ({ ids, expires = false }) => {
  const array = [];
  for (const child in ids) {
    if (child) {
      const data = await load({ deckid: child, expires });
      array.push({ [child]: data });
    }
  }
  return array;
};

const setListenerV = ({ deckid, callback }) => {
  Function.v.setListener({ collection: 'Deck', id: deckid, callback });
};

const loadV = async ({ deckid }) =>
  Function.v.load({ collection: 'Deck', id: deckid });

const Card = {
  load: async ({ uri }) =>
    fetch(uri)
      .then(response => response.json())
      .then(card => {
        console.log(card);
        return card;
      })
      .catch(error => console.error(error)),
  save: async ({ deckid, uri, data, merge = true }) => {
    const card = merge
      ? await Card.load({ uri }).then(card => card.concat(data))
      : data;
    await storage
      .ref(`Deck/${deckid}.json`)
      .put(
        new Blob([JSON.stringify(card)], {
          type: 'application/json',
        }),
      )
      .catch(() => null);
  },
};

export default {
  create,
  save,
  update,
  load,
  setListenerV,
  loadAll,
  loadV,
  Card,
};
