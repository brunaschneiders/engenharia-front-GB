import React from "react";
import "./App.css";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import "dayjs/locale/pt-br";
import { QueryClient, QueryClientProvider } from "react-query";
import { CalendarProvider } from "./providers/CalendarProvider";
import { Router } from "./Router";

const App: React.FC = () => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <div className="app">
        <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="pt-br">
          <CalendarProvider>
            <Router />
          </CalendarProvider>
        </LocalizationProvider>
      </div>
    </QueryClientProvider>
  );
};
export default App;
