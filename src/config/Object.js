import { database, firestore, storage } from './Firebase/Firebase';

const Firestore = {
  read: async ({ collection, id }) => {
    const result = await firestore.collection(collection).doc(id).get({ source: 'cache' }).catch(error => console.log(error));
    console.log({ result });
    return result;
  },
};

export default { Firestore };

// import { database, firestore, storage } from './Firebase/Firebase';
// import Storage from './Storage';

// const storage = {
//   read: async ({ collection, id }) => {
//     const result = await Storage.Storage.load({ key: collection, id });
//     return result;
//   },
//   write: async ({ collection, id, data, merge = true, expires = false }) => {
//     const params =
//       expires === false
//         ? { key: collection, id, data }
//         : { key: collection, id, data, expires };
//     Storage.Storage.save(params);
//   },
// };

// const Database = {
//   read: async ({ collection, id, applyOnLocal = false, expires }) => {
//     let data;
//     await database.ref(`${collection}/${id}`).once('value', snapshot => {
//       data = snapshot.val();
//     });
//     if (applyOnLocal) {
//       storage.write({ collection, id, data: { rd: data }, expires });
//     }
//     return data;
//   },
//   write: async ({ collection, id, data, applyOnLocal = false, expires }) => {
//     await database.ref(`${collection}/${id}`).set(data);
//     if (applyOnLocal) {
//       storage.write({ collection, id, data: { rd: data }, expires });
//     }
//   },
// };

// const Firestore = {
//   read: async ({ collection, id }) => {
//     let docData;
//     const storageDatabase = await storage
//       .read({ collection, id })
//       .then(data => data.rd);
//     const firebaseDatabase = await Database.read({
//       collection,
//       id,
//       applyOnLocal: true,
//     });
//     await firestore
//       .collection(collection)
//       .doc(id)
//       .get()
//       .then(doc => {
//         docData = doc.exists ? doc.data() : null;
//       });
//     return docData;
//   },
//   write: async ({ collection, id, data }) => {
//     firestore
//       .collection(collection)
//       .doc(id)
//       .set(data);
//   },
// };

// const CloudStorage = {
//   read: async ({ collection, id, filename, fetch = false }) => {
//     const uri = await storage
//       .ref(`${collection}/${id}/${filename}`)
//       .getDownloadURL();
//     let result = {};
//     if (fetch) {
//       fetch(uri)
//         .then(response => response.json())
//         .then(json => {
//           result = json;
//         });
//     } else {
//       result = uri;
//     }
//     return result;
//   },
//   write: async ({ collection, id, filename, data, blob = false }) => {
//     let upData;
//     if (blob) {
//       upData = new Blob([JSON.stringify(data)], {
//         type: 'application/json',
//       });
//     } else {
//       upData = data;
//     }
//     try {
//       await storage.ref(`${collection}/${id}/${filename}`).put(upData);
//       return true;
//     } catch (error) {
//       return false;
//     }
//   },
// };
