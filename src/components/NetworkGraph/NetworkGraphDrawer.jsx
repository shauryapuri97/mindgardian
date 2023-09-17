import {
  Drawer,
  Box,
  Typography,
  Toolbar,
  IconButton,
  Divider,
  TextField,
} from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import {
  DEFAULT_SPACING,
  INLINE_DEFAULT_SPACING,
} from "../../constants/AppConstants";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedNode, setVisualiseToNode } from "../../slices/configSlice";
import { batch } from "react-redux";

const drawerWidth = 240;
const PARAMETER_KEY_MAP = {
  kernel_size: "Kernel Size",
  stride: "Stride",
};

export const NetworkGraphDrawer = ({ showNoPathsFound }) => {
  const dispatch = useDispatch();
  const { id, data = undefined } =
    useSelector((state) => state.config.selectedNode) ?? {};
  const selectedVisualiseToNode = useSelector(
    (state) => state.config.selectedVisualiseToNode
  );

  return (
    <Drawer
      anchor="right"
      variant="persistent"
      open={!!data}
      sx={{
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
        },
      }}
    >
      <Toolbar />
      <Box
        sx={{
          display: "flex",
          gap: INLINE_DEFAULT_SPACING,
          alignItems: "center",
          margin: INLINE_DEFAULT_SPACING,
        }}
      >
        <IconButton
          onClick={() => {
            batch(() => {
              dispatch(setSelectedNode());
              dispatch(setVisualiseToNode());
            });
          }}
        >
          <ChevronRightIcon />
        </IconButton>
        <Typography variant="subtitle1">
          {data?.label?.toUpperCase()}
        </Typography>
      </Box>
      <Divider />
      <Box sx={{ padding: INLINE_DEFAULT_SPACING }}>
        {data?.parameters ? (
          Object.keys(data.parameters).map((param) => (
            <Typography
              key={`${param}-${data.parameters[param]}`}
              variant="body2"
              style={{ margin: INLINE_DEFAULT_SPACING }}
            >
              {PARAMETER_KEY_MAP[param]}: {data.parameters[param]}
            </Typography>
          ))
        ) : (
          <Typography
            variant="body2"
            style={{ margin: INLINE_DEFAULT_SPACING }}
          >
            No parameters were found
          </Typography>
        )}
      </Box>
      <Divider sx={{ fontSize: "small" }}>Visualise Forward Pass</Divider>
      <Box
        sx={{
          display: "flex",
          gap: INLINE_DEFAULT_SPACING,
          padding: DEFAULT_SPACING,
        }}
      >
        <TextField
          sx={{ flex: 1 }}
          disabled
          id="from-select-node"
          label="From node"
          value={id}
          InputLabelProps={{
            shrink: true,
          }}
          size="small"
        />
        <TextField
          sx={{ flex: 1 }}
          disabled
          id="to-select-node"
          label="To node"
          value={selectedVisualiseToNode?.id ?? ""}
          InputLabelProps={{
            shrink: true,
          }}
          size="small"
        />
      </Box>
      {!selectedVisualiseToNode?.id && (
        <Typography
          variant="caption"
          align="center"
          style={{ marginBottom: DEFAULT_SPACING }}
        >
          Please select another node from the network to visualise
        </Typography>
      )}
      {showNoPathsFound && (
        <Typography
          variant="caption"
          align="center"
          style={{ marginBottom: DEFAULT_SPACING, color: 'red' }}
        >
          No Paths found, please make sure the nodes are correct
        </Typography>
      )}
      <Divider />
    </Drawer>
  );
};
