import { Avatar, Tooltip } from "@mui/material";
import StormIcon from "@mui/icons-material/Storm";
import { Handle, Position } from "reactflow";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { getNodeStyling } from "../NetworkGraphUtils";

export const CustomConvolutionNode = ({ id }) => {
  const selectedNode = useSelector((state) => state.config.selectedNode);
  const selectedVisualiseToNode = useSelector(
    (state) => state.config.selectedVisualiseToNode
  );
  
  return (
    <>
      <Handle type="target" position={Position.Top} />
      <Tooltip title="Convolution">
        <Avatar
          sx={getNodeStyling(id, selectedNode, selectedVisualiseToNode)}
        >
          <StormIcon />
        </Avatar>
      </Tooltip>
      <Handle type="source" position={Position.Bottom} />
    </>
  );
};
