class Node {
  constructor(value, adjacent = new Set()) {
    this.value = value;
    this.adjacent = adjacent;
  }
}

class Graph {
  constructor() {
    this.nodes = new Set();
  }

  // this function accepts a Node instance and adds it to the nodes property on the graph
  addVertex(vertex) {
    this.nodes.add(vertex);
    return this.nodes;
  }

  // this function accepts an array of Node instances and adds them to the nodes property on the graph
  addVertices(vertexArray) {
    for (let vertex of vertexArray) {
      this.nodes.add(vertex);
    }
    return this.nodes;
  }

  // this function accepts two vertices and updates their adjacent values to include the other vertex
  addEdge(v1, v2) {
    for(let node of this.nodes) {
      if(node === v1) {
        node.adjacent.add(v2);
      }
      if(node === v2) {
        node.adjacent.add(v1);
      }
    }
  }

  // this function accepts two vertices and updates their adjacent values to remove the other vertex
  removeEdge(v1, v2) {
    for(let node of this.nodes) {
      if(node === v1) {
        node.adjacent.delete(v2);
      }
      if(node === v2) {
        node.adjacent.delete(v1);
      }
    }
  }

  // this function accepts a vertex and removes it from the nodes property, it also updates any adjacency lists that include that vertex
  removeVertex(vertex) {
    for(let node of this.nodes) {
      if(node.adjacent.has(vertex)) {
        node.adjacent.delete(vertex);
      }
    }
    this.nodes.delete(vertex);
  }

  // this function returns an array of Node values using DFS
  depthFirstSearch(start, visited=new Set(), nodes=[]) {
    visited.add(start);
    for(let node of start.adjacent) {
      if(visited.has(node)) {
        nodes = this.depthFirstSearch(node, visited, nodes);
      }
    }
    nodes.push(start);
    return nodes;
  }

  // this function returns an array of Node values using BFS
  breadthFirstSearch(start) {
    const queue = [start];
    const visited = new Set();
    const nodes = [];
    while(queue.length) {
      const current = queue.shift();
      visited.add(current);
      for(let node of current.adjacent) {
        if(!visited.has(node)) {
          visited.add(node);
        }
      }
      nodes.push(current); 
    }
    return nodes;
  }
}

module.exports = {Graph, Node};

// let graph = new Graph()
// let a = new Node("A")
// let b = new Node("B")  
// let c = new Node("C")
// graph.addVertices([a,b])
// graph.addVertex(c)
// graph.nodes.has(a) // true
// graph.nodes.has(b) // true
// graph.nodes.has(c) // true


// let graph = new Graph()
// let a = new Node("A")
// let b = new Node("B")
// let c = new Node("C")
// let d = new Node("D")
// graph.addVertices([a, b, c, d])
// graph.addEdge(a, b)
// graph.addEdge(a, c)
// graph.addEdge(b, d)
// graph.addEdge(c, d)

// a.adjacent // contains b and c
// b.adjacent // contains a and d
// c.adjacent // contains a and d
// d.adjacent // contains b and c


// let graph = new Graph()
// let a = new Node("A")
// let b = new Node("B")
// let c = new Node("C")
// let d = new Node("D")
// graph.addVertices([a, b, c, d])
// graph.addEdge(a, b)
// graph.addEdge(a, c)
// graph.addEdge(b, d)
// graph.addEdge(c, d)

// graph.removeEdge(b,a)
// graph.removeEdge(c,d)


// a.adjacent // does not contain b
// b.adjacent // does not contain a

// c.adjacent // does not contain d
// d.adjacent // does not contain c


// let graph = new Graph()
// let a = new Node("A")
// let b = new Node("B")
// let c = new Node("C")
// let d = new Node("D")
// graph.addVertices([a, b, c, d])
// graph.addEdge(a, b)
// graph.addEdge(a, c)
// graph.addEdge(b, d)
// graph.addEdge(c, d)

// graph.removeVertex(c)
// graph.removeVertex(d)

// graph.nodes.has(a) // true
// graph.nodes.has(b) // true
// graph.nodes.has(c) // false
// graph.nodes.has(d) // false


// let graph = new Graph()
// let S = new Node('S');
// let P = new Node('P');
// let U = new Node('U');
// let X = new Node('X');
// let Q = new Node('Q');
// let Y = new Node('Y');
// let V = new Node('V');
// let R = new Node('R');
// let W = new Node('W');
// let T = new Node('T');

// graph.addVertices([S,P,U,X,Q,Y,V,R,W,T])

// graph.addEdge(S, P);
// graph.addEdge(S, U);

// graph.addEdge(P, X);
// graph.addEdge(U, X);

// graph.addEdge(P, Q);
// graph.addEdge(U, V);

// graph.addEdge(X, Q);
// graph.addEdge(X, Y);
// graph.addEdge(X, V);

// graph.addEdge(Q, R);
// graph.addEdge(Y, R);

// graph.addEdge(Y, W);
// graph.addEdge(V, W);

// graph.addEdge(R, T);
// graph.addEdge(W, T);

// // this is one option:
// graph.depthFirstSearch(S) // ["S", "P", "U", "X", "Q", "V", "Y", "R", "W", "T"]