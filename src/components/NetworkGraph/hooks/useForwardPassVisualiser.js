import { getPathsDataBetweenNodes } from "../NetworkGraphUtils";
import {
  setSelectedNode,
  setVisualiseToNode,
} from "../../../slices/configSlice";
import { useDispatch, useSelector } from "react-redux";
import { useState, useMemo, useEffect, useCallback, useRef } from "react";
import { getFormattedNode } from "../NetworkGraphUtils";
import { MarkerType } from "reactflow";
import {
  useNodesState,
  useEdgesState,
  addEdge,
  getIncomers,
  getOutgoers,
  getConnectedEdges,
} from "reactflow";

let id = 105;
const getId = () => `${id++}`;

export const useForwardPassVisualiser = (data) => {
  const dispatch = useDispatch();
  const selectedNode = useSelector((state) => state.config.selectedNode);
  const selectedVisualiseToNode = useSelector(
    (state) => state.config.selectedVisualiseToNode
  );
  const { nodes: nodesData, edges: edgesData } = data;
  const [showNoPathsFound, setShowNoPathsFound] = useState(false);

  const reactFlowWrapper = useRef(null);
  const connectingNodeId = useRef(null);

  const initialNodes = useMemo(
    () =>
      nodesData?.reduce((acc, node, index) => {
        const isMultiNodeLevel = Array.isArray(node) && node.length > 1;

        if (isMultiNodeLevel) {
          const initialXAxis = -Math.floor(node.length / 2) * 200;
          const isOddLength = node.length % 2 !== 0;

          node.forEach((subNode, subIndex) => {
            const xAxisPosition =
              subIndex < node.length / 2 || isOddLength
                ? initialXAxis + 200 * subIndex
                : initialXAxis + (200 * subIndex + 200);
            const formattedNode = getFormattedNode(subNode, {
              x: subIndex === 0 ? initialXAxis : xAxisPosition,
              y: index * 100,
            });

            if (formattedNode) {
              acc.push(formattedNode);
            }
          });
        } else {
          const formattedNode = getFormattedNode(
            Array.isArray(node) ? node[0] : node,
            { x: 0, y: index * 100 }
          );

          if (formattedNode) {
            acc.push(formattedNode);
          }
        }

        return acc;
      }, []),
    [nodesData]
  );
  const initialEdges = useMemo(
    () =>
      edgesData?.reduce((acc, edge) => {
        acc.push({
          ...edge,
          id: `e${edge.source}-${edge.target}`,
          markerEnd: {
            type: MarkerType.ArrowClosed,
            width: 25,
            height: 25,
          },
          label: `Edge ${edge.source} -> ${edge.target}`,
        });
        return acc;
      }, []),
    [edgesData]
  );
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  useEffect(() => {
    if (selectedNode && selectedVisualiseToNode) {
      const { paths } = getPathsDataBetweenNodes(
        edges,
        selectedNode.id,
        selectedVisualiseToNode.id
      );

      if (paths.size) {
        setShowNoPathsFound(false);
        setEdges(
          edges.map((edge) => ({
            ...edge,
            ...(paths.has(edge.id) ? { animated: true } : { animated: false }),
          }))
        );
      } else {
        setShowNoPathsFound(true);
      }
    } else {
      setEdges(
        edges.map((edge) => ({
          ...edge,
          animated: false,
        }))
      );
      setShowNoPathsFound(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedNode, selectedVisualiseToNode]);

  const onNodeClick = (_, node) => {
    if (node) {
      if (selectedNode) {
        dispatch(
          setVisualiseToNode(!selectedVisualiseToNode ? node : undefined)
        );
        if (selectedVisualiseToNode) {
          dispatch(setSelectedNode(node));
        }
      } else {
        dispatch(setSelectedNode(node));
      }
    }
  };

  const onNodesDelete = useCallback(
    (deleted) => {
      setEdges(
        deleted.reduce((acc, node) => {
          const incomers = getIncomers(node, nodes, edges);
          const outgoers = getOutgoers(node, nodes, edges);
          const connectedEdges = getConnectedEdges([node], edges);

          const remainingEdges = acc.filter(
            (edge) => !connectedEdges.includes(edge)
          );

          const createdEdges = incomers.flatMap(({ id: source }) =>
            outgoers.map(({ id: target }) => ({
              id: `${source}->${target}`,
              source,
              target,
            }))
          );

          return [...remainingEdges, ...createdEdges];
        }, edges)
      );
      dispatch(setSelectedNode());
    },
    [dispatch, nodes, edges, setEdges]
  );

  const onConnect = useCallback(
    (params) => setEdges(addEdge(params, edges)),
    [edges, setEdges]
  );

  const onConnectStart = useCallback((_, { nodeId }) => {
    connectingNodeId.current = nodeId;
  }, []);

  const onConnectEnd = useCallback(
    (event, newNodeType) => {
      const targetIsPane = event.target.classList.contains("react-flow__pane");

      if (targetIsPane) {
        const { top, left } = reactFlowWrapper?.current.getBoundingClientRect();
        const id = getId();
        const newNode = {
          id,
          position: { x: event.clientX - left - 75, y: event.clientY - top },
          data: { label: newNodeType },
          type: newNodeType,
        };

        setNodes((nds) => nds.concat(newNode));
        setEdges((eds) =>
          eds.concat({
            id,
            source: connectingNodeId.current,
            target: id,
            markerEnd: {
              type: MarkerType.ArrowClosed,
              width: 25,
              height: 25,
            },
            label: `Edge ${connectingNodeId.current} -> ${id}`,
          })
        );
      }
    },
    [setEdges, setNodes]
  );

  return {
    nodes,
    edges,
    showNoPathsFound,
    reactFlowWrapper,
    setNodes,
    setEdges,
    onNodeClick,
    onNodesDelete,
    onConnect,
    onNodesChange,
    onEdgesChange,
    onConnectStart,
    onConnectEnd,
  };
};
