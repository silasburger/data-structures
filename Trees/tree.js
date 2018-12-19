const Queue = require('../linkedLists/Queue')

class Tree {
  constructor(root) {
    this.root = root;
  }
  findInTree(val) {
    this.root.find(val)
  }
  findInTreeBFS(val) {
    this.root.findBFS(val);
  }
}

class Node {
  constructor(val, children) {
    this.val = val;
    this.children = children;
  }

  find(val) {
    let toVisitStack = [this];
    while(toVisitStack.length !== 0) {
      let current = toVisitStack.pop();
      if(current.val === val) {
        return current;
      }
      for(let child of current.children) {
        toVisitStack.push(child);
      }
    }
  }
  findBFS(val) {
    let toVisitQueue = new Queue();
    toVisitQueue.enqueue(val);
    while(toVisitQueue.peek !== null) {
      let current = toVisitQueue.dequeue();
      if(current.val === val) {
        return current;
      }
      for(let child of current.children) {
        toVisitQueue.enqueue(child);
      }
    }
  }
}

