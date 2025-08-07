function createNode(value = null, next = null) {
  return {
    value,
    next,
  };
}

function createLinkedList() {
  let head = null;

  const addNode = value => {
    if (!head) {
      const newNode = createNode(value);
      head = newNode;
      return;
    } else {
      let currentNode = head;

      while (currentNode.next) {
        currentNode = currentNode.next;
      }

      currentNode.next = newNode;
    }
  };

  return { addNode };
}

export default createLinkedList;
