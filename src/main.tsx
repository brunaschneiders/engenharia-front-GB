import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { CalendarProvider } from "./providers/CalendarProvider";
import { ThemeProvider, createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#000",
    },
    secondary: {
      main: "#000",
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <CalendarProvider>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </CalendarProvider>
  </React.StrictMode>
);
