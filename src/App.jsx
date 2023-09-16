import React from "react";
import AppHeader from "./components/AppHeader";
import AppBody from "./components/AppBody";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Provider } from "react-redux";
import { store } from "./store";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#1976d2",
    },
  },
});

const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <AppHeader />
        <AppBody />
      </ThemeProvider>
    </Provider>
  );
};

export default App;
