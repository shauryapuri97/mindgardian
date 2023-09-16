import { Avatar, Tooltip } from "@mui/material";
import StormIcon from "@mui/icons-material/Storm";
import { Handle, Position } from "reactflow";

export const CustomConvolutionNode = ({ data }) => {
  return (
    <>
      <Handle type="target" position={Position.Top} />
      <Tooltip title="Convolution">
        <Avatar sx={{ bgcolor: "white" }}>
          <StormIcon />
        </Avatar>
      </Tooltip>
      <Handle type="source" position={Position.Bottom} />
    </>
  );
};
