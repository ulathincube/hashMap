function createNode(value = null, next = null) {
  return {
    value,
    next,
  };
}

function createLinkedList() {
  let head = null;

  const addNode = value => {
    const newNode = createNode(value);
    if (!head) {
      head = newNode;
      return;
    } else {
      let currentNode = head;

      while (currentNode.next) {
        currentNode = currentNode.next;
      }

      currentNode.next = newNode;
    }

    return head;
  };

  return { addNode };
}

export default createLinkedList;
