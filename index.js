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
    const index = hash(key);

    // if (length() >= loadFactor * capacity) {
    //   console.log(key);
    //   console.log('Load Factor * Capacity Growing!');
    //   const newHashMap = new Array(capacity * 2).fill(null);
    //   const entriesArr = entries();

    //   for (let i = 0; i < entriesArr.length; i++) {
    //     const { key, value } = entriesArr[i];
    //     const hashCode = hash(key);

    //     if (!newHashMap[hashCode]) {
    //       newHashMap[hashCode] = { key, value };
    //     } else {
    //       const headNode = newHashMap[i];

    //       const linkedList = createLinkedList();
    //       linkedList.addNode(headNode);
    //       const newNode = linkedList.addNode({ key, value });

    //       newHashMap[i] = newNode;
    //     }
    //   }

    //   hashMap = newHashMap;
    // }

    if (!hashMap[index]) {
      const linkedList = createLinkedList();
      const headNode = linkedList.addNode({ key, value });
      hashMap[index] = headNode;
    } else {
      // hashMap[index] = true
      const headNode = hashMap[index];

      if (headNode.key === key) {
        headNode.value = value;
        hashMap[index] = headNode;
      } else {
        const newLinkedList = createLinkedList();
        newLinkedList.addNode(headNode);
        const newNode = newLinkedList.addNode({ key, value });
        hashMap[index] = newNode;
      }
    }

    // if (hashMap[index] && hashMap[index].key === key) {
    //   hashMap[index].value = value;
    // } else if (hashMap[index] && hashMap[index].key !== key) {
    //   // create a linked list
    //   const linkedList = createLinkedList();
    //   const head = hashMap[index];

    //   linkedList.addNode(head);
    //   const result = linkedList.addNode({ key, value });

    //   hashMap[index] = result;
    // } else {
    //   hashMap[index] = { key, value };
    // }

    console.log('length is', length());
  };

  const get = key => {
    const index = hash(key);

    if (index >= hashMap.length || index < 0) {
      throw new Error('Trying to access index out of bounds!');
    }

    if (hashMap[index]) {
      const { value, key: hashKey } = hashMap[index];

      if (hashKey === key) {
        return value;
      } else {
        return null;
      }
    }

    for (let i = 0; i < capacity; i++) {}
  };

  const has = key => {
    const index = hash(key);

    if (index >= hashMap.length || index < 0) {
      throw new Error('Trying to access index out of bounds!');
    }

    if (hashMap[index].key === key) {
      return true;
    } else return false;
  };

  const remove = key => {
    const index = hash(key);

    if (index >= hashMap.length || index < 0) {
      throw new Error('Trying to access index out of bounds!');
    }

    if (hashMap[index].key === key) {
      // remove from hashMap
      hashMap[index] = null;
    }
    return null;
  };

  const length = () => {
    let count = 0;

    for (let i = 0; i < hashMap.length; i++) {
      if (hashMap[i]) {
        count++;
        let current = hashMap[i];

        while (current) {
          current = current.next;
          if (current) {
            count++;
          }
        }
      }
    }

    return count;
  };

  const clear = () => {
    hashMap = new Array(16).fill(null);
  };

  const values = () => {
    const valuesArr = [];

    for (let i = 0; i < hashMap.length; i++) {
      if (hashMap[i] && hashMap[i].next) {
        let current = hashMap[i];

        while (current) {
          valuesArr.push(current.value);
          current = current.next;
        }
      } else {
        valuesArr.push(hashMap[i]);
      }
    }

    return valuesArr;
  };

  const entries = () => {
    const entriesArr = [];

    for (let i = 0; i < hashMap.length; i++) {
      if (hashMap[i] && hashMap[i].next) {
        let current = hashMap[i];

        while (current) {
          const value = current.value;

          entriesArr.push(value);
          current = current.next;
        }
      } else if (hashMap[i]) {
        entriesArr.push(hashMap[i]);
      }
    }

    // console.log(entriesArr);

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
test.set('moon', 'silver');
test.set('lion', 'golden');

console.log(test.values());
console.log(test.length());

// console.log('ENTRIES', test.entries());
