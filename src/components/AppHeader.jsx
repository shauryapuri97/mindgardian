import { AppBar, Toolbar, Typography, IconButton, Box } from "@mui/material";
import AccountCircle from "@mui/icons-material/AccountCircle";
import React from "react";

const AppHeader = () => {
  return (
    <AppBar>
      <Toolbar>
        <Typography>MINDGARDIAN</Typography>
        <Box sx={{ flexGrow: 1 }} />
        <IconButton>
          <AccountCircle />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default AppHeader;
