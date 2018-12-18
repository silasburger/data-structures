const LinkedList = require('./linkedList')

class linkedListStack {
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

class arrayStack {
  constructor () { 
    this.myList = new Array();
  }

  push(item) {
    this.myList.push(item);
  }

  pop() {
    const removed = this.myList.pop();
    if(removed===undefined) {
      const err = new Error('The list is already empty');
      throw err;
    }
  }

  peek() {
    return this.myList[this.mylist.length - 1];
  }

  isEmpty() {
    return Boolean(this.mylist.length);
  }
}

module.exports = linkedListStack, arrayStack;