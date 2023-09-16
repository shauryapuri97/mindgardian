import { Paper, IconButton, Typography, Tooltip } from "@mui/material";
import React from "react";
import {
  DEFAULT_SPACING,
  INLINE_DEFAULT_SPACING,
} from "../constants/AppConstants";
import { setSelectedNetwork } from "../slices/configSlice";
import { useDispatch, useSelector } from "react-redux";
import ArrowBack from "@mui/icons-material/ArrowBack";

export const NetworkViewer = () => {
  const dispatch = useDispatch();

  const selectedNetwork = useSelector((state) => state.config.selectedNetwork);

  return (
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
  );
};
