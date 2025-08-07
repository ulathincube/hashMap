import createLinkedList from './linked-list.js';

function createHashMap(loadFactor = 0.75, capacity = 16) {
  const hashMap = new Array(16);

  const hash = key => {
    let hashCode = 0;
    let primeNumber = 31;

    for (let i = 0; i < key.length; i++) {
      hashCode = primeNumber * hashCode + key.charCodeAt(i);

      if (hashCode >= capacity) {
        hashCode = hashCode % capacity;
      }
    }

    return hashCode;
  };

  const set = (key, value) => {
    const hashCode = hash(key);

    if (hashMap[hashCode] && hashMap[hashCode].value === value) {
      hashMap[hashCode].value = value;
    } else if (hashMap[hashCode] && hashMap[hashCode].value !== value) {
      // create a node list
      const linkedList = createLinkedList();
      const head = hashMap[hashCode];

      linkedList.addNode(head);
      linkedList.addNode({ key, value });
    } else {
      hashMap[hashCode] = { key, value };
    }
  };

  const get = key => {
    const hashCode = hash(key);

    if (hashMap[hashCode]) {
      const { value, key: hashKey } = hashMap[hashCode];

      if (hashKey === key) {
        return value;
      }
    }

    for (let i = 0; i < capacity; i++) {}
  };

  const has = key => {
    const hashCode = hash(key);

    if (hashMap[hashCode].key === key) {
      return true;
    } else return false;
  };

  const remove = key => {
    const hashCode = hash(key);

    if (hashMap[hashCode].key === key) {
      // remove from hashmap
    }
    return null;
  };

  const length = () => {};

  const clear = () => {};

  const values = () => {};

  const entries = () => {};

  return { set };
}
