import { Avatar, Tooltip } from "@mui/material";
import JoinFullIcon from "@mui/icons-material/JoinFull";
import { Handle, Position } from "reactflow";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { getNodeStyling } from "../NetworkGraphUtils";

export const CustomConcatNode = ({ id }) => {
  const selectedNode = useSelector((state) => state.config.selectedNode);
  const selectedVisualiseToNode = useSelector(
    (state) => state.config.selectedVisualiseToNode
  );

  return (
    <>
      <Handle type="target" position={Position.Top} />
      <Tooltip title="Concat">
        <Avatar sx={getNodeStyling(id, selectedNode, selectedVisualiseToNode)}>
          <JoinFullIcon />
        </Avatar>
      </Tooltip>
      <Handle type="source" position={Position.Bottom} />
    </>
  );
};
