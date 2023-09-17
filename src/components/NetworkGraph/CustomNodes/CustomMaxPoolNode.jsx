import { Avatar, Tooltip } from "@mui/material";
import WaterIcon from "@mui/icons-material/Water";
import { Handle, Position } from "reactflow";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { getNodeStyling } from "../NetworkGraphUtils";

export const CustomMaxPoolNode = ({ id }) => {
  const selectedNode = useSelector((state) => state.config.selectedNode);
  const selectedVisualiseToNode = useSelector(
    (state) => state.config.selectedVisualiseToNode
  );
  
  return (
    <>
      <Handle type="target" position={Position.Top} />
      <Tooltip title="Max Pool">
        <Avatar
          sx={getNodeStyling(id, selectedNode, selectedVisualiseToNode)}
        >
          <WaterIcon />
        </Avatar>
      </Tooltip>
      <Handle type="source" position={Position.Bottom} />
    </>
  );
};
