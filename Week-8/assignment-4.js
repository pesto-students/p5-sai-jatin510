// find if the valid path exists
// between the source and destination node

function validPath(n, edges, source, destination) {
  let graph = new Map();
  let visited = new Set();

  for (let [v, e] of edges) {
    if (graph.has(v)) {
      graph.get(v).push(e);
    } else {
      graph.set(v, [e]);
    }

    if (graph.has(e)) {
      graph.get(e).push(v);
    } else {
      graph.set(e, [v]);
    }
  }

  function dfs(vertex) {
    visited.add(vertex);

    let neighbours = graph.get(vertex);

    if (neighbours && neighbours.length > 0) {
      for (let i = 0; i < neighbours.length; i++) {
        if (!visited.has(neighbours[i])) {
          dfs(neighbours[i]);
        }
      }
    }
  }

  dfs(source);
  return visited.has(destination);
}

let n = 3;
let edges = [
  [0, 1],
  [1, 2],
  [2, 0],
];
let source = 0;
let destination = 2;
console.log(validPath(n, edges, source, destination));

n = 6;
edges = [
  [0, 1],
  [0, 2],
  [3, 5],
  [5, 4],
  [4, 3],
];
source = 0;
destination = 5;
console.log(validPath(n, edges, source, destination));
