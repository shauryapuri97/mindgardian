import { Avatar, Tooltip } from "@mui/material";
import TimelineIcon from "@mui/icons-material/Timeline";
import { Handle, Position } from "reactflow";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { getNodeStyling } from "../NetworkGraphUtils";

export const CustomReluNode = ({ id }) => {
  const selectedNode = useSelector((state) => state.config.selectedNode);
  const selectedVisualiseToNode = useSelector(
    (state) => state.config.selectedVisualiseToNode
  );
  
  return (
    <>
      <Handle type="target" position={Position.Top} />
      <Tooltip title="Relu">
        <Avatar
          sx={getNodeStyling(id, selectedNode, selectedVisualiseToNode)}
        >
          <TimelineIcon />
        </Avatar>
      </Tooltip>
      <Handle type="source" position={Position.Bottom} />
    </>
  );
};
