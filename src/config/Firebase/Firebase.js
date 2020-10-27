import * as firebase from 'firebase';
import 'firebase/firestore';

import Storage from '../Storage';

const FirebaseConfig = {
  apiKey: 'AIzaSyAePqLoHJwYgVRxegYmkhu7XI6VkPKZb0c',
  authDomain: 'vocabon02.firebaseapp.com',
  databaseURL: 'https://vocabon02.firebaseio.com',
  projectId: 'vocabon02',
  storageBucket: 'vocabon02.appspot.com',
  messagingSenderId: '424728039803',
  appId: '1:4247280398 03:web:4bc69213dc2bffbbdeedde',
  measurementId: 'G-T5YVZFB21P',
};

if (!firebase.apps.length) firebase.initializeApp(FirebaseConfig);

const database = firebase.database();
const storage = firebase.storage();
const auth = firebase.auth();
const firestore = firebase.firestore();

firestore.enablePersistence();

const load = async ({ collection, id, expires }) => {
  const data = await Storage.Function.load({ key: collection, id });
  // return data.data;
  const updated = await up.load({ collection, id });
  let result;

  if (data && updated === data.up) {
    console.log(`not loaded { collection: ${collection}, id: ${id} }`);
    result = data.data;
  } else {
    console.log(`loaded { collection: ${collection}, id: ${id} }`);
    result = await update({ collection, id, updated, expires });
  }
  return result;
};

const update = async ({ collection, id, updated, expires }) => {
  const result = await firestore
    .collection(collection)
    .doc(id)
    .get()
    .then(doc => {
      const result = doc.exists ? doc.data() : null;
      console.log({ function: 'unpdate()', result });
      return result;
    });
  await Storage.Function.save({
    key: collection,
    id,
    data: { up: updated, data: result },
    merge: false,
    expires,
  });
  return result;
};

const save = async ({
  collection,
  id,
  data,
  merge = true,
  expires = false,
}) => {
  console.log(`Firebase.save({collection: ${collection}, id: ${id}}) starts`);

  await firestore
    .collection(collection)
    .doc(id)
    .set(data, { merge })
    .then(async () => {
      const params = { key: collection, id, data: { data }, merge };
      const param = expires === false ? { ...params } : { ...params, expires };
      await Storage.Function.save(param);
      console.log({ function: 'save()', data });
      up.update({ collection, id });
    });
};

const remove = async ({ collection, id }) => {
  await firestore
    .collection(collection)
    .doc(id)
    .delete();
  await database.ref(`${collection}/${id}`).remove();
  console.log({ function: 'remove()', collection, id });
  Storage.Function.remove({ key: collection, id });
};

const up = {
  update: ({ collection, id }) => {
    const up = Date.now();
    database.ref(`${collection}/${id}`).update({ up });
    Storage.Function.save({ key: collection, id, data: { up } });
  },
  load: async ({ collection, id }) => {
    let data;
    await database.ref(`${collection}/${id}/up`).once('value', snapshot => {
      data = snapshot.val();
    });
    return data;
  },
  setListener: ({ collection, id, callback = () => {} }) => {
    database.ref(`/${collection}/${id}/up`).on('value', snapshot => {
      const data = snapshot.val();
      callback(data);
    });
  },
};
const v = {
  init: async ({ collection, id }) => {
    await database.ref(`${collection}/${id}/v`).set(0);
  },
  add: async ({ collection, id }) => {
    await database.ref(`${collection}/${id}/v`).transaction(v => v + 1);
  },
  load: async ({ collection, id }) => {
    let data;
    await database.ref(`${collection}/${id}/v`).once('value', snapshot => {
      data = snapshot.val();
    });
    return data;
  },
  setListener: ({ collection, id, callback = () => {} }) => {
    database.ref(`/${collection}/${id}/v`).on('value', snapshot => {
      const data = snapshot.val();
      callback(data);
    });
  },
};
const rate = {
  init: async ({ collection, id }) => {
    await database.ref(`${collection}/${id}/rate`).set({ sum: 0, num: 0 });
  },
  add: async ({ collection, id, rate }) => {
    await database.ref(`${collection}/${id}/rate`).transaction(prevRate => {
      const newSum = prevRate.sum + rate;
      const newNum = prevRate.num + 1;
      return { sum: newSum, num: newNum };
    });
  },
  load: async ({ collection, id }) => {
    let data;
    await database.ref(`${collection}/${id}/rate`).once('value', snapshot => {
      data = snapshot.val();
    });
    return data;
  },
};

const Function = { load, save, update, remove, /* array, */ up, v, rate };

export default firebase;
export { database, storage, auth, firestore, Function };
