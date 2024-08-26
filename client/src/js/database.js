import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// TODO: Add logic to a method that accepts some content and adds it to the database
export const putDb = async (content) => {
  console.log('Data Posted');

  const contactDb = await openDB('contact', 1);

  const tx = contactDb.transaction('contact', 'readwrite');

  const store = tx.objectStore('contact');

  const request = store.add({data});

  const result = await request;
  console.log('Data stored successfully', result);
};

// TODO: Add logic for a method that gets all the content from the database
export const getDb = async () => {
  const contactDb = await openDB('contact', 1);

  const tx = contactDb.transaction('contact', 'readonly');

  const store = tx.objectStore('contact');

  const request = store.getAll();

  const result = await(request);
  console.log('result.value', value);
  return result;
};

initdb();
