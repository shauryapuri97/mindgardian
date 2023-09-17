import ReactFlow, { Controls, Background, ReactFlowProvider } from "reactflow";
import "reactflow/dist/style.css";
import { useSelector } from "react-redux";
import { NetworkGraphDrawer } from "./NetworkGraphDrawer";
import { useForwardPassVisualiser } from "./hooks/useForwardPassVisualiser";
import { useCallback, useState } from "react";
import { CreateNewNodeModal } from "./CreateNewNodeModal";
import { NODE_TYPES } from "./NetworkGraphConsts";

export const NetworkGraph = ({ data }) => {
  const selectedNode = useSelector((state) => state.config.selectedNode);
  const {
    edges,
    nodes,
    showNoPathsFound,
    reactFlowWrapper,
    onNodeClick,
    onNodesDelete,
    onConnect,
    onNodesChange,
    onEdgesChange,
    onConnectEnd,
    onConnectStart,
  } = useForwardPassVisualiser(data);
  const [isNewNodeCreating, setIsNewNodeCreating] = useState(false);
  const [connectEndEvent, setConnectEndEvent] = useState(null);

  const onClose = () => setIsNewNodeCreating(false);

  const onCreateNode = (newNodeType) => {
    onConnectEnd(connectEndEvent, newNodeType);
  };

  const onUserConnectEnd = useCallback((event) => {
    setIsNewNodeCreating(true);
    setConnectEndEvent(event);
  }, []);

  return (
    <>
      <NetworkGraphDrawer showNoPathsFound={showNoPathsFound} />
      <div
        style={{ width: !!selectedNode ? "80vw" : "100%", height: "72vh" }}
        ref={reactFlowWrapper}
      >
        <ReactFlowProvider>
          <ReactFlow
            nodes={nodes}
            edges={edges}
            nodeTypes={NODE_TYPES}
            fitView
            onNodeClick={onNodeClick}
            onNodesChange={onNodesChange}
            onNodesDelete={onNodesDelete}
            onConnect={onConnect}
            onEdgesChange={onEdgesChange}
            onConnectStart={onConnectStart}
            onConnectEnd={onUserConnectEnd}
            style={{ background: "#1E1E1E" }}
          >
            <Controls />
            <Background variant="dots" gap={36} size={1} />
          </ReactFlow>
        </ReactFlowProvider>
      </div>
      <CreateNewNodeModal
        isOpen={isNewNodeCreating}
        onClose={onClose}
        onCreate={onCreateNode}
      />
    </>
  );
};
