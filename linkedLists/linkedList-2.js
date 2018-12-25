class linkedList {
  constructor(vals=[]) {
    this.head = null;
    this.tail = null;
    this.length = null;
    for (let val of vals) this.push(val);
  }
  _get(idx) {
    let current = this.head;
    let count = 0;
    while(current !== null && count != idx) {
      current = current.next;
      count += 1;
    }
    return current;
  }

  push(val) {
    const newNode = new Node(val);
    if(!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = this.tail.next;
    }
    this.length += 1;
  }

  unshift(val) {
    let newNode = new Node(val, this.head);
    if(!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
    this.head = newNode;
    }
    this.length += 1;
  }

  pop() {
    return this.removeNode(this.length - 1); 
  }

  shift() {
    return this.removeAt(0);
  }

  getAt(idx) {
    if(idx >= this.length || idx < 0) throw new Error('Idx is out of range');
    return this._get(idx).val;
  }

  setAt(idx, val) {
    if(idx >= this.length || idx < 0) throw new Error('Idx is out of range');
    if(idx === undefined) throw new Error('Idx argument is invalid');
    this._get(idx).val = val;
  }

  insertAt(idx, val) {
    //0: call unshift
    //middle: set idx -1 next to new node, set new node next to idx.
    //node.length -1: push
    //idx out of range throw err
    if(idx >= this.length || idx < 0) throw new Error('Idx is out of range');
    if(idx === undefined) throw new Error('Idx argument is invalid');
    if(idx === 0) this.unshift(val);
    else if(idx === this.length - 1) this.push(val);
    else {
      const previousNode = this._get(idx - 1);
      const newNode = new Node(val, previousNode.next)
      previousNode.next = newNode;
    }
  }

  removeAt(idx) {
    //0: change head to be one further up
    //this.length -1: set tail to one before
    //middle: set idx -1 next to new node, set new node next to idx.
    //idx out of range throw err
    let removedNode;
    let previousNode;
    if(idx >= this.length || idx < 0) throw new Error('Idx is out of range');
    if(idx === undefined) throw new Error('Idx argument is invalid');
    if(this.length === 0) return undefined;
    if(idx === 0) {
      removedNode = this.head;
      this.head = this.head.next;
      return removedNode;
    }
    previousNode = this._get(idx - 1);
    removedNode = previousNode.next;
    previousNode.next = removedNode.next;
    if(idx === this.length - 1) this.tail = previousNode;
    return removedNode;
  }
}


class Node {
  constructor(data, next=null) {
    this.next = next;
    this.data = data;
  }
}

