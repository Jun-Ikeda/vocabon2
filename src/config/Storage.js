import { AsyncStorage } from 'react-native';
import StorageOriginal from 'react-native-storage';

import { Functions } from './Const';

const Storage = new StorageOriginal({
  size: 500,
  storageBackend: AsyncStorage,
  defaultExpires: 1000 * 3600 * 24 * 1,
  enableCache: true,
  sync: {
    isInitialized() {
      Function.init({ key: null });
    },
    User() {
      return false;
    },
    Deck() {
      return false;
    },
    Style() {
      return false;
    },
    Word() {
      return false;
    },
  },
});

const KeyOnlyInitData = [
  { key: 'isInitialized', data: true, expires: null },
  { key: 'readme', data: false, expires: null },
  {
    key: 'auth',
    data: {
      email: '',
      uid: '',
      password: '',
      loggedin: false,
      emailverified: false,
    },
    expires: null,
  },
  { key: 'timerLimit', data: 0, expires: null },
];

const Function = {
  init: async ({ key = null }) => {
    if (key === null) {
      await AsyncStorage.clear();
      for (let i = 0; i < KeyOnlyInitData.length; i++) {
        await Storage.save(KeyOnlyInitData[i]);
      }
    } else {
      const param = KeyOnlyInitData.filter(param => param.key === key);
      await Storage.save(param[0]);
    }
  },

  load: async ({ key, id = null }) => {
    const KeyOnly = KeyOnlyInitData.map(data => data.key);
    const params = KeyOnly.includes(key) ? { key } : { key, id };
    const result = await Storage.load(params);
    return result;
  },

  save: async ({ key, id = null, data, merge = true, expires = false }) => {
    const KeyOnly = KeyOnlyInitData.map(data => data.key);
    const params = KeyOnly.includes(key) ? { key, expires: null } : { key, id };
    const param = expires === false ? { ...params } : { ...params, expires };
    let result;
    if (merge) {
      const prevData = await Function.load({ key, id });
      result = await Functions.deepMerge(prevData, data);
    } else {
      result = data;
    }
    await Storage.save({ ...param, data: result });
  },

  remove: async ({ key, id = null }) => {
    const KeyOnly = KeyOnlyInitData.map(data => data.key);
    const params = KeyOnly.includes(key) ? { key } : { key, id };
    await Storage.remove(params);
  },

  transaction: async ({ key, id, callback, expires, merge = true }) => {
    const KeyOnly = KeyOnlyInitData.map(data => data.key);
    const params = KeyOnly.includes(key) ? { key } : { key, id };
    const data = await Storage.load(params);
    const result = callback(data);
    Function.save({ key, id, data: result, expires, merge });
  },
};

export default { Storage, Function };

export {};
