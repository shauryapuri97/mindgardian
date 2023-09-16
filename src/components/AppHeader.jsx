import { AppBar, Toolbar, Typography, IconButton, Box } from "@mui/material";
import AccountCircle from "@mui/icons-material/AccountCircle";
import React from "react";

const AppHeader = () => {
  return (
    <AppBar
      position="fixed"
      sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
    >
      <Toolbar>
        <Typography variant="h6">MINDGARDIAN</Typography>
        <Box sx={{ flexGrow: 1 }} />
        <IconButton>
          <AccountCircle />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default AppHeader;
