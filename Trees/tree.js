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
  constructor(parent) {
    this.parent = parent;
  }

  find(val) {
    
  }
  findBFS(val) {

  }
}