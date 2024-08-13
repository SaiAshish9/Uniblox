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
      if (!db.objectStoreNames.contains("cart")) {
        db.createObjectStore("cart", { keyPath: "id" });
      }
      if (!db.objectStoreNames.contains("coupons")) {
        db.createObjectStore("coupons", { keyPath: "id" });
      }
      if (!db.objectStoreNames.contains("orders")) {
        db.createObjectStore("orders", { keyPath: "id" });
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

async function getEntity(entity, id) {
  const db = await openDatabase();
  return new Promise((resolve, reject) => {
    const transaction = db.transaction(entity, "readonly");
    const store = transaction.objectStore(entity);
    const request = store.get(id);

    request.onsuccess = () => {
      resolve(request.result);
    };

    request.onerror = (event) => {
      reject(event.target.error);
    };
  });
}

async function getEntities(entity) {
  const db = await openDatabase();
  return new Promise((resolve, reject) => {
    const transaction = db.transaction(entity, "readonly");
    const store = transaction.objectStore(entity);
    const request = store.getAll();

    request.onsuccess = () => {
      resolve(request.result);
    };

    request.onerror = (event) => {
      reject(event.target.error);
    };
  });
}

async function clearObjectStore(entity) {
  const db = await openDatabase();
  return new Promise((resolve, reject) => {
    const transaction = db.transaction(entity, "readwrite");
    const store = transaction.objectStore(entity);
    const request = store.clear();

    request.onsuccess = () => {
      resolve(request.result);
    };

    request.onerror = (event) => {
      reject(event.target.error);
    };
  });
}

export const getUserFromDB = async () => {
  return await getEntity("user", USER_ID);
};

export const getItemsFromDB = async () => {
  return await getEntities("items");
};

export const getCartFromDB = async () => {
  return await getEntities("cart");
};

export const getOrdersFromDB = async () => {
  return await getEntities("orders");
};

export const getCouponsFromDB = async () => {
  return await getEntities("coupons");
};

export const updateUserAtDB = async (item) => {
  return await updateEntity("user", item);
};

export const updateItemsAtDB = async (items) => {
  clearObjectStore("items");
  for (let item of items) {
    await updateEntity("items", item);
  }
};

export const updateCartAtDB = async (items) => {
  clearObjectStore("cart");
  for (let item of items) {
    await updateEntity("cart", item);
  }
};

export const updateCouponsAtDB = async (items) => {
  clearObjectStore("coupons");
  for (let item of items) {
    await updateEntity("coupons", item);
  }
};

export const updateOrdersAtDB = async (items) => {
  clearObjectStore("orders");
  for (let item of items) {
    await updateEntity("orders", item);
  }
};
