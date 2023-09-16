import { Avatar, Tooltip } from "@mui/material";
import JoinFullIcon from "@mui/icons-material/JoinFull";
import { Handle, Position } from "reactflow";

export const CustomConcatNode = ({ data }) => {
  return (
    <>
      <Handle type="target" position={Position.Top} />
      <Tooltip title="Concat">
        <Avatar sx={{ bgcolor: "white" }}>
          <JoinFullIcon />
        </Avatar>
      </Tooltip>
      <Handle type="source" position={Position.Bottom} />
    </>
  );
};
