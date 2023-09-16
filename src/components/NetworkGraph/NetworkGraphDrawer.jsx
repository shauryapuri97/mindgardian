import {
  Drawer,
  Box,
  Typography,
  Toolbar,
  IconButton,
  Divider,
} from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { INLINE_DEFAULT_SPACING } from "../../constants/AppConstants";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedNode } from "../../slices/configSlice";

const drawerWidth = 240;
const PARAMETER_KEY_MAP = {
  kernel_size: "Kernel Size",
  stride: "Stride",
};

export const NetworkGraphDrawer = () => {
  const dispatch = useDispatch();
  const { data = undefined } =
    useSelector((state) => state.config.selectedNode) ?? {};

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
      <Box sx={{ padding: INLINE_DEFAULT_SPACING }}>
        <Box
          sx={{
            display: "flex",
            gap: INLINE_DEFAULT_SPACING,
            alignItems: "center",
          }}
        >
          <IconButton onClick={() => dispatch(setSelectedNode())}>
            <ChevronRightIcon />
          </IconButton>
          <Typography variant="subtitle1">
            {data?.label?.toUpperCase()}
          </Typography>
        </Box>
        <Divider variant="fullWidth" />
        {data?.parameters &&
          Object.keys(data.parameters).map((param) => (
            <Typography
              variant="body1"
              style={{ marginTop: INLINE_DEFAULT_SPACING }}
            >
              {PARAMETER_KEY_MAP[param]}: {data.parameters[param]}
            </Typography>
          ))}
      </Box>
    </Drawer>
  );
};
