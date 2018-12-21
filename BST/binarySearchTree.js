class binarySearchTree {
  constructor(root=null) {
    this.root = root;
  }
  insert(val) {
    let current;
    let node = new Node(val);
    if(this.root === null) {
      this.root = node; 
    }
    while(current) {
      if(current < val && current.right === null) {
        current.right = node;
      }
      if(current > val && current.left === null) {
        current.left = node;
      } 
      current = val > current.right ? current.right : current.left;
    }
  }
}

class Node {
  constructor(val, right=null, left=null) {
    this.val = val;
    this.right = right;
    this.left = left;
  }
}