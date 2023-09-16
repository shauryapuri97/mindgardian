import { Avatar, Tooltip } from "@mui/material";
import WaterIcon from "@mui/icons-material/Water";
import { Handle, Position } from "reactflow";

export const CustomMaxPoolNode = ({ data }) => {
  return (
    <>
      <Handle type="target" position={Position.Top} />
      <Tooltip title="Max Pool">
        <Avatar sx={{ bgcolor: "white" }}>
          <WaterIcon />
        </Avatar>
      </Tooltip>
      <Handle type="source" position={Position.Bottom} />
    </>
  );
};
