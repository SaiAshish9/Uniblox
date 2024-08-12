import { USER_ID } from "constants";

export const openDatabase = () => {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open("Uniblox", 1);

    request.onupgradeneeded = (event) => {
      const db = event.target.result;
      if (!db.objectStoreNames.contains("user")) {
        db.createObjectStore("user", { keyPath: "id" });
      }
      if (!db.objectStoreNames.contains("items")) {
        const itemsStore = db.createObjectStore("items", { keyPath: "id" });
        itemsStore.createIndex("name", "name", { unique: false });
        itemsStore.createIndex("price", "price", { unique: false });
      }
    };

    request.onsuccess = (event) => {
      resolve(event.target.result);
    };

    request.onerror = (event) => {
      reject(event.target.error);
    };
  });
};

async function updateEntity(entity, item) {
  const db = await openDatabase();
  return new Promise((resolve, reject) => {
    const transaction = db.transaction(entity, "readwrite");
    const store = transaction.objectStore(entity);
    const request = store.put(item);

    request.onsuccess = () => {
      resolve(request.result);
    };

    request.onerror = (event) => {
      reject(event.target.error);
    };
  });
}

async function getEntity(entity) {
  const db = await openDatabase();
  return new Promise((resolve, reject) => {
    const transaction = db.transaction(entity, "readonly");
    const store = transaction.objectStore(entity);
    const request = store.get(USER_ID);

    request.onsuccess = () => {
      resolve(request.result);
    };

    request.onerror = (event) => {
      reject(event.target.error);
    };
  });
}

export const getUserFromDB = async () => {
  return await getEntity("user");
};

export const getItemsFromDB = async () => {
  return await getEntity("items");
};

export const updateUserAtDB = async (item) => {
  return await updateEntity("user", item);
};

export const updateItemsAtDB = async (items) => {
  for (let item of items) await updateEntity("items", item);
};
