import ReactFlow, { Controls, Background, ReactFlowProvider } from "reactflow";
import "reactflow/dist/style.css";
import { CustomConvolutionNode } from "./CustomNodes/CustomConvolutionNode";
import { CustomReluNode } from "./CustomNodes/CustomReluNode";
import { CustomConcatNode } from "./CustomNodes/CustomConcatNode";
import { CustomMaxPoolNode } from "./CustomNodes/CustomMaxPoolNode";
import { useSelector } from "react-redux";
import { NetworkGraphDrawer } from "./NetworkGraphDrawer";
import { useForwardPassVisualiser } from "./hooks/useForwardPassVisualiser";

const NODE_TYPES = {
  convolution: CustomConvolutionNode,
  relu: CustomReluNode,
  concat: CustomConcatNode,
  maxPool: CustomMaxPoolNode,
};

export const NetworkGraph = ({ data }) => {
  const selectedNode = useSelector((state) => state.config.selectedNode);
  const { edges, nodes, showNoPathsFound, onNodeClick } =
    useForwardPassVisualiser(data);

  return (
    <>
      <NetworkGraphDrawer showNoPathsFound={showNoPathsFound} />
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
