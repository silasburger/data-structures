class linkedList {
  constructor(head = null, tail = null) {
    this.head = head;
    this.tail = tail;
  }

  append(data) {
    if(this.head === null) {
      this.head = new Node(data);
      this.tail = this.head;
    } else {
      const node = new Node(data)
      this.tail.next = node;
      this.tail = node;
    }
  }

  getAt(idx) {
    let count = 0;
    let current = this.head
    while(count !== idx) {
      if(current.next === null) return null;
      current = current.next;
      count += 1;
    }
    return current;
  }

  unshift(data) {
    this.head = new Node(data, this.head);
  }

  shift() {
    const removeNode = this.head;
    this.head = this.head.next;
    return removeNode;
  }

  pop() {
    let current = this.head;
    let previous;
    let removeNode = this.tail;
    if(current === null) return undefined;
    if(current.next === null) {
      this.tail = null;
      this.head = null;
      return removeNode;
    }
    while(current.next !== null) {
      previous = current;
      current = current.next;
    }
    previous.next = null;
    this.tail = previous;
    return removeNode;
  }

  insertAt(idx, data) {
    let count = 0;
    let current = this.head
    let previous;
    let node = new Node(data);
    if (current === null) {
      this.head = node;
      this.tail = node;
      return;
    }
    while(count !== idx) {
      if(current.next !== null) {
        previous = current;
        current = current.next;
      }
      count += 1;
    }
    if(count === 0) {
      node.next = this.head
      this.head = node;
    }
    if(current.next === null) {
      this.tail.next = node
      this.tail = this.tail.next;
    }
    if (previous !== undefined) {
      previous.next = node;
      node.next = current;
    }
  }

  removeAt(idx) {
    let count = 0;
    let current = this.head
    let previous;
    while(count !== idx) {
      previous = current;
      current = current.next;
      count += 1;
    }
    previous.next = current.next;
    return current;
  }
}

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

module.exports = linkedList;