// All paths from
// the source to target

var allPathsSourceTarget = function (graph) {
  const target = graph.length - 1;

  const res = [];

  const DFS = (node, path) => {
    path.push(node);

    if (node === target) {
      res.push(path);
      return;
    }

    for (let edge of graph[node]) {
      DFS(edge, [...path]);
    }
  };

  DFS(0, []);

  return res;
};

let graph = [[1, 2], [3], [3], []];
console.log(allPathsSourceTarget(graph));

graph = [[4, 3, 1], [3, 2, 4], [3], [4], []];
console.log(allPathsSourceTarget(graph));
