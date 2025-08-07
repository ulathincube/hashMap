function createHashMap(loadFactor, capacity) {
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

  const set = (key, value) => {};

  const get = key => {};

  const has = key => {};

  const remove = key => {};

  const length = () => {};

  const clear = () => {};

  const values = () => {};

  const entries = () => {};
}
