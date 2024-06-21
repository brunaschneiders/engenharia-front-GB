import React from "react";
import "./App.css";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import "dayjs/locale/pt-br";
import { QueryClient, QueryClientProvider } from "react-query";
import { Home } from "./pages/Home";
import { CalendarProvider } from "./providers/CalendarProvider";

const App: React.FC = () => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <div className="app">
        <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="pt-br">
          <CalendarProvider>
            <Home />
          </CalendarProvider>
        </LocalizationProvider>
      </div>
    </QueryClientProvider>
  );
};
export default App;
