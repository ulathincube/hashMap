import createLinkedList from './linked-list.js';

function createHashMap(loadFactor = 0.75, capacity = 16) {
  let hashMap = new Array(16).fill(null);

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

    if (hashCode >= hashMap.length || hashCode < 0) {
      throw new Error('Trying to access index out of bounds!');
    }

    const listLength = length();
    if (listLength >= loadFactor * capacity) {
      const newHashMap = new Array(capacity * 2).fill(null);

      for (let i = 0; i < hashMap.length; i++) {
        for (let j = 0; j < newHashMap.length; j++) {
          if (hashMap[i] && !newHashMap[j]) {
            newHashMap[j] = hashMap[i];
            j++;
            i++;
          }
        }
      }
    }

    if (hashMap[hashCode] && hashMap[hashCode].key === key) {
      hashMap[hashCode].value = value;
    } else if (hashMap[hashCode] && hashMap[hashCode].key !== key) {
      // create a node list
      const linkedList = createLinkedList();
      const head = hashMap[hashCode];

      linkedList.addNode(head);
      const list = linkedList.addNode({ key, value });

      console.log('linkedlist made!', list);
    } else {
      hashMap[hashCode] = { key, value };
    }
  };

  const get = key => {
    const hashCode = hash(key);

    if (hashCode >= hashMap.length || hashCode < 0) {
      throw new Error('Trying to access index out of bounds!');
    }

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

    if (hashCode >= hashMap.length || hashCode < 0) {
      throw new Error('Trying to access index out of bounds!');
    }

    if (hashMap[hashCode].key === key) {
      return true;
    } else return false;
  };

  const remove = key => {
    const hashCode = hash(key);

    if (hashCode >= hashMap.length || hashCode < 0) {
      throw new Error('Trying to access index out of bounds!');
    }

    if (hashMap[hashCode].key === key) {
      // remove from hashmap
      hashMap[hashCode] = null;
    }
    return null;
  };

  const length = () => {
    let count = 0;

    for (let i = 0; i < capacity; i++) {
      if (hashMap[i] && hashMap[i].key) {
        count++;
      }
    }

    return count;
  };

  const clear = () => {
    hashMap = new Array(16).fill(null);
  };

  const values = () => {
    const valuesArr = hashMap.map(bucket => {
      if (bucket) {
        return bucket.value;
      } else return null;
    });
    return valuesArr;
  };

  const entries = () => {
    const entriesArr = hashMap.map(bucket => {
      return [bucket.key, bucket.value];
    });

    return entriesArr;
  };

  return { set, get, has, remove, length, clear, values, entries };
}

const test = createHashMap();

test.set('apple', 'red');
test.set('banana', 'yellow');
test.set('carrot', 'orange');
test.set('dog', 'brown');
test.set('elephant', 'gray');
test.set('frog', 'green');
test.set('grape', 'purple');
test.set('hat', 'black');
test.set('ice cream', 'white');
test.set('jacket', 'blue');
test.set('kite', 'pink');
test.set('lion', 'golden');

console.log(test.values());
