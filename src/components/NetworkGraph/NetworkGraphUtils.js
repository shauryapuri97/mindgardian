export const getFormattedNode = (elem, position) => {
  const { id, type, parameters } = elem;
  if (id) {
    return {
      id,
      type,
      position,
      data: { label: type, parameters },
    };
  }
  return undefined;
};

export const getNodeStyling = (id, selectedNode, selectedVisualiseToNode) => {
  if (selectedNode && selectedVisualiseToNode) {
    return {
      bgcolor:
        selectedNode?.id !== id && selectedVisualiseToNode?.id === id
          ? "red"
          : selectedNode?.id === id
          ? "black"
          : "white",
      color:
        selectedNode?.id !== id && selectedVisualiseToNode?.id === id
          ? "white"
          : selectedNode?.id === id
          ? "white"
          : "black",
    };
  }

  return {
    bgcolor: selectedNode?.id === id ? "black" : "white",
    color: selectedNode?.id === id ? "white" : "black",
  };
};

const isTargetAboveSource = (edges, source, target) => {
  const graph = edges.reduce((acc, edge) => {
    acc[edge.source] = acc[edge.source] || [];
    acc[edge.target] = acc[edge.target] || [];
    acc[edge.source].push(edge);
    acc[edge.target].push(edge);
    return acc;
  }, {});

  const visited = new Set();
  const stack = [target];

  while (stack.length > 0) {
    const visiting = stack.pop();
    if (visiting === source) {
      return false;
    }

    if (visited.has(visiting)) {
      continue;
    }

    visited.add(visiting);

    stack.push(
      ...graph[visiting]
        .filter((edge) => edge.target === visiting)
        .map((edge) => edge.source)
    );
  }

  return true;
};

export const getPathsDataBetweenNodes = (edges, source, target) => {
  if (isTargetAboveSource(edges, source, target)) {
    return { paths: new Set([]), nodes: new Set([]) };
  }

  let queue = [target];
  let paths = {};
  let nodes = [];
  paths[target] = [];
  let graph = {};

  edges.forEach((edge) => {
    if (!(edge.source in graph)) {
      graph[edge.source] = [];
    }
    if (!(edge.target in graph)) {
      graph[edge.target] = [];
    }
    graph[edge.source].push(edge);
    graph[edge.target].push(edge);
  });

  while (queue.length > 0) {
    let visiting = queue.shift();

    if (visiting === source) {
      nodes.push(target);
      break;
    }

    nodes.push(visiting);
    let foundSourceEdge = false;

    graph[visiting].forEach((edge) => {
      if (edge.target === visiting && edge.source === source) {
        paths[source] = [...new Set([...(paths[source] ?? []), edge.id])];
        nodes.push(source);
        foundSourceEdge = true;
      }
    });

    if (!foundSourceEdge) {
      graph[visiting].every((edge) => {
        if (edge.target === visiting) {
          let prevNode = edge.source;
          if (!(prevNode in paths)) {
            paths[prevNode] = [edge.id];
          } else {
            paths[prevNode] = [...new Set([...paths[prevNode], edge.id])];
          }
          queue.push(prevNode);
        }
        return true;
      });
    }
  }

  return { paths: new Set(Object.values(paths).flat()), nodes: new Set(nodes) };
};
