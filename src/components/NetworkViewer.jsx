import { Paper, IconButton, Typography, Tooltip, Box } from "@mui/material";
import React from "react";
import {
  DEFAULT_SPACING,
  INLINE_DEFAULT_SPACING,
} from "../constants/AppConstants";
import { setSelectedNetwork } from "../slices/configSlice";
import { useDispatch, useSelector } from "react-redux";
import ArrowBack from "@mui/icons-material/ArrowBack";

import { NetworkGraph } from "./NetworkGraph/NetworkGraph";
import { NETWORK_RESPONSE } from "../constants/MockData";

export const NetworkViewer = () => {
  const dispatch = useDispatch();

  const selectedNetwork = useSelector((state) => state.config.selectedNetwork);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        flex: 1,
        gap: DEFAULT_SPACING,
      }}
    >
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
      <Paper
        sx={{
          display: "flex",
          flex: 1,
          padding: INLINE_DEFAULT_SPACING,
        }}
      >
        <NetworkGraph data={NETWORK_RESPONSE} />
      </Paper>
    </Box>
  );
};
