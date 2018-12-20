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
    for (let vertex in vertexArray) {
      this.nodes.add(vertex);
    }
    return this.nodes;
  }

  // this function accepts two vertices and updates their adjacent values to include the other vertex
  addEdge(v1, v2) {


  }

  // this function accepts two vertices and updates their adjacent values to remove the other vertex
  removeEdge(v1, v2) {}

  // this function accepts a vertex and removes it from the nodes property, it also updates any adjacency lists that include that vertex
  removeVertex(vertex) {}

  // this function returns an array of Node values using DFS
  depthFirstSearch(start, visited=new Set(), nodes=[]) {
    visited.add(start);
    for(let node in start.adjacent) {
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
      for(let node in current.adjacent) {
        if(!visited.has(node)) {
          visited.add(node);
        }
      }
      nodes.push(current); 
    }
    return nodes;
  }
}

module.exports = {Graph, Node}