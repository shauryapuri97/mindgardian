import ReactFlow, { Controls, Background, ReactFlowProvider } from "reactflow";
import "reactflow/dist/style.css";
import { useState, useMemo } from "react";
import { getFormattedNode } from "./NetworkGraphUtils";
import { CustomConvolutionNode } from "../CustomNodes/CustomConvolutionNode";
import { CustomReluNode } from "../CustomNodes/CustomReluNode";
import { CustomConcatNode } from "../CustomNodes/CustomConcatNode";
import { CustomMaxPoolNode } from "../CustomNodes/CustomMaxPoolNode";
import { MarkerType } from "reactflow";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedNode } from "../../slices/configSlice";

import { NetworkGraphDrawer } from "./NetworkGraphDrawer";

const NODE_TYPES = {
  convolution: CustomConvolutionNode,
  relu: CustomReluNode,
  concat: CustomConcatNode,
  maxPool: CustomMaxPoolNode,
};

export const NetworkGraph = ({ data }) => {
  const dispatch = useDispatch();
  const selectedNode = useSelector((state) => state.config.selectedNode);

  const { nodes: nodesData, edges: edgesData } = data;
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

  const [nodes, setNodes] = useState(initialNodes);
  const [edges, setEdges] = useState(initialEdges);

  const onNodeClick = (_, node) =>
    node ? dispatch(setSelectedNode(node)) : undefined;

  return (
    <>
      <NetworkGraphDrawer />
      <div style={{ width: !!selectedNode ? "80vw" : "100%", height: "72vh" }}>
        <ReactFlowProvider>
          <ReactFlow
            nodes={nodes}
            edges={edges}
            nodeTypes={NODE_TYPES}
            fitView
            onNodeClick={onNodeClick}
            style={{ background: "#1E1E1E" }}
          >
            <Controls />
            <Background variant="dots" gap={36} size={1} />
          </ReactFlow>
        </ReactFlowProvider>
      </div>
    </>
  );
};
