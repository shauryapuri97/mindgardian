import { Toolbar, Typography, Box } from "@mui/material";
import React from "react";
import { DEFAULT_SPACING } from "../constants/AppConstants";

const AppBody = () => {
  return (
    <Box component="main" sx={{ p: DEFAULT_SPACING }}>
      <Toolbar />
      <Typography>Template Body</Typography>
    </Box>
  );
};

export default AppBody;
