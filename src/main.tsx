import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#000",
    },
    secondary: {
      main: "#000",
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        body {
          margin: 0;
          padding: 0;
          width: 100vw;
          height: 100vh;
        }
        * {
          box-sizing: border-box;
        }
      `,
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
