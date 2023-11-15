interface GraphNode {
  [key: string]: number;
}

interface Graph {
  [key: string]: GraphNode;
}

const shortestDistanceNode = (
  distances: GraphNode,
  visited: string[]
): string | null => {
  let shortest: string | null = null;

  for (const node in distances) {
    let currentIsShortest =
      shortest === null
      || distances[node] < distances[shortest];

    if (currentIsShortest && !visited.includes(node)) {
      shortest = node;
    }
  }

  return shortest;
};

interface Output {
  distance: number;
  path: string[];
}

const findShortestPath = (graph: Graph, startNode: string, endNode: string): Output => {
  let distances: GraphNode = {};
  distances[endNode] = Infinity;
  distances = Object.assign(distances, graph[startNode]);

  let parents: Record<string, string | null> = { endNode: null };
  for (const child in graph[startNode]) {
    parents[child] = startNode;
  }

  const visited: string[] = [];

  let nearestNode = shortestDistanceNode(distances, visited);

  while (nearestNode) {
    let distance = distances[nearestNode];
    let children = graph[nearestNode];

    for (const child in children) {
      if (String(child) === String(startNode)) {
        continue;
      }

      let newDistance = distance + children[child];

      if (!distances[child] || distances[child] > newDistance) {
        distances[child] = newDistance;
        parents[child] = nearestNode;
      }
    }

    visited.push(nearestNode);

    nearestNode = shortestDistanceNode(distances, visited);
  }

  let shortestPath = [endNode];
  let parent = parents[endNode];

  while (parent) {
    shortestPath.push(parent);
    parent = parents[parent];
  }

  shortestPath.reverse();

  return {
    distance: distances[endNode],
    path: shortestPath,
  };
};

const graph : Graph = {
  '1': { '6': 1, '2': 10, '3': 3 },
  '2': { '1': 10, '6': 11, '4': 8 },
  '3': { '1': 3, '6': 4, '5': 5 },
  '4': { '2': 8, '5': 5, '6': 2 },
  '5': { '3': 5, '4': 5, '6': 6 },
  '6': { '1': 1, '2': 11, '3': 4, '4': 2, '5': 6 },
};

console.log(findShortestPath(graph, '3', '4'));
