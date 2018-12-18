const LinkedList = require('./linkedList')

class Stack {
  constructor () { 
    this.myList = new LinkedList();
  }

  push(item) {
    this.myList.unshift(item);
  }

  pop() {
    const removed = this.myList.shift();
    if(removed===undefined) {
      const err = new Error('The list is already empty');
      throw err;
    }
  }

  peek() {
    return this.myList.head;
  }

  isEmpty() {
    return Boolean(this.myList.head);
  }
}

module.exports = Stack;