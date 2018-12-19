const LinkedList = require('./linkedList')

class Queue {
  constructor () { 
    this.myList = new LinkedList();
  }

  enqueue(item) {
    this.myList.append(item);
  }

  dequeue() {
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

module.exports = Queue;