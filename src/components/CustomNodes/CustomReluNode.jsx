import { Avatar, Tooltip } from "@mui/material";
import TimelineIcon from "@mui/icons-material/Timeline";
import { Handle, Position } from "reactflow";

export const CustomReluNode = ({ data }) => {
  return (
    <>
      <Handle type="target" position={Position.Top} />
      <Tooltip title="Relu">
        <Avatar sx={{ bgcolor: "white" }}>
          <TimelineIcon />
        </Avatar>
      </Tooltip>
      <Handle type="source" position={Position.Bottom} />
    </>
  );
};
