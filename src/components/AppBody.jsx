import {
  Toolbar,
  Box,
  Paper,
  Button,
  IconButton,
  Typography,
  Tooltip,
} from "@mui/material";
import React from "react";
import {
  DEFAULT_SPACING,
  INLINE_DEFAULT_SPACING,
} from "../constants/AppConstants";
import { NEURAL_NETWORKS, NETWORK_ICON_MAP } from "../constants/MockData";
import { setSelectedNetwork } from "../slices/configSlice";
import { useDispatch, useSelector } from "react-redux";
import ArrowBack from "@mui/icons-material/ArrowBack";

const AppBody = () => {
  const dispatch = useDispatch();

  const selectedNetwork = useSelector((state) => state.config.selectedNetwork);

  return (
    <Box component="main" sx={{ p: DEFAULT_SPACING }}>
      <Toolbar />
      {!selectedNetwork ? (
        <Box
          sx={{
            display: "flex",
            gap: DEFAULT_SPACING,
            flexWrap: "wrap",
          }}
        >
          {NEURAL_NETWORKS.map((network) => {
            const Icon = NETWORK_ICON_MAP[network.type];
            return (
              <Button
                key={network.value}
                style={{ backgroundColor: "transparent" }}
                onClick={() => dispatch(setSelectedNetwork(network))}
              >
                <Paper
                  sx={{
                    height: "170px",
                    width: "170px",
                    padding: DEFAULT_SPACING,
                    justifyCcontent: "center",
                    textAlign: "center",
                    display: "flex",
                    flexDirection: "column",
                    gap: DEFAULT_SPACING,
                  }}
                >
                  <Icon fontSize="large" sx={{ alignSelf: "center" }} />
                  {network.label}
                </Paper>
              </Button>
            );
          })}
        </Box>
      ) : (
        <Paper
          sx={{
            display: "flex",
            flex: 1,
            gap: DEFAULT_SPACING,
            alignItems: "center",
            padding: INLINE_DEFAULT_SPACING,
          }}
        >
          <Tooltip title="Go back to home">
            <IconButton onClick={() => dispatch(setSelectedNetwork())}>
              <ArrowBack />
            </IconButton>
          </Tooltip>
          <Typography variant="subtitle1">{selectedNetwork.label}</Typography>
        </Paper>
      )}
    </Box>
  );
};

export default AppBody;
