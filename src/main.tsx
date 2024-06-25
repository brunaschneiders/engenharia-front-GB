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
        .react-calendar {
          width: 100%;
          max-width: 1200px;
          background: rgba(255, 255, 255, 0.9);
          border: 1px solid #ccc;
          line-height: 1.125em;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          border-radius: 8px;
          padding: 12px;
        }

        .react-calendar button,
        .react-calendar button:hover,
        .react-calendar button:focus {
          outline: none;
        }

        .react-calendar__month-view__days__day--weekend {
          color: black;
        }

        .react-calendar__month-view__days__day--neighboringMonth {
          color: #cbcbcb;
        }

        .react-calendar__tile {
          line-height: 5em;
          font-size: 1.5em;
        }

        .react-calendar__tile:enabled:hover,
        .react-calendar__tile:enabled:focus,
        .react-calendar__tile--now {
          background-color: #e6e6e6;
        }

        .selected {
          background-color: black !important;
          color: white !important;
        }

        .activity-marked {
          font-weight: bolder;
          text-decoration: underline;
        }

        .react-calendar__navigation__label {
          font-size: 1rem;
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
