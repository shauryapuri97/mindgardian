import { Toolbar, Box } from "@mui/material";
import React from "react";
import { DEFAULT_SPACING } from "../constants/AppConstants";
import { Home } from "./Home";
import { useSelector } from "react-redux";
import { NetworkViewer } from "./NetworkViewer";

const AppBody = () => {
  const selectedNetwork = useSelector((state) => state.config.selectedNetwork);

  return (
    <Box component="main" sx={{ p: DEFAULT_SPACING }}>
      <Toolbar />
      {!selectedNetwork ? <Home /> : <NetworkViewer />}
    </Box>
  );
};

export default AppBody;
