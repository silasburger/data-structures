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
  findSum() {
      const toVisitStack = [this.root];
      let sum = 0;
      while(toVisitStack.length !== 0) {
        let current = toVisitStack.pop();
        sum += current.val
        for(let child of current.children) {
            toVisitStack.push(child);
        }
      }
      return sum;
    }
  // _traverseBFS() {
  //   const stack = [this.root];
  //   let current = this.root
  //   while(current.children.length !== 0) {
  //     for(let child of current.children) {
  //       stack.push(child) 
  //     }
  //     current = current.children[0];
  //   }
  // }
}

class Node {
  constructor(val, children=[]) {
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
    let toVisitStack = [this];
    while(toVisitStack.length !== 0) {
      let current = toVisitStack.shift();
      if(current.val === val) {
        return current;
      }
      for(let child of current.children) {
        toVisitStack.push(child);
      }
    }
  }
}



let six = new Node(6, )
let twelve = new Node(12, )
let fourteen = new Node(14, )
let twentyone = new Node(21, )

let three = new Node(3, [six, twelve]);
let seven = new Node(7, [fourteen, twentyone])

let one = new Node(1, [three, seven]);

let numTree = new Tree(one);

function findSum(tree) {
  const toVisitStack = [tree.root];
  let sum = 0;
  while(toVisitStack.length !== 0) {
    let current = toVisitStack.pop();
    sum += current.val
    for(let child of current.children) {
        toVisitStack.push(child);
    }
  }
  return sum;
}